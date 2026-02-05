---
title: Minting Process
description: Step-by-step guide to mint your artwork as an NFT
sidebar:
  order: 3
---

This guide explains how to mint your fractal art as an NFT.

---

## Prerequisites

Before starting, confirm the following:

- [ ] Logged into CLOSM i
- [ ] Have at least one artwork
- [ ] MetaMask wallet ready
- [ ] Gas fees (MATIC or ETH) available
- [ ] Subscribed to Lite or Premium plan

→ [Wallet setup details](/i/nft/setup/)

---

## Minting Steps

### Step 1: Open the NFT Page

Navigate to the "NFT" page from the sidebar or navigation menu.

### Step 2: Connect Your Wallet

Click the "Connect" button in the "Wallet Connection" section and approve in MetaMask.

After connecting, you'll see:
- Your wallet address
- Current balance
- This month's usage (mint count)

### Step 3: Select Artwork

Your artworks are listed in the "Artwork Selection" section.

- Select **one artwork** to mint as NFT
- Already minted artworks show a "Minted" badge and cannot be selected

:::note
You can only select one artwork at a time. To mint multiple artworks, mint them one by one.
:::

### Step 4: Choose Chain

Select the blockchain for minting.

| Chain | Features | Available Plans |
|-------|----------|-----------------|
| Polygon | Low cost, beginner-friendly | Lite / Premium |
| Ethereum | High liquidity, widely adopted | Premium only |

:::tip
For beginners, **Polygon** is recommended. Gas fees are low and minting completes in seconds.
:::

### Step 5: Check Gas Fees

The estimated gas fee for your selected chain is displayed.

Shown information:
- Estimated gas (MATIC/ETH)
- USD equivalent
- Current balance

:::caution
If your balance is less than the gas fee, the mint button will be disabled. Add more funds for gas.
:::

### Step 6: Execute Mint

Click the "Mint" button.

The following steps execute in sequence:

1. **Preparing** - Generating metadata
2. **Awaiting signature** - Click "Confirm" in MetaMask popup
3. **Confirming** - Waiting for blockchain processing
4. **Completed** - Mint successful

:::note[Processing Time]
- Polygon: A few seconds to 1 minute
- Ethereum: Several seconds to a few minutes
:::

---

## After Minting

### How to Verify

After successful minting, verify through:

1. **On CLOSM i**
   - "Minted" badge appears on the artwork
   - Transaction hash is viewable

2. **On OpenSea**
   - Access directly via "View on OpenSea" link on completion screen
   - Appears in your NFT collection

### NFT Metadata

The minted NFT contains:

- Artwork title
- Artwork description
- Image data (hosted on CDN)
- Generation parameters (Mandelbrot coordinates, zoom, resolution, etc.)
- Creator information

---

## If You Cannot Mint

### Checklist

| Symptom | Check |
|---------|-------|
| Mint button disabled | Confirm wallet is connected |
| Cannot select artwork | Check if already minted |
| Cannot select chain | Check your plan (Free cannot use) |
| Insufficient balance error | Add more gas funds |
| Transaction failed | Check network status and retry |

→ [FAQ & Troubleshooting](/i/nft/faq/)

---

## Next Steps

- [Supported chains details](/i/nft/chains/) - Learn more about Polygon/Ethereum
- [Pricing & plans details](/i/nft/plans/) - Check monthly mint limits
