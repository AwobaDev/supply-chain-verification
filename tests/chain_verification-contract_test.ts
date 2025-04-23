import {
    Clarinet,
    Tx,
    Chain,
    Account,
    types,
  } from "https://deno.land/x/clarinet@v1.6.5/index.ts";
  
  Clarinet.test({
    name: "Full supply chain flow test",
    async fn(chain: Chain, accounts: Map<string, Account>) {
      const deployer = accounts.get("deployer")!;
      const producer = accounts.get("wallet_1")!;
      const certAuthority = accounts.get("wallet_2")!;
      const retailer = accounts.get("wallet_3")!;
  
      // 1. Register cert authority
      let block = chain.mineBlock([
        Tx.contractCall("supply-chain", "register-entity", [
          types.utf8("CertifyCo"),
          types.uint(5), // Certification Authority
          types.utf8("Cert City"),
          types.utf8("certify@example.com"),
          types.principal(certAuthority.address),
        ], deployer.address),
      ]);
      block.receipts[0].result.expectOk().expectUint(1);
  
      // 2. Verify cert authority
      block = chain.mineBlock([
        Tx.contractCall("supply-chain", "verify-entity", [
          types.uint(1),
        ], deployer.address),
      ]);
      block.receipts[0].result.expectOk().expectBool(true);
  
      // 3. Register producer
      block = chain.mineBlock([
        Tx.contractCall("supply-chain", "register-entity", [
          types.utf8("GreenFarm"),
          types.uint(1), // Producer
          types.utf8("Farmville"),
          types.utf8("green@example.com"),
          types.principal(producer.address),
        ], certAuthority.address),
      ]);
      block.receipts[0].result.expectOk().expectUint(2);
  
      // 4. Verify producer
      block = chain.mineBlock([
        Tx.contractCall("supply-chain", "verify-entity", [
          types.uint(2),
        ], certAuthority.address),
      ]);
      block.receipts[0].result.expectOk().expectBool(true);
  
      // 5. Producer registers a product
      block = chain.mineBlock([
        Tx.contractCall("supply-chain", "register-product", [
          types.utf8("Organic Beans"),
          types.utf8("100% organic green beans"),
          types.utf8("https://ipfs.io/ipfs/Qm...beans"),
        ], producer.address),
      ]);
      block.receipts[0].result.expectOk().expectUint(1);
  
      // 6. Cert authority issues a certificate for product
      block = chain.mineBlock([
        Tx.contractCall("supply-chain", "issue-certificate", [
          types.uint(1), // Organic
          types.none(), // Not for an entity
          types.some(types.uint(1)), // For product-id 1
          types.uint(500), // Valid until block height
          types.utf8("https://ipfs.io/ipfs/Qm...cert"),
        ], certAuthority.address),
      ]);
      block.receipts[0].result.expectOk().expectUint(1);
  
      // 7. Register and verify retailer
      block = chain.mineBlock([
        Tx.contractCall("supply-chain", "register-entity", [
          types.utf8("FreshMart"),
          types.uint(4), // Retailer
          types.utf8("Retail City"),
          types.utf8("store@example.com"),
          types.principal(retailer.address),
        ], certAuthority.address),
      ]);
      block.receipts[0].result.expectOk().expectUint(3);
  
      block = chain.mineBlock([
        Tx.contractCall("supply-chain", "verify-entity", [
          types.uint(3),
        ], certAuthority.address),
      ]);
      block.receipts[0].result.expectOk().expectBool(true);
  
      // 8. Transfer custody to retailer
      block = chain.mineBlock([
        Tx.contractCall("supply-chain", "transfer-custody", [
          types.uint(1), // Product ID
          types.uint(3), // Retailer entity ID
          types.utf8("Delivered to retailer"),
          types.buff(Buffer.from("abc".padEnd(65, "0"))),
        ], producer.address),
      ]);
      block.receipts[0].result.expectOk().expectBool(true);
  
      // 9. Retailer records a checkpoint
      block = chain.mineBlock([
        Tx.contractCall("supply-chain", "record-checkpoint", [
          types.uint(1),
          types.utf8("Quality Control"),
          types.utf8("Retail Warehouse"),
          types.uint(90),
          types.uint(85),
          types.uint(88),
          types.utf8("Passed inspection"),
          types.utf8("https://ipfs.io/ipfs/Qm...proof"),
          types.buff(Buffer.from("abc".padEnd(65, "0"))),
        ], retailer.address),
      ]);
      block.receipts[0].result.expectOk().expectUint(1);
  
      // 10. Retailer marks product as sold
      block = chain.mineBlock([
        Tx.contractCall("supply-chain", "mark-product-sold", [
          types.uint(1),
        ], retailer.address),
      ]);
      block.receipts[0].result.expectOk().expectBool(true);
  
      // 11. Consumer verifies product
      block = chain.mineBlock([
        Tx.contractCall("supply-chain", "verify-product-as-consumer", [
          types.uint(1),
          types.utf8("QR Code"),
          types.some(types.uint(5)),
          types.some(types.utf8("Great product!")),
        ], accounts.get("wallet_4")!.address),
      ]);
      block.receipts[0].result.expectOk().expectBool(true);
    },
  });
  