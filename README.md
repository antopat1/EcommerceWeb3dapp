# Web3 Scientific Journal Marketplace

![Project Banner](https://bafybeieqbbrjgp6kmsg3vsaeg52lg5hsfaxxd2zkanvcpkhlgh6p2y2aoa.ipfs.dweb.link)

A decentralized marketplace for scientific publications where users can browse, search, and purchase academic articles using cryptocurrency (Ethereum) on the Arbitrum Sepolia test network.

## 📑 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Technical Choices](#technical-choices)
- [Project Goals](#project-goals)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

The Web3 Scientific Journal Marketplace is a decentralized application (dApp) that allows users to browse and purchase scientific publications using cryptocurrency. The platform leverages blockchain technology to create a secure, transparent, and accessible marketplace for academic content.

Articles are stored on IPFS (InterPlanetary File System) to ensure decentralized and permanent storage, while transactions are processed on the Arbitrum Sepolia test network for fast and low-cost operations.

## ✨ Features

- **Browse Scientific Articles**: View a collection of scientific publications with detailed information
- **Search Functionality**: Find articles by title, author, or category
- **Web3 Integration**: Connect your MetaMask wallet to interact with the platform
- **Purchase Articles**: Buy articles using ETH on the Arbitrum Sepolia test network
- **Transaction History**: View your purchase history and transaction details
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Interactive UI**: Smooth animations and intuitive interface

## 🛠️ Technologies Used

- **Frontend**:
  - React.js with TypeScript
  - Redux Toolkit for state management
  - React Router for navigation
  - CSS Modules for styling
  - Lottie for animations

- **Web3 Integration**:
  - Wagmi for React hooks
  - Ethers.js for Ethereum interactions
  - Viem for transaction handling

- **Storage**:
  - IPFS for decentralized content storage

- **Testing**:
  - Arbitrum Sepolia test network

## 📂 Project Structure

```
src/
├── App.tsx                 # Main application component
├── config.tsx              # Web3 configuration
├── index.css               # Global styles
├── main.tsx                # Entry point
├── assets/                 # Static assets and animations
├── components/             # Reusable UI components
├── customHook/             # Custom React hooks
├── pages/                  # Application pages
├── states/                 # Redux state management
└── utils/                  # Utility functions and mock data
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- MetaMask browser extension
- Some test ETH on Arbitrum Sepolia network

### Installation

1. Clone the repository:

```bash
git clone https://github.com/antopat1/EcommerceWeb3dapp.git
cd EcommerceWeb3dapp
```

2. Install dependencies:

```bash
npm install
```

or if you use yarn:

```bash
yarn install
```

3. Create a `.env` file in the root directory with the following variables:

```
VITE_ALCHEMY_API_KEY=your_alchemy_api_key
```

### Running the Application

Start the development server:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:5173/`

## 📱 Usage

1. **Connect Your Wallet**:
   - Click on the "Connect Wallet" button in the navigation bar
   - Select MetaMask and approve the connection
   - Make sure you're connected to the Arbitrum Sepolia test network

2. **Browse Articles**:
   - Explore the available scientific publications on the homepage
   - Use the search bar to find specific articles

3. **View Article Details**:
   - Click on an article to view its detailed information
   - Navigate between articles using the arrow buttons

4. **Purchase an Article**:
   - Click the "Purchase" button on the article details page
   - Confirm the transaction in MetaMask
   - Once the transaction is complete, you'll be redirected to a success page


## 🧠 Technical Choices

### React with TypeScript

The project uses React with TypeScript to provide type safety and better developer experience. This combination helps catch errors during development and provides better code documentation.

### Redux Toolkit

Redux Toolkit was chosen for state management to handle complex application state, including:
- User wallet connection status
- Search queries and results
- UI state (sidebar, scrolling, etc.)

### CSS Modules

CSS Modules provide scoped styling to prevent class name collisions and make the codebase more maintainable. Each component has its own CSS module file.

### Wagmi and Viem

These libraries provide React hooks and utilities for Web3 integration, making it easier to connect to wallets, fetch balances, and send transactions.

### IPFS for Content Storage

Scientific articles and their thumbnails are stored on IPFS to ensure:
- Decentralized storage
- Content permanence
- Censorship resistance

## 🎯 Project Goals

1. **Create a Decentralized Marketplace**: Build a platform where scientific knowledge can be shared and accessed without central authorities.

2. **Simplify Web3 Interactions**: Make it easy for users to interact with blockchain technology, even if they're not familiar with it.

3. **Ensure Content Accessibility**: Store content in a decentralized manner to ensure long-term availability.

4. **Build an Intuitive UI**: Create a user-friendly interface that makes browsing and purchasing content simple.

## 🔮 Future Improvements

- **Author Dashboard**: Allow authors to upload and manage their publications
- **Subscription Model**: Implement ERC-20 token-based subscriptions
- **Review System**: Add peer review functionality
- **Citation Network**: Visualize connections between articles
- **Mobile App**: Develop a native mobile application


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
