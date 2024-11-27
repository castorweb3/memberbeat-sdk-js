# Memberbeat Javascript SDK

A JavaScript library for interacting with the Memberbeat smart contracts in the `castorweb3/memberbeat-contracts` Solidity project.

## Installation

To install the Memberbeat SDK, run:

```bash
npm install memberbeat-sdk-js
```

## Usage

To use the Memberbeat SDK, you need to initialize the client with the smart contract address and a signer (typically a wallet signer). Here is a basic usage example:

```javascript
import { createMemberbeat } from 'memberbeat-sdk-js';

const contractAddress = "0x123456789"; // This is the deployed smart contract address
const signer = provider.getSigner(); // This is the wallet signer
const memberbeatInstance = await createMemberbeat(contractAddress, signer);
```

## Overview

The `memberbeat-sdk-js` provides a JavaScript client interface for interacting with the Memberbeat smart contracts. This SDK simplifies the process of integrating with the Memberbeat contract, enabling developers to easily interact with the subscription management functionality provided by the contracts.

### Key Features

- **Subscription Management**: Users can subscribe to different plans using tokens. The contract handles various subscription statuses, including activating, suspending, and canceling subscriptions.
- **Automated Charging**: Subscriptions are automatically charged using Chainlink Upkeeps. The "Time-Based" Upkeep ensures periodic charges, while the "Log Trigger" Upkeep handles event-based charges.
- **Billing Plan Management**: The owner can create, update, and delete subscription plans, as well as manage billing plans within those plans. This allows for flexible subscription models tailored to different needs.
- **Token Integration**: The contract supports multiple tokens for subscription payments, integrating with the `TokenPriceFeedRegistry` to convert fiat prices to token amounts.

### Owner Capabilities

The owner of the contract has several key capabilities to manage subscription services:

- **Create Subscription Plans**: The owner can create new subscription plans with specific billing plans, defining the period and pricing type (token or fiat).
- **Update Subscription Plans**: Existing subscription plans can be updated by the owner, including modifying billing plans and plan details.
- **Delete Subscription Plans**: The owner can delete subscription plans that are no longer needed, ensuring the service remains up-to-date and relevant.
- **Manage Billing Plans**: Billing plans within subscription plans can be added, updated, or removed by the owner, providing flexibility in subscription offerings.
- **Token Management**: The owner can view and manage the tokens used for subscription payments. After tokens are charged, they can be transferred to the owner's wallet using the `claimTokens` function, which ensures all charged tokens are handled efficiently.


## API Reference

### createMemberbeat

```javascript
createMemberbeat(contractAddress: string, signer: Signer): Promise<MemberbeatInstance>
```

- **contractAddress**: The address of the deployed Memberbeat smart contract.
- **signer**: The wallet signer used to sign transactions.

Returns a `MemberbeatInstance` which provides methods to interact with the Memberbeat smart contracts.

### Example

```javascript
import { createMemberbeat } from 'memberbeat-sdk-js';

const contractAddress = "0x123456789"; // Replace with your contract address
const signer = provider.getSigner(); // Replace with your signer

async function main() {
    const memberbeatInstance = await createMemberbeat(contractAddress, signer);
    // Interact with the memberbeatInstance here
}

main();
```

## Contributing

We welcome contributions to the Memberbeat SDK. If you have any issues, bug reports, or feature requests, please open an issue on GitHub or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
