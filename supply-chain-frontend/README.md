# Supply Chain Frontend

This project is a Next.js application designed for supply chain verification. It provides a user-friendly interface for tracking and verifying products throughout the supply chain.

## Project Structure

```
supply-chain-frontend
├── app
│   ├── globals.css          # Global CSS styles
│   ├── layout.tsx           # Main layout of the application
│   ├── page.tsx             # Main landing page
│   └── components           # Reusable components
│       ├── Header.tsx       # Navigation and branding
│       ├── Footer.tsx       # Footer content
│       └── ProductCard.tsx  # Displays product information
├── public
│   ├── favicon.ico          # Favicon for the application
│   └── logo.svg             # Logo for the application
├── lib
│   ├── utils.ts             # Utility functions
│   └── api.ts               # API call functions
├── types
│   └── index.ts             # TypeScript types and interfaces
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
└── README.md                # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd supply-chain-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Features

- User-friendly interface for product tracking and verification.
- Responsive design using Tailwind CSS.
- Modular components for easy maintenance and scalability.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.