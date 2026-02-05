---
title: Testing Guide
description: NFT minting tests in development and staging environments
sidebar:
  order: 7
---

This guide explains how to test NFT functionality in development (dev) and staging (stg) environments.

:::note[Target Audience]
This page is for developers and QA teams. General users should use the production environment.
:::

---

## Test Environment Overview

### Environments and Networks

| Environment | Network | Purpose |
|-------------|---------|---------|
| development | Testnet | Local development, verification |
| staging | Testnet | Pre-release testing |
| production | Mainnet | Production use |

### Test Networks

| Chain | Testnet Name | Chain ID |
|-------|--------------|----------|
| Polygon | Polygon Amoy | 80002 |
| Ethereum | Sepolia | 11155111 |

Test environments use **test tokens** (free to obtain) instead of real cryptocurrency.

---

## Prerequisites

### 1. MetaMask Setup

If MetaMask is not installed, set it up first.

→ [Wallet Setup](/i/nft/setup/)

### 2. Adding Test Networks

Add test networks to MetaMask.

#### Adding Polygon Amoy

| Field | Value |
|-------|-------|
| Network Name | Polygon Amoy |
| RPC URL | `https://rpc-amoy.polygon.technology/` |
| Chain ID | 80002 |
| Currency Symbol | MATIC |
| Block Explorer | `https://amoy.polygonscan.com` |

**Steps:**
1. Open MetaMask
2. Network selector → "Add network"
3. Select "Add a network manually"
4. Enter the information above and save

#### Adding Sepolia

| Field | Value |
|-------|-------|
| Network Name | Sepolia |
| RPC URL | `https://rpc.sepolia.org` |
| Chain ID | 11155111 |
| Currency Symbol | ETH |
| Block Explorer | `https://sepolia.etherscan.io` |

:::tip
Sepolia may appear as a preset when you enable "Show test networks" in MetaMask settings.
:::

### 3. Obtaining Test Tokens

You need free test tokens for gas fees on testnets.

#### Polygon Amoy (Test MATIC)

1. Go to [Polygon Faucet](https://faucet.polygon.technology/)
2. Select "Amoy"
3. Enter your MetaMask wallet address
4. Click "Submit"
5. Test MATIC arrives within minutes

**Recommended amount**: 0.5–1 MATIC (sufficient for multiple tests)

#### Sepolia (Test ETH)

1. Go to [Sepolia Faucet](https://sepoliafaucet.com/)
2. Log in with an Alchemy account (free)
3. Enter your MetaMask wallet address
4. Click "Send Me ETH"

**Recommended amount**: 0.1–0.5 ETH

:::note[Faucet Limits]
Faucets have daily limits. If needed, try again the next day.
:::

---

## Test Procedure

### Step 1: Verify Environment

Access the development or staging environment.

Test environments display:

- **Testnet Banner**: "🧪 Testnet Environment" warning at the top
- **🧪 in Chain Names**: Dropdown shows "🧪 Polygon Amoy"
- **Currency Notation**: tMATIC / tETH (indicating test tokens)

### Step 2: Connect Wallet

1. Open the NFT page
2. Click "Connect" in the "Wallet Connection" section
3. Approve in MetaMask

After connecting, verify:
- Wallet address is displayed
- Test token balance is shown

### Step 3: Prepare Test Artwork

Artwork is needed in the test environment database.

- **Development**: Use artwork from local DB or dev DB
- **Staging**: Use artwork from staging DB

:::note
Create artwork with your test account beforehand.
:::

### Step 4: Select Chain

Choose a testnet from the dropdown.

| Option | Description |
|--------|-------------|
| 🧪 Polygon Amoy | Polygon testnet (recommended) |
| 🧪 Sepolia | Ethereum testnet |

:::tip[Recommended]
For initial testing, use **Polygon Amoy**. Gas fees are low and processing is fast.
:::

### Step 5: Check Gas Fees

Gas estimates are displayed.

Example display in test environment:
```
Estimated Gas: 0.02 tMATIC
🧪 Not real gas cost
```

- **tMATIC / tETH**: Indicates test tokens
- No real costs are incurred with test tokens

### Step 6: Execute Mint

1. Click the "Mint" button
2. Review and approve the transaction in MetaMask
3. Wait for processing to complete

### Step 7: Verify Results

#### Check on Testnet Explorer

After successful minting, verify the transaction.

| Chain | Explorer |
|-------|----------|
| Polygon Amoy | https://amoy.polygonscan.com |
| Sepolia | https://sepolia.etherscan.io |

Click the transaction hash shown on the completion screen.

#### Check on Testnet Marketplace

Testnet NFTs can be verified at:

- [Rarible Testnet](https://testnet.rarible.com) - Connect wallet and check My Collection

:::note
Testnet NFTs do not appear on the production OpenSea site.
:::

---

## Test Scenarios

### Basic Tests

| # | Test Item | Expected Result |
|---|-----------|-----------------|
| 1 | Mint on Polygon Amoy | Success, verifiable on explorer |
| 2 | Mint on Sepolia (Premium) | Success, verifiable on explorer |
| 3 | Mint with insufficient balance | Error displayed, button disabled |
| 4 | Mint after reaching monthly limit | Error displayed, button disabled |

### Error Case Tests

| # | Test Item | Expected Result |
|---|-----------|-----------------|
| 1 | Reject in MetaMask | "Signature cancelled" error |
| 2 | During network disconnection | Appropriate error message |
| 3 | Access with Free plan | Mint button disabled, upgrade prompt |

### Plan-Based Tests

| Plan | Polygon Amoy | Sepolia |
|------|--------------|---------|
| Free | Not available | Not available |
| Lite | Available (3/month) | Not available |
| Premium | Available (10/month) | Available (3/month) |

---

## Troubleshooting

### Test tokens not received

- You may have hit the faucet's daily limit
- Try a different faucet or wait until the next day
- Verify your wallet address is correct

### Cannot connect to network

- Check MetaMask network settings
- Verify RPC URL is correct
- If using VPN, temporarily disable it

### Transaction fails

- Verify sufficient gas funds
- Check network congestion status
- Wait a few minutes and retry

### Testnet banner not displayed

- Verify `DEPLOY_ENV` environment variable is set correctly
- Restart the development server

---

## Environment Variable Reference

### Web (.env)

```bash
# Environment (development / staging / production)
NEXT_PUBLIC_DEPLOY_ENV=development

# RPC URLs (testnet)
NEXT_PUBLIC_POLYGON_CHAIN_RPC_URL=https://polygon-amoy.g.alchemy.com/v2/YOUR_KEY
NEXT_PUBLIC_ETHEREUM_CHAIN_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY
```

### API (.env)

```bash
# Environment
DEPLOY_ENV=development

# RPC URLs (testnet)
POLYGON_CHAIN_RPC_URL=https://polygon-amoy.g.alchemy.com/v2/YOUR_KEY
ETHEREUM_CHAIN_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY

# Contract addresses (testnet)
POLYGON_CHAIN_CONTRACT=0xEF0dBBDf5A3a45dAF6CEA4F4748d154A4F27eaA1
ETHEREUM_CHAIN_CONTRACT=0x5ddE85BD9989F12dDBcAC135ADA44e2651BCDDdD
```

---

## Related Links

### Faucets

- [Polygon Faucet](https://faucet.polygon.technology/)
- [Sepolia Faucet](https://sepoliafaucet.com/)
- [Alchemy Sepolia Faucet](https://www.alchemy.com/faucets/ethereum-sepolia)

### Explorers

- [Polygon Amoy Scan](https://amoy.polygonscan.com)
- [Sepolia Etherscan](https://sepolia.etherscan.io)

### Marketplace (Testnet)

- [Rarible Testnet](https://testnet.rarible.com)
