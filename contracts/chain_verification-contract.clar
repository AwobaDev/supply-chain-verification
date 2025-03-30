;; Supply Chain Verification System
;; A transparent supply chain tracking system where each stage of production is verified and recorded on-chain

;; Constants
(define-constant ERR-NOT-AUTHORIZED u1)
(define-constant ERR-PRODUCT-NOT-FOUND u2)
(define-constant ERR-INVALID-STATE-TRANSITION u3)
(define-constant ERR-CHECKPOINT-NOT-FOUND u4)
(define-constant ERR-ENTITY-NOT-FOUND u5)
(define-constant ERR-CERTIFICATE-NOT-FOUND u6)
(define-constant ERR-ALREADY-EXISTS u7)
(define-constant ERR-NOT-CURRENT-CUSTODIAN u8)
(define-constant ERR-INVALID-CERTIFICATION u9)
(define-constant ERR-INVALID-RATING u10)

;; Data Variables
(define-data-var contract-owner principal tx-sender)
(define-data-var next-product-id uint u1)
(define-data-var next-entity-id uint u1)
(define-data-var next-certificate-id uint u1)
(define-data-var next-checkpoint-id uint u1)

;; Entity Types (Manufacturer, Distributor, Retailer, etc.)
(define-map entity-types
  { type-id: uint }
  { type-name: (string-utf8 50) }
)

;; Product States
(define-map product-states
  { state-id: uint }
  { state-name: (string-utf8 50) }
)

;; Supply Chain Entities (Companies/Organizations)
(define-map entities
  { entity-id: uint }
  {
    name: (string-utf8 100),
    entity-type: uint,
    location: (string-utf8 100),
    contact-info: (string-utf8 100),
    verification-status: bool,
    sustainability-score: uint,  ;; 0-100 scale
    created-at: uint
  }
)

;; Entity authentication mapping
(define-map entity-principals
  { principal: principal }
  { entity-id: uint }
)

;; Products being tracked
(define-map products
  { product-id: uint }
  {
    name: (string-utf8 100),
    description: (string-utf8 500),
    current-state: uint,
    current-custodian: uint,  ;; entity-id of current custodian
    origin-entity-id: uint,
    origin-certification-id: uint,
    origin-timestamp: uint,
    final-destination-entity-id: (optional uint),
    final-delivery-timestamp: (optional uint),
    is-verified: bool,
    sustainability-score: uint,   ;; 0-100 calculated from all checkpoints
    product-uri: (string-utf8 256),  ;; Link to off-chain data
    created-at: uint
  }
)

;; Certification types (Organic, Fair Trade, etc.)
(define-map certification-types
  { cert-type-id: uint }
  { cert-type-name: (string-utf8 100) }
)

;; Certificates issued to entities or products
(define-map certificates
  { certificate-id: uint }
  {
    cert-type-id: uint,
    issuer-entity-id: uint,
    recipient-entity-id: (optional uint),
    product-id: (optional uint),
    valid-from: uint,
    valid-until: uint,
    verification-uri: (string-utf8 256),
    is-active: bool,
    created-at: uint
  }
)

;; Custody Transfer History
(define-map custody-transfers
  { product-id: uint, transfer-index: uint }
  {
    from-entity-id: uint,
    to-entity-id: uint,
    transfer-timestamp: uint,
    notes: (string-utf8 500),
    verification-signature: (buff 65)
  }
)

;; Quality Assurance Checkpoints
(define-map checkpoints
  { checkpoint-id: uint }
  {
    product-id: uint,
    inspector-entity-id: uint,
    checkpoint-type: (string-utf8 50),
    timestamp: uint,
    location: (string-utf8 100),
    quality-score: uint,       ;; 0-100 score
    sustainability-score: uint, ;; 0-100 score
    ethical-score: uint,       ;; 0-100 score
    notes: (string-utf8 500),
    evidence-uri: (string-utf8 256),
    verification-signature: (buff 65)
  }
)

;; Product checkpoint index mapping
(define-map product-checkpoints
  { product-id: uint, index: uint }
  { checkpoint-id: uint }
)

;; Product certificate index mapping
(define-map product-certificates
  { product-id: uint, index: uint }
  { certificate-id: uint }
)

;; Consumer verification lookup
(define-map consumer-verifications
  { product-id: uint, verifier: principal }
  {
    timestamp: uint,
    verification-method: (string-utf8 50),
    rating: (optional uint),
    feedback: (optional (string-utf8 500))
  }
)
