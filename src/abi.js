// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

const contractABI = {
    "abi": [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_serviceProvider",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_serviceProviderFee",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "SERVICE_PROVIDER_FEE_FACTOR",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "addBillingPlan",
            "inputs": [
                {
                    "name": "_planId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_billingPlan",
                    "type": "tuple",
                    "internalType": "struct MemberBeatDataTypes.BillingPlan",
                    "components": [
                        {
                            "name": "period",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.Period"
                        },
                        {
                            "name": "periodValue",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "pricingType",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.PricingType"
                        },
                        {
                            "name": "tokenAddresses",
                            "type": "address[]",
                            "internalType": "address[]"
                        },
                        {
                            "name": "tokenPrices",
                            "type": "uint256[]",
                            "internalType": "uint256[]"
                        },
                        {
                            "name": "fiatPrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "addTokenPriceFeed",
            "inputs": [
                {
                    "name": "_tokenAddress",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_priceFeedAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "calculateServiceProviderFee",
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "claimTokens",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "convertFiatToTokenAmount",
            "inputs": [
                {
                    "name": "_tokenAddress",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_fiatAmount",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "createPlan",
            "inputs": [
                {
                    "name": "_planId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_planName",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_billingPlans",
                    "type": "tuple[]",
                    "internalType": "struct MemberBeatDataTypes.BillingPlan[]",
                    "components": [
                        {
                            "name": "period",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.Period"
                        },
                        {
                            "name": "periodValue",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "pricingType",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.PricingType"
                        },
                        {
                            "name": "tokenAddresses",
                            "type": "address[]",
                            "internalType": "address[]"
                        },
                        {
                            "name": "tokenPrices",
                            "type": "uint256[]",
                            "internalType": "uint256[]"
                        },
                        {
                            "name": "fiatPrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deletePlan",
            "inputs": [
                {
                    "name": "_planId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "deleteTokenPriceFeed",
            "inputs": [
                {
                    "name": "_tokenAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "getBillingPlan",
            "inputs": [
                {
                    "name": "_planId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_billingPlanIdex",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct MemberBeatDataTypes.BillingPlan",
                    "components": [
                        {
                            "name": "period",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.Period"
                        },
                        {
                            "name": "periodValue",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "pricingType",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.PricingType"
                        },
                        {
                            "name": "tokenAddresses",
                            "type": "address[]",
                            "internalType": "address[]"
                        },
                        {
                            "name": "tokenPrices",
                            "type": "uint256[]",
                            "internalType": "uint256[]"
                        },
                        {
                            "name": "fiatPrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getNextChargeTimestamp",
            "inputs": [
                {
                    "name": "subscription",
                    "type": "tuple",
                    "internalType": "struct MemberBeatDataTypes.Subscription",
                    "components": [
                        {
                            "name": "account",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "planId",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "token",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "startTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "nextChargeTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "status",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.Status"
                        },
                        {
                            "name": "billingCycle",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "billingPlan",
                            "type": "tuple",
                            "internalType": "struct MemberBeatDataTypes.BillingPlan",
                            "components": [
                                {
                                    "name": "period",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.Period"
                                },
                                {
                                    "name": "periodValue",
                                    "type": "uint16",
                                    "internalType": "uint16"
                                },
                                {
                                    "name": "pricingType",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.PricingType"
                                },
                                {
                                    "name": "tokenAddresses",
                                    "type": "address[]",
                                    "internalType": "address[]"
                                },
                                {
                                    "name": "tokenPrices",
                                    "type": "uint256[]",
                                    "internalType": "uint256[]"
                                },
                                {
                                    "name": "fiatPrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "getPlan",
            "inputs": [
                {
                    "name": "_planId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct MemberBeatDataTypes.Plan",
                    "components": [
                        {
                            "name": "planId",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "planName",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "billingPlans",
                            "type": "tuple[]",
                            "internalType": "struct MemberBeatDataTypes.BillingPlan[]",
                            "components": [
                                {
                                    "name": "period",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.Period"
                                },
                                {
                                    "name": "periodValue",
                                    "type": "uint16",
                                    "internalType": "uint16"
                                },
                                {
                                    "name": "pricingType",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.PricingType"
                                },
                                {
                                    "name": "tokenAddresses",
                                    "type": "address[]",
                                    "internalType": "address[]"
                                },
                                {
                                    "name": "tokenPrices",
                                    "type": "uint256[]",
                                    "internalType": "uint256[]"
                                },
                                {
                                    "name": "fiatPrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getPlans",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple[]",
                    "internalType": "struct MemberBeatDataTypes.Plan[]",
                    "components": [
                        {
                            "name": "planId",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "planName",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "billingPlans",
                            "type": "tuple[]",
                            "internalType": "struct MemberBeatDataTypes.BillingPlan[]",
                            "components": [
                                {
                                    "name": "period",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.Period"
                                },
                                {
                                    "name": "periodValue",
                                    "type": "uint16",
                                    "internalType": "uint16"
                                },
                                {
                                    "name": "pricingType",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.PricingType"
                                },
                                {
                                    "name": "tokenAddresses",
                                    "type": "address[]",
                                    "internalType": "address[]"
                                },
                                {
                                    "name": "tokenPrices",
                                    "type": "uint256[]",
                                    "internalType": "uint256[]"
                                },
                                {
                                    "name": "fiatPrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getRegisteredTokens",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getServiceProvider",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getServiceProviderFee",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getSubscriptionAtIndex",
            "inputs": [
                {
                    "name": "_index",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct MemberBeatDataTypes.Subscription",
                    "components": [
                        {
                            "name": "account",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "planId",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "token",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "startTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "nextChargeTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "status",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.Status"
                        },
                        {
                            "name": "billingCycle",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "billingPlan",
                            "type": "tuple",
                            "internalType": "struct MemberBeatDataTypes.BillingPlan",
                            "components": [
                                {
                                    "name": "period",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.Period"
                                },
                                {
                                    "name": "periodValue",
                                    "type": "uint16",
                                    "internalType": "uint16"
                                },
                                {
                                    "name": "pricingType",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.PricingType"
                                },
                                {
                                    "name": "tokenAddresses",
                                    "type": "address[]",
                                    "internalType": "address[]"
                                },
                                {
                                    "name": "tokenPrices",
                                    "type": "uint256[]",
                                    "internalType": "uint256[]"
                                },
                                {
                                    "name": "fiatPrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getSubscriptions",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple[]",
                    "internalType": "struct MemberBeatDataTypes.Subscription[]",
                    "components": [
                        {
                            "name": "account",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "planId",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "token",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "startTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "nextChargeTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "status",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.Status"
                        },
                        {
                            "name": "billingCycle",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "billingPlan",
                            "type": "tuple",
                            "internalType": "struct MemberBeatDataTypes.BillingPlan",
                            "components": [
                                {
                                    "name": "period",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.Period"
                                },
                                {
                                    "name": "periodValue",
                                    "type": "uint16",
                                    "internalType": "uint16"
                                },
                                {
                                    "name": "pricingType",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.PricingType"
                                },
                                {
                                    "name": "tokenAddresses",
                                    "type": "address[]",
                                    "internalType": "address[]"
                                },
                                {
                                    "name": "tokenPrices",
                                    "type": "uint256[]",
                                    "internalType": "uint256[]"
                                },
                                {
                                    "name": "fiatPrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getUserSubscription",
            "inputs": [
                {
                    "name": "_account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_planId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct MemberBeatDataTypes.Subscription",
                    "components": [
                        {
                            "name": "account",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "planId",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "token",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "startTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "nextChargeTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "status",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.Status"
                        },
                        {
                            "name": "billingCycle",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "billingPlan",
                            "type": "tuple",
                            "internalType": "struct MemberBeatDataTypes.BillingPlan",
                            "components": [
                                {
                                    "name": "period",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.Period"
                                },
                                {
                                    "name": "periodValue",
                                    "type": "uint16",
                                    "internalType": "uint16"
                                },
                                {
                                    "name": "pricingType",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.PricingType"
                                },
                                {
                                    "name": "tokenAddresses",
                                    "type": "address[]",
                                    "internalType": "address[]"
                                },
                                {
                                    "name": "tokenPrices",
                                    "type": "uint256[]",
                                    "internalType": "uint256[]"
                                },
                                {
                                    "name": "fiatPrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "handleSubscriptionCharge",
            "inputs": [
                {
                    "name": "subscriptionIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "isOwner",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isTokenRegistered",
            "inputs": [
                {
                    "name": "_tokenAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "owner",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "processDueSubscriptions",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "removeBillingPlan",
            "inputs": [
                {
                    "name": "_planId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_billingPlanIndex",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "renounceOwnership",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "subscribe",
            "inputs": [
                {
                    "name": "_planId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_billingPlanIndex",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "_token",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_startTimestamp",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct MemberBeatDataTypes.Subscription",
                    "components": [
                        {
                            "name": "account",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "planId",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "token",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "startTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "nextChargeTimestamp",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "status",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.Status"
                        },
                        {
                            "name": "billingCycle",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "billingPlan",
                            "type": "tuple",
                            "internalType": "struct MemberBeatDataTypes.BillingPlan",
                            "components": [
                                {
                                    "name": "period",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.Period"
                                },
                                {
                                    "name": "periodValue",
                                    "type": "uint16",
                                    "internalType": "uint16"
                                },
                                {
                                    "name": "pricingType",
                                    "type": "uint8",
                                    "internalType": "enum MemberBeatDataTypes.PricingType"
                                },
                                {
                                    "name": "tokenAddresses",
                                    "type": "address[]",
                                    "internalType": "address[]"
                                },
                                {
                                    "name": "tokenPrices",
                                    "type": "uint256[]",
                                    "internalType": "uint256[]"
                                },
                                {
                                    "name": "fiatPrice",
                                    "type": "uint256",
                                    "internalType": "uint256"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "transferOwnership",
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "unsubscribe",
            "inputs": [
                {
                    "name": "_planId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateBillingPlan",
            "inputs": [
                {
                    "name": "_planId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_billingPlanIndex",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "_billingPlan",
                    "type": "tuple",
                    "internalType": "struct MemberBeatDataTypes.BillingPlan",
                    "components": [
                        {
                            "name": "period",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.Period"
                        },
                        {
                            "name": "periodValue",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "pricingType",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.PricingType"
                        },
                        {
                            "name": "tokenAddresses",
                            "type": "address[]",
                            "internalType": "address[]"
                        },
                        {
                            "name": "tokenPrices",
                            "type": "uint256[]",
                            "internalType": "uint256[]"
                        },
                        {
                            "name": "fiatPrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updatePlan",
            "inputs": [
                {
                    "name": "_planId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_planName",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "_billingPlans",
                    "type": "tuple[]",
                    "internalType": "struct MemberBeatDataTypes.BillingPlan[]",
                    "components": [
                        {
                            "name": "period",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.Period"
                        },
                        {
                            "name": "periodValue",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "pricingType",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.PricingType"
                        },
                        {
                            "name": "tokenAddresses",
                            "type": "address[]",
                            "internalType": "address[]"
                        },
                        {
                            "name": "tokenPrices",
                            "type": "uint256[]",
                            "internalType": "uint256[]"
                        },
                        {
                            "name": "fiatPrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateTokenPriceFeed",
            "inputs": [
                {
                    "name": "_tokenAddress",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_newPriceFeedAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "OwnershipTransferred",
            "inputs": [
                {
                    "name": "previousOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "newOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "SubscriptionCancelled",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "planId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "SubscriptionCharged",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "billingCycle",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "token",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "tokenAmount",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "SubscriptionCreated",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "planId",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "billingPlan",
                    "type": "tuple",
                    "indexed": false,
                    "internalType": "struct MemberBeatDataTypes.BillingPlan",
                    "components": [
                        {
                            "name": "period",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.Period"
                        },
                        {
                            "name": "periodValue",
                            "type": "uint16",
                            "internalType": "uint16"
                        },
                        {
                            "name": "pricingType",
                            "type": "uint8",
                            "internalType": "enum MemberBeatDataTypes.PricingType"
                        },
                        {
                            "name": "tokenAddresses",
                            "type": "address[]",
                            "internalType": "address[]"
                        },
                        {
                            "name": "tokenPrices",
                            "type": "uint256[]",
                            "internalType": "uint256[]"
                        },
                        {
                            "name": "fiatPrice",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "SubscriptionDueForCharge",
            "inputs": [
                {
                    "name": "subscriptionIndex",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "MemberBeatSubscriptionManager__AllowanceTooLow",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "MemberBeatSubscriptionManager__AlreadySubscribed",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "planId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "MemberBeatSubscriptionManager__InvalidBillingPeriod",
            "inputs": [
                {
                    "name": "period",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "MemberBeatSubscriptionManager__InvalidServiceProviderAddress",
            "inputs": []
        },
        {
            "type": "error",
            "name": "MemberBeatSubscriptionManager__InvalidSubscriptionData",
            "inputs": []
        },
        {
            "type": "error",
            "name": "MemberBeatSubscriptionManager__NotSubscribed",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "planId",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "MemberBeatSubscriptionManager__SubscriptionNotDue",
            "inputs": [
                {
                    "name": "subscriptionIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "MemberBeatSubscriptionManager__SubscriptionNotFound",
            "inputs": [
                {
                    "name": "subscriptionIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "MemberBeatSubscriptionManager__TokenAmountCalculationFailed",
            "inputs": [
                {
                    "name": "planId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "MemberBeatSubscriptionManager__TokenApprovalFailed",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "MemberBeatSubscriptionManager__TokenFeeTransferFailed",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "fee",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "MemberBeatSubscriptionManager__TokenNotAllowed",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "OwnableInvalidOwner",
            "inputs": [
                {
                    "name": "owner",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "OwnableUnauthorizedAccount",
            "inputs": [
                {
                    "name": "account",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "error",
            "name": "SafeERC20FailedOperation",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        }
    ],
    "bytecode": {
        "object": "0x6101006040523480156200001257600080fd5b5060405162006a9038038062006a9083398101604081905262000035916200017e565b33806200005c57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000678162000112565b506001600160a01b038216620000905760405163770fa4ef60e01b815260040160405180910390fd5b6040516200009e9062000162565b604051809103906000f080158015620000bb573d6000803e3d6000fd5b506001600160a01b0316608052604051620000d69062000170565b604051809103906000f080158015620000f3573d6000803e3d6000fd5b506001600160a01b0390811660a0529190911660c05260e052620001ba565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6122de8062003f5383390190565b61085f806200623183390190565b600080604083850312156200019257600080fd5b82516001600160a01b0381168114620001aa57600080fd5b6020939093015192949293505050565b60805160a05160c05160e051613ce16200027260003960008181610444015281816106d8015261209b01526000818161034a01526121890152600081816105b70152818161066f015281816108c7015281816111c80152818161136501528181611a600152611cdf0152600081816104eb0152818161057a0152818161097401528181610a0a01528181610a93015281816112160152818161126b015281816112fa015281816114ba015261186f0152613ce16000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c806382d2f5b11161010f578063bdf5dbb2116100a2578063d94a862b11610071578063d94a862b14610489578063e6f0375d1461049e578063f2fde38b146104a6578063ffdda9ee146104b957600080fd5b8063bdf5dbb21461041c578063cc5d19c11461042f578063cea9830314610442578063d916b8f61461046857600080fd5b80638f32d59b116100de5780638f32d59b146103d0578063925a06c6146103e3578063965c64f5146103f6578063ad0b27fb1461040957600080fd5b806382d2f5b11461038a5780638815a0421461039d5780638a0fa52a146103b05780638da5cb5b146103bf57600080fd5b806326cd5274116101875780634023004611610156578063402300461461032057806348c54b9d14610340578063571959e014610348578063715018a61461038257600080fd5b806326cd5274146102b85780632ad2a3f3146102d8578063333160e6146102eb5780633b47a9ac1461030b57600080fd5b8063181f914b116101c3578063181f914b1461024e578063217786ef1461026f57806324210bf01461028257806326aa101f1461029557600080fd5b80630fe155fe146101f557806312d230c91461020a57806314cbd9931461021d578063166ee7671461023b575b600080fd5b610208610203366004612f84565b6104cc565b005b610208610218366004613042565b61055b565b6102256105b3565b604051610232919061308e565b60405180910390f35b6102086102493660046130db565b610640565b61026161025c366004613114565b6106d0565b604051908152602001610232565b61026161027d36600461312d565b610732565b610208610290366004613114565b610817565b6102a86102a33660046131f5565b6108a5565b6040519015158152602001610232565b6102cb6102c6366004613114565b61093a565b6040516102329190613411565b6102086102e6366004612f84565b6109eb565b6102fe6102f9366004613424565b610a43565b6040516102329190613450565b610313610b11565b60405161023291906134d6565b61033361032e366004613114565b610e12565b6040516102329190613538565b610208611034565b7f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b039091168152602001610232565b610208611185565b6102086103983660046130db565b611199565b6102086103ab36600461354b565b6111f7565b610261670de0b6b3a764000081565b6000546001600160a01b031661036a565b6000546001600160a01b031633146102a8565b6102086103f1366004613114565b61124d565b610208610404366004613424565b6112d3565b610208610417366004613114565b611331565b61020861042a3660046131f5565b61133e565b61033361043d366004613591565b611394565b7f0000000000000000000000000000000000000000000000000000000000000000610261565b61047b6104763660046135bd565b611409565b604051610232929190613603565b61049161186b565b6040516102329190613625565b6102086118f3565b6102086104b43660046131f5565b6119f9565b6102616104c7366004613591565b611a34565b6104d4611acd565b6040516307f0aaff60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690630fe155fe906105249086908690869060040161367a565b600060405180830381600087803b15801561053e57600080fd5b505af1158015610552573d6000803e3d6000fd5b50505050505050565b610563611acd565b6040516312d230c960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906312d230c990610524908690869086906004016136af565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166314cbd9936040518163ffffffff1660e01b8152600401600060405180830381865afa158015610613573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261063b9190810190613735565b905090565b610648611acd565b60405163166ee76760e01b81526001600160a01b03838116600483015282811660248301527f0000000000000000000000000000000000000000000000000000000000000000169063166ee767906044015b600060405180830381600087803b1580156106b457600080fd5b505af11580156106c8573d6000803e3d6000fd5b505050505050565b6000806106fd7f00000000000000000000000000000000000000000000000000000000000000008461377f565b90506000670de0b6b3a764000060016107168285613796565b61072091906137a9565b61072a91906137d2565b949350505050565b6000808260e001519050600080846080015111610753578360600151610759565b83608001515b905060008251600381111561077057610770613262565b036107875761072a81836020015161ffff16611afa565b60018251600381111561079c5761079c613262565b036107b35761072a81836020015161ffff16611b22565b6002825160038111156107c8576107c8613262565b036107df5761072a81836020015161ffff16611bf9565b815160038111156107f2576107f2613262565b60405163db84f3ef60e01b815260040161080e91815260200190565b60405180910390fd5b61081f611acd565b600061082a82610e12565b905060018160a00151600381111561084457610844613262565b14158015610868575060008160a00151600381111561086557610865613262565b14155b806108765750428160800151115b156108965760405162b33a9d60e41b81526004810183905260240161080e565b6108a08282611c2d565b505050565b6040516326aa101f60e01b81526001600160a01b0382811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906326aa101f90602401602060405180830381865afa158015610910573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093491906137e6565b92915050565b61095e60405180606001604052806000815260200160608152602001606081525090565b6040516309b3549d60e21b8152600481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906326cd527490602401600060405180830381865afa1580156109c3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109349190810190613a63565b6109f3611acd565b604051632ad2a3f360e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632ad2a3f3906105249086908690869060040161367a565b6040805160c0810182526000808252602082018190529181018290526060808201819052608082015260a0810191909152604051631998b07360e11b81526004810184905260ff831660248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063333160e690604401600060405180830381865afa158015610ae2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b0a9190810190613a97565b9392505050565b336000908152600460209081526040808320805482518185028101850190935280835260609493830182828015610b6757602002820191906000526020600020905b815481526020019060010190808311610b53575b505050505090506000815190506000816001600160401b03811115610b8e57610b8e612c23565b604051908082528060200260200182016040528015610bc757816020015b610bb4612ad7565b815260200190600190039081610bac5790505b50905060005b82811015610e0a5760026000858381518110610beb57610beb613acb565b602090810291909101810151825281810192909252604090810160002081516101008101835281546001600160a01b039081168252600183015494820194909452600282015490931691830191909152600380820154606084015260048201546080840152600582015460a084019160ff90911690811115610c6f57610c6f613262565b6003811115610c8057610c80613262565b8152600682015460208201526040805160c08101825260078401805492909301929091829060ff166003811115610cb957610cb9613262565b6003811115610cca57610cca613262565b81528154610100810461ffff1660208301526040909101906301000000900460ff166001811115610cfd57610cfd613262565b6001811115610d0e57610d0e613262565b815260200160018201805480602002602001604051908101604052809291908181526020018280548015610d6b57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610d4d575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610dc357602002820191906000526020600020905b815481526020019060010190808311610daf575b5050505050815260200160038201548152505081525050828281518110610dec57610dec613acb565b60200260200101819052508080610e0290613ae1565b915050610bcd565b509392505050565b610e1a612ad7565b610e22611acd565b600082815260026020526040902080546001600160a01b0316610e5b57604051631c6efd4b60e01b81526004810184905260240161080e565b604080516101008101825282546001600160a01b03908116825260018401546020830152600284015416918101919091526003808301546060830152600483015460808301526005830154839160a084019160ff1690811115610ec057610ec0613262565b6003811115610ed157610ed1613262565b8152600682015460208201526040805160c08101825260078401805492909301929091829060ff166003811115610f0a57610f0a613262565b6003811115610f1b57610f1b613262565b81528154610100810461ffff1660208301526040909101906301000000900460ff166001811115610f4e57610f4e613262565b6001811115610f5f57610f5f613262565b815260200160018201805480602002602001604051908101604052809291908181526020018280548015610fbc57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610f9e575b505050505081526020016002820180548060200260200160405190810160405280929190818152602001828054801561101457602002820191906000526020600020905b815481526020019060010190808311611000575b50505050508152602001600382015481525050815250509150505b919050565b61103c611acd565b6000600680548060200260200160405190810160405280929190818152602001828054801561109457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611076575b505083519394506000925050505b818110156111745760008382815181106110be576110be613acb565b60209081029190910101516040516370a0823160e01b81523060048201529091506000906001600160a01b038316906370a0823190602401602060405180830381865afa158015611113573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111379190613afa565b905061115f61114e6000546001600160a01b031690565b6001600160a01b03841690836121bb565b5050808061116c90613ae1565b9150506110a2565b5061118160066000612b50565b5050565b61118d611acd565b611197600061221a565b565b6111a1611acd565b6040516382d2f5b160e01b81526001600160a01b03838116600483015282811660248301527f000000000000000000000000000000000000000000000000000000000000000016906382d2f5b19060440161069a565b6111ff611acd565b60405163440ad02160e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638815a0429061069a9085908590600401613b13565b611255611acd565b60405163492d036360e11b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063925a06c6906024015b600060405180830381600087803b1580156112b857600080fd5b505af11580156112cc573d6000803e3d6000fd5b5050505050565b6112db611acd565b60405163965c64f560e01b81526004810183905260ff821660248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063965c64f59060440161069a565b61133b338261226a565b50565b611346611acd565b604051635efaedd960e11b81526001600160a01b0382811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063bdf5dbb29060240161129e565b61139c612ad7565b60006113a88484612467565b5080519091506001600160a01b031615806113d95750836001600160a01b031681600001516001600160a01b031614155b15610b0a5760405163069d323f60e21b81526001600160a01b03851660048201526024810184905260440161080e565b611411612ad7565b600085158061142757506001600160a01b038416155b156114455760405163f1e1fdc960e01b815260040160405180910390fd5b3360009081526003602090815260408083208984528252808320548084526002909252909120600101548790036114985760405163f0783edf60e01b81523360048201526024810188905260440161080e565b604051631998b07360e11b81526004810188905260ff871660248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063333160e690604401600060405180830381865afa158015611509573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526115319190810190613a97565b90506000428611611543576001611546565b60005b905060008082600381111561155d5761155d613262565b1461156957600061156b565b865b90506000604051806101000160405280336001600160a01b031681526020018c81526020018a6001600160a01b031681526020018981526020018381526020018460038111156115bd576115bd613262565b815260006020820181905260409091018690526001805492935082916115e283613ae1565b9091555050600081815260026020818152604092839020855181546001600160a01b03199081166001600160a01b0392831617835592870151600180840191909155948701519382018054909316931692909217905560608401516003808301919091556080850151600483015560a085015160058301805487959293919260ff1990911691849081111561167957611679613262565b021790555060c0820151600682015560e08201518051600783018054909190829060ff191660018360038111156116b2576116b2613262565b02179055506020820151815461ffff9091166101000262ffff0019821681178355604084015191839163ff000000191663ffffff001990911617630100000083600181111561170357611703613262565b021790555060608201518051611723916001840191602090910190612b6e565b506080820151805161173f916002840191602090910190612bd3565b5060a0820151816003015550509050508060036000336001600160a01b03166001600160a01b0316815260200190815260200160002060008e81526020019081526020016000208190555060046000336001600160a01b03166001600160a01b031681526020019081526020016000208190806001815401808255809150506001900390600052602060002001600090919091909150558b8a6001600160a01b0316336001600160a01b03167f73bd74e1ff025836c9fc129762ae94e04f2b3db6662a39172d6193a49b1a969a8860405161181a9190613450565b60405180910390a46000600185600381111561183857611838613262565b0361184e576118478284611c2d565b9050611858565b61185882846126b5565b919c919b50909950505050505050505050565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d94a862b6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156118cb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261063b9190810190613b2c565b6118fb611acd565b600061190a62015180426137d2565b611917906201518061377f565b60008181526005602052604081209192505b81548110156108a057600082828154811061194657611946613acb565b6000918252602080832090910154808352600290915260409091209091506001600582015460ff16600381111561197f5761197f613262565b14806119a357506000600582015460ff1660038111156119a1576119a1613262565b145b80156119b3575042816004015411155b156119e45760405182907fbb65ea9884c06faec2c4686a4a9e25ccc52e1ad8e5b6bb08354f8207013090e090600090a25b505080806119f190613ae1565b915050611929565b611a01611acd565b6001600160a01b038116611a2b57604051631e4fbdf760e01b81526000600482015260240161080e565b61133b8161221a565b604051600162112b0960e11b031981526001600160a01b038381166004830152602482018390526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ffdda9ee90604401602060405180830381865afa158015611aa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0a9190613afa565b6000546001600160a01b031633146111975760405163118cdaa760e01b815233600482015260240161080e565b6000611b09620151808361377f565b611b139084613796565b90508281101561093457600080fd5b6000808080611b3c611b3762015180886137d2565b612707565b91945092509050611b4d8583613796565b9150600c611b5c6001846137a9565b611b6691906137d2565b611b709084613796565b9250600c611b7f6001846137a9565b611b899190613bdc565b611b94906001613796565b91506000611ba284846127a3565b905080821115611bb0578091505b611bbd6201518088613bdc565b62015180611bcc868686612829565b611bd6919061377f565b611be09190613796565b945086851015611bef57600080fd5b5050505092915050565b6000808080611c0e611b3762015180886137d2565b91945092509050611c1f8584613796565b92506000611ba284846127a3565b6000808260e0015190506000611c47828560400151612966565b6000935090508282604001516001811115611c6457611c64613262565b03611c8e5781608001518181518110611c7f57611c7f613acb565b60200260200101519250611da2565b600182604001516001811115611ca657611ca6613262565b03611da25760408085015160a08401519151600162112b0960e11b031981526001600160a01b03918216600482015260248101929092527f0000000000000000000000000000000000000000000000000000000000000000169063ffdda9ee90604401602060405180830381865afa158015611d26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d4a9190613afa565b925060008260a00151118015611d5e575082155b15611da2576020840151845160408087015190516303be8a9f60e11b815260048101939093526001600160a01b03918216602484015216604482015260640161080e565b611dab84610732565b608085015260c08401805190611dc082613ae1565b905250600085815260026020818152604092839020875181546001600160a01b03199081166001600160a01b0392831617835592890151600180840191909155948901519382018054909316931692909217905560608601516003808301919091556080870151600483015560a087015160058301805489959293919260ff19909116918490811115611e5557611e55613262565b021790555060c0820151600682015560e08201518051600783018054909190829060ff19166001836003811115611e8e57611e8e613262565b02179055506020820151815461ffff9091166101000262ffff0019821681178355604084015191839163ff000000191663ffffff0019909116176301000000836001811115611edf57611edf613262565b021790555060608201518051611eff916001840191602090910190612b6e565b5060808201518051611f1b916002840191602090910190612bd3565b5060a082015181600301555050905050611f3585856126b5565b82156121b35760408481015185519151636eb1769f60e11b81526001600160a01b03928316600482015230602482015290916000919083169063dd62ed3e90604401602060405180830381865afa158015611f94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fb89190613afa565b905084811015611fe95785516040516317e3a89960e21b81526001600160a01b03909116600482015260240161080e565b60408681018051600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0180546001600160a01b0319166001600160a01b03928316179055905160c08901518951935189815291831693909216907f7c12298d92f5da73db22fb176093bdf79566023af218c560cfd5235cb08af64f9060200160405180910390a48551612097906001600160a01b0384169030886129eb565b60007f00000000000000000000000000000000000000000000000000000000000000001315611bef5760006120cb866106d0565b60405163095ea7b360e01b8152306004820152602481018290529091506000906001600160a01b0385169063095ea7b3906044016020604051808303816000875af115801561211e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061214291906137e6565b905080612179576040808901519051638b3fca9b60e01b81523060048201526001600160a01b03909116602482015260440161080e565b6121ae6001600160a01b038516307f0000000000000000000000000000000000000000000000000000000000000000856129eb565b505050505b505092915050565b6040516001600160a01b038381166024830152604482018390526108a091859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612a2a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006122768383612467565b6001600160a01b03851660009081526003602081815260408084208885528252808420849055848452600291829052832080546001600160a01b031990811682556001820185905591810180549092169091559081018290556004810182905560058101805460ff191690556006810182905560078101805463ffffffff191681559294509250908161230c6008850182612b50565b61231a600283016000612b50565b5060006003919091018190556001600160a01b0386168152600460205260408120600019935091505b8154811015612389578382828154811061235f5761235f613acb565b90600052602060002001540361237757809250612389565b8061238181613ae1565b915050612343565b5060001982131561242a57815b81546123a4906001906137a9565b81101561240257816123b7826001613796565b815481106123c7576123c7613acb565b90600052602060002001548282815481106123e4576123e4613acb565b600091825260209091200155806123fa81613ae1565b915050612396565b508080548061241357612413613bf0565b600190038181906000526020600020016000905590555b60405184906001600160a01b038716907f06aa12c0ad65927b4a753d119c26e490d3c4a4e11cb631b43131a709dc1e591790600090a35050505050565b61246f612ad7565b6001600160a01b038084166000908152600360208181526040808420878552825280842054808552600280845294829020825161010081018452815488168152600182015494810194909452948501549095169082015282820154606082015260048301546080820152600583015490929160a084019160ff16908111156124f9576124f9613262565b600381111561250a5761250a613262565b8152600682015460208201526040805160c08101825260078401805492909301929091829060ff16600381111561254357612543613262565b600381111561255457612554613262565b81528154610100810461ffff1660208301526040909101906301000000900460ff16600181111561258757612587613262565b600181111561259857612598613262565b8152602001600182018054806020026020016040519081016040528092919081815260200182805480156125f557602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116125d7575b505050505081526020016002820180548060200260200160405190810160405280929190818152602001828054801561264d57602002820191906000526020600020905b815481526020019060010190808311612639575b50505050508152602001600382015481525050815250509150836001600160a01b031682600001516001600160a01b0316146126ae5760405163069d323f60e21b81526001600160a01b03851660048201526024810184905260440161080e565b9250929050565b6080810151156111815760006201518082608001516126d491906137d2565b6126e1906201518061377f565b600090815260056020908152604082208054600181018255908352912001839055505050565b60008080836226496581018262023ab1600483020590506004600362023ab18302010590910390600062164b09610fa0600185010205905060046105b58202058303601f019250600061098f8460500281612764576127646137bc565b0590506000605061098f83020585039050600b820560301994909401606402929092018301996002600c90940290910392909201975095509350505050565b600081600114806127b45750816003145b806127bf5750816005145b806127ca5750816007145b806127d55750816008145b806127e0575081600a145b806127eb575081600c145b156127f85750601f610934565b816002146128085750601e610934565b61281183612a9b565b61281c57601c61281f565b601d5b60ff169392505050565b60006107b284101561283a57600080fd5b838383600062253d8c60046064600c612854600e88613c06565b61285e9190613c2d565b61286a88611324613c5b565b6128749190613c5b565b61287e9190613c2d565b612889906003613c7b565b6128939190613c2d565b600c806128a1600e88613c06565b6128ab9190613c2d565b6128b690600c613c7b565b6128c1600288613c06565b6128cb9190613c06565b6128d79061016f613c7b565b6128e19190613c2d565b6004600c6128f0600e89613c06565b6128fa9190613c2d565b612906896112c0613c5b565b6129109190613c5b565b61291c906105b5613c7b565b6129269190613c2d565b612932617d4b87613c06565b61293c9190613c5b565b6129469190613c5b565b6129509190613c06565b61295a9190613c06565b98975050505050505050565b6000805b8360600151518110156129c657826001600160a01b03168460600151828151811061299757612997613acb565b60200260200101516001600160a01b0316036129b4579050610934565b806129be81613ae1565b91505061296a565b50604051634947d6f360e11b81526001600160a01b038316600482015260240161080e565b6040516001600160a01b038481166024830152838116604483015260648201839052612a249186918216906323b872dd906084016121e8565b50505050565b600080602060008451602086016000885af180612a4d576040513d6000823e3d81fd5b50506000513d91508115612a65578060011415612a72565b6001600160a01b0384163b155b15612a2457604051635274afe760e01b81526001600160a01b038516600482015260240161080e565b6000612aa8600483613bdc565b158015612abe5750612abb606483613bdc565b15155b806109345750612ad061019083613bdc565b1592915050565b604080516101008101825260008082526020820181905291810182905260608101829052608081018290529060a0820190815260200160008152602001612b4b6040805160c0810182526000808252602082018190529181018290526060808201819052608082015260a081019190915290565b905290565b508054600082559060005260206000209081019061133b9190612c0e565b828054828255906000526020600020908101928215612bc3579160200282015b82811115612bc357825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190612b8e565b50612bcf929150612c0e565b5090565b828054828255906000526020600020908101928215612bc3579160200282015b82811115612bc3578251825591602001919060010190612bf3565b5b80821115612bcf5760008155600101612c0f565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715612c5b57612c5b612c23565b60405290565b60405161010081016001600160401b0381118282101715612c5b57612c5b612c23565b604051606081016001600160401b0381118282101715612c5b57612c5b612c23565b604051601f8201601f191681016001600160401b0381118282101715612cce57612cce612c23565b604052919050565b60006001600160401b03821115612cef57612cef612c23565b50601f01601f191660200190565b60006001600160401b03821115612d1657612d16612c23565b5060051b60200190565b6004811061133b57600080fd5b803561102f81612d20565b61ffff8116811461133b57600080fd5b803561102f81612d38565b6002811061133b57600080fd5b803561102f81612d53565b6001600160a01b038116811461133b57600080fd5b803561102f81612d6b565b600082601f830112612d9c57600080fd5b81356020612db1612dac83612cfd565b612ca6565b82815260059290921b84018101918181019086841115612dd057600080fd5b8286015b84811015612df4578035612de781612d6b565b8352918301918301612dd4565b509695505050505050565b600082601f830112612e1057600080fd5b81356020612e20612dac83612cfd565b82815260059290921b84018101918181019086841115612e3f57600080fd5b8286015b84811015612df45780358352918301918301612e43565b600060c08284031215612e6c57600080fd5b612e74612c39565b9050612e7f82612d2d565b8152612e8d60208301612d48565b6020820152612e9e60408301612d60565b604082015260608201356001600160401b0380821115612ebd57600080fd5b612ec985838601612d8b565b60608401526080840135915080821115612ee257600080fd5b50612eef84828501612dff565b60808301525060a082013560a082015292915050565b600082601f830112612f1657600080fd5b81356020612f26612dac83612cfd565b82815260059290921b84018101918181019086841115612f4557600080fd5b8286015b84811015612df45780356001600160401b03811115612f685760008081fd5b612f768986838b0101612e5a565b845250918301918301612f49565b600080600060608486031215612f9957600080fd5b8335925060208401356001600160401b0380821115612fb757600080fd5b818601915086601f830112612fcb57600080fd5b8135612fd9612dac82612cd6565b818152886020838601011115612fee57600080fd5b816020850160208301376000602083830101528095505050604086013591508082111561301a57600080fd5b5061302786828701612f05565b9150509250925092565b803560ff8116811461102f57600080fd5b60008060006060848603121561305757600080fd5b8335925061306760208501613031565b915060408401356001600160401b0381111561308257600080fd5b61302786828701612e5a565b6020808252825182820181905260009190848201906040850190845b818110156130cf5783516001600160a01b0316835292840192918401916001016130aa565b50909695505050505050565b600080604083850312156130ee57600080fd5b82356130f981612d6b565b9150602083013561310981612d6b565b809150509250929050565b60006020828403121561312657600080fd5b5035919050565b60006020828403121561313f57600080fd5b81356001600160401b038082111561315657600080fd5b90830190610100828603121561316b57600080fd5b613173612c61565b61317c83612d80565b81526020830135602082015261319460408401612d80565b604082015260608301356060820152608083013560808201526131b960a08401612d2d565b60a082015260c083013560c082015260e0830135828111156131da57600080fd5b6131e687828601612e5a565b60e08301525095945050505050565b60006020828403121561320757600080fd5b8135610b0a81612d6b565b60005b8381101561322d578181015183820152602001613215565b50506000910152565b6000815180845261324e816020860160208601613212565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b6004811061133b5761133b613262565b600081518084526020808501945080840160005b838110156132b85781518752958201959082019060010161329c565b509495945050505050565b600060c0830182516132d481613278565b845260208381015161ffff16818601526040840151600281106132f9576132f9613262565b604086015260608481015160c09187019190915280519283905281019160009060e08701905b808310156133485784516001600160a01b0316825293830193600192909201919083019061331f565b506080860151935086810360808801526133628185613288565b935050505060a083015160a08501528091505092915050565b600081518084526020808501808196508360051b8101915082860160005b858110156133c35782840389526133b18483516132c3565b98850198935090840190600101613399565b5091979650505050505050565b8051825260006020820151606060208501526133ef6060850182613236565b905060408301518482036040860152613408828261337b565b95945050505050565b602081526000610b0a60208301846133d0565b6000806040838503121561343757600080fd5b8235915061344760208401613031565b90509250929050565b602081526000610b0a60208301846132c3565b600061010060018060a01b038084511685526020840151602086015280604085015116604086015250606083015160608501526080830151608085015260a08301516134ae81613278565b8060a08601525060c083015160c085015260e08301518160e0860152613408828601826132c3565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561352b57603f19888603018452613519858351613463565b945092850192908501906001016134fd565b5092979650505050505050565b602081526000610b0a6020830184613463565b6000806040838503121561355e57600080fd5b8235915060208301356001600160401b0381111561357b57600080fd5b61358785828601612e5a565b9150509250929050565b600080604083850312156135a457600080fd5b82356135af81612d6b565b946020939093013593505050565b600080600080608085870312156135d357600080fd5b843593506135e360208601613031565b925060408501356135f381612d6b565b9396929550929360600135925050565b6040815260006136166040830185613463565b90508260208301529392505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561352b57603f198886030184526136688583516133d0565b9450928501929085019060010161364c565b8381526060602082015260006136936060830185613236565b82810360408401526136a5818561337b565b9695505050505050565b83815260ff8316602082015260606040820152600061340860608301846132c3565b600082601f8301126136e257600080fd5b815160206136f2612dac83612cfd565b82815260059290921b8401810191818101908684111561371157600080fd5b8286015b84811015612df457805161372881612d6b565b8352918301918301613715565b60006020828403121561374757600080fd5b81516001600160401b0381111561375d57600080fd5b61072a848285016136d1565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761093457610934613769565b8082018082111561093457610934613769565b8181038181111561093457610934613769565b634e487b7160e01b600052601260045260246000fd5b6000826137e1576137e16137bc565b500490565b6000602082840312156137f857600080fd5b81518015158114610b0a57600080fd5b805161102f81612d20565b805161102f81612d38565b805161102f81612d53565b600082601f83011261383a57600080fd5b8151602061384a612dac83612cfd565b82815260059290921b8401810191818101908684111561386957600080fd5b8286015b84811015612df4578051835291830191830161386d565b600060c0828403121561389657600080fd5b61389e612c39565b90506138a982613808565b81526138b760208301613813565b60208201526138c86040830161381e565b604082015260608201516001600160401b03808211156138e757600080fd5b6138f3858386016136d1565b6060840152608084015191508082111561390c57600080fd5b5061391984828501613829565b60808301525060a082015160a082015292915050565b600082601f83011261394057600080fd5b81516020613950612dac83612cfd565b82815260059290921b8401810191818101908684111561396f57600080fd5b8286015b84811015612df45780516001600160401b038111156139925760008081fd5b6139a08986838b0101613884565b845250918301918301613973565b6000606082840312156139c057600080fd5b6139c8612c84565b90508151815260208201516001600160401b03808211156139e857600080fd5b818401915084601f8301126139fc57600080fd5b8151613a0a612dac82612cd6565b818152866020838601011115613a1f57600080fd5b613a30826020830160208701613212565b6020850152506040840151915080821115613a4a57600080fd5b50613a578482850161392f565b60408301525092915050565b600060208284031215613a7557600080fd5b81516001600160401b03811115613a8b57600080fd5b61072a848285016139ae565b600060208284031215613aa957600080fd5b81516001600160401b03811115613abf57600080fd5b61072a84828501613884565b634e487b7160e01b600052603260045260246000fd5b600060018201613af357613af3613769565b5060010190565b600060208284031215613b0c57600080fd5b5051919050565b82815260406020820152600061072a60408301846132c3565b60006020808385031215613b3f57600080fd5b82516001600160401b0380821115613b5657600080fd5b818501915085601f830112613b6a57600080fd5b8151613b78612dac82612cfd565b81815260059190911b83018401908481019088831115613b9757600080fd5b8585015b83811015613bcf57805185811115613bb35760008081fd5b613bc18b89838a01016139ae565b845250918601918601613b9b565b5098975050505050505050565b600082613beb57613beb6137bc565b500690565b634e487b7160e01b600052603160045260246000fd5b8181036000831280158383131683831282161715613c2657613c26613769565b5092915050565b600082613c3c57613c3c6137bc565b600160ff1b821460001984141615613c5657613c56613769565b500590565b80820182811260008312801582168215821617156121b3576121b3613769565b80820260008212600160ff1b84141615613c9757613c97613769565b81810583148215176109345761093461376956fea26469706673582212201e1f8600ddd782aad668af85d9376e39acd043559179cf98e4deae8837fef1f364736f6c63430008140033608060405234801561001057600080fd5b506122be806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638815a04211610097578063d94a862b11610066578063d94a862b14610224578063d9cd741114610239578063da5d24cf14610241578063e11400bb1461024957600080fd5b80638815a042146101e3578063925a06c6146101f6578063965c64f514610209578063d3c576d81461021c57600080fd5b80632ad2a3f3116100d35780632ad2a3f31461017357806331ec7acc14610186578063333160e6146101a7578063693eafff146101c757600080fd5b80630fe155fe1461010557806312d230c91461011a57806317ba8e481461012d57806326cd527414610153575b600080fd5b610118610113366004611c33565b610251565b005b610118610128366004611d04565b610342565b61014061013b366004611d51565b61070e565b6040519081526020015b60405180910390f35b610166610161366004611d51565b61072f565b60405161014a9190611f59565b610118610181366004611c33565b6109d1565b610199610194366004611d51565b610ac9565b60405161014a929190611f73565b6101ba6101b5366004611f94565b610b6e565b60405161014a9190611fc0565b6101d061016d81565b60405161ffff909116815260200161014a565b6101186101f1366004611fd3565b610d77565b610118610204366004611d51565b6110e0565b610118610217366004611f94565b611260565b6101d0600181565b61022c61148c565b60405161014a919061201a565b6101d0603281565b6101d0600c81565b6101d0603581565b600083815260208190526040812054900361028757604051633f2064f160e11b8152600481018490526024015b60405180910390fd5b6000838152602081905260409020600181016102a38482612105565b50826040516102b291906121c5565b6040519081900381209085907f788fc8e6b76de43c4397d24bf2c794c28a4e1467cef2c4339272f0596b77595d90600090a381511561033c576102f96002820160006117b1565b60005b825181101561033a576103288584838151811061031b5761031b6121e1565b6020026020010151610d77565b806103328161220d565b9150506102fc565b505b50505050565b828180606001515160000361036d57604051630734599160e21b81526004810183905260240161027e565b60008160400151600181111561038557610385611dba565b03610487578060800151516000036103b3576040516304766b2160e51b81526004810183905260240161027e565b806080015151816060015151146103e05760405163cd7c557560e01b81526004810183905260240161027e565b60005b8160600151518110156104855760006001600160a01b031682606001518281518110610411576104116121e1565b60200260200101516001600160a01b03160361047357828260600151828151811061043e5761043e6121e1565b6020026020010151604051639a9d90a560e01b815260040161027e9291909182526001600160a01b0316602082015260400190565b8061047d8161220d565b9150506103e3565b505b602081015161ffff1615806104c657506000815160038111156104ac576104ac611dba565b1480156104c6575061016d61ffff16816020015161ffff16115b806104fa57506001815160038111156104e1576104e1611dba565b1480156104fa5750600c61ffff16816020015161ffff16115b8061052e575060028151600381111561051557610515611dba565b14801561052e5750603261ffff16816020015161ffff16115b80610562575060038151600381111561054957610549611dba565b1480156105625750600161ffff16816020015161ffff16115b1561058b57805160208201516040516307e6fb1960e41b815261027e9285929091600401612226565b600085815260208190526040812080549091036105be57604051633f2064f160e11b81526004810187905260240161027e565b600281015460ff8616106105f157604051631d4a70ef60e11b81526004810187905260ff8616602482015260440161027e565b83816002018660ff168154811061060a5761060a6121e1565b6000918252602090912082516004909202018054909190829060ff1916600183600381111561063b5761063b611dba565b02179055506020820151815461ffff9091166101000262ffff0019821681178355604084015191839163ff000000191663ffffff001990911617630100000083600181111561068c5761068c611dba565b0217905550606082015180516106ac9160018401916020909101906117d5565b50608082015180516106c891600284019160209091019061183a565b5060a0919091015160039091015560405160ff86169087907feba2b351955034fb901061ddc7948219acb1cd4737d2a8528c3d548e4664975c90600090a3505050505050565b6001818154811061071e57600080fd5b600091825260209091200154905081565b61075360405180606001604052806000815260200160608152602001606081525090565b600082815260208190526040812054900361078457604051633f2064f160e11b81526004810183905260240161027e565b600082815260208181526040918290208251606081019093528054835260018101805491928401916107b59061207c565b80601f01602080910402602001604051908101604052809291908181526020018280546107e19061207c565b801561082e5780601f106108035761010080835404028352916020019161082e565b820191906000526020600020905b81548152906001019060200180831161081157829003601f168201915b5050505050815260200160028201805480602002602001604051908101604052809291908181526020016000905b828210156109c3576000848152602090206040805160c08101909152600484029091018054829060ff16600381111561089757610897611dba565b60038111156108a8576108a8611dba565b81528154610100810461ffff1660208301526040909101906301000000900460ff1660018111156108db576108db611dba565b60018111156108ec576108ec611dba565b81526020016001820180548060200260200160405190810160405280929190818152602001828054801561094957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161092b575b50505050508152602001600282018054806020026020016040519081016040528092919081815260200182805480156109a157602002820191906000526020600020905b81548152602001906001019080831161098d575b505050505081526020016003820154815250508152602001906001019061085c565b505050915250909392505050565b60008381526020819052604090205415610a01576040516376e7396560e01b81526004810184905260240161027e565b600083815260208190526040902083815560018101610a208482612105565b506001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601849055604051610a639084906121c5565b6040519081900381209085907f15dd767ca87eb2173e33747d1688729e3fa0e0f3fa4e75fc17ddc59b388c5a5f90600090a360005b825181101561033a57610ab78584838151811061031b5761031b6121e1565b80610ac18161220d565b915050610a98565b60006020819052908152604090208054600182018054919291610aeb9061207c565b80601f0160208091040260200160405190810160405280929190818152602001828054610b179061207c565b8015610b645780601f10610b3957610100808354040283529160200191610b64565b820191906000526020600020905b815481529060010190602001808311610b4757829003601f168201915b5050505050905082565b6040805160c0810182526000808252602082018190529181018290526060808201819052608082015260a081019190915260008381526020819052604081208054909103610bd257604051633f2064f160e11b81526004810185905260240161027e565b600281015460ff841610610c0557604051631d4a70ef60e11b81526004810185905260ff8416602482015260440161027e565b806002018360ff1681548110610c1d57610c1d6121e1565b600091825260209091206040805160c081019091526004909202018054829060ff166003811115610c5057610c50611dba565b6003811115610c6157610c61611dba565b81528154610100810461ffff1660208301526040909101906301000000900460ff166001811115610c9457610c94611dba565b6001811115610ca557610ca5611dba565b815260200160018201805480602002602001604051908101604052809291908181526020018280548015610d0257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610ce4575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610d5a57602002820191906000526020600020905b815481526020019060010190808311610d46575b505050505081526020016003820154815250509150505b92915050565b8181806060015151600003610da257604051630734599160e21b81526004810183905260240161027e565b600081604001516001811115610dba57610dba611dba565b03610e8757806080015151600003610de8576040516304766b2160e51b81526004810183905260240161027e565b80608001515181606001515114610e155760405163cd7c557560e01b81526004810183905260240161027e565b60005b816060015151811015610e855760006001600160a01b031682606001518281518110610e4657610e466121e1565b60200260200101516001600160a01b031603610e7357828260600151828151811061043e5761043e6121e1565b80610e7d8161220d565b915050610e18565b505b602081015161ffff161580610ec65750600081516003811115610eac57610eac611dba565b148015610ec6575061016d61ffff16816020015161ffff16115b80610efa5750600181516003811115610ee157610ee1611dba565b148015610efa5750600c61ffff16816020015161ffff16115b80610f2e5750600281516003811115610f1557610f15611dba565b148015610f2e5750603261ffff16816020015161ffff16115b80610f625750600381516003811115610f4957610f49611dba565b148015610f625750600161ffff16816020015161ffff16115b15610f8b57805160208201516040516307e6fb1960e41b815261027e9285929091600401612226565b60008481526020819052604081208054909103610fbe57604051633f2064f160e11b81526004810186905260240161027e565b6002810180546001818101835560009283526020909220865160049092020180548793919291839160ff191690836003811115610ffd57610ffd611dba565b02179055506020820151815461ffff9091166101000262ffff0019821681178355604084015191839163ff000000191663ffffff001990911617630100000083600181111561104e5761104e611dba565b02179055506060820151805161106e9160018401916020909101906117d5565b506080820151805161108a91600284019160209091019061183a565b5060a0919091015160039091015560028101546110a99060019061224c565b60ff16857f4fab3c19251c63bff8b2993b4b673e4e8e69e66e2573971b3d623630f2a2724f60405160405180910390a35050505050565b600081815260208190526040812054900361111157604051633f2064f160e11b81526004810182905260240161027e565b6000818152602081905260408120818155906111306001830182611875565b61113e6002830160006117b1565b50506001546000199060005b81811015611190578360018281548110611166576111666121e1565b90600052602060002001540361117e57809250611190565b806111888161220d565b91505061114a565b5060001982131561123057815b6111a860018361224c565b8110156112075760016111bb828261225f565b815481106111cb576111cb6121e1565b9060005260206000200154600182815481106111e9576111e96121e1565b600091825260209091200155806111ff8161220d565b91505061119d565b50600180548061121957611219612272565b600190038181906000526020600020016000905590555b60405183907f3411f488b319ea4129f42cf93609e1822167b8b992e644385c9cd921f6f2cc6f90600090a2505050565b6000828152602081905260408120805490910361129357604051633f2064f160e11b81526004810184905260240161027e565b600281015460ff8316106112c657604051631d4a70ef60e11b81526004810184905260ff8316602482015260440161027e565b60ff82165b60028201546112dc9060019061224c565b8110156113fa57600282016112f282600161225f565b81548110611302576113026121e1565b9060005260206000209060040201826002018281548110611325576113256121e1565b6000918252602090912082546004909202018054909160ff1690829060ff1916600183600381111561135957611359611dba565b02179055508154815461ffff610100928390041690910262ffff0019821681178355835460ff6301000000918290041692849263ff000000191663ffffff001990911617908360018111156113b0576113b0611dba565b0217905550600182810180546113c992840191906118af565b50600282810180546113de92840191906118af565b50600391820154910155806113f28161220d565b9150506112cb565b508060020180548061140e5761140e612272565b600082815260208120600460001990930192830201805463ffffffff191681559061143c60018301826118ef565b61144a6002830160006118ef565b6003820160009055505090558160ff16837ff4b7896752f6bbafb0f6911d8a3c2b5f939e8bd3f44905fda87bc21c6cb6a54b60405160405180910390a3505050565b60015460609060008167ffffffffffffffff8111156114ad576114ad611962565b60405190808252806020026020018201604052801561150257816020015b6114ef60405180606001604052806000815260200160608152602001606081525090565b8152602001906001900390816114cb5790505b50905060005b828110156117aa5760008060018381548110611526576115266121e1565b90600052602060002001548152602001908152602001600020604051806060016040529081600082015481526020016001820180546115649061207c565b80601f01602080910402602001604051908101604052809291908181526020018280546115909061207c565b80156115dd5780601f106115b2576101008083540402835291602001916115dd565b820191906000526020600020905b8154815290600101906020018083116115c057829003601f168201915b5050505050815260200160028201805480602002602001604051908101604052809291908181526020016000905b82821015611772576000848152602090206040805160c08101909152600484029091018054829060ff16600381111561164657611646611dba565b600381111561165757611657611dba565b81528154610100810461ffff1660208301526040909101906301000000900460ff16600181111561168a5761168a611dba565b600181111561169b5761169b611dba565b8152602001600182018054806020026020016040519081016040528092919081815260200182805480156116f857602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116116da575b505050505081526020016002820180548060200260200160405190810160405280929190818152602001828054801561175057602002820191906000526020600020905b81548152602001906001019080831161173c575b505050505081526020016003820154815250508152602001906001019061160b565b505050508152505082828151811061178c5761178c6121e1565b602002602001018190525080806117a29061220d565b915050611508565b5092915050565b50805460008255600402906000526020600020908101906117d2919061190d565b50565b82805482825590600052602060002090810192821561182a579160200282015b8281111561182a57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906117f5565b5061183692915061194d565b5090565b82805482825590600052602060002090810192821561182a579160200282015b8281111561182a57825182559160200191906001019061185a565b5080546118819061207c565b6000825580601f10611891575050565b601f0160209004906000526020600020908101906117d2919061194d565b82805482825590600052602060002090810192821561182a5760005260206000209182015b8281111561182a5782548255916001019190600101906118d4565b50805460008255906000526020600020908101906117d2919061194d565b8082111561183657805463ffffffff19168155600061192f60018301826118ef565b61193d6002830160006118ef565b506000600382015560040161190d565b5b80821115611836576000815560010161194e565b634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561199b5761199b611962565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156119ca576119ca611962565b604052919050565b600067ffffffffffffffff8211156119ec576119ec611962565b5060051b60200190565b803560048110611a0557600080fd5b919050565b803561ffff81168114611a0557600080fd5b803560028110611a0557600080fd5b600082601f830112611a3c57600080fd5b81356020611a51611a4c836119d2565b6119a1565b82815260059290921b84018101918181019086841115611a7057600080fd5b8286015b84811015611aa15780356001600160a01b0381168114611a945760008081fd5b8352918301918301611a74565b509695505050505050565b600082601f830112611abd57600080fd5b81356020611acd611a4c836119d2565b82815260059290921b84018101918181019086841115611aec57600080fd5b8286015b84811015611aa15780358352918301918301611af0565b600060c08284031215611b1957600080fd5b611b21611978565b9050611b2c826119f6565b8152611b3a60208301611a0a565b6020820152611b4b60408301611a1c565b6040820152606082013567ffffffffffffffff80821115611b6b57600080fd5b611b7785838601611a2b565b60608401526080840135915080821115611b9057600080fd5b50611b9d84828501611aac565b60808301525060a082013560a082015292915050565b600082601f830112611bc457600080fd5b81356020611bd4611a4c836119d2565b82815260059290921b84018101918181019086841115611bf357600080fd5b8286015b84811015611aa157803567ffffffffffffffff811115611c175760008081fd5b611c258986838b0101611b07565b845250918301918301611bf7565b600080600060608486031215611c4857600080fd5b8335925060208085013567ffffffffffffffff80821115611c6857600080fd5b818701915087601f830112611c7c57600080fd5b813581811115611c8e57611c8e611962565b611ca0601f8201601f191685016119a1565b8181528985838601011115611cb457600080fd5b818585018683013760009181019094015291935060408601359180831115611cdb57600080fd5b5050611ce986828701611bb3565b9150509250925092565b803560ff81168114611a0557600080fd5b600080600060608486031215611d1957600080fd5b83359250611d2960208501611cf3565b9150604084013567ffffffffffffffff811115611d4557600080fd5b611ce986828701611b07565b600060208284031215611d6357600080fd5b5035919050565b60005b83811015611d85578181015183820152602001611d6d565b50506000910152565b60008151808452611da6816020860160208601611d6a565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b60048110611de057611de0611dba565b9052565b600081518084526020808501945080840160005b83811015611e1457815187529582019590820190600101611df8565b509495945050505050565b600060c08301611e30848451611dd0565b602061ffff818501511681860152604084015160028110611e5357611e53611dba565b604086015260608481015160c09187019190915280519283905281019160009060e08701905b80831015611ea25784516001600160a01b03168252938301936001929092019190830190611e79565b50608086015193508681036080880152611ebc8185611de4565b935050505060a083015160a08501528091505092915050565b805182526000602080830151606082860152611ef46060860182611d8e565b9050604084015185820360408701528181518084528484019150848160051b850101858401935060005b82811015611f4c57601f19868303018452611f3a828651611e1f565b94870194938701939150600101611f1e565b5098975050505050505050565b602081526000611f6c6020830184611ed5565b9392505050565b828152604060208201526000611f8c6040830184611d8e565b949350505050565b60008060408385031215611fa757600080fd5b82359150611fb760208401611cf3565b90509250929050565b602081526000611f6c6020830184611e1f565b60008060408385031215611fe657600080fd5b82359150602083013567ffffffffffffffff81111561200457600080fd5b61201085828601611b07565b9150509250929050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561206f57603f1988860301845261205d858351611ed5565b94509285019290850190600101612041565b5092979650505050505050565b600181811c9082168061209057607f821691505b6020821081036120b057634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561210057600081815260208120601f850160051c810160208610156120dd5750805b601f850160051c820191505b818110156120fc578281556001016120e9565b5050505b505050565b815167ffffffffffffffff81111561211f5761211f611962565b6121338161212d845461207c565b846120b6565b602080601f83116001811461216857600084156121505750858301515b600019600386901b1c1916600185901b1785556120fc565b600085815260208120601f198616915b8281101561219757888601518255948401946001909101908401612178565b50858210156121b55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082516121d7818460208701611d6a565b9190910192915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161221f5761221f6121f7565b5060010190565b8381526060810161223a6020830185611dd0565b61ffff83166040830152949350505050565b81810381811115610d7157610d716121f7565b80820180821115610d7157610d716121f7565b634e487b7160e01b600052603160045260246000fdfea264697066735822122018b3a352b5c478e412cad495ff3b65900b8c181fac0d14e9bea734cb03771bea64736f6c63430008140033608060405234801561001057600080fd5b5061083f806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806326aa101f1161005b57806326aa101f146100d657806382d2f5b114610118578063bdf5dbb21461012b578063ffdda9ee1461013e57600080fd5b806314cbd9931461008257806316345f18146100a0578063166ee767146100c1575b600080fd5b61008a610151565b60405161009791906105e0565b60405180910390f35b6100b36100ae366004610649565b6101b3565b604051908152602001610097565b6100d46100cf36600461066b565b610244565b005b6101086100e4366004610649565b6001600160a01b031660009081526001602081905260409091205460ff1615151490565b6040519015158152602001610097565b6100d461012636600461066b565b61032f565b6100d4610139366004610649565b6103a4565b6100b361014c36600461069e565b610533565b606060028054806020026020016040519081016040528092919081815260200182805480156101a957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161018b575b5050505050905090565b6000806101bf8361057a565b90506000816001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610201573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022591906106e2565b505050915050806402540be40061023c9190610748565b949350505050565b6001600160a01b03821660009081526001602052604090205460ff161561028e57604051631c01a6cf60e31b81526001600160a01b03831660048201526024015b60405180910390fd5b6040805180820182526001600160a01b0393841680825292841660208083019182526000858152808252848120935184549088166001600160a01b03199182161785559251600194850180549190981690841617909655829052918420805460ff1916821790556002805491820181559093527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace9092018054909216179055565b6001600160a01b03821660009081526001602052604090205460ff1661037357604051631171f37160e11b81526001600160a01b0383166004820152602401610285565b6001600160a01b03918216600090815260208190526040902060010180546001600160a01b03191691909216179055565b6001600160a01b03811660009081526001602052604090205460ff166103e857604051631171f37160e11b81526001600160a01b0382166004820152602401610285565b6001600160a01b03811660009081526020818152604080832080546001600160a01b031990811682556001918201805490911690559091528120805460ff191690555b60025481101561052f57816001600160a01b03166002828154811061045257610452610778565b6000918252602090912001546001600160a01b03160361051d576002805461047c9060019061078e565b8154811061048c5761048c610778565b600091825260209091200154600280546001600160a01b0390921691839081106104b8576104b8610778565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060028054806104f7576104f76107a1565b600082815260209020810160001990810180546001600160a01b03191690550190555050565b80610527816107b7565b91505061042b565b5050565b60008061053f846101b3565b905080600003610553576000915050610574565b8061056684670de0b6b3a76400006107d0565b61057091906107e7565b9150505b92915050565b6001600160a01b03811660009081526001602052604081205460ff166105be57604051631171f37160e11b81526001600160a01b0383166004820152602401610285565b506001600160a01b039081166000908152602081905260409020600101541690565b6020808252825182820181905260009190848201906040850190845b818110156106215783516001600160a01b0316835292840192918401916001016105fc565b50909695505050505050565b80356001600160a01b038116811461064457600080fd5b919050565b60006020828403121561065b57600080fd5b6106648261062d565b9392505050565b6000806040838503121561067e57600080fd5b6106878361062d565b91506106956020840161062d565b90509250929050565b600080604083850312156106b157600080fd5b6106ba8361062d565b946020939093013593505050565b805169ffffffffffffffffffff8116811461064457600080fd5b600080600080600060a086880312156106fa57600080fd5b610703866106c8565b9450602086015193506040860151925060608601519150610726608087016106c8565b90509295509295909350565b634e487b7160e01b600052601160045260246000fd5b80820260008212600160ff1b8414161561076457610764610732565b818105831482151761057457610574610732565b634e487b7160e01b600052603260045260246000fd5b8181038181111561057457610574610732565b634e487b7160e01b600052603160045260246000fd5b6000600182016107c9576107c9610732565b5060010190565b808202811582820484141761057457610574610732565b60008261080457634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220bd58444fafb00ceba30d0b66612fed252cf08177f11d86ba52045c6aa92f6d5e64736f6c63430008140033",
        "sourceMap": "1852:25147:42:-:0;;;5240:467;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5314:10;;1269:95:25;;1322:31;;-1:-1:-1;;;1322:31:25;;1350:1;1322:31;;;515:51:50;488:18;;1322:31:25;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;;;;;;5340:30:42;::::1;5336:130;;5393:62;;-1:-1:-1::0;;;5393:62:42::1;;;;;;;;;;;5336:130;5506:31;;;;;:::i;:::-;;;;;;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;;;;;;5476:61:42::1;;::::0;5574:28:::1;::::0;::::1;::::0;::::1;:::i;:::-;;;;;;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;;;;;;5547:55:42;;::::1;;::::0;5612:36;;;::::1;;::::0;5658:42:::1;::::0;1852:25147;;2912:187:25;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:25;;;-1:-1:-1;;;;;;3020:17:25;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;1852:25147:42:-;;;;;;;;:::o;:::-;;;;;;;;:::o;14:350:50:-;92:6;100;153:2;141:9;132:7;128:23;124:32;121:52;;;169:1;166;159:12;121:52;195:16;;-1:-1:-1;;;;;240:31:50;;230:42;;220:70;;286:1;283;276:12;220:70;354:2;339:18;;;;333:25;309:5;;333:25;;-1:-1:-1;;;14:350:50:o;369:203::-;1852:25147:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106101f05760003560e01c806382d2f5b11161010f578063bdf5dbb2116100a2578063d94a862b11610071578063d94a862b14610489578063e6f0375d1461049e578063f2fde38b146104a6578063ffdda9ee146104b957600080fd5b8063bdf5dbb21461041c578063cc5d19c11461042f578063cea9830314610442578063d916b8f61461046857600080fd5b80638f32d59b116100de5780638f32d59b146103d0578063925a06c6146103e3578063965c64f5146103f6578063ad0b27fb1461040957600080fd5b806382d2f5b11461038a5780638815a0421461039d5780638a0fa52a146103b05780638da5cb5b146103bf57600080fd5b806326cd5274116101875780634023004611610156578063402300461461032057806348c54b9d14610340578063571959e014610348578063715018a61461038257600080fd5b806326cd5274146102b85780632ad2a3f3146102d8578063333160e6146102eb5780633b47a9ac1461030b57600080fd5b8063181f914b116101c3578063181f914b1461024e578063217786ef1461026f57806324210bf01461028257806326aa101f1461029557600080fd5b80630fe155fe146101f557806312d230c91461020a57806314cbd9931461021d578063166ee7671461023b575b600080fd5b610208610203366004612f84565b6104cc565b005b610208610218366004613042565b61055b565b6102256105b3565b604051610232919061308e565b60405180910390f35b6102086102493660046130db565b610640565b61026161025c366004613114565b6106d0565b604051908152602001610232565b61026161027d36600461312d565b610732565b610208610290366004613114565b610817565b6102a86102a33660046131f5565b6108a5565b6040519015158152602001610232565b6102cb6102c6366004613114565b61093a565b6040516102329190613411565b6102086102e6366004612f84565b6109eb565b6102fe6102f9366004613424565b610a43565b6040516102329190613450565b610313610b11565b60405161023291906134d6565b61033361032e366004613114565b610e12565b6040516102329190613538565b610208611034565b7f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b039091168152602001610232565b610208611185565b6102086103983660046130db565b611199565b6102086103ab36600461354b565b6111f7565b610261670de0b6b3a764000081565b6000546001600160a01b031661036a565b6000546001600160a01b031633146102a8565b6102086103f1366004613114565b61124d565b610208610404366004613424565b6112d3565b610208610417366004613114565b611331565b61020861042a3660046131f5565b61133e565b61033361043d366004613591565b611394565b7f0000000000000000000000000000000000000000000000000000000000000000610261565b61047b6104763660046135bd565b611409565b604051610232929190613603565b61049161186b565b6040516102329190613625565b6102086118f3565b6102086104b43660046131f5565b6119f9565b6102616104c7366004613591565b611a34565b6104d4611acd565b6040516307f0aaff60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690630fe155fe906105249086908690869060040161367a565b600060405180830381600087803b15801561053e57600080fd5b505af1158015610552573d6000803e3d6000fd5b50505050505050565b610563611acd565b6040516312d230c960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906312d230c990610524908690869086906004016136af565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166314cbd9936040518163ffffffff1660e01b8152600401600060405180830381865afa158015610613573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261063b9190810190613735565b905090565b610648611acd565b60405163166ee76760e01b81526001600160a01b03838116600483015282811660248301527f0000000000000000000000000000000000000000000000000000000000000000169063166ee767906044015b600060405180830381600087803b1580156106b457600080fd5b505af11580156106c8573d6000803e3d6000fd5b505050505050565b6000806106fd7f00000000000000000000000000000000000000000000000000000000000000008461377f565b90506000670de0b6b3a764000060016107168285613796565b61072091906137a9565b61072a91906137d2565b949350505050565b6000808260e001519050600080846080015111610753578360600151610759565b83608001515b905060008251600381111561077057610770613262565b036107875761072a81836020015161ffff16611afa565b60018251600381111561079c5761079c613262565b036107b35761072a81836020015161ffff16611b22565b6002825160038111156107c8576107c8613262565b036107df5761072a81836020015161ffff16611bf9565b815160038111156107f2576107f2613262565b60405163db84f3ef60e01b815260040161080e91815260200190565b60405180910390fd5b61081f611acd565b600061082a82610e12565b905060018160a00151600381111561084457610844613262565b14158015610868575060008160a00151600381111561086557610865613262565b14155b806108765750428160800151115b156108965760405162b33a9d60e41b81526004810183905260240161080e565b6108a08282611c2d565b505050565b6040516326aa101f60e01b81526001600160a01b0382811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906326aa101f90602401602060405180830381865afa158015610910573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093491906137e6565b92915050565b61095e60405180606001604052806000815260200160608152602001606081525090565b6040516309b3549d60e21b8152600481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906326cd527490602401600060405180830381865afa1580156109c3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109349190810190613a63565b6109f3611acd565b604051632ad2a3f360e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632ad2a3f3906105249086908690869060040161367a565b6040805160c0810182526000808252602082018190529181018290526060808201819052608082015260a0810191909152604051631998b07360e11b81526004810184905260ff831660248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063333160e690604401600060405180830381865afa158015610ae2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b0a9190810190613a97565b9392505050565b336000908152600460209081526040808320805482518185028101850190935280835260609493830182828015610b6757602002820191906000526020600020905b815481526020019060010190808311610b53575b505050505090506000815190506000816001600160401b03811115610b8e57610b8e612c23565b604051908082528060200260200182016040528015610bc757816020015b610bb4612ad7565b815260200190600190039081610bac5790505b50905060005b82811015610e0a5760026000858381518110610beb57610beb613acb565b602090810291909101810151825281810192909252604090810160002081516101008101835281546001600160a01b039081168252600183015494820194909452600282015490931691830191909152600380820154606084015260048201546080840152600582015460a084019160ff90911690811115610c6f57610c6f613262565b6003811115610c8057610c80613262565b8152600682015460208201526040805160c08101825260078401805492909301929091829060ff166003811115610cb957610cb9613262565b6003811115610cca57610cca613262565b81528154610100810461ffff1660208301526040909101906301000000900460ff166001811115610cfd57610cfd613262565b6001811115610d0e57610d0e613262565b815260200160018201805480602002602001604051908101604052809291908181526020018280548015610d6b57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610d4d575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610dc357602002820191906000526020600020905b815481526020019060010190808311610daf575b5050505050815260200160038201548152505081525050828281518110610dec57610dec613acb565b60200260200101819052508080610e0290613ae1565b915050610bcd565b509392505050565b610e1a612ad7565b610e22611acd565b600082815260026020526040902080546001600160a01b0316610e5b57604051631c6efd4b60e01b81526004810184905260240161080e565b604080516101008101825282546001600160a01b03908116825260018401546020830152600284015416918101919091526003808301546060830152600483015460808301526005830154839160a084019160ff1690811115610ec057610ec0613262565b6003811115610ed157610ed1613262565b8152600682015460208201526040805160c08101825260078401805492909301929091829060ff166003811115610f0a57610f0a613262565b6003811115610f1b57610f1b613262565b81528154610100810461ffff1660208301526040909101906301000000900460ff166001811115610f4e57610f4e613262565b6001811115610f5f57610f5f613262565b815260200160018201805480602002602001604051908101604052809291908181526020018280548015610fbc57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610f9e575b505050505081526020016002820180548060200260200160405190810160405280929190818152602001828054801561101457602002820191906000526020600020905b815481526020019060010190808311611000575b50505050508152602001600382015481525050815250509150505b919050565b61103c611acd565b6000600680548060200260200160405190810160405280929190818152602001828054801561109457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611076575b505083519394506000925050505b818110156111745760008382815181106110be576110be613acb565b60209081029190910101516040516370a0823160e01b81523060048201529091506000906001600160a01b038316906370a0823190602401602060405180830381865afa158015611113573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111379190613afa565b905061115f61114e6000546001600160a01b031690565b6001600160a01b03841690836121bb565b5050808061116c90613ae1565b9150506110a2565b5061118160066000612b50565b5050565b61118d611acd565b611197600061221a565b565b6111a1611acd565b6040516382d2f5b160e01b81526001600160a01b03838116600483015282811660248301527f000000000000000000000000000000000000000000000000000000000000000016906382d2f5b19060440161069a565b6111ff611acd565b60405163440ad02160e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638815a0429061069a9085908590600401613b13565b611255611acd565b60405163492d036360e11b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063925a06c6906024015b600060405180830381600087803b1580156112b857600080fd5b505af11580156112cc573d6000803e3d6000fd5b5050505050565b6112db611acd565b60405163965c64f560e01b81526004810183905260ff821660248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063965c64f59060440161069a565b61133b338261226a565b50565b611346611acd565b604051635efaedd960e11b81526001600160a01b0382811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063bdf5dbb29060240161129e565b61139c612ad7565b60006113a88484612467565b5080519091506001600160a01b031615806113d95750836001600160a01b031681600001516001600160a01b031614155b15610b0a5760405163069d323f60e21b81526001600160a01b03851660048201526024810184905260440161080e565b611411612ad7565b600085158061142757506001600160a01b038416155b156114455760405163f1e1fdc960e01b815260040160405180910390fd5b3360009081526003602090815260408083208984528252808320548084526002909252909120600101548790036114985760405163f0783edf60e01b81523360048201526024810188905260440161080e565b604051631998b07360e11b81526004810188905260ff871660248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063333160e690604401600060405180830381865afa158015611509573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526115319190810190613a97565b90506000428611611543576001611546565b60005b905060008082600381111561155d5761155d613262565b1461156957600061156b565b865b90506000604051806101000160405280336001600160a01b031681526020018c81526020018a6001600160a01b031681526020018981526020018381526020018460038111156115bd576115bd613262565b815260006020820181905260409091018690526001805492935082916115e283613ae1565b9091555050600081815260026020818152604092839020855181546001600160a01b03199081166001600160a01b0392831617835592870151600180840191909155948701519382018054909316931692909217905560608401516003808301919091556080850151600483015560a085015160058301805487959293919260ff1990911691849081111561167957611679613262565b021790555060c0820151600682015560e08201518051600783018054909190829060ff191660018360038111156116b2576116b2613262565b02179055506020820151815461ffff9091166101000262ffff0019821681178355604084015191839163ff000000191663ffffff001990911617630100000083600181111561170357611703613262565b021790555060608201518051611723916001840191602090910190612b6e565b506080820151805161173f916002840191602090910190612bd3565b5060a0820151816003015550509050508060036000336001600160a01b03166001600160a01b0316815260200190815260200160002060008e81526020019081526020016000208190555060046000336001600160a01b03166001600160a01b031681526020019081526020016000208190806001815401808255809150506001900390600052602060002001600090919091909150558b8a6001600160a01b0316336001600160a01b03167f73bd74e1ff025836c9fc129762ae94e04f2b3db6662a39172d6193a49b1a969a8860405161181a9190613450565b60405180910390a46000600185600381111561183857611838613262565b0361184e576118478284611c2d565b9050611858565b61185882846126b5565b919c919b50909950505050505050505050565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d94a862b6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156118cb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261063b9190810190613b2c565b6118fb611acd565b600061190a62015180426137d2565b611917906201518061377f565b60008181526005602052604081209192505b81548110156108a057600082828154811061194657611946613acb565b6000918252602080832090910154808352600290915260409091209091506001600582015460ff16600381111561197f5761197f613262565b14806119a357506000600582015460ff1660038111156119a1576119a1613262565b145b80156119b3575042816004015411155b156119e45760405182907fbb65ea9884c06faec2c4686a4a9e25ccc52e1ad8e5b6bb08354f8207013090e090600090a25b505080806119f190613ae1565b915050611929565b611a01611acd565b6001600160a01b038116611a2b57604051631e4fbdf760e01b81526000600482015260240161080e565b61133b8161221a565b604051600162112b0960e11b031981526001600160a01b038381166004830152602482018390526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ffdda9ee90604401602060405180830381865afa158015611aa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0a9190613afa565b6000546001600160a01b031633146111975760405163118cdaa760e01b815233600482015260240161080e565b6000611b09620151808361377f565b611b139084613796565b90508281101561093457600080fd5b6000808080611b3c611b3762015180886137d2565b612707565b91945092509050611b4d8583613796565b9150600c611b5c6001846137a9565b611b6691906137d2565b611b709084613796565b9250600c611b7f6001846137a9565b611b899190613bdc565b611b94906001613796565b91506000611ba284846127a3565b905080821115611bb0578091505b611bbd6201518088613bdc565b62015180611bcc868686612829565b611bd6919061377f565b611be09190613796565b945086851015611bef57600080fd5b5050505092915050565b6000808080611c0e611b3762015180886137d2565b91945092509050611c1f8584613796565b92506000611ba284846127a3565b6000808260e0015190506000611c47828560400151612966565b6000935090508282604001516001811115611c6457611c64613262565b03611c8e5781608001518181518110611c7f57611c7f613acb565b60200260200101519250611da2565b600182604001516001811115611ca657611ca6613262565b03611da25760408085015160a08401519151600162112b0960e11b031981526001600160a01b03918216600482015260248101929092527f0000000000000000000000000000000000000000000000000000000000000000169063ffdda9ee90604401602060405180830381865afa158015611d26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d4a9190613afa565b925060008260a00151118015611d5e575082155b15611da2576020840151845160408087015190516303be8a9f60e11b815260048101939093526001600160a01b03918216602484015216604482015260640161080e565b611dab84610732565b608085015260c08401805190611dc082613ae1565b905250600085815260026020818152604092839020875181546001600160a01b03199081166001600160a01b0392831617835592890151600180840191909155948901519382018054909316931692909217905560608601516003808301919091556080870151600483015560a087015160058301805489959293919260ff19909116918490811115611e5557611e55613262565b021790555060c0820151600682015560e08201518051600783018054909190829060ff19166001836003811115611e8e57611e8e613262565b02179055506020820151815461ffff9091166101000262ffff0019821681178355604084015191839163ff000000191663ffffff0019909116176301000000836001811115611edf57611edf613262565b021790555060608201518051611eff916001840191602090910190612b6e565b5060808201518051611f1b916002840191602090910190612bd3565b5060a082015181600301555050905050611f3585856126b5565b82156121b35760408481015185519151636eb1769f60e11b81526001600160a01b03928316600482015230602482015290916000919083169063dd62ed3e90604401602060405180830381865afa158015611f94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fb89190613afa565b905084811015611fe95785516040516317e3a89960e21b81526001600160a01b03909116600482015260240161080e565b60408681018051600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0180546001600160a01b0319166001600160a01b03928316179055905160c08901518951935189815291831693909216907f7c12298d92f5da73db22fb176093bdf79566023af218c560cfd5235cb08af64f9060200160405180910390a48551612097906001600160a01b0384169030886129eb565b60007f00000000000000000000000000000000000000000000000000000000000000001315611bef5760006120cb866106d0565b60405163095ea7b360e01b8152306004820152602481018290529091506000906001600160a01b0385169063095ea7b3906044016020604051808303816000875af115801561211e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061214291906137e6565b905080612179576040808901519051638b3fca9b60e01b81523060048201526001600160a01b03909116602482015260440161080e565b6121ae6001600160a01b038516307f0000000000000000000000000000000000000000000000000000000000000000856129eb565b505050505b505092915050565b6040516001600160a01b038381166024830152604482018390526108a091859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612a2a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006122768383612467565b6001600160a01b03851660009081526003602081815260408084208885528252808420849055848452600291829052832080546001600160a01b031990811682556001820185905591810180549092169091559081018290556004810182905560058101805460ff191690556006810182905560078101805463ffffffff191681559294509250908161230c6008850182612b50565b61231a600283016000612b50565b5060006003919091018190556001600160a01b0386168152600460205260408120600019935091505b8154811015612389578382828154811061235f5761235f613acb565b90600052602060002001540361237757809250612389565b8061238181613ae1565b915050612343565b5060001982131561242a57815b81546123a4906001906137a9565b81101561240257816123b7826001613796565b815481106123c7576123c7613acb565b90600052602060002001548282815481106123e4576123e4613acb565b600091825260209091200155806123fa81613ae1565b915050612396565b508080548061241357612413613bf0565b600190038181906000526020600020016000905590555b60405184906001600160a01b038716907f06aa12c0ad65927b4a753d119c26e490d3c4a4e11cb631b43131a709dc1e591790600090a35050505050565b61246f612ad7565b6001600160a01b038084166000908152600360208181526040808420878552825280842054808552600280845294829020825161010081018452815488168152600182015494810194909452948501549095169082015282820154606082015260048301546080820152600583015490929160a084019160ff16908111156124f9576124f9613262565b600381111561250a5761250a613262565b8152600682015460208201526040805160c08101825260078401805492909301929091829060ff16600381111561254357612543613262565b600381111561255457612554613262565b81528154610100810461ffff1660208301526040909101906301000000900460ff16600181111561258757612587613262565b600181111561259857612598613262565b8152602001600182018054806020026020016040519081016040528092919081815260200182805480156125f557602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116125d7575b505050505081526020016002820180548060200260200160405190810160405280929190818152602001828054801561264d57602002820191906000526020600020905b815481526020019060010190808311612639575b50505050508152602001600382015481525050815250509150836001600160a01b031682600001516001600160a01b0316146126ae5760405163069d323f60e21b81526001600160a01b03851660048201526024810184905260440161080e565b9250929050565b6080810151156111815760006201518082608001516126d491906137d2565b6126e1906201518061377f565b600090815260056020908152604082208054600181018255908352912001839055505050565b60008080836226496581018262023ab1600483020590506004600362023ab18302010590910390600062164b09610fa0600185010205905060046105b58202058303601f019250600061098f8460500281612764576127646137bc565b0590506000605061098f83020585039050600b820560301994909401606402929092018301996002600c90940290910392909201975095509350505050565b600081600114806127b45750816003145b806127bf5750816005145b806127ca5750816007145b806127d55750816008145b806127e0575081600a145b806127eb575081600c145b156127f85750601f610934565b816002146128085750601e610934565b61281183612a9b565b61281c57601c61281f565b601d5b60ff169392505050565b60006107b284101561283a57600080fd5b838383600062253d8c60046064600c612854600e88613c06565b61285e9190613c2d565b61286a88611324613c5b565b6128749190613c5b565b61287e9190613c2d565b612889906003613c7b565b6128939190613c2d565b600c806128a1600e88613c06565b6128ab9190613c2d565b6128b690600c613c7b565b6128c1600288613c06565b6128cb9190613c06565b6128d79061016f613c7b565b6128e19190613c2d565b6004600c6128f0600e89613c06565b6128fa9190613c2d565b612906896112c0613c5b565b6129109190613c5b565b61291c906105b5613c7b565b6129269190613c2d565b612932617d4b87613c06565b61293c9190613c5b565b6129469190613c5b565b6129509190613c06565b61295a9190613c06565b98975050505050505050565b6000805b8360600151518110156129c657826001600160a01b03168460600151828151811061299757612997613acb565b60200260200101516001600160a01b0316036129b4579050610934565b806129be81613ae1565b91505061296a565b50604051634947d6f360e11b81526001600160a01b038316600482015260240161080e565b6040516001600160a01b038481166024830152838116604483015260648201839052612a249186918216906323b872dd906084016121e8565b50505050565b600080602060008451602086016000885af180612a4d576040513d6000823e3d81fd5b50506000513d91508115612a65578060011415612a72565b6001600160a01b0384163b155b15612a2457604051635274afe760e01b81526001600160a01b038516600482015260240161080e565b6000612aa8600483613bdc565b158015612abe5750612abb606483613bdc565b15155b806109345750612ad061019083613bdc565b1592915050565b604080516101008101825260008082526020820181905291810182905260608101829052608081018290529060a0820190815260200160008152602001612b4b6040805160c0810182526000808252602082018190529181018290526060808201819052608082015260a081019190915290565b905290565b508054600082559060005260206000209081019061133b9190612c0e565b828054828255906000526020600020908101928215612bc3579160200282015b82811115612bc357825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190612b8e565b50612bcf929150612c0e565b5090565b828054828255906000526020600020908101928215612bc3579160200282015b82811115612bc3578251825591602001919060010190612bf3565b5b80821115612bcf5760008155600101612c0f565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715612c5b57612c5b612c23565b60405290565b60405161010081016001600160401b0381118282101715612c5b57612c5b612c23565b604051606081016001600160401b0381118282101715612c5b57612c5b612c23565b604051601f8201601f191681016001600160401b0381118282101715612cce57612cce612c23565b604052919050565b60006001600160401b03821115612cef57612cef612c23565b50601f01601f191660200190565b60006001600160401b03821115612d1657612d16612c23565b5060051b60200190565b6004811061133b57600080fd5b803561102f81612d20565b61ffff8116811461133b57600080fd5b803561102f81612d38565b6002811061133b57600080fd5b803561102f81612d53565b6001600160a01b038116811461133b57600080fd5b803561102f81612d6b565b600082601f830112612d9c57600080fd5b81356020612db1612dac83612cfd565b612ca6565b82815260059290921b84018101918181019086841115612dd057600080fd5b8286015b84811015612df4578035612de781612d6b565b8352918301918301612dd4565b509695505050505050565b600082601f830112612e1057600080fd5b81356020612e20612dac83612cfd565b82815260059290921b84018101918181019086841115612e3f57600080fd5b8286015b84811015612df45780358352918301918301612e43565b600060c08284031215612e6c57600080fd5b612e74612c39565b9050612e7f82612d2d565b8152612e8d60208301612d48565b6020820152612e9e60408301612d60565b604082015260608201356001600160401b0380821115612ebd57600080fd5b612ec985838601612d8b565b60608401526080840135915080821115612ee257600080fd5b50612eef84828501612dff565b60808301525060a082013560a082015292915050565b600082601f830112612f1657600080fd5b81356020612f26612dac83612cfd565b82815260059290921b84018101918181019086841115612f4557600080fd5b8286015b84811015612df45780356001600160401b03811115612f685760008081fd5b612f768986838b0101612e5a565b845250918301918301612f49565b600080600060608486031215612f9957600080fd5b8335925060208401356001600160401b0380821115612fb757600080fd5b818601915086601f830112612fcb57600080fd5b8135612fd9612dac82612cd6565b818152886020838601011115612fee57600080fd5b816020850160208301376000602083830101528095505050604086013591508082111561301a57600080fd5b5061302786828701612f05565b9150509250925092565b803560ff8116811461102f57600080fd5b60008060006060848603121561305757600080fd5b8335925061306760208501613031565b915060408401356001600160401b0381111561308257600080fd5b61302786828701612e5a565b6020808252825182820181905260009190848201906040850190845b818110156130cf5783516001600160a01b0316835292840192918401916001016130aa565b50909695505050505050565b600080604083850312156130ee57600080fd5b82356130f981612d6b565b9150602083013561310981612d6b565b809150509250929050565b60006020828403121561312657600080fd5b5035919050565b60006020828403121561313f57600080fd5b81356001600160401b038082111561315657600080fd5b90830190610100828603121561316b57600080fd5b613173612c61565b61317c83612d80565b81526020830135602082015261319460408401612d80565b604082015260608301356060820152608083013560808201526131b960a08401612d2d565b60a082015260c083013560c082015260e0830135828111156131da57600080fd5b6131e687828601612e5a565b60e08301525095945050505050565b60006020828403121561320757600080fd5b8135610b0a81612d6b565b60005b8381101561322d578181015183820152602001613215565b50506000910152565b6000815180845261324e816020860160208601613212565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b6004811061133b5761133b613262565b600081518084526020808501945080840160005b838110156132b85781518752958201959082019060010161329c565b509495945050505050565b600060c0830182516132d481613278565b845260208381015161ffff16818601526040840151600281106132f9576132f9613262565b604086015260608481015160c09187019190915280519283905281019160009060e08701905b808310156133485784516001600160a01b0316825293830193600192909201919083019061331f565b506080860151935086810360808801526133628185613288565b935050505060a083015160a08501528091505092915050565b600081518084526020808501808196508360051b8101915082860160005b858110156133c35782840389526133b18483516132c3565b98850198935090840190600101613399565b5091979650505050505050565b8051825260006020820151606060208501526133ef6060850182613236565b905060408301518482036040860152613408828261337b565b95945050505050565b602081526000610b0a60208301846133d0565b6000806040838503121561343757600080fd5b8235915061344760208401613031565b90509250929050565b602081526000610b0a60208301846132c3565b600061010060018060a01b038084511685526020840151602086015280604085015116604086015250606083015160608501526080830151608085015260a08301516134ae81613278565b8060a08601525060c083015160c085015260e08301518160e0860152613408828601826132c3565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561352b57603f19888603018452613519858351613463565b945092850192908501906001016134fd565b5092979650505050505050565b602081526000610b0a6020830184613463565b6000806040838503121561355e57600080fd5b8235915060208301356001600160401b0381111561357b57600080fd5b61358785828601612e5a565b9150509250929050565b600080604083850312156135a457600080fd5b82356135af81612d6b565b946020939093013593505050565b600080600080608085870312156135d357600080fd5b843593506135e360208601613031565b925060408501356135f381612d6b565b9396929550929360600135925050565b6040815260006136166040830185613463565b90508260208301529392505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561352b57603f198886030184526136688583516133d0565b9450928501929085019060010161364c565b8381526060602082015260006136936060830185613236565b82810360408401526136a5818561337b565b9695505050505050565b83815260ff8316602082015260606040820152600061340860608301846132c3565b600082601f8301126136e257600080fd5b815160206136f2612dac83612cfd565b82815260059290921b8401810191818101908684111561371157600080fd5b8286015b84811015612df457805161372881612d6b565b8352918301918301613715565b60006020828403121561374757600080fd5b81516001600160401b0381111561375d57600080fd5b61072a848285016136d1565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761093457610934613769565b8082018082111561093457610934613769565b8181038181111561093457610934613769565b634e487b7160e01b600052601260045260246000fd5b6000826137e1576137e16137bc565b500490565b6000602082840312156137f857600080fd5b81518015158114610b0a57600080fd5b805161102f81612d20565b805161102f81612d38565b805161102f81612d53565b600082601f83011261383a57600080fd5b8151602061384a612dac83612cfd565b82815260059290921b8401810191818101908684111561386957600080fd5b8286015b84811015612df4578051835291830191830161386d565b600060c0828403121561389657600080fd5b61389e612c39565b90506138a982613808565b81526138b760208301613813565b60208201526138c86040830161381e565b604082015260608201516001600160401b03808211156138e757600080fd5b6138f3858386016136d1565b6060840152608084015191508082111561390c57600080fd5b5061391984828501613829565b60808301525060a082015160a082015292915050565b600082601f83011261394057600080fd5b81516020613950612dac83612cfd565b82815260059290921b8401810191818101908684111561396f57600080fd5b8286015b84811015612df45780516001600160401b038111156139925760008081fd5b6139a08986838b0101613884565b845250918301918301613973565b6000606082840312156139c057600080fd5b6139c8612c84565b90508151815260208201516001600160401b03808211156139e857600080fd5b818401915084601f8301126139fc57600080fd5b8151613a0a612dac82612cd6565b818152866020838601011115613a1f57600080fd5b613a30826020830160208701613212565b6020850152506040840151915080821115613a4a57600080fd5b50613a578482850161392f565b60408301525092915050565b600060208284031215613a7557600080fd5b81516001600160401b03811115613a8b57600080fd5b61072a848285016139ae565b600060208284031215613aa957600080fd5b81516001600160401b03811115613abf57600080fd5b61072a84828501613884565b634e487b7160e01b600052603260045260246000fd5b600060018201613af357613af3613769565b5060010190565b600060208284031215613b0c57600080fd5b5051919050565b82815260406020820152600061072a60408301846132c3565b60006020808385031215613b3f57600080fd5b82516001600160401b0380821115613b5657600080fd5b818501915085601f830112613b6a57600080fd5b8151613b78612dac82612cfd565b81815260059190911b83018401908481019088831115613b9757600080fd5b8585015b83811015613bcf57805185811115613bb35760008081fd5b613bc18b89838a01016139ae565b845250918601918601613b9b565b5098975050505050505050565b600082613beb57613beb6137bc565b500690565b634e487b7160e01b600052603160045260246000fd5b8181036000831280158383131683831282161715613c2657613c26613769565b5092915050565b600082613c3c57613c3c6137bc565b600160ff1b821460001984141615613c5657613c56613769565b500590565b80820182811260008312801582168215821617156121b3576121b3613769565b80820260008212600160ff1b84141615613c9757613c97613769565b81810583148215176109345761093461376956fea26469706673582212201e1f8600ddd782aad668af85d9376e39acd043559179cf98e4deae8837fef1f364736f6c63430008140033",
        "sourceMap": "1852:25147:42:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8975:227;;;;;;:::i;:::-;;:::i;:::-;;10638:245;;;;;;:::i;:::-;;:::i;14318:142::-;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;12936:189;;;;;;:::i;:::-;;:::i;19036:307::-;;;;;;:::i;:::-;;:::i;:::-;;;8968:25:50;;;8956:2;8941:18;19036:307:42;8822:177:50;17997:836:42;;;;;;:::i;:::-;;:::i;17205:526::-;;;;;;:::i;:::-;;:::i;14017:160::-;;;;;;:::i;:::-;;:::i;:::-;;;10491:14:50;;10484:22;10466:41;;10454:2;10439:18;14017:160:42;10326:187:50;9597:138:42;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;8499:227::-;;;;;;:::i;:::-;;:::i;12544:199::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;14580:454::-;;;:::i;:::-;;;;;;;:::i;20035:346::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;11792:413::-;;;:::i;20517:101::-;20594:17;20517:101;;;-1:-1:-1;;;;;16897:32:50;;;16879:51;;16867:2;16852:18;20517:101:42;16733:203:50;2293:101:25;;;:::i;13330:201:42:-;;;;;;:::i;:::-;;:::i;10158:175::-;;;;;;:::i;:::-;;:::i;3609:58::-;;3663:4;3609:58;;1638:85:25;1684:7;1710:6;-1:-1:-1;;;;;1710:6:25;1638:85;;15873:109:42;15915:4;1710:6:25;-1:-1:-1;;;;;1710:6:25;15954:10:42;:21;15873:109;;9317:120;;;;;;:::i;:::-;;:::i;11125:178::-;;;;;;:::i;:::-;;:::i;8173:97::-;;;;;;:::i;:::-;;:::i;13671:149::-;;;;;;:::i;:::-;;:::i;15293:419::-;;;;;;:::i;:::-;;:::i;20746:106::-;20825:20;20746:106;;6146:1895;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;9839:120::-;;;:::i;:::-;;;;;;;:::i;16199:727::-;;;:::i;2543:215:25:-;;;;;;:::i;:::-;;:::i;19579:209:42:-;;;;;;:::i;:::-;;:::i;8975:227::-;1531:13:25;:11;:13::i;:::-;9122:73:42::1;::::0;-1:-1:-1;;;9122:73:42;;-1:-1:-1;;;;;9122:27:42::1;:38;::::0;::::1;::::0;:73:::1;::::0;9161:7;;9170:9;;9181:13;;9122:73:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;8975:227:::0;;;:::o;10638:245::-;1531:13:25;:11;:13::i;:::-;10789:87:42::1;::::0;-1:-1:-1;;;10789:87:42;;-1:-1:-1;;;;;10789:27:42::1;:45;::::0;::::1;::::0;:87:::1;::::0;10835:7;;10844:17;;10863:12;;10789:87:::1;;;:::i;14318:142::-:0;14372:16;14407:24;-1:-1:-1;;;;;14407:44:42;;:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;14407:46:42;;;;;;;;;;;;:::i;:::-;14400:53;;14318:142;:::o;12936:189::-;1531:13:25;:11;:13::i;:::-;13042:76:42::1;::::0;-1:-1:-1;;;13042:76:42;;-1:-1:-1;;;;;21862:15:50;;;13042:76:42::1;::::0;::::1;21844:34:50::0;21914:15;;;21894:18;;;21887:43;13042:24:42::1;:42;::::0;::::1;::::0;21779:18:50;;13042:76:42::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;12936:189:::0;;:::o;19036:307::-;19110:7;;19160:38;19177:20;19160:6;:38;:::i;:::-;19137:61;-1:-1:-1;19216:11:42;3663:4;19276:1;19231:42;3663:4;19137:61;19231:42;:::i;:::-;:46;;;;:::i;:::-;19230:78;;;;:::i;:::-;19216:92;19036:307;-1:-1:-1;;;;19036:307:42:o;17997:836::-;18084:7;18103:30;18136:12;:24;;;18103:57;;18170:25;18245:1;18210:12;:32;;;:36;:101;;18284:12;:27;;;18210:101;;;18249:12;:32;;;18210:101;18170:141;-1:-1:-1;18347:10:42;18325:18;;:32;;;;;;;;:::i;:::-;;18321:408;;18380:60;18397:17;18416:11;:23;;;18380:60;;:16;:60::i;18321:408::-;18483:12;18461:18;;:34;;;;;;;;:::i;:::-;;18457:272;;18518:62;18537:17;18556:11;:23;;;18518:62;;:18;:62::i;18457:272::-;18623:11;18601:18;;:33;;;;;;;;:::i;:::-;;18597:132;;18657:61;18675:17;18694:11;:23;;;18657:61;;:17;:61::i;18597:132::-;18806:18;;18798:27;;;;;;;;:::i;:::-;18746:80;;-1:-1:-1;;;18746:80:42;;;;;;8968:25:50;;8956:2;8941:18;;8822:177;18746:80:42;;;;;;;;17205:526;5203:13;:11;:13::i;:::-;17300:32:::1;17335:41;17358:17;17335:22;:41::i;:::-;17300:76:::0;-1:-1:-1;17427:13:42::1;17404:12;:19;;;:36;;;;;;;;:::i;:::-;;;:77;;;;-1:-1:-1::0;17467:14:42::1;17444:12;:19;;;:37;;;;;;;;:::i;:::-;;;17404:77;17403:149;;;;17537:15;17502:12;:32;;;:50;17403:149;17386:277;;;17584:68;::::0;-1:-1:-1;;;17584:68:42;;::::1;::::0;::::1;8968:25:50::0;;;8941:18;;17584:68:42::1;8822:177:50::0;17386:277:42::1;17673:51;17692:17;17711:12;17673:18;:51::i;:::-;;17290:441;17205:526:::0;:::o;14017:160::-;14113:57;;-1:-1:-1;;;14113:57:42;;-1:-1:-1;;;;;16897:32:50;;;14113:57:42;;;16879:51:50;14090:4:42;;14113:24;:42;;;;;;16852:18:50;;14113:57:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;14106:64;14017:160;-1:-1:-1;;14017:160:42:o;9597:138::-;9654:11;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;9654:11:42;9684:44;;-1:-1:-1;;;9684:44:42;;;;;8968:25:50;;;9684:27:42;-1:-1:-1;;;;;9684:35:42;;;;8941:18:50;;9684:44:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;9684:44:42;;;;;;;;;;;;:::i;8499:227::-;1531:13:25;:11;:13::i;:::-;8646:73:42::1;::::0;-1:-1:-1;;;8646:73:42;;-1:-1:-1;;;;;8646:27:42::1;:38;::::0;::::1;::::0;:73:::1;::::0;8685:7;;8694:9;;8705:13;;8646:73:::1;;;:::i;12544:199::-:0;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12667:69:42;;-1:-1:-1;;;12667:69:42;;;;;27519:25:50;;;27592:4;27580:17;;27560:18;;;27553:45;12667:27:42;-1:-1:-1;;;;;12667:42:42;;;;27492:18:50;;12667:69:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;12667:69:42;;;;;;;;;;;;:::i;:::-;12660:76;12544:199;-1:-1:-1;;;12544:199:42:o;14580:454::-;14718:10;14664:24;14691:38;;;:26;:38;;;;;;;;14664:65;;;;;;;;;;;;;;;;;14631:21;;14664:24;:65;;14691:38;14664:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14739:26;14768:7;:14;14739:43;;14792:35;14849:18;-1:-1:-1;;;;;14830:38:42;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;14792:76;;14883:9;14878:120;14902:18;14898:1;:22;14878:120;;;14960:15;:27;14976:7;14984:1;14976:10;;;;;;;;:::i;:::-;;;;;;;;;;;;14960:27;;;;;;;;;;;;;-1:-1:-1;14960:27:42;14941:46;;;;;;;;;-1:-1:-1;;;;;14941:46:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;14941:46:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:13;14955:1;14941:16;;;;;;;;:::i;:::-;;;;;;:46;;;;14922:3;;;;;:::i;:::-;;;;14878:120;;;-1:-1:-1;15014:13:42;14580:454;-1:-1:-1;;;14580:454:42:o;20035:346::-;20114:19;;:::i;:::-;1531:13:25;:11;:13::i;:::-;20145:33:42::1;20181:23:::0;;;:15:::1;:23;::::0;;;;20218:20;;-1:-1:-1;;;;;20218:20:42::1;20214:131;;20275:59;::::0;-1:-1:-1;;;20275:59:42;;::::1;::::0;::::1;8968:25:50::0;;;8941:18;;20275:59:42::1;8822:177:50::0;20214:131:42::1;20355:19;::::0;;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;20355:19:42;;::::1;::::0;;;;::::1;::::0;::::1;::::0;::::1;::::0;::::1;::::0;::::1;::::0;::::1;::::0;;;;;;;::::1;::::0;;::::1;::::0;;;;;::::1;::::0;::::1;::::0;;;;;::::1;::::0;::::1;::::0;20362:12;;20355:19;;;;::::1;;::::0;;::::1;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;::::0;;::::1;::::0;::::1;::::0;::::1;::::0;::::1;::::0;;;;::::1;::::0;::::1;::::0;;::::1;::::0;::::1;::::0;;;;;;;;;;;::::1;;;::::0;::::1;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;::::0;;;;::::1;::::0;::::1;;;;::::0;::::1;::::0;;;;;;;;::::1;;;;::::0;::::1;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;;-1:-1:-1;;;;;20355:19:42::1;::::0;;;;;::::1;::::0;::::1;;::::0;;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;::::0;::::1;;;;1554:1:25;20035:346:42::0;;;:::o;11792:413::-;1531:13:25;:11;:13::i;:::-;11844:23:42::1;11870;11844:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;;-1:-1:-1;;;;;11844:49:42::1;::::0;;;;;::::1;::::0;::::1;;::::0;;::::1;;;;-1:-1:-1::0;;11925:13:42;;11844:49;;-1:-1:-1;11903:19:42::1;::::0;-1:-1:-1;;;11948:211:42::1;11972:11;11968:1;:15;11948:211;;;12004:12;12026:6;12033:1;12026:9;;;;;;;;:::i;:::-;;::::0;;::::1;::::0;;;;;;12068:30:::1;::::0;-1:-1:-1;;;12068:30:42;;12092:4:::1;12068:30;::::0;::::1;16879:51:50::0;12026:9:42;;-1:-1:-1;12050:15:42::1;::::0;-1:-1:-1;;;;;12068:15:42;::::1;::::0;::::1;::::0;16852:18:50;;12068:30:42::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12050:48;;12112:36;12131:7;1684::25::0;1710:6;-1:-1:-1;;;;;1710:6:25;;1638:85;12131:7:42::1;-1:-1:-1::0;;;;;12112:18:42;::::1;::::0;12140:7;12112:18:::1;:36::i;:::-;11990:169;;11985:3;;;;;:::i;:::-;;;;11948:211;;;-1:-1:-1::0;12168:30:42::1;12175:23;;12168:30;:::i;:::-;11834:371;;11792:413::o:0;2293:101:25:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;13330:201:42:-;1531:13:25;:11;:13::i;:::-;13442:82:42::1;::::0;-1:-1:-1;;;13442:82:42;;-1:-1:-1;;;;;21862:15:50;;;13442:82:42::1;::::0;::::1;21844:34:50::0;21914:15;;;21894:18;;;21887:43;13442:24:42::1;:45;::::0;::::1;::::0;21779:18:50;;13442:82:42::1;21632:304:50::0;10158:175:42;1531:13:25;:11;:13::i;:::-;10261:65:42::1;::::0;-1:-1:-1;;;10261:65:42;;-1:-1:-1;;;;;10261:27:42::1;:42;::::0;::::1;::::0;:65:::1;::::0;10304:7;;10313:12;;10261:65:::1;;;:::i;9317:120::-:0;1531:13:25;:11;:13::i;:::-;9383:47:42::1;::::0;-1:-1:-1;;;9383:47:42;;::::1;::::0;::::1;8968:25:50::0;;;9383:27:42::1;-1:-1:-1::0;;;;;9383:38:42::1;::::0;::::1;::::0;8941:18:50;;9383:47:42::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;9317:120:::0;:::o;11125:178::-;1531:13:25;:11;:13::i;:::-;11223:73:42::1;::::0;-1:-1:-1;;;11223:73:42;;::::1;::::0;::::1;27519:25:50::0;;;27592:4;27580:17;;27560:18;;;27553:45;11223:27:42::1;-1:-1:-1::0;;;;;11223:45:42::1;::::0;::::1;::::0;27492:18:50;;11223:73:42::1;27349:255:50::0;8173:97:42;8230:33;8243:10;8255:7;8230:12;:33::i;:::-;8173:97;:::o;13671:149::-;1531:13:25;:11;:13::i;:::-;13753:60:42::1;::::0;-1:-1:-1;;;13753:60:42;;-1:-1:-1;;;;;16897:32:50;;;13753:60:42::1;::::0;::::1;16879:51:50::0;13753:24:42::1;:45;::::0;::::1;::::0;16852:18:50;;13753:60:42::1;16733:203:50::0;15293:419:42;15380:19;;:::i;:::-;15412:32;15449:47;15478:8;15488:7;15449:28;:47::i;:::-;-1:-1:-1;15510:20:42;;15411:85;;-1:-1:-1;;;;;;15510:34:42;;;:70;;;15572:8;-1:-1:-1;;;;;15548:32:42;:12;:20;;;-1:-1:-1;;;;;15548:32:42;;;15510:70;15506:171;;;15603:63;;-1:-1:-1;;;15603:63:42;;-1:-1:-1;;;;;28984:32:50;;15603:63:42;;;28966:51:50;29033:18;;;29026:34;;;28939:18;;15603:63:42;28792:274:50;6146:1895:42;6280:19;;:::i;:::-;6301:7;6328:12;;;:36;;-1:-1:-1;;;;;;6344:20:42;;;6328:36;6324:130;;;6387:56;;-1:-1:-1;;;6387:56:42;;;;;;;;;;;6324:130;6528:10;6464:33;6500:39;;;:27;:39;;;;;;;;:48;;;;;;;;;6562:42;;;:15;:42;;;;;;:49;;;:60;;;6558:167;;6645:69;;-1:-1:-1;;;6645:69:42;;6694:10;6645:69;;;28966:51:50;29033:18;;;29026:34;;;28939:18;;6645:69:42;28792:274:50;6558:167:42;6768:70;;-1:-1:-1;;;6768:70:42;;;;;27519:25:50;;;27592:4;27580:17;;27560:18;;;27553:45;6735:30:42;;6768:27;-1:-1:-1;;;;;6768:42:42;;;;27492:18:50;;6768:70:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;6768:70:42;;;;;;;;;;;;:::i;:::-;6735:103;;6848:13;6882:15;6864;:33;:66;;6917:13;6864:66;;;6900:14;6864:66;6848:82;-1:-1:-1;6940:27:42;;6970:6;:24;;;;;;;;:::i;:::-;;:46;;7015:1;6970:46;;;6997:15;6970:46;6940:76;;7027:32;7062:307;;;;;;;;7098:10;-1:-1:-1;;;;;7062:307:42;;;;;7130:7;7062:307;;;;7158:6;-1:-1:-1;;;;;7062:307:42;;;;;7194:15;7062:307;;;;7244:19;7062:307;;;;7285:6;7062:307;;;;;;;;:::i;:::-;;;7319:1;7062:307;;;;;;;;;;;;;7399:23;;;7027:342;;-1:-1:-1;7399:23:42;;7432:25;7399:23;7432:25;:::i;:::-;;;;-1:-1:-1;;7468:25:42;;;;:15;:25;;;;;;;;;:40;;;;-1:-1:-1;;;;;;7468:40:42;;;-1:-1:-1;;;;;7468:40:42;;;;;;;;;;-1:-1:-1;7468:40:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7468:40:42;;;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;7468:40:42;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7468:40:42;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;7468:40:42;;;;;;;;;;;;-1:-1:-1;;7468:40:42;;;;;;;;;;;;;-1:-1:-1;;7468:40:42;-1:-1:-1;;7468:40:42;;;;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;7468:40:42;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;7468:40:42;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;7569:8;7518:27;:39;7546:10;-1:-1:-1;;;;;7518:39:42;-1:-1:-1;;;;;7518:39:42;;;;;;;;;;;;:48;7558:7;7518:48;;;;;;;;;;;:59;;;;7587:26;:38;7614:10;-1:-1:-1;;;;;7587:38:42;-1:-1:-1;;;;;7587:38:42;;;;;;;;;;;;7631:8;7587:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7696:7;7688:6;-1:-1:-1;;;;;7656:61:42;7676:10;-1:-1:-1;;;;;7656:61:42;;7705:11;7656:61;;;;;;:::i;:::-;;;;;;;;7728:19;7775:13;7765:6;:23;;;;;;;;:::i;:::-;;7761:221;;7842:42;7861:8;7871:12;7842:18;:42::i;:::-;7828:56;;7761:221;;;7927:44;7948:8;7958:12;7927:20;:44::i;:::-;8008:12;;;;-1:-1:-1;6146:1895:42;;-1:-1:-1;;;;;;;;;;6146:1895:42:o;9839:120::-;9882:13;9914:27;-1:-1:-1;;;;;9914:36:42;;:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;9914:38:42;;;;;;;;;;;;:::i;16199:727::-;5203:13;:11;:13::i;:::-;16268:18:::1;16289:24;16307:6;16289:15;:24;:::i;:::-;:33;::::0;16316:6:::1;16289:33;:::i;:::-;16332:37;16372:38:::0;;;:26:::1;:38;::::0;;;;16268:54;;-1:-1:-1;16420:500:42::1;16444:26:::0;;16440:30;::::1;16420:500;;;16491:25;16519:19;16539:1;16519:22;;;;;;;;:::i;:::-;;::::0;;;::::1;::::0;;;;;::::1;::::0;16591:34;;;:15:::1;:34:::0;;;;;;;16519:22;;-1:-1:-1;16684:13:42::1;16661:19;::::0;::::1;::::0;::::1;;:36;::::0;::::1;;;;;;:::i;:::-;;:77;;;-1:-1:-1::0;16724:14:42::1;16701:19;::::0;::::1;::::0;::::1;;:37;::::0;::::1;;;;;;:::i;:::-;;16661:77;16660:154;;;;;16799:15;16763:12;:32;;;:51;;16660:154;16639:271;;;16852:43;::::0;16877:17;;16852:43:::1;::::0;;;::::1;16639:271;16477:443;;16472:3;;;;;:::i;:::-;;;;16420:500;;2543:215:25::0;1531:13;:11;:13::i;:::-;-1:-1:-1;;;;;2627:22:25;::::1;2623:91;;2672:31;::::0;-1:-1:-1;;;2672:31:25;;2700:1:::1;2672:31;::::0;::::1;16879:51:50::0;16852:18;;2672:31:25::1;16733:203:50::0;2623:91:25::1;2723:28;2742:8;2723:18;:28::i;19579:209:42:-:0;19704:77;;-1:-1:-1;;;;;;19704:77:42;;-1:-1:-1;;;;;28984:32:50;;;19704:77:42;;;28966:51:50;29033:18;;;29026:34;;;19678:7:42;;19704:24;:49;;;;;;28939:18:50;;19704:77:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;1796:162:25:-;1684:7;1710:6;-1:-1:-1;;;;;1710:6:25;735:10:35;1855:23:25;1851:101;;1901:40;;-1:-1:-1;;;1901:40:25;;735:10:35;1901:40:25;;;16879:51:50;16852:18;;1901:40:25;16733:203:50;9679:207:38;9753:20;9812:23;986:12;9812:5;:23;:::i;:::-;9800:35;;:9;:35;:::i;:::-;9785:50;;9869:9;9853:12;:25;;9845:34;;;;;9087:586;9165:20;;;;9242:40;9254:27;986:12;9254:9;:27;:::i;:::-;9242:11;:40::i;:::-;9197:85;;-1:-1:-1;9197:85:38;-1:-1:-1;9197:85:38;-1:-1:-1;9292:16:38;9301:7;9197:85;9292:16;:::i;:::-;;-1:-1:-1;9340:2:38;9327:9;9335:1;9292:16;9327:9;:::i;:::-;9326:16;;;;:::i;:::-;9318:24;;;;:::i;:::-;;-1:-1:-1;9375:2:38;9362:9;9370:1;9362:5;:9;:::i;:::-;9361:16;;;;:::i;:::-;9360:22;;9381:1;9360:22;:::i;:::-;9352:30;;9392:19;9414:28;9430:4;9436:5;9414:15;:28::i;:::-;9392:50;;9462:11;9456:3;:17;9452:65;;;9495:11;9489:17;;9452:65;9594:27;986:12;9594:9;:27;:::i;:::-;986:12;9541:31;9555:4;9561:5;9568:3;9541:13;:31::i;:::-;:49;;;;:::i;:::-;:81;;;;:::i;:::-;9526:96;;9656:9;9640:12;:25;;9632:34;;;;;;9187:486;;;;9087:586;;;;:::o;8573:508::-;8649:20;;;;8726:40;8738:27;986:12;8738:9;:27;:::i;8726:40::-;8681:85;;-1:-1:-1;8681:85:38;-1:-1:-1;8681:85:38;-1:-1:-1;8776:14:38;8784:6;8681:85;8776:14;:::i;:::-;;;8800:19;8822:28;8838:4;8844:5;8822:15;:28::i;22539:2547:42:-;22661:19;22696:30;22729:12;:24;;;22696:57;;22772:18;22793:58;22819:11;22832:12;:18;;;22793:25;:58::i;:::-;22876:1;;-1:-1:-1;22772:79:42;-1:-1:-1;22876:1:42;22891:11;:23;;;:49;;;;;;;;:::i;:::-;;22887:585;;22970:11;:23;;;22994:10;22970:35;;;;;;;;:::i;:::-;;;;;;;22956:49;;22887:585;;;23053:21;23026:11;:23;;;:48;;;;;;;;:::i;:::-;;23022:450;;23154:18;;;;;23174:21;;;;23104:92;;-1:-1:-1;;;;;;23104:92:42;;-1:-1:-1;;;;;28984:32:50;;;23104:92:42;;;28966:51:50;29033:18;;;29026:34;;;;23104:24:42;:49;;;;28939:18:50;;23104:92:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;23090:106;;23239:1;23215:11;:21;;;:25;:45;;;;-1:-1:-1;23244:16:42;;23215:45;23211:251;;;23368:19;;;;23389:20;;23411:18;;;;;23287:160;;-1:-1:-1;;;23287:160:42;;;;;30558:25:50;;;;-1:-1:-1;;;;;30657:15:50;;;30637:18;;;30630:43;30709:15;30689:18;;;30682:43;30531:18;;23287:160:42;30356:375:50;23211:251:42;23525:36;23548:12;23525:22;:36::i;:::-;23490:32;;;:71;23571:25;;;:27;;;;;;:::i;:::-;;;-1:-1:-1;23608:34:42;;;;:15;:34;;;;;;;;;:49;;;;-1:-1:-1;;;;;;23608:49:42;;;-1:-1:-1;;;;;23608:49:42;;;;;;;;;;-1:-1:-1;23608:49:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;23608:49:42;;;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;23608:49:42;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;23608:49:42;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;23608:49:42;;;;;;;;;;;;-1:-1:-1;;23608:49:42;;;;;;;;;;;;;-1:-1:-1;;23608:49:42;-1:-1:-1;;23608:49:42;;;;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;23608:49:42;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;23608:49:42;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;23668:53;23689:17;23708:12;23668:20;:53::i;:::-;23736:15;;23732:1348;;23789:18;;;;;24037:20;;24021:52;;-1:-1:-1;;;24021:52:42;;-1:-1:-1;;;;;21862:15:50;;;24021:52:42;;;21844:34:50;24067:4:42;21894:18:50;;;21887:43;23789:18:42;;23767:12;;24021:15;;;;;;21779:18:50;;24021:52:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;24001:72;;24103:11;24091:9;:23;24087:137;;;24188:20;;24141:68;;-1:-1:-1;;;24141:68:42;;-1:-1:-1;;;;;16897:32:50;;;24141:68:42;;;16879:51:50;16852:18;;24141:68:42;16733:203:50;24087:137:42;24332:18;;;;;;24303:23;:48;;;;;;;-1:-1:-1;24303:48:42;;;;;;;;-1:-1:-1;;;;;;24303:48:42;-1:-1:-1;;;;;24303:48:42;;;;;;24440:18;;24413:25;;;;24391:20;;24371:101;;8968:25:50;;;24371:101:42;;;;24413:25;;24371:101;;;;8956:2:50;8941:18;24371:101:42;;;;;;;24510:20;;24487:72;;-1:-1:-1;;;;;24487:22:42;;;24540:4;24547:11;24487:22;:72::i;:::-;24601:1;24578:20;:24;24574:496;;;24622:26;24651:40;24679:11;24651:27;:40::i;:::-;24724:48;;-1:-1:-1;;;24724:48:42;;24746:4;24724:48;;;28966:51:50;29033:18;;;29026:34;;;24622:69:42;;-1:-1:-1;24709:12:42;;-1:-1:-1;;;;;24724:13:42;;;;;28939:18:50;;24724:48:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;24709:63;;24795:7;24790:147;;24899:18;;;;;24833:85;;-1:-1:-1;;;24833:85:42;;24892:4;24833:85;;;21844:34:50;-1:-1:-1;;;;;21914:15:50;;;21894:18;;;21887:43;21779:18;;24833:85:42;21632:304:50;24790:147:42;24954:85;-1:-1:-1;;;;;24954:22:42;;24985:4;25000:17;25020:18;24954:22;:85::i;:::-;24604:466;;23753:1327;;23732:1348;22686:2400;;22539:2547;;;;:::o;1271:160:33:-;1380:43;;-1:-1:-1;;;;;28984:32:50;;;1380:43:33;;;28966:51:50;29033:18;;;29026:34;;;1353:71:33;;1373:5;;1395:14;;;;;28939:18:50;;1380:43:33;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1380:43:33;;;;;;;;;;;1353:19;:71::i;2912:187:25:-;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:25;;;-1:-1:-1;;;;;;3020:17:25;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;25322:905:42:-;25400:25;25429:47;25458:8;25468:7;25429:28;:47::i;:::-;-1:-1:-1;;;;;25494:37:42;;;;;;:27;:37;;;;;;;;:46;;;;;;;;25487:53;;;25557:34;;;:15;:34;;;;;;25550:41;;-1:-1:-1;;;;;;25550:41:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;25550:41:42;;;;;;;;;;;;;;-1:-1:-1;;25550:41:42;;;25397:79;;-1:-1:-1;25557:34:42;-1:-1:-1;25494:37:42;;25550:41;;;;25494:37;25550:41;:::i;:::-;;;;;;;:::i;:::-;-1:-1:-1;25550:41:42;;;;;;;;;-1:-1:-1;;;;;25669:36:42;;;;:26;:36;;;;;-1:-1:-1;;25617:2:42;-1:-1:-1;25669:36:42;-1:-1:-1;25715:203:42;25739:26;;25735:30;;25715:203;;;25816:17;25790:19;25810:1;25790:22;;;;;;;;:::i;:::-;;;;;;;;;:43;25786:122;;25868:1;25853:17;;25888:5;;25786:122;25767:3;;;;:::i;:::-;;;;25715:203;;;;-1:-1:-1;;25932:5:42;:10;25928:237;;;25983:5;25958:158;25995:26;;:30;;26024:1;;25995:30;:::i;:::-;25991:1;:34;25958:158;;;26075:19;26095:5;:1;26099;26095:5;:::i;:::-;26075:26;;;;;;;;:::i;:::-;;;;;;;;;26050:19;26070:1;26050:22;;;;;;;;:::i;:::-;;;;;;;;;;:51;26027:3;;;;:::i;:::-;;;;25958:158;;;;26129:19;:25;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;25928:237;26180:40;;26212:7;;-1:-1:-1;;;;;26180:40:42;;;;;;;;25387:840;;;25322:905;;:::o;26564:433::-;26683:32;;:::i;:::-;-1:-1:-1;;;;;26754:37:42;;;26717:13;26754:37;;;:27;:37;;;;;;;;:46;;;;;;;;;26826:22;;;:15;:22;;;;;;;26811:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;26826:22;26811:37;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;26811:37:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;26886:8;-1:-1:-1;;;;;26862:32:42;:12;:20;;;-1:-1:-1;;;;;26862:32:42;;26858:133;;26917:63;;-1:-1:-1;;;26917:63:42;;-1:-1:-1;;;;;28984:32:50;;26917:63:42;;;28966:51:50;29033:18;;;29026:34;;;28939:18;;26917:63:42;28792:274:50;26858:133:42;26564:433;;;;;:::o;21787:353::-;21900:32;;;;:36;21896:238;;21952:30;22020:6;21985:12;:32;;;:41;;;;:::i;:::-;:50;;22029:6;21985:50;:::i;:::-;22049;;;;:26;:50;;;;;;;:74;;;;;;;;;;;;;;;;-1:-1:-1;21787:353:42;;:::o;3323:743:38:-;3382:12;;;3481:5;3513:31;;;3382:12;3579:6;3570:1;:5;;3569:16;;-1:-1:-1;3626:1:38;3621;3608:6;:10;;:14;3607:20;3603:24;;;;3641:12;3675:7;3657:4;3669:1;3665:5;;3657:14;3656:26;;-1:-1:-1;3721:1:38;3705:4;:12;;3704:18;3700:1;:22;3725:2;3700:27;3696:31;;3741:13;3768:4;3763:1;3758:2;:6;3757:15;;;;;:::i;:::-;;;-1:-1:-1;3786:11:38;3822:2;3805:4;:13;;3804:20;3800:24;;;-1:-1:-1;3851:2:38;3842:6;:11;-1:-1:-1;;3924:6:38;;;;3917:3;:14;:22;;;;:26;;;3885:1;3889:2;:6;;;3876:19;;;;;;;;-1:-1:-1;3842:11:38;-1:-1:-1;3917:26:38;-1:-1:-1;;;;3323:743:38:o;7006:392::-;7083:19;7118:5;7127:1;7118:10;:24;;;;7132:5;7141:1;7132:10;7118:24;:38;;;;7146:5;7155:1;7146:10;7118:38;:52;;;;7160:5;7169:1;7160:10;7118:52;:66;;;;7174:5;7183:1;7174:10;7118:66;:81;;;;7188:5;7197:2;7188:11;7118:81;:96;;;;7203:5;7212:2;7203:11;7118:96;7114:278;;;-1:-1:-1;7244:2:38;7114:278;;;7267:5;7276:1;7267:10;7263:129;;-1:-1:-1;7307:2:38;7263:129;;;7354:17;7366:4;7354:11;:17::i;:::-;:27;;7379:2;7354:27;;;7374:2;7354:27;7340:41;;;7006:392;-1:-1:-1;;;7006:392:38:o;2041:529::-;2129:13;2170:4;2162;:12;;2154:21;;;;;;2207:4;2245:5;2282:3;2185:12;1132:7;2511:1;2503:3;2497:2;2482:11;2491:2;2245:5;2482:11;:::i;:::-;2481:18;;;;:::i;:::-;2466:12;:5;2474:4;2466:12;:::i;:::-;:33;;;;:::i;:::-;2465:41;;;;:::i;:::-;2460:47;;:1;:47;:::i;:::-;2459:53;;;;:::i;:::-;2442:2;;2414:11;2423:2;2414:6;:11;:::i;:::-;2413:18;;;;:::i;:::-;2412:25;;2435:2;2412:25;:::i;:::-;2399:10;2408:1;2399:6;:10;:::i;:::-;:38;;;;:::i;:::-;2392:46;;:3;:46;:::i;:::-;2391:53;;;;:::i;:::-;2375:1;2368:2;2353:11;2362:2;2353:6;:11;:::i;:::-;2352:18;;;;:::i;:::-;2337:12;:5;2345:4;2337:12;:::i;:::-;:33;;;;:::i;:::-;2329:42;;:4;:42;:::i;:::-;2328:48;;;;:::i;:::-;2313:12;2320:5;2313:4;:12;:::i;:::-;:63;;;;:::i;:::-;:131;;;;:::i;:::-;:199;;;;:::i;:::-;:216;;;;:::i;:::-;2297:232;2041:529;-1:-1:-1;;;;;;;;2041:529:38:o;21182:406:42:-;21312:7;;21335:176;21359:12;:27;;;:34;21355:1;:38;21335:176;;;21452:6;-1:-1:-1;;;;;21418:40:42;:12;:27;;;21446:1;21418:30;;;;;;;;:::i;:::-;;;;;;;-1:-1:-1;;;;;21418:40:42;;21414:87;;21485:1;-1:-1:-1;21478:8:42;;21414:87;21395:3;;;;:::i;:::-;;;;21335:176;;;-1:-1:-1;21527:54:42;;-1:-1:-1;;;21527:54:42;;-1:-1:-1;;;;;16897:32:50;;21527:54:42;;;16879:51:50;16852:18;;21527:54:42;16733:203:50;1670:188:33;1797:53;;-1:-1:-1;;;;;31992:15:50;;;1797:53:33;;;31974:34:50;32044:15;;;32024:18;;;32017:43;32076:18;;;32069:34;;;1770:81:33;;1790:5;;1812:18;;;;;31909::50;;1797:53:33;31734:375:50;1770:81:33;1670:188;;;;:::o;7738:720::-;7818:18;7846:19;7984:4;7981:1;7974:4;7968:11;7961:4;7955;7951:15;7948:1;7941:5;7934;7929:60;8041:7;8031:176;;8085:4;8079:11;8130:16;8127:1;8122:3;8107:40;8176:16;8171:3;8164:29;8031:176;-1:-1:-1;;8284:1:33;8278:8;8234:16;;-1:-1:-1;8310:15:33;;:68;;8362:11;8377:1;8362:16;;8310:68;;;-1:-1:-1;;;;;8328:26:33;;;:31;8310:68;8306:146;;;8401:40;;-1:-1:-1;;;8401:40:33;;-1:-1:-1;;;;;16897:32:50;;8401:40:33;;;16879:51:50;16852:18;;8401:40:33;16733:203:50;6321:160:38;6379:13;6417:8;6424:1;6417:4;:8;:::i;:::-;:13;6416:36;;;;-1:-1:-1;6436:10:38;6443:3;6436:4;:10;:::i;:::-;:15;;6416:36;6415:59;;;-1:-1:-1;6458:10:38;6465:3;6458:4;:10;:::i;:::-;:15;6404:70;6321:160;-1:-1:-1;;6321:160:38:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14:127:50;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:253;218:2;212:9;260:4;248:17;;-1:-1:-1;;;;;280:34:50;;316:22;;;277:62;274:88;;;342:18;;:::i;:::-;378:2;371:22;146:253;:::o;404:255::-;476:2;470:9;518:6;506:19;;-1:-1:-1;;;;;540:34:50;;576:22;;;537:62;534:88;;;602:18;;:::i;664:253::-;736:2;730:9;778:4;766:17;;-1:-1:-1;;;;;798:34:50;;834:22;;;795:62;792:88;;;860:18;;:::i;922:275::-;993:2;987:9;1058:2;1039:13;;-1:-1:-1;;1035:27:50;1023:40;;-1:-1:-1;;;;;1078:34:50;;1114:22;;;1075:62;1072:88;;;1140:18;;:::i;:::-;1176:2;1169:22;922:275;;-1:-1:-1;922:275:50:o;1202:187::-;1251:4;-1:-1:-1;;;;;1276:6:50;1273:30;1270:56;;;1306:18;;:::i;:::-;-1:-1:-1;1372:2:50;1351:15;-1:-1:-1;;1347:29:50;1378:4;1343:40;;1202:187::o;1394:194::-;1465:4;-1:-1:-1;;;;;1490:6:50;1487:30;1484:56;;;1520:18;;:::i;:::-;-1:-1:-1;1565:1:50;1561:14;1577:4;1557:25;;1394:194::o;1593:105::-;1672:1;1665:5;1662:12;1652:40;;1688:1;1685;1678:12;1703:142;1775:20;;1804:35;1775:20;1804:35;:::i;1850:117::-;1935:6;1928:5;1924:18;1917:5;1914:29;1904:57;;1957:1;1954;1947:12;1972:132;2039:20;;2068:30;2039:20;2068:30;:::i;2109:110::-;2193:1;2186:5;2183:12;2173:40;;2209:1;2206;2199:12;2224:152;2301:20;;2330:40;2301:20;2330:40;:::i;2381:131::-;-1:-1:-1;;;;;2456:31:50;;2446:42;;2436:70;;2502:1;2499;2492:12;2517:134;2585:20;;2614:31;2585:20;2614:31;:::i;2656:748::-;2710:5;2763:3;2756:4;2748:6;2744:17;2740:27;2730:55;;2781:1;2778;2771:12;2730:55;2817:6;2804:20;2843:4;2867:71;2883:54;2934:2;2883:54;:::i;:::-;2867:71;:::i;:::-;2972:15;;;3058:1;3054:10;;;;3042:23;;3038:32;;;3003:12;;;;3082:15;;;3079:35;;;3110:1;3107;3100:12;3079:35;3146:2;3138:6;3134:15;3158:217;3174:6;3169:3;3166:15;3158:217;;;3254:3;3241:17;3271:31;3296:5;3271:31;:::i;:::-;3315:18;;3353:12;;;;3191;;3158:217;;;-1:-1:-1;3393:5:50;2656:748;-1:-1:-1;;;;;;2656:748:50:o;3409:673::-;3463:5;3516:3;3509:4;3501:6;3497:17;3493:27;3483:55;;3534:1;3531;3524:12;3483:55;3570:6;3557:20;3596:4;3620:71;3636:54;3687:2;3636:54;:::i;3620:71::-;3725:15;;;3811:1;3807:10;;;;3795:23;;3791:32;;;3756:12;;;;3835:15;;;3832:35;;;3863:1;3860;3853:12;3832:35;3899:2;3891:6;3887:15;3911:142;3927:6;3922:3;3919:15;3911:142;;;3993:17;;3981:30;;4031:12;;;;3944;;3911:142;;4087:869;4145:5;4193:4;4181:9;4176:3;4172:19;4168:30;4165:50;;;4211:1;4208;4201:12;4165:50;4233:22;;:::i;:::-;4224:31;;4278:33;4301:9;4278:33;:::i;:::-;4271:5;4264:48;4344:37;4377:2;4366:9;4362:18;4344:37;:::i;:::-;4339:2;4332:5;4328:14;4321:61;4414:47;4457:2;4446:9;4442:18;4414:47;:::i;:::-;4409:2;4402:5;4398:14;4391:71;4513:2;4502:9;4498:18;4485:32;-1:-1:-1;;;;;4577:2:50;4569:6;4566:14;4563:34;;;4593:1;4590;4583:12;4563:34;4629:57;4682:3;4673:6;4662:9;4658:22;4629:57;:::i;:::-;4624:2;4617:5;4613:14;4606:81;4740:3;4729:9;4725:19;4712:33;4696:49;;4770:2;4760:8;4757:16;4754:36;;;4786:1;4783;4776:12;4754:36;;4823:59;4878:3;4867:8;4856:9;4852:24;4823:59;:::i;:::-;4817:3;4810:5;4806:15;4799:84;;4944:3;4933:9;4929:19;4916:33;4910:3;4903:5;4899:15;4892:58;4087:869;;;;:::o;4961:923::-;5026:5;5079:3;5072:4;5064:6;5060:17;5056:27;5046:55;;5097:1;5094;5087:12;5046:55;5133:6;5120:20;5159:4;5183:71;5199:54;5250:2;5199:54;:::i;5183:71::-;5288:15;;;5374:1;5370:10;;;;5358:23;;5354:32;;;5319:12;;;;5398:15;;;5395:35;;;5426:1;5423;5416:12;5395:35;5462:2;5454:6;5450:15;5474:381;5490:6;5485:3;5482:15;5474:381;;;5576:3;5563:17;-1:-1:-1;;;;;5599:11:50;5596:35;5593:125;;;5672:1;5701:2;5697;5690:14;5593:125;5743:69;5808:3;5803:2;5789:11;5781:6;5777:24;5773:33;5743:69;:::i;:::-;5731:82;;-1:-1:-1;5833:12:50;;;;5507;;5474:381;;5889:1029;6031:6;6039;6047;6100:2;6088:9;6079:7;6075:23;6071:32;6068:52;;;6116:1;6113;6106:12;6068:52;6152:9;6139:23;6129:33;;6213:2;6202:9;6198:18;6185:32;-1:-1:-1;;;;;6277:2:50;6269:6;6266:14;6263:34;;;6293:1;6290;6283:12;6263:34;6331:6;6320:9;6316:22;6306:32;;6376:7;6369:4;6365:2;6361:13;6357:27;6347:55;;6398:1;6395;6388:12;6347:55;6434:2;6421:16;6459:49;6475:32;6504:2;6475:32;:::i;6459:49::-;6531:2;6524:5;6517:17;6571:7;6566:2;6561;6557;6553:11;6549:20;6546:33;6543:53;;;6592:1;6589;6582:12;6543:53;6647:2;6642;6638;6634:11;6629:2;6622:5;6618:14;6605:45;6691:1;6686:2;6681;6674:5;6670:14;6666:23;6659:34;6712:5;6702:15;;;;6770:2;6759:9;6755:18;6742:32;6726:48;;6799:2;6789:8;6786:16;6783:36;;;6815:1;6812;6805:12;6783:36;;6838:74;6904:7;6893:8;6882:9;6878:24;6838:74;:::i;:::-;6828:84;;;5889:1029;;;;;:::o;6923:156::-;6989:20;;7049:4;7038:16;;7028:27;;7018:55;;7069:1;7066;7059:12;7084:492;7189:6;7197;7205;7258:2;7246:9;7237:7;7233:23;7229:32;7226:52;;;7274:1;7271;7264:12;7226:52;7310:9;7297:23;7287:33;;7339:36;7371:2;7360:9;7356:18;7339:36;:::i;:::-;7329:46;;7426:2;7415:9;7411:18;7398:32;-1:-1:-1;;;;;7445:6:50;7442:30;7439:50;;;7485:1;7482;7475:12;7439:50;7508:62;7562:7;7553:6;7542:9;7538:22;7508:62;:::i;7581:658::-;7752:2;7804:21;;;7874:13;;7777:18;;;7896:22;;;7723:4;;7752:2;7975:15;;;;7949:2;7934:18;;;7723:4;8018:195;8032:6;8029:1;8026:13;8018:195;;;8097:13;;-1:-1:-1;;;;;8093:39:50;8081:52;;8188:15;;;;8153:12;;;;8129:1;8047:9;8018:195;;;-1:-1:-1;8230:3:50;;7581:658;-1:-1:-1;;;;;;7581:658:50:o;8244:388::-;8312:6;8320;8373:2;8361:9;8352:7;8348:23;8344:32;8341:52;;;8389:1;8386;8379:12;8341:52;8428:9;8415:23;8447:31;8472:5;8447:31;:::i;:::-;8497:5;-1:-1:-1;8554:2:50;8539:18;;8526:32;8567:33;8526:32;8567:33;:::i;:::-;8619:7;8609:17;;;8244:388;;;;;:::o;8637:180::-;8696:6;8749:2;8737:9;8728:7;8724:23;8720:32;8717:52;;;8765:1;8762;8755:12;8717:52;-1:-1:-1;8788:23:50;;8637:180;-1:-1:-1;8637:180:50:o;9004:1065::-;9094:6;9147:2;9135:9;9126:7;9122:23;9118:32;9115:52;;;9163:1;9160;9153:12;9115:52;9203:9;9190:23;-1:-1:-1;;;;;9273:2:50;9265:6;9262:14;9259:34;;;9289:1;9286;9279:12;9259:34;9312:22;;;;9368:6;9350:16;;;9346:29;9343:49;;;9388:1;9385;9378:12;9343:49;9414:22;;:::i;:::-;9459;9478:2;9459:22;:::i;:::-;9452:5;9445:37;9535:2;9531;9527:11;9514:25;9509:2;9502:5;9498:14;9491:49;9572:31;9599:2;9595;9591:11;9572:31;:::i;:::-;9567:2;9560:5;9556:14;9549:55;9657:2;9653;9649:11;9636:25;9631:2;9624:5;9620:14;9613:49;9716:3;9712:2;9708:12;9695:26;9689:3;9682:5;9678:15;9671:51;9755:36;9786:3;9782:2;9778:12;9755:36;:::i;:::-;9749:3;9742:5;9738:15;9731:61;9846:3;9842:2;9838:12;9825:26;9819:3;9812:5;9808:15;9801:51;9898:3;9894:2;9890:12;9877:26;9928:2;9918:8;9915:16;9912:36;;;9944:1;9941;9934:12;9912:36;9981:57;10030:7;10019:8;10015:2;10011:17;9981:57;:::i;:::-;9975:3;9964:15;;9957:82;-1:-1:-1;9968:5:50;9004:1065;-1:-1:-1;;;;;9004:1065:50:o;10074:247::-;10133:6;10186:2;10174:9;10165:7;10161:23;10157:32;10154:52;;;10202:1;10199;10192:12;10154:52;10241:9;10228:23;10260:31;10285:5;10260:31;:::i;10518:250::-;10603:1;10613:113;10627:6;10624:1;10621:13;10613:113;;;10703:11;;;10697:18;10684:11;;;10677:39;10649:2;10642:10;10613:113;;;-1:-1:-1;;10760:1:50;10742:16;;10735:27;10518:250::o;10773:271::-;10815:3;10853:5;10847:12;10880:6;10875:3;10868:19;10896:76;10965:6;10958:4;10953:3;10949:14;10942:4;10935:5;10931:16;10896:76;:::i;:::-;11026:2;11005:15;-1:-1:-1;;11001:29:50;10992:39;;;;11033:4;10988:50;;10773:271;-1:-1:-1;;10773:271:50:o;11049:127::-;11110:10;11105:3;11101:20;11098:1;11091:31;11141:4;11138:1;11131:15;11165:4;11162:1;11155:15;11181:111;11260:1;11253:5;11250:12;11240:46;;11266:18;;:::i;11297:435::-;11350:3;11388:5;11382:12;11415:6;11410:3;11403:19;11441:4;11470:2;11465:3;11461:12;11454:19;;11507:2;11500:5;11496:14;11528:1;11538:169;11552:6;11549:1;11546:13;11538:169;;;11613:13;;11601:26;;11647:12;;;;11682:15;;;;11574:1;11567:9;11538:169;;;-1:-1:-1;11723:3:50;;11297:435;-1:-1:-1;;;;;11297:435:50:o;11737:1197::-;11791:3;11830:4;11825:3;11821:14;11860:5;11854:12;11875:32;11904:2;11875:32;:::i;:::-;11916:15;;11950:4;11994:14;;;11988:21;12011:6;11984:34;11970:12;;;11963:56;12065:4;12054:16;;12048:23;12107:1;12090:19;;12080:53;;12113:18;;:::i;:::-;12158:4;12149:14;;12142:36;12226:4;12215:16;;;12209:23;12264:4;12248:14;;;12241:28;;;;12318:21;;12348:20;;;;12422:23;;;-1:-1:-1;;12395:3:50;12386:13;;;12473:201;12487:6;12484:1;12481:13;12473:201;;;12554:13;;-1:-1:-1;;;;;12550:39:50;12536:54;;12649:15;;;;12586:1;12502:9;;;;;12612:14;;;;12473:201;;;12477:3;12722:4;12715:5;12711:16;12705:23;12683:45;;12771:3;12764:5;12760:15;12753:4;12748:3;12744:14;12737:39;12799:51;12844:5;12828:14;12799:51;:::i;:::-;12785:65;;;;;12899:4;12892:5;12888:16;12882:23;12875:4;12870:3;12866:14;12859:47;12922:6;12915:13;;;11737:1197;;;;:::o;12939:640::-;13003:3;13041:5;13035:12;13068:6;13063:3;13056:19;13094:4;13135:2;13130:3;13126:12;13160:11;13187;13180:18;;13237:6;13234:1;13230:14;13223:5;13219:26;13207:38;;13279:2;13272:5;13268:14;13300:1;13310:243;13324:6;13321:1;13318:13;13310:243;;;13395:5;13389:4;13385:16;13380:3;13373:29;13423:50;13468:4;13459:6;13453:13;13423:50;:::i;:::-;13531:12;;;;13415:58;-1:-1:-1;13496:15:50;;;;13346:1;13339:9;13310:243;;;-1:-1:-1;13569:4:50;;12939:640;-1:-1:-1;;;;;;;12939:640:50:o;13584:431::-;13667:5;13661:12;13656:3;13649:25;13631:3;13720:4;13713:5;13709:16;13703:23;13758:4;13751;13746:3;13742:14;13735:28;13784:47;13825:4;13820:3;13816:14;13802:12;13784:47;:::i;:::-;13772:59;;13879:4;13872:5;13868:16;13862:23;13927:3;13921:4;13917:14;13910:4;13905:3;13901:14;13894:38;13948:61;14004:4;13988:14;13948:61;:::i;:::-;13941:68;13584:431;-1:-1:-1;;;;;13584:431:50:o;14020:251::-;14195:2;14184:9;14177:21;14158:4;14215:50;14261:2;14250:9;14246:18;14238:6;14215:50;:::i;14276:250::-;14342:6;14350;14403:2;14391:9;14382:7;14378:23;14374:32;14371:52;;;14419:1;14416;14409:12;14371:52;14455:9;14442:23;14432:33;;14484:36;14516:2;14505:9;14501:18;14484:36;:::i;:::-;14474:46;;14276:250;;;;;:::o;14531:272::-;14720:2;14709:9;14702:21;14683:4;14740:57;14793:2;14782:9;14778:18;14770:6;14740:57;:::i;14808:777::-;14863:3;14891:6;14933:1;14929;14924:3;14920:11;14916:19;14974:2;14966:5;14960:12;14956:21;14951:3;14944:34;15027:4;15020:5;15016:16;15010:23;15003:4;14998:3;14994:14;14987:47;15095:2;15087:4;15080:5;15076:16;15070:23;15066:32;15059:4;15054:3;15050:14;15043:56;;15148:4;15141:5;15137:16;15131:23;15124:4;15119:3;15115:14;15108:47;15204:4;15197:5;15193:16;15187:23;15180:4;15175:3;15171:14;15164:47;15257:4;15250:5;15246:16;15240:23;15272:42;15301:12;15272:42;:::i;:::-;15346:12;15339:4;15334:3;15330:14;15323:36;;15408:4;15401:5;15397:16;15391:23;15384:4;15379:3;15375:14;15368:47;15463:4;15456:5;15452:16;15446:23;15501:2;15494:4;15489:3;15485:14;15478:26;15520:59;15575:2;15570:3;15566:12;15550:14;15520:59;:::i;15590:858::-;15794:4;15823:2;15863;15852:9;15848:18;15893:2;15882:9;15875:21;15916:6;15951;15945:13;15982:6;15974;15967:22;16020:2;16009:9;16005:18;15998:25;;16082:2;16072:6;16069:1;16065:14;16054:9;16050:30;16046:39;16032:53;;16120:2;16112:6;16108:15;16141:1;16151:268;16165:6;16162:1;16159:13;16151:268;;;16258:2;16254:7;16242:9;16234:6;16230:22;16226:36;16221:3;16214:49;16286:53;16332:6;16323;16317:13;16286:53;:::i;:::-;16276:63;-1:-1:-1;16397:12:50;;;;16362:15;;;;16187:1;16180:9;16151:268;;;-1:-1:-1;16436:6:50;;15590:858;-1:-1:-1;;;;;;;15590:858:50:o;16453:275::-;16644:2;16633:9;16626:21;16607:4;16664:58;16718:2;16707:9;16703:18;16695:6;16664:58;:::i;16941:422::-;17039:6;17047;17100:2;17088:9;17079:7;17075:23;17071:32;17068:52;;;17116:1;17113;17106:12;17068:52;17152:9;17139:23;17129:33;;17213:2;17202:9;17198:18;17185:32;-1:-1:-1;;;;;17232:6:50;17229:30;17226:50;;;17272:1;17269;17262:12;17226:50;17295:62;17349:7;17340:6;17329:9;17325:22;17295:62;:::i;:::-;17285:72;;;16941:422;;;;;:::o;17368:315::-;17436:6;17444;17497:2;17485:9;17476:7;17472:23;17468:32;17465:52;;;17513:1;17510;17503:12;17465:52;17552:9;17539:23;17571:31;17596:5;17571:31;:::i;:::-;17621:5;17673:2;17658:18;;;;17645:32;;-1:-1:-1;;;17368:315:50:o;17868:454::-;17952:6;17960;17968;17976;18029:3;18017:9;18008:7;18004:23;18000:33;17997:53;;;18046:1;18043;18036:12;17997:53;18082:9;18069:23;18059:33;;18111:36;18143:2;18132:9;18128:18;18111:36;:::i;:::-;18101:46;;18197:2;18186:9;18182:18;18169:32;18210:31;18235:5;18210:31;:::i;:::-;17868:454;;;;-1:-1:-1;18260:5:50;;18312:2;18297:18;18284:32;;-1:-1:-1;;17868:454:50:o;18327:346::-;18546:2;18535:9;18528:21;18509:4;18566:58;18620:2;18609:9;18605:18;18597:6;18566:58;:::i;:::-;18558:66;;18660:6;18655:2;18644:9;18640:18;18633:34;18327:346;;;;;:::o;18678:834::-;18866:4;18895:2;18935;18924:9;18920:18;18965:2;18954:9;18947:21;18988:6;19023;19017:13;19054:6;19046;19039:22;19092:2;19081:9;19077:18;19070:25;;19154:2;19144:6;19141:1;19137:14;19126:9;19122:30;19118:39;19104:53;;19192:2;19184:6;19180:15;19213:1;19223:260;19237:6;19234:1;19231:13;19223:260;;;19330:2;19326:7;19314:9;19306:6;19302:22;19298:36;19293:3;19286:49;19358:45;19396:6;19387;19381:13;19358:45;:::i;:::-;19348:55;-1:-1:-1;19461:12:50;;;;19426:15;;;;19259:1;19252:9;19223:260;;19517:566;19832:6;19821:9;19814:25;19875:2;19870;19859:9;19855:18;19848:30;19795:4;19901:45;19942:2;19931:9;19927:18;19919:6;19901:45;:::i;:::-;19994:9;19986:6;19982:22;19977:2;19966:9;19962:18;19955:50;20022:55;20070:6;20062;20022:55;:::i;:::-;20014:63;19517:566;-1:-1:-1;;;;;;19517:566:50:o;20088:421::-;20329:6;20318:9;20311:25;20384:4;20376:6;20372:17;20367:2;20356:9;20352:18;20345:45;20426:2;20421;20410:9;20406:18;20399:30;20292:4;20446:57;20499:2;20488:9;20484:18;20476:6;20446:57;:::i;20514:745::-;20579:5;20632:3;20625:4;20617:6;20613:17;20609:27;20599:55;;20650:1;20647;20640:12;20599:55;20679:6;20673:13;20705:4;20729:71;20745:54;20796:2;20745:54;:::i;20729:71::-;20834:15;;;20920:1;20916:10;;;;20904:23;;20900:32;;;20865:12;;;;20944:15;;;20941:35;;;20972:1;20969;20962:12;20941:35;21008:2;21000:6;20996:15;21020:210;21036:6;21031:3;21028:15;21020:210;;;21109:3;21103:10;21126:31;21151:5;21126:31;:::i;:::-;21170:18;;21208:12;;;;21053;;21020:210;;21264:363;21359:6;21412:2;21400:9;21391:7;21387:23;21383:32;21380:52;;;21428:1;21425;21418:12;21380:52;21461:9;21455:16;-1:-1:-1;;;;;21486:6:50;21483:30;21480:50;;;21526:1;21523;21516:12;21480:50;21549:72;21613:7;21604:6;21593:9;21589:22;21549:72;:::i;21941:127::-;22002:10;21997:3;21993:20;21990:1;21983:31;22033:4;22030:1;22023:15;22057:4;22054:1;22047:15;22073:168;22146:9;;;22177;;22194:15;;;22188:22;;22174:37;22164:71;;22215:18;;:::i;22246:125::-;22311:9;;;22332:10;;;22329:36;;;22345:18;;:::i;22376:128::-;22443:9;;;22464:11;;;22461:37;;;22478:18;;:::i;22509:127::-;22570:10;22565:3;22561:20;22558:1;22551:31;22601:4;22598:1;22591:15;22625:4;22622:1;22615:15;22641:120;22681:1;22707;22697:35;;22712:18;;:::i;:::-;-1:-1:-1;22746:9:50;;22641:120::o;22766:277::-;22833:6;22886:2;22874:9;22865:7;22861:23;22857:32;22854:52;;;22902:1;22899;22892:12;22854:52;22934:9;22928:16;22987:5;22980:13;22973:21;22966:5;22963:32;22953:60;;23009:1;23006;22999:12;23048:146;23131:13;;23153:35;23131:13;23153:35;:::i;23199:136::-;23277:13;;23299:30;23277:13;23299:30;:::i;23340:156::-;23428:13;;23450:40;23428:13;23450:40;:::i;23501:670::-;23566:5;23619:3;23612:4;23604:6;23600:17;23596:27;23586:55;;23637:1;23634;23627:12;23586:55;23666:6;23660:13;23692:4;23716:71;23732:54;23783:2;23732:54;:::i;23716:71::-;23821:15;;;23907:1;23903:10;;;;23891:23;;23887:32;;;23852:12;;;;23931:15;;;23928:35;;;23959:1;23956;23949:12;23928:35;23995:2;23987:6;23983:15;24007:135;24023:6;24018:3;24015:15;24007:135;;;24089:10;;24077:23;;24120:12;;;;24040;;24007:135;;24176:914;24245:5;24293:4;24281:9;24276:3;24272:19;24268:30;24265:50;;;24311:1;24308;24301:12;24265:50;24333:22;;:::i;:::-;24324:31;;24378:44;24412:9;24378:44;:::i;:::-;24371:5;24364:59;24455:48;24499:2;24488:9;24484:18;24455:48;:::i;:::-;24450:2;24443:5;24439:14;24432:72;24536:58;24590:2;24579:9;24575:18;24536:58;:::i;:::-;24531:2;24524:5;24520:14;24513:82;24639:2;24628:9;24624:18;24618:25;-1:-1:-1;;;;;24703:2:50;24695:6;24692:14;24689:34;;;24719:1;24716;24709:12;24689:34;24755:68;24819:3;24810:6;24799:9;24795:22;24755:68;:::i;:::-;24750:2;24743:5;24739:14;24732:92;24870:3;24859:9;24855:19;24849:26;24833:42;;24900:2;24890:8;24887:16;24884:36;;;24916:1;24913;24906:12;24884:36;;24953:70;25019:3;25008:8;24997:9;24993:24;24953:70;:::i;:::-;24947:3;24940:5;24936:15;24929:95;;25078:3;25067:9;25063:19;25057:26;25051:3;25044:5;25040:15;25033:51;24176:914;;;;:::o;25095:931::-;25171:5;25224:3;25217:4;25209:6;25205:17;25201:27;25191:55;;25242:1;25239;25232:12;25191:55;25271:6;25265:13;25297:4;25321:71;25337:54;25388:2;25337:54;:::i;25321:71::-;25426:15;;;25512:1;25508:10;;;;25496:23;;25492:32;;;25457:12;;;;25536:15;;;25533:35;;;25564:1;25561;25554:12;25533:35;25600:2;25592:6;25588:15;25612:385;25628:6;25623:3;25620:15;25612:385;;;25707:3;25701:10;-1:-1:-1;;;;;25730:11:50;25727:35;25724:125;;;25803:1;25832:2;25828;25821:14;25724:125;25874:80;25950:3;25945:2;25931:11;25923:6;25919:24;25915:33;25874:80;:::i;:::-;25862:93;;-1:-1:-1;25975:12:50;;;;25645;;25612:385;;26031:953;26093:5;26141:4;26129:9;26124:3;26120:19;26116:30;26113:50;;;26159:1;26156;26149:12;26113:50;26181:22;;:::i;:::-;26172:31;;26232:9;26226:16;26219:5;26212:31;26287:2;26276:9;26272:18;26266:25;-1:-1:-1;;;;;26351:2:50;26343:6;26340:14;26337:34;;;26367:1;26364;26357:12;26337:34;26405:6;26394:9;26390:22;26380:32;;26450:3;26443:4;26439:2;26435:13;26431:23;26421:51;;26468:1;26465;26458:12;26421:51;26497:2;26491:9;26522:49;26538:32;26567:2;26538:32;:::i;26522:49::-;26594:2;26587:5;26580:17;26634:3;26629:2;26624;26620;26616:11;26612:20;26609:29;26606:49;;;26651:1;26648;26641:12;26606:49;26664:67;26728:2;26723;26716:5;26712:14;26707:2;26703;26699:11;26664:67;:::i;:::-;26758:2;26747:14;;26740:29;-1:-1:-1;26815:2:50;26800:18;;26794:25;;-1:-1:-1;26831:16:50;;;26828:36;;;26860:1;26857;26850:12;26828:36;;26896:81;26973:3;26962:8;26951:9;26947:24;26896:81;:::i;:::-;26891:2;26884:5;26880:14;26873:105;;26031:953;;;;:::o;26989:355::-;27082:6;27135:2;27123:9;27114:7;27110:23;27106:32;27103:52;;;27151:1;27148;27141:12;27103:52;27184:9;27178:16;-1:-1:-1;;;;;27209:6:50;27206:30;27203:50;;;27249:1;27246;27239:12;27203:50;27272:66;27330:7;27321:6;27310:9;27306:22;27272:66;:::i;27609:369::-;27709:6;27762:2;27750:9;27741:7;27737:23;27733:32;27730:52;;;27778:1;27775;27768:12;27730:52;27811:9;27805:16;-1:-1:-1;;;;;27836:6:50;27833:30;27830:50;;;27876:1;27873;27866:12;27830:50;27899:73;27964:7;27955:6;27944:9;27940:22;27899:73;:::i;27983:127::-;28044:10;28039:3;28035:20;28032:1;28025:31;28075:4;28072:1;28065:15;28099:4;28096:1;28089:15;28115:135;28154:3;28175:17;;;28172:43;;28195:18;;:::i;:::-;-1:-1:-1;28242:1:50;28231:13;;28115:135::o;28255:184::-;28325:6;28378:2;28366:9;28357:7;28353:23;28349:32;28346:52;;;28394:1;28391;28384:12;28346:52;-1:-1:-1;28417:16:50;;28255:184;-1:-1:-1;28255:184:50:o;28444:343::-;28661:6;28650:9;28643:25;28704:2;28699;28688:9;28684:18;28677:30;28624:4;28724:57;28777:2;28766:9;28762:18;28754:6;28724:57;:::i;29071:1163::-;29189:6;29220:2;29263;29251:9;29242:7;29238:23;29234:32;29231:52;;;29279:1;29276;29269:12;29231:52;29312:9;29306:16;-1:-1:-1;;;;;29382:2:50;29374:6;29371:14;29368:34;;;29398:1;29395;29388:12;29368:34;29436:6;29425:9;29421:22;29411:32;;29481:7;29474:4;29470:2;29466:13;29462:27;29452:55;;29503:1;29500;29493:12;29452:55;29532:2;29526:9;29555:71;29571:54;29622:2;29571:54;:::i;29555:71::-;29660:15;;;29742:1;29738:10;;;;29730:19;;29726:28;;;29691:12;;;;29766:19;;;29763:39;;;29798:1;29795;29788:12;29763:39;29830:2;29826;29822:11;29842:362;29858:6;29853:3;29850:15;29842:362;;;29937:3;29931:10;29973:2;29960:11;29957:19;29954:109;;;30017:1;30046:2;30042;30035:14;29954:109;30088:73;30153:7;30148:2;30134:11;30130:2;30126:20;30122:29;30088:73;:::i;:::-;30076:86;;-1:-1:-1;30182:12:50;;;;29875;;29842:362;;;-1:-1:-1;30223:5:50;29071:1163;-1:-1:-1;;;;;;;;29071:1163:50:o;30239:112::-;30271:1;30297;30287:35;;30302:18;;:::i;:::-;-1:-1:-1;30336:9:50;;30239:112::o;30736:127::-;30797:10;30792:3;30788:20;30785:1;30778:31;30828:4;30825:1;30818:15;30852:4;30849:1;30842:15;30868:200;30934:9;;;30907:4;30962:9;;30990:10;;31002:12;;;30986:29;31025:12;;;31017:21;;30983:56;30980:82;;;31042:18;;:::i;:::-;30980:82;30868:200;;;;:::o;31073:193::-;31112:1;31138;31128:35;;31143:18;;:::i;:::-;-1:-1:-1;;;31179:18:50;;-1:-1:-1;;31199:13:50;;31175:38;31172:64;;;31216:18;;:::i;:::-;-1:-1:-1;31250:10:50;;31073:193::o;31271:216::-;31335:9;;;31363:11;;;31310:3;31393:9;;31421:10;;31417:19;;31446:10;;31438:19;;31414:44;31411:70;;;31461:18;;:::i;31492:237::-;31564:9;;;31531:7;31589:9;;-1:-1:-1;;;31600:18:50;;31585:34;31582:60;;;31622:18;;:::i;:::-;31695:1;31686:7;31681:16;31678:1;31675:23;31671:1;31664:9;31661:38;31651:72;;31703:18;;:::i",
        "linkReferences": {},
        "immutableReferences": {
            "43896": [
                {
                    "start": 1259,
                    "length": 32
                },
                {
                    "start": 1402,
                    "length": 32
                },
                {
                    "start": 2420,
                    "length": 32
                },
                {
                    "start": 2570,
                    "length": 32
                },
                {
                    "start": 2707,
                    "length": 32
                },
                {
                    "start": 4630,
                    "length": 32
                },
                {
                    "start": 4715,
                    "length": 32
                },
                {
                    "start": 4858,
                    "length": 32
                },
                {
                    "start": 5306,
                    "length": 32
                },
                {
                    "start": 6255,
                    "length": 32
                }
            ],
            "43899": [
                {
                    "start": 1463,
                    "length": 32
                },
                {
                    "start": 1647,
                    "length": 32
                },
                {
                    "start": 2247,
                    "length": 32
                },
                {
                    "start": 4552,
                    "length": 32
                },
                {
                    "start": 4965,
                    "length": 32
                },
                {
                    "start": 6752,
                    "length": 32
                },
                {
                    "start": 7391,
                    "length": 32
                }
            ],
            "43901": [
                {
                    "start": 842,
                    "length": 32
                },
                {
                    "start": 8585,
                    "length": 32
                }
            ],
            "43903": [
                {
                    "start": 1092,
                    "length": 32
                },
                {
                    "start": 1752,
                    "length": 32
                },
                {
                    "start": 8347,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
        "SERVICE_PROVIDER_FEE_FACTOR()": "8a0fa52a",
        "addBillingPlan(uint256,(uint8,uint16,uint8,address[],uint256[],uint256))": "8815a042",
        "addTokenPriceFeed(address,address)": "166ee767",
        "calculateServiceProviderFee(uint256)": "181f914b",
        "claimTokens()": "48c54b9d",
        "convertFiatToTokenAmount(address,uint256)": "ffdda9ee",
        "createPlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])": "2ad2a3f3",
        "deletePlan(uint256)": "925a06c6",
        "deleteTokenPriceFeed(address)": "bdf5dbb2",
        "getBillingPlan(uint256,uint8)": "333160e6",
        "getNextChargeTimestamp((address,uint256,address,uint256,uint256,uint8,uint256,(uint8,uint16,uint8,address[],uint256[],uint256)))": "217786ef",
        "getPlan(uint256)": "26cd5274",
        "getPlans()": "d94a862b",
        "getRegisteredTokens()": "14cbd993",
        "getServiceProvider()": "571959e0",
        "getServiceProviderFee()": "cea98303",
        "getSubscriptionAtIndex(uint256)": "40230046",
        "getSubscriptions()": "3b47a9ac",
        "getUserSubscription(address,uint256)": "cc5d19c1",
        "handleSubscriptionCharge(uint256)": "24210bf0",
        "isOwner()": "8f32d59b",
        "isTokenRegistered(address)": "26aa101f",
        "owner()": "8da5cb5b",
        "processDueSubscriptions()": "e6f0375d",
        "removeBillingPlan(uint256,uint8)": "965c64f5",
        "renounceOwnership()": "715018a6",
        "subscribe(uint256,uint8,address,uint256)": "d916b8f6",
        "transferOwnership(address)": "f2fde38b",
        "unsubscribe(uint256)": "ad0b27fb",
        "updateBillingPlan(uint256,uint8,(uint8,uint16,uint8,address[],uint256[],uint256))": "12d230c9",
        "updatePlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])": "0fe155fe",
        "updateTokenPriceFeed(address,address)": "82d2f5b1"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_serviceProvider\",\"type\":\"address\"},{\"internalType\":\"int256\",\"name\":\"_serviceProviderFee\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MemberBeatSubscriptionManager__AllowanceTooLow\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"}],\"name\":\"MemberBeatSubscriptionManager__AlreadySubscribed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"period\",\"type\":\"uint256\"}],\"name\":\"MemberBeatSubscriptionManager__InvalidBillingPeriod\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MemberBeatSubscriptionManager__InvalidServiceProviderAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MemberBeatSubscriptionManager__InvalidSubscriptionData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"}],\"name\":\"MemberBeatSubscriptionManager__NotSubscribed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"subscriptionIndex\",\"type\":\"uint256\"}],\"name\":\"MemberBeatSubscriptionManager__SubscriptionNotDue\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"subscriptionIndex\",\"type\":\"uint256\"}],\"name\":\"MemberBeatSubscriptionManager__SubscriptionNotFound\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"MemberBeatSubscriptionManager__TokenAmountCalculationFailed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"MemberBeatSubscriptionManager__TokenApprovalFailed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"}],\"name\":\"MemberBeatSubscriptionManager__TokenFeeTransferFailed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"MemberBeatSubscriptionManager__TokenNotAllowed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"}],\"name\":\"SubscriptionCancelled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"billingCycle\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenAmount\",\"type\":\"uint256\"}],\"name\":\"SubscriptionCharged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"billingPlan\",\"type\":\"tuple\"}],\"name\":\"SubscriptionCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"subscriptionIndex\",\"type\":\"uint256\"}],\"name\":\"SubscriptionDueForCharge\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"SERVICE_PROVIDER_FEE_FACTOR\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"_billingPlan\",\"type\":\"tuple\"}],\"name\":\"addBillingPlan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_priceFeedAddress\",\"type\":\"address\"}],\"name\":\"addTokenPriceFeed\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"calculateServiceProviderFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_fiatAmount\",\"type\":\"uint256\"}],\"name\":\"convertFiatToTokenAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_planName\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan[]\",\"name\":\"_billingPlans\",\"type\":\"tuple[]\"}],\"name\":\"createPlan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"}],\"name\":\"deletePlan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenAddress\",\"type\":\"address\"}],\"name\":\"deleteTokenPriceFeed\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"_billingPlanIdex\",\"type\":\"uint8\"}],\"name\":\"getBillingPlan\",\"outputs\":[{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"startTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"nextChargeTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"enum MemberBeatDataTypes.Status\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"billingCycle\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"billingPlan\",\"type\":\"tuple\"}],\"internalType\":\"struct MemberBeatDataTypes.Subscription\",\"name\":\"subscription\",\"type\":\"tuple\"}],\"name\":\"getNextChargeTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"}],\"name\":\"getPlan\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"planName\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan[]\",\"name\":\"billingPlans\",\"type\":\"tuple[]\"}],\"internalType\":\"struct MemberBeatDataTypes.Plan\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPlans\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"planName\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan[]\",\"name\":\"billingPlans\",\"type\":\"tuple[]\"}],\"internalType\":\"struct MemberBeatDataTypes.Plan[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRegisteredTokens\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getServiceProvider\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getServiceProviderFee\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getSubscriptionAtIndex\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"startTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"nextChargeTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"enum MemberBeatDataTypes.Status\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"billingCycle\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"billingPlan\",\"type\":\"tuple\"}],\"internalType\":\"struct MemberBeatDataTypes.Subscription\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getSubscriptions\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"startTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"nextChargeTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"enum MemberBeatDataTypes.Status\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"billingCycle\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"billingPlan\",\"type\":\"tuple\"}],\"internalType\":\"struct MemberBeatDataTypes.Subscription[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"}],\"name\":\"getUserSubscription\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"startTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"nextChargeTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"enum MemberBeatDataTypes.Status\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"billingCycle\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"billingPlan\",\"type\":\"tuple\"}],\"internalType\":\"struct MemberBeatDataTypes.Subscription\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"subscriptionIndex\",\"type\":\"uint256\"}],\"name\":\"handleSubscriptionCharge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenAddress\",\"type\":\"address\"}],\"name\":\"isTokenRegistered\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"processDueSubscriptions\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"_billingPlanIndex\",\"type\":\"uint8\"}],\"name\":\"removeBillingPlan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"_billingPlanIndex\",\"type\":\"uint8\"},{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_startTimestamp\",\"type\":\"uint256\"}],\"name\":\"subscribe\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"startTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"nextChargeTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"enum MemberBeatDataTypes.Status\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"billingCycle\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"billingPlan\",\"type\":\"tuple\"}],\"internalType\":\"struct MemberBeatDataTypes.Subscription\",\"name\":\"\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"}],\"name\":\"unsubscribe\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"_billingPlanIndex\",\"type\":\"uint8\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"_billingPlan\",\"type\":\"tuple\"}],\"name\":\"updateBillingPlan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_planName\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan[]\",\"name\":\"_billingPlans\",\"type\":\"tuple[]\"}],\"name\":\"updatePlan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_newPriceFeedAddress\",\"type\":\"address\"}],\"name\":\"updateTokenPriceFeed\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"This contract integrates with SubscriptionPlansRegistry and TokenPriceFeedRegistry to handle subscription plans and token price feeds. It includes functionality for subscribing, unsubscribing, creating, updating, and deleting plans, as well as charging subscriptions.Utilizes the SafeERC20 library for safe token transfers.\",\"errors\":{\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC-20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"addBillingPlan(uint256,(uint8,uint16,uint8,address[],uint256[],uint256))\":{\"params\":{\"_billingPlan\":\"The billing plan to add.\",\"_planId\":\"The ID of the plan to add the billing plan to.\"}},\"addTokenPriceFeed(address,address)\":{\"params\":{\"_priceFeedAddress\":\"The address of the price feed.\",\"_tokenAddress\":\"The address of the token.\"}},\"calculateServiceProviderFee(uint256)\":{\"params\":{\"amount\":\"The amount to calculate the fee for.\"},\"returns\":{\"_0\":\"The calculated service provider fee.\"}},\"claimTokens()\":{\"details\":\"This function retrieves the list of charged token addresses, transfers their balances to the owner's address, and then resets the list of charged token addresses.This function can only be called by the contract owner.Since this function is for the owner only, and the tokens are in our control, it is safe to loop and transfer.\"},\"convertFiatToTokenAmount(address,uint256)\":{\"params\":{\"_fiatAmount\":\"The fiat amount to be converted.\",\"_tokenAddress\":\"The address of the token.\"},\"returns\":{\"_0\":\"The equivalent token amount.\"}},\"createPlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])\":{\"params\":{\"_billingPlans\":\"The billing plans associated with the new plan.\",\"_planId\":\"The ID of the new plan.\",\"_planName\":\"The name of the new plan.\"}},\"deletePlan(uint256)\":{\"params\":{\"_planId\":\"The ID of the plan to delete.\"}},\"deleteTokenPriceFeed(address)\":{\"params\":{\"_tokenAddress\":\"The address of the token.     \"}},\"getBillingPlan(uint256,uint8)\":{\"params\":{\"_billingPlanIdex\":\"The index of the billing plan within the subscription plan.\",\"_planId\":\"The ID of the subscription plan.\"},\"returns\":{\"_0\":\"BillingPlan struct containing details of the requested billing plan.\"}},\"getNextChargeTimestamp((address,uint256,address,uint256,uint256,uint8,uint256,(uint8,uint16,uint8,address[],uint256[],uint256)))\":{\"params\":{\"subscription\":\"The subscription details for which the next charge timestamp is calculated.\"},\"returns\":{\"_0\":\"The next charge timestamp for the subscription.\"}},\"getPlan(uint256)\":{\"params\":{\"_planId\":\"The ID of the plan to retrieve.\"},\"returns\":{\"_0\":\"Returns the plan details.\"}},\"getPlans()\":{\"returns\":{\"_0\":\"Returns an array of all plans.\"}},\"getRegisteredTokens()\":{\"returns\":{\"_0\":\"Returns an array of addresses of all registered tokens.\"}},\"getServiceProvider()\":{\"returns\":{\"_0\":\"The address of the service provider.\"}},\"getServiceProviderFee()\":{\"returns\":{\"_0\":\"The service provider fee as an integer.\"}},\"getSubscriptionAtIndex(uint256)\":{\"details\":\"This function can only be called by the owner.\",\"params\":{\"_index\":\"The index of the subscription to retrieve.\"},\"returns\":{\"_0\":\"The subscription details.\"}},\"getSubscriptions()\":{\"returns\":{\"_0\":\"Returns an array of all subscriptions.\"}},\"getUserSubscription(address,uint256)\":{\"params\":{\"_account\":\"The address of the user.\",\"_planId\":\"The ID of the plan.\"},\"returns\":{\"_0\":\"Returns the user's subscription details for the specified plan.\"}},\"handleSubscriptionCharge(uint256)\":{\"details\":\"This function checks if a subscription is due for charge and processes the charge if applicable.\",\"params\":{\"subscriptionIndex\":\"The index of the subscription to be charged.\"}},\"isOwner()\":{\"returns\":{\"_0\":\"Returns true if the caller is the owner, otherwise false.\"}},\"isTokenRegistered(address)\":{\"params\":{\"_tokenAddress\":\"The address of the token.\"},\"returns\":{\"_0\":\"Returns true if the token is registered, otherwise false.\"}},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"processDueSubscriptions()\":{\"details\":\"This function checks each subscription scheduled for today and emits an event if the subscription is due for a charge.\"},\"removeBillingPlan(uint256,uint8)\":{\"params\":{\"_billingPlanIndex\":\"The index of the billing plan within the plan.\",\"_planId\":\"The ID of the plan containing the billing plan to remove.\"}},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"subscribe(uint256,uint8,address,uint256)\":{\"params\":{\"_billingPlanIndex\":\"The index of the billing plan within the selected plan.\",\"_planId\":\"The ID of the plan to subscribe to.\",\"_startTimestamp\":\"The start timestamp for the subscription.\",\"_token\":\"The address of the token to be used for the subscription.\"},\"returns\":{\"_0\":\"Returns the subscription details and the spent token amount.\"}},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"},\"unsubscribe(uint256)\":{\"params\":{\"_planId\":\"The ID of the plan to unsubscribe from.\"}},\"updateBillingPlan(uint256,uint8,(uint8,uint16,uint8,address[],uint256[],uint256))\":{\"params\":{\"_billingPlan\":\"The updated billing plan details.\",\"_billingPlanIndex\":\"The index of the billing plan within the plan.\",\"_planId\":\"The ID of the plan containing the billing plan to update.\"}},\"updatePlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])\":{\"params\":{\"_billingPlans\":\"The updated billing plans associated with the plan.\",\"_planId\":\"The ID of the plan to update.\",\"_planName\":\"The updated name of the plan.\"}},\"updateTokenPriceFeed(address,address)\":{\"params\":{\"_newPriceFeedAddress\":\"The new address of the price feed.\",\"_tokenAddress\":\"The address of the token.\"}}},\"title\":\"MemberBeatSubscriptionManager\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"addBillingPlan(uint256,(uint8,uint16,uint8,address[],uint256[],uint256))\":{\"notice\":\"Adds a billing plan to an existing plan.\"},\"addTokenPriceFeed(address,address)\":{\"notice\":\"Adds a price feed address for a token.\"},\"calculateServiceProviderFee(uint256)\":{\"notice\":\"Calculates the service provider fee for a given amount.\"},\"claimTokens()\":{\"notice\":\"Transfers the balances of all charged tokens from the contract to the owner's wallet.\"},\"convertFiatToTokenAmount(address,uint256)\":{\"notice\":\"Converts a fiat amount to a token amount.\"},\"createPlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])\":{\"notice\":\"Creates a new plan.\"},\"deletePlan(uint256)\":{\"notice\":\"Deletes an existing plan.\"},\"deleteTokenPriceFeed(address)\":{\"notice\":\"Removes the price feed address for a token.\"},\"getBillingPlan(uint256,uint8)\":{\"notice\":\"Retrieves a specific billing plan from the subscription plans registry.\"},\"getNextChargeTimestamp((address,uint256,address,uint256,uint256,uint8,uint256,(uint8,uint16,uint8,address[],uint256[],uint256)))\":{\"notice\":\"Calculates the next charge timestamp for a given subscription.\"},\"getPlan(uint256)\":{\"notice\":\"Retrieves a plan by its ID.\"},\"getPlans()\":{\"notice\":\"Retrieves all plans.\"},\"getRegisteredTokens()\":{\"notice\":\"Retrieves all registered tokens.\"},\"getServiceProvider()\":{\"notice\":\"Retrieves the address of the service provider.\"},\"getServiceProviderFee()\":{\"notice\":\"Retrieves the service provider fee.\"},\"getSubscriptionAtIndex(uint256)\":{\"notice\":\"Retrieves a subscription at a specific index.\"},\"getSubscriptions()\":{\"notice\":\"Retrieves all subscriptions.\"},\"getUserSubscription(address,uint256)\":{\"notice\":\"Retrieves a user's subscription for a specific plan.\"},\"handleSubscriptionCharge(uint256)\":{\"notice\":\"Handles the charge process for a specific subscription.\"},\"isOwner()\":{\"notice\":\"Checks if the caller is the owner of the contract.\"},\"isTokenRegistered(address)\":{\"notice\":\"Checks if a token is registered.\"},\"processDueSubscriptions()\":{\"notice\":\"Processes subscriptions that are due for charge.\"},\"removeBillingPlan(uint256,uint8)\":{\"notice\":\"Removes a billing plan from an existing plan.\"},\"subscribe(uint256,uint8,address,uint256)\":{\"notice\":\"Subscribes a user to a plan.\"},\"unsubscribe(uint256)\":{\"notice\":\"Unsubscribes a user from a plan.\"},\"updateBillingPlan(uint256,uint8,(uint8,uint16,uint8,address[],uint256[],uint256))\":{\"notice\":\"Updates a billing plan within an existing plan.\"},\"updatePlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])\":{\"notice\":\"Updates an existing plan.\"},\"updateTokenPriceFeed(address,address)\":{\"notice\":\"Updates the price feed address for a token.\"}},\"notice\":\"Manages subscriptions, including creation, charging, and cancellation of subscriptions.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/MemberBeatSubscriptionManager.sol\":\"MemberBeatSubscriptionManager\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@chainlink/contracts/=lib/chainlink-brownie-contracts/contracts/src/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@solidity-datetime/contracts/=lib/solidity-datetime/contracts/\",\":chainlink-brownie-contracts/=lib/chainlink-brownie-contracts/contracts/src/v0.6/vendor/@arbitrum/nitro-contracts/src/\",\":ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":foundry-devops/=lib/foundry-devops/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solidity-datetime/=lib/solidity-datetime/\"]},\"sources\":{\"lib/chainlink-brownie-contracts/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol\":{\"keccak256\":\"0xfe4e8bb4861bb3860ba890ab91a3b818ec66e5a8f544fb608cfcb73f433472cd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://644cff84052e1e82b5bb502b2a46e8f142a62b0db4cd9b38200798ba8373c6f7\",\"dweb:/ipfs/QmTa99QHrJBn3SXDizquPBUiTxVCNKQrHgaWJhuds5Sce2\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1363.sol\":{\"keccak256\":\"0x9b6b3e7803bc5f2f8cd7ad57db8ac1def61a9930a5a3107df4882e028a9605d7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://da62d6be1f5c6edf577f0cb45666a8aa9c2086a4bac87d95d65f02e2f4c36a4b\",\"dweb:/ipfs/QmNkpvBpoCMvX8JwAFNSc5XxJ2q5BXJpL5L1txb4QkqVFF\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a\",\"dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba\",\"dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db\",\"dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0xca2ae13e0610f6a99238dd00b97bd786bc92732dae6d6b9d61f573ec51018310\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://75f8c71ce0c91c40dd5f249ace0b7d8270f8f1767231bcf71490f7157d6ba862\",\"dweb:/ipfs/QmYXgxeDyFHvz3JsXxLEYN6GNUR44ThHeFj5XkpkgMoG4w\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0x9d8da059267bac779a2dbbb9a26c2acf00ca83085e105d62d5d4ef96054a47f5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c78e2aa4313323cecd1ef12a8d6265b96beee1a199923abf55d9a2a9e291ad23\",\"dweb:/ipfs/QmUTs2KStXucZezzFo3EYeqYu47utu56qrF7jj1Gue65vb\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Errors.sol\":{\"keccak256\":\"0x6afa713bfd42cf0f7656efa91201007ac465e42049d7de1d50753a373648c123\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ba1d02f4847670a1b83dec9f7d37f0b0418d6043447b69f3a29a5f9efc547fcf\",\"dweb:/ipfs/QmQ7iH2keLNUKgq2xSWcRmuBE5eZ3F5whYAkAGzCNNoEWB\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621\",\"dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL\"]},\"lib/solidity-datetime/contracts/DateTime.sol\":{\"keccak256\":\"0x3e6031d05cd13aa1ea1bcaf59d6a4b20054ddc18a86514e44e66cd4ed4dc4445\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ce88e00d8a888f45bcf3ef95df7bcf8b90b97e4465b0427ba3407e3d19dc931\",\"dweb:/ipfs/QmWwtMzN9fpxWF3RvhzsPFjQCsmiKhWV7LMKngKj5Xu3ne\"]},\"src/IMemberBeatSubscriptionManager.sol\":{\"keccak256\":\"0x812e5e35322b1a0ef9c3bcae190cd372b4fc3696379fe600cf6bf3905673ed7f\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://680621150185ef2320ce25897e9c29d2e7a1ebeaff23f3a00d3aa482d160fcf3\",\"dweb:/ipfs/QmUAAuGLMgztucaDk49MEzTGJVMSkg37J7Hg6Fahd8nunn\"]},\"src/MemberBeatSubscriptionManager.sol\":{\"keccak256\":\"0x1d090f8c3d73ddcc83d171eec18fbdc41f51862b83818fc9786e7539346e231a\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://88139182f33aa815ec42ee8b10a71c31e66d0f7034893b6299349507dd184ce4\",\"dweb:/ipfs/QmXmuroVbaHpFxw77xB7pR9t9Rap9m8vi4CUconAmBtwFq\"]},\"src/common/MemberBeatDataTypes.sol\":{\"keccak256\":\"0x2a716bd1cde8c352a7bdc5b0e04506c0c5b41bd504ebe605b2de7636d5fb4480\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://94cdddbe1a788bf345f532712f8b0c075e8bb133956f1dfbebb282423ed70bed\",\"dweb:/ipfs/Qmes6vnDZaEddeWcr78BvXx3ZGEjWPQWm6AG8qMvKWydeb\"]},\"src/registry/SubscriptionPlansRegistry.sol\":{\"keccak256\":\"0x8631be64d6d6f75aa29179809533685dd0cc330d83cc8a72fc92f44ba6cb3171\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://5ec9384ac60abe4ba05b43d7502b233e5d4dee0458e1653bf23008b0cd573f9d\",\"dweb:/ipfs/QmciScEbLaSoDB51uCGdPsNE7vXpov79ahtHZHfAMDTKw9\"]},\"src/registry/TokenPriceFeedRegistry.sol\":{\"keccak256\":\"0x57e17711a9409ee1cf4c55785845e4be2853e3499a4cc34df8e33589e0e9299a\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://1312c685065ae469ca4e07161d13678aa1ccb5513115570a2a59e7c090515d46\",\"dweb:/ipfs/QmaimCsSQ3fCPj4WnHsWfQtwYY75MtEW2vfos9ZZTLVs4X\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_serviceProvider",
                            "type": "address"
                        },
                        {
                            "internalType": "int256",
                            "name": "_serviceProviderFee",
                            "type": "int256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "MemberBeatSubscriptionManager__AllowanceTooLow"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "planId",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "MemberBeatSubscriptionManager__AlreadySubscribed"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "period",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "MemberBeatSubscriptionManager__InvalidBillingPeriod"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "MemberBeatSubscriptionManager__InvalidServiceProviderAddress"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "MemberBeatSubscriptionManager__InvalidSubscriptionData"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "planId",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "MemberBeatSubscriptionManager__NotSubscribed"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "subscriptionIndex",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "MemberBeatSubscriptionManager__SubscriptionNotDue"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "subscriptionIndex",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "MemberBeatSubscriptionManager__SubscriptionNotFound"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "planId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "MemberBeatSubscriptionManager__TokenAmountCalculationFailed"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "MemberBeatSubscriptionManager__TokenApprovalFailed"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "fee",
                            "type": "uint256"
                        }
                    ],
                    "type": "error",
                    "name": "MemberBeatSubscriptionManager__TokenFeeTransferFailed"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "MemberBeatSubscriptionManager__TokenNotAllowed"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "OwnableInvalidOwner"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "OwnableUnauthorizedAccount"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        }
                    ],
                    "type": "error",
                    "name": "SafeERC20FailedOperation"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "previousOwner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "OwnershipTransferred",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "planId",
                            "type": "uint256",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "SubscriptionCancelled",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "billingCycle",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "tokenAmount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "SubscriptionCharged",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "planId",
                            "type": "uint256",
                            "indexed": true
                        },
                        {
                            "internalType": "struct MemberBeatDataTypes.BillingPlan",
                            "name": "billingPlan",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "enum MemberBeatDataTypes.Period",
                                    "name": "period",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "periodValue",
                                    "type": "uint16"
                                },
                                {
                                    "internalType": "enum MemberBeatDataTypes.PricingType",
                                    "name": "pricingType",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "address[]",
                                    "name": "tokenAddresses",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "tokenPrices",
                                    "type": "uint256[]"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "fiatPrice",
                                    "type": "uint256"
                                }
                            ],
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "SubscriptionCreated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "subscriptionIndex",
                            "type": "uint256",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "SubscriptionDueForCharge",
                    "anonymous": false
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "SERVICE_PROVIDER_FEE_FACTOR",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_planId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "struct MemberBeatDataTypes.BillingPlan",
                            "name": "_billingPlan",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "enum MemberBeatDataTypes.Period",
                                    "name": "period",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "periodValue",
                                    "type": "uint16"
                                },
                                {
                                    "internalType": "enum MemberBeatDataTypes.PricingType",
                                    "name": "pricingType",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "address[]",
                                    "name": "tokenAddresses",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "tokenPrices",
                                    "type": "uint256[]"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "fiatPrice",
                                    "type": "uint256"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "addBillingPlan"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_tokenAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_priceFeedAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "addTokenPriceFeed"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "calculateServiceProviderFee",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "claimTokens"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_tokenAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_fiatAmount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "convertFiatToTokenAmount",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_planId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "_planName",
                            "type": "string"
                        },
                        {
                            "internalType": "struct MemberBeatDataTypes.BillingPlan[]",
                            "name": "_billingPlans",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "enum MemberBeatDataTypes.Period",
                                    "name": "period",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "periodValue",
                                    "type": "uint16"
                                },
                                {
                                    "internalType": "enum MemberBeatDataTypes.PricingType",
                                    "name": "pricingType",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "address[]",
                                    "name": "tokenAddresses",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "tokenPrices",
                                    "type": "uint256[]"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "fiatPrice",
                                    "type": "uint256"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "createPlan"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_planId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "deletePlan"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_tokenAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "deleteTokenPriceFeed"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_planId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint8",
                            "name": "_billingPlanIdex",
                            "type": "uint8"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getBillingPlan",
                    "outputs": [
                        {
                            "internalType": "struct MemberBeatDataTypes.BillingPlan",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "enum MemberBeatDataTypes.Period",
                                    "name": "period",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "periodValue",
                                    "type": "uint16"
                                },
                                {
                                    "internalType": "enum MemberBeatDataTypes.PricingType",
                                    "name": "pricingType",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "address[]",
                                    "name": "tokenAddresses",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "tokenPrices",
                                    "type": "uint256[]"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "fiatPrice",
                                    "type": "uint256"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "struct MemberBeatDataTypes.Subscription",
                            "name": "subscription",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "account",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "planId",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "startTimestamp",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "nextChargeTimestamp",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "enum MemberBeatDataTypes.Status",
                                    "name": "status",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "billingCycle",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "struct MemberBeatDataTypes.BillingPlan",
                                    "name": "billingPlan",
                                    "type": "tuple",
                                    "components": [
                                        {
                                            "internalType": "enum MemberBeatDataTypes.Period",
                                            "name": "period",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "uint16",
                                            "name": "periodValue",
                                            "type": "uint16"
                                        },
                                        {
                                            "internalType": "enum MemberBeatDataTypes.PricingType",
                                            "name": "pricingType",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "address[]",
                                            "name": "tokenAddresses",
                                            "type": "address[]"
                                        },
                                        {
                                            "internalType": "uint256[]",
                                            "name": "tokenPrices",
                                            "type": "uint256[]"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "fiatPrice",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "getNextChargeTimestamp",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_planId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getPlan",
                    "outputs": [
                        {
                            "internalType": "struct MemberBeatDataTypes.Plan",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "planId",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "string",
                                    "name": "planName",
                                    "type": "string"
                                },
                                {
                                    "internalType": "struct MemberBeatDataTypes.BillingPlan[]",
                                    "name": "billingPlans",
                                    "type": "tuple[]",
                                    "components": [
                                        {
                                            "internalType": "enum MemberBeatDataTypes.Period",
                                            "name": "period",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "uint16",
                                            "name": "periodValue",
                                            "type": "uint16"
                                        },
                                        {
                                            "internalType": "enum MemberBeatDataTypes.PricingType",
                                            "name": "pricingType",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "address[]",
                                            "name": "tokenAddresses",
                                            "type": "address[]"
                                        },
                                        {
                                            "internalType": "uint256[]",
                                            "name": "tokenPrices",
                                            "type": "uint256[]"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "fiatPrice",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getPlans",
                    "outputs": [
                        {
                            "internalType": "struct MemberBeatDataTypes.Plan[]",
                            "name": "",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "planId",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "string",
                                    "name": "planName",
                                    "type": "string"
                                },
                                {
                                    "internalType": "struct MemberBeatDataTypes.BillingPlan[]",
                                    "name": "billingPlans",
                                    "type": "tuple[]",
                                    "components": [
                                        {
                                            "internalType": "enum MemberBeatDataTypes.Period",
                                            "name": "period",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "uint16",
                                            "name": "periodValue",
                                            "type": "uint16"
                                        },
                                        {
                                            "internalType": "enum MemberBeatDataTypes.PricingType",
                                            "name": "pricingType",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "address[]",
                                            "name": "tokenAddresses",
                                            "type": "address[]"
                                        },
                                        {
                                            "internalType": "uint256[]",
                                            "name": "tokenPrices",
                                            "type": "uint256[]"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "fiatPrice",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getRegisteredTokens",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "",
                            "type": "address[]"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getServiceProvider",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getServiceProviderFee",
                    "outputs": [
                        {
                            "internalType": "int256",
                            "name": "",
                            "type": "int256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_index",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getSubscriptionAtIndex",
                    "outputs": [
                        {
                            "internalType": "struct MemberBeatDataTypes.Subscription",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "account",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "planId",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "startTimestamp",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "nextChargeTimestamp",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "enum MemberBeatDataTypes.Status",
                                    "name": "status",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "billingCycle",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "struct MemberBeatDataTypes.BillingPlan",
                                    "name": "billingPlan",
                                    "type": "tuple",
                                    "components": [
                                        {
                                            "internalType": "enum MemberBeatDataTypes.Period",
                                            "name": "period",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "uint16",
                                            "name": "periodValue",
                                            "type": "uint16"
                                        },
                                        {
                                            "internalType": "enum MemberBeatDataTypes.PricingType",
                                            "name": "pricingType",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "address[]",
                                            "name": "tokenAddresses",
                                            "type": "address[]"
                                        },
                                        {
                                            "internalType": "uint256[]",
                                            "name": "tokenPrices",
                                            "type": "uint256[]"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "fiatPrice",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getSubscriptions",
                    "outputs": [
                        {
                            "internalType": "struct MemberBeatDataTypes.Subscription[]",
                            "name": "",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "account",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "planId",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "startTimestamp",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "nextChargeTimestamp",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "enum MemberBeatDataTypes.Status",
                                    "name": "status",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "billingCycle",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "struct MemberBeatDataTypes.BillingPlan",
                                    "name": "billingPlan",
                                    "type": "tuple",
                                    "components": [
                                        {
                                            "internalType": "enum MemberBeatDataTypes.Period",
                                            "name": "period",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "uint16",
                                            "name": "periodValue",
                                            "type": "uint16"
                                        },
                                        {
                                            "internalType": "enum MemberBeatDataTypes.PricingType",
                                            "name": "pricingType",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "address[]",
                                            "name": "tokenAddresses",
                                            "type": "address[]"
                                        },
                                        {
                                            "internalType": "uint256[]",
                                            "name": "tokenPrices",
                                            "type": "uint256[]"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "fiatPrice",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_account",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_planId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getUserSubscription",
                    "outputs": [
                        {
                            "internalType": "struct MemberBeatDataTypes.Subscription",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "account",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "planId",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "startTimestamp",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "nextChargeTimestamp",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "enum MemberBeatDataTypes.Status",
                                    "name": "status",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "billingCycle",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "struct MemberBeatDataTypes.BillingPlan",
                                    "name": "billingPlan",
                                    "type": "tuple",
                                    "components": [
                                        {
                                            "internalType": "enum MemberBeatDataTypes.Period",
                                            "name": "period",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "uint16",
                                            "name": "periodValue",
                                            "type": "uint16"
                                        },
                                        {
                                            "internalType": "enum MemberBeatDataTypes.PricingType",
                                            "name": "pricingType",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "address[]",
                                            "name": "tokenAddresses",
                                            "type": "address[]"
                                        },
                                        {
                                            "internalType": "uint256[]",
                                            "name": "tokenPrices",
                                            "type": "uint256[]"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "fiatPrice",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "subscriptionIndex",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "handleSubscriptionCharge"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isOwner",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_tokenAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "isTokenRegistered",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "owner",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "processDueSubscriptions"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_planId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint8",
                            "name": "_billingPlanIndex",
                            "type": "uint8"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "removeBillingPlan"
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "renounceOwnership"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_planId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint8",
                            "name": "_billingPlanIndex",
                            "type": "uint8"
                        },
                        {
                            "internalType": "address",
                            "name": "_token",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_startTimestamp",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "subscribe",
                    "outputs": [
                        {
                            "internalType": "struct MemberBeatDataTypes.Subscription",
                            "name": "",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "account",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "planId",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "token",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "startTimestamp",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "nextChargeTimestamp",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "enum MemberBeatDataTypes.Status",
                                    "name": "status",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "billingCycle",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "struct MemberBeatDataTypes.BillingPlan",
                                    "name": "billingPlan",
                                    "type": "tuple",
                                    "components": [
                                        {
                                            "internalType": "enum MemberBeatDataTypes.Period",
                                            "name": "period",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "uint16",
                                            "name": "periodValue",
                                            "type": "uint16"
                                        },
                                        {
                                            "internalType": "enum MemberBeatDataTypes.PricingType",
                                            "name": "pricingType",
                                            "type": "uint8"
                                        },
                                        {
                                            "internalType": "address[]",
                                            "name": "tokenAddresses",
                                            "type": "address[]"
                                        },
                                        {
                                            "internalType": "uint256[]",
                                            "name": "tokenPrices",
                                            "type": "uint256[]"
                                        },
                                        {
                                            "internalType": "uint256",
                                            "name": "fiatPrice",
                                            "type": "uint256"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferOwnership"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_planId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "unsubscribe"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_planId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint8",
                            "name": "_billingPlanIndex",
                            "type": "uint8"
                        },
                        {
                            "internalType": "struct MemberBeatDataTypes.BillingPlan",
                            "name": "_billingPlan",
                            "type": "tuple",
                            "components": [
                                {
                                    "internalType": "enum MemberBeatDataTypes.Period",
                                    "name": "period",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "periodValue",
                                    "type": "uint16"
                                },
                                {
                                    "internalType": "enum MemberBeatDataTypes.PricingType",
                                    "name": "pricingType",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "address[]",
                                    "name": "tokenAddresses",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "tokenPrices",
                                    "type": "uint256[]"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "fiatPrice",
                                    "type": "uint256"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "updateBillingPlan"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_planId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "_planName",
                            "type": "string"
                        },
                        {
                            "internalType": "struct MemberBeatDataTypes.BillingPlan[]",
                            "name": "_billingPlans",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "enum MemberBeatDataTypes.Period",
                                    "name": "period",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "uint16",
                                    "name": "periodValue",
                                    "type": "uint16"
                                },
                                {
                                    "internalType": "enum MemberBeatDataTypes.PricingType",
                                    "name": "pricingType",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "address[]",
                                    "name": "tokenAddresses",
                                    "type": "address[]"
                                },
                                {
                                    "internalType": "uint256[]",
                                    "name": "tokenPrices",
                                    "type": "uint256[]"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "fiatPrice",
                                    "type": "uint256"
                                }
                            ]
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "updatePlan"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_tokenAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_newPriceFeedAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "updateTokenPriceFeed"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "addBillingPlan(uint256,(uint8,uint16,uint8,address[],uint256[],uint256))": {
                        "params": {
                            "_billingPlan": "The billing plan to add.",
                            "_planId": "The ID of the plan to add the billing plan to."
                        }
                    },
                    "addTokenPriceFeed(address,address)": {
                        "params": {
                            "_priceFeedAddress": "The address of the price feed.",
                            "_tokenAddress": "The address of the token."
                        }
                    },
                    "calculateServiceProviderFee(uint256)": {
                        "params": {
                            "amount": "The amount to calculate the fee for."
                        },
                        "returns": {
                            "_0": "The calculated service provider fee."
                        }
                    },
                    "claimTokens()": {
                        "details": "This function retrieves the list of charged token addresses, transfers their balances to the owner's address, and then resets the list of charged token addresses.This function can only be called by the contract owner.Since this function is for the owner only, and the tokens are in our control, it is safe to loop and transfer."
                    },
                    "convertFiatToTokenAmount(address,uint256)": {
                        "params": {
                            "_fiatAmount": "The fiat amount to be converted.",
                            "_tokenAddress": "The address of the token."
                        },
                        "returns": {
                            "_0": "The equivalent token amount."
                        }
                    },
                    "createPlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])": {
                        "params": {
                            "_billingPlans": "The billing plans associated with the new plan.",
                            "_planId": "The ID of the new plan.",
                            "_planName": "The name of the new plan."
                        }
                    },
                    "deletePlan(uint256)": {
                        "params": {
                            "_planId": "The ID of the plan to delete."
                        }
                    },
                    "deleteTokenPriceFeed(address)": {
                        "params": {
                            "_tokenAddress": "The address of the token.     "
                        }
                    },
                    "getBillingPlan(uint256,uint8)": {
                        "params": {
                            "_billingPlanIdex": "The index of the billing plan within the subscription plan.",
                            "_planId": "The ID of the subscription plan."
                        },
                        "returns": {
                            "_0": "BillingPlan struct containing details of the requested billing plan."
                        }
                    },
                    "getNextChargeTimestamp((address,uint256,address,uint256,uint256,uint8,uint256,(uint8,uint16,uint8,address[],uint256[],uint256)))": {
                        "params": {
                            "subscription": "The subscription details for which the next charge timestamp is calculated."
                        },
                        "returns": {
                            "_0": "The next charge timestamp for the subscription."
                        }
                    },
                    "getPlan(uint256)": {
                        "params": {
                            "_planId": "The ID of the plan to retrieve."
                        },
                        "returns": {
                            "_0": "Returns the plan details."
                        }
                    },
                    "getPlans()": {
                        "returns": {
                            "_0": "Returns an array of all plans."
                        }
                    },
                    "getRegisteredTokens()": {
                        "returns": {
                            "_0": "Returns an array of addresses of all registered tokens."
                        }
                    },
                    "getServiceProvider()": {
                        "returns": {
                            "_0": "The address of the service provider."
                        }
                    },
                    "getServiceProviderFee()": {
                        "returns": {
                            "_0": "The service provider fee as an integer."
                        }
                    },
                    "getSubscriptionAtIndex(uint256)": {
                        "details": "This function can only be called by the owner.",
                        "params": {
                            "_index": "The index of the subscription to retrieve."
                        },
                        "returns": {
                            "_0": "The subscription details."
                        }
                    },
                    "getSubscriptions()": {
                        "returns": {
                            "_0": "Returns an array of all subscriptions."
                        }
                    },
                    "getUserSubscription(address,uint256)": {
                        "params": {
                            "_account": "The address of the user.",
                            "_planId": "The ID of the plan."
                        },
                        "returns": {
                            "_0": "Returns the user's subscription details for the specified plan."
                        }
                    },
                    "handleSubscriptionCharge(uint256)": {
                        "details": "This function checks if a subscription is due for charge and processes the charge if applicable.",
                        "params": {
                            "subscriptionIndex": "The index of the subscription to be charged."
                        }
                    },
                    "isOwner()": {
                        "returns": {
                            "_0": "Returns true if the caller is the owner, otherwise false."
                        }
                    },
                    "isTokenRegistered(address)": {
                        "params": {
                            "_tokenAddress": "The address of the token."
                        },
                        "returns": {
                            "_0": "Returns true if the token is registered, otherwise false."
                        }
                    },
                    "owner()": {
                        "details": "Returns the address of the current owner."
                    },
                    "processDueSubscriptions()": {
                        "details": "This function checks each subscription scheduled for today and emits an event if the subscription is due for a charge."
                    },
                    "removeBillingPlan(uint256,uint8)": {
                        "params": {
                            "_billingPlanIndex": "The index of the billing plan within the plan.",
                            "_planId": "The ID of the plan containing the billing plan to remove."
                        }
                    },
                    "renounceOwnership()": {
                        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
                    },
                    "subscribe(uint256,uint8,address,uint256)": {
                        "params": {
                            "_billingPlanIndex": "The index of the billing plan within the selected plan.",
                            "_planId": "The ID of the plan to subscribe to.",
                            "_startTimestamp": "The start timestamp for the subscription.",
                            "_token": "The address of the token to be used for the subscription."
                        },
                        "returns": {
                            "_0": "Returns the subscription details and the spent token amount."
                        }
                    },
                    "transferOwnership(address)": {
                        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
                    },
                    "unsubscribe(uint256)": {
                        "params": {
                            "_planId": "The ID of the plan to unsubscribe from."
                        }
                    },
                    "updateBillingPlan(uint256,uint8,(uint8,uint16,uint8,address[],uint256[],uint256))": {
                        "params": {
                            "_billingPlan": "The updated billing plan details.",
                            "_billingPlanIndex": "The index of the billing plan within the plan.",
                            "_planId": "The ID of the plan containing the billing plan to update."
                        }
                    },
                    "updatePlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])": {
                        "params": {
                            "_billingPlans": "The updated billing plans associated with the plan.",
                            "_planId": "The ID of the plan to update.",
                            "_planName": "The updated name of the plan."
                        }
                    },
                    "updateTokenPriceFeed(address,address)": {
                        "params": {
                            "_newPriceFeedAddress": "The new address of the price feed.",
                            "_tokenAddress": "The address of the token."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "addBillingPlan(uint256,(uint8,uint16,uint8,address[],uint256[],uint256))": {
                        "notice": "Adds a billing plan to an existing plan."
                    },
                    "addTokenPriceFeed(address,address)": {
                        "notice": "Adds a price feed address for a token."
                    },
                    "calculateServiceProviderFee(uint256)": {
                        "notice": "Calculates the service provider fee for a given amount."
                    },
                    "claimTokens()": {
                        "notice": "Transfers the balances of all charged tokens from the contract to the owner's wallet."
                    },
                    "convertFiatToTokenAmount(address,uint256)": {
                        "notice": "Converts a fiat amount to a token amount."
                    },
                    "createPlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])": {
                        "notice": "Creates a new plan."
                    },
                    "deletePlan(uint256)": {
                        "notice": "Deletes an existing plan."
                    },
                    "deleteTokenPriceFeed(address)": {
                        "notice": "Removes the price feed address for a token."
                    },
                    "getBillingPlan(uint256,uint8)": {
                        "notice": "Retrieves a specific billing plan from the subscription plans registry."
                    },
                    "getNextChargeTimestamp((address,uint256,address,uint256,uint256,uint8,uint256,(uint8,uint16,uint8,address[],uint256[],uint256)))": {
                        "notice": "Calculates the next charge timestamp for a given subscription."
                    },
                    "getPlan(uint256)": {
                        "notice": "Retrieves a plan by its ID."
                    },
                    "getPlans()": {
                        "notice": "Retrieves all plans."
                    },
                    "getRegisteredTokens()": {
                        "notice": "Retrieves all registered tokens."
                    },
                    "getServiceProvider()": {
                        "notice": "Retrieves the address of the service provider."
                    },
                    "getServiceProviderFee()": {
                        "notice": "Retrieves the service provider fee."
                    },
                    "getSubscriptionAtIndex(uint256)": {
                        "notice": "Retrieves a subscription at a specific index."
                    },
                    "getSubscriptions()": {
                        "notice": "Retrieves all subscriptions."
                    },
                    "getUserSubscription(address,uint256)": {
                        "notice": "Retrieves a user's subscription for a specific plan."
                    },
                    "handleSubscriptionCharge(uint256)": {
                        "notice": "Handles the charge process for a specific subscription."
                    },
                    "isOwner()": {
                        "notice": "Checks if the caller is the owner of the contract."
                    },
                    "isTokenRegistered(address)": {
                        "notice": "Checks if a token is registered."
                    },
                    "processDueSubscriptions()": {
                        "notice": "Processes subscriptions that are due for charge."
                    },
                    "removeBillingPlan(uint256,uint8)": {
                        "notice": "Removes a billing plan from an existing plan."
                    },
                    "subscribe(uint256,uint8,address,uint256)": {
                        "notice": "Subscribes a user to a plan."
                    },
                    "unsubscribe(uint256)": {
                        "notice": "Unsubscribes a user from a plan."
                    },
                    "updateBillingPlan(uint256,uint8,(uint8,uint16,uint8,address[],uint256[],uint256))": {
                        "notice": "Updates a billing plan within an existing plan."
                    },
                    "updatePlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])": {
                        "notice": "Updates an existing plan."
                    },
                    "updateTokenPriceFeed(address,address)": {
                        "notice": "Updates the price feed address for a token."
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@chainlink/contracts/=lib/chainlink-brownie-contracts/contracts/src/",
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "@solidity-datetime/contracts/=lib/solidity-datetime/contracts/",
                "chainlink-brownie-contracts/=lib/chainlink-brownie-contracts/contracts/src/v0.6/vendor/@arbitrum/nitro-contracts/src/",
                "ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "foundry-devops/=lib/foundry-devops/",
                "halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "solidity-datetime/=lib/solidity-datetime/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "src/MemberBeatSubscriptionManager.sol": "MemberBeatSubscriptionManager"
            },
            "evmVersion": "paris",
            "libraries": {}
        },
        "sources": {
            "lib/chainlink-brownie-contracts/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol": {
                "keccak256": "0xfe4e8bb4861bb3860ba890ab91a3b818ec66e5a8f544fb608cfcb73f433472cd",
                "urls": [
                    "bzz-raw://644cff84052e1e82b5bb502b2a46e8f142a62b0db4cd9b38200798ba8373c6f7",
                    "dweb:/ipfs/QmTa99QHrJBn3SXDizquPBUiTxVCNKQrHgaWJhuds5Sce2"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
                "keccak256": "0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb",
                "urls": [
                    "bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6",
                    "dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/IERC1363.sol": {
                "keccak256": "0x9b6b3e7803bc5f2f8cd7ad57db8ac1def61a9930a5a3107df4882e028a9605d7",
                "urls": [
                    "bzz-raw://da62d6be1f5c6edf577f0cb45666a8aa9c2086a4bac87d95d65f02e2f4c36a4b",
                    "dweb:/ipfs/QmNkpvBpoCMvX8JwAFNSc5XxJ2q5BXJpL5L1txb4QkqVFF"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol": {
                "keccak256": "0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724",
                "urls": [
                    "bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a",
                    "dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol": {
                "keccak256": "0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c",
                "urls": [
                    "bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba",
                    "dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                "keccak256": "0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7",
                "urls": [
                    "bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db",
                    "dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                "keccak256": "0xca2ae13e0610f6a99238dd00b97bd786bc92732dae6d6b9d61f573ec51018310",
                "urls": [
                    "bzz-raw://75f8c71ce0c91c40dd5f249ace0b7d8270f8f1767231bcf71490f7157d6ba862",
                    "dweb:/ipfs/QmYXgxeDyFHvz3JsXxLEYN6GNUR44ThHeFj5XkpkgMoG4w"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                "keccak256": "0x9d8da059267bac779a2dbbb9a26c2acf00ca83085e105d62d5d4ef96054a47f5",
                "urls": [
                    "bzz-raw://c78e2aa4313323cecd1ef12a8d6265b96beee1a199923abf55d9a2a9e291ad23",
                    "dweb:/ipfs/QmUTs2KStXucZezzFo3EYeqYu47utu56qrF7jj1Gue65vb"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Errors.sol": {
                "keccak256": "0x6afa713bfd42cf0f7656efa91201007ac465e42049d7de1d50753a373648c123",
                "urls": [
                    "bzz-raw://ba1d02f4847670a1b83dec9f7d37f0b0418d6043447b69f3a29a5f9efc547fcf",
                    "dweb:/ipfs/QmQ7iH2keLNUKgq2xSWcRmuBE5eZ3F5whYAkAGzCNNoEWB"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
                "keccak256": "0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8",
                "urls": [
                    "bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621",
                    "dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL"
                ],
                "license": "MIT"
            },
            "lib/solidity-datetime/contracts/DateTime.sol": {
                "keccak256": "0x3e6031d05cd13aa1ea1bcaf59d6a4b20054ddc18a86514e44e66cd4ed4dc4445",
                "urls": [
                    "bzz-raw://2ce88e00d8a888f45bcf3ef95df7bcf8b90b97e4465b0427ba3407e3d19dc931",
                    "dweb:/ipfs/QmWwtMzN9fpxWF3RvhzsPFjQCsmiKhWV7LMKngKj5Xu3ne"
                ],
                "license": "MIT"
            },
            "src/IMemberBeatSubscriptionManager.sol": {
                "keccak256": "0x812e5e35322b1a0ef9c3bcae190cd372b4fc3696379fe600cf6bf3905673ed7f",
                "urls": [
                    "bzz-raw://680621150185ef2320ce25897e9c29d2e7a1ebeaff23f3a00d3aa482d160fcf3",
                    "dweb:/ipfs/QmUAAuGLMgztucaDk49MEzTGJVMSkg37J7Hg6Fahd8nunn"
                ],
                "license": "GPL-3.0"
            },
            "src/MemberBeatSubscriptionManager.sol": {
                "keccak256": "0x1d090f8c3d73ddcc83d171eec18fbdc41f51862b83818fc9786e7539346e231a",
                "urls": [
                    "bzz-raw://88139182f33aa815ec42ee8b10a71c31e66d0f7034893b6299349507dd184ce4",
                    "dweb:/ipfs/QmXmuroVbaHpFxw77xB7pR9t9Rap9m8vi4CUconAmBtwFq"
                ],
                "license": "GPL-3.0"
            },
            "src/common/MemberBeatDataTypes.sol": {
                "keccak256": "0x2a716bd1cde8c352a7bdc5b0e04506c0c5b41bd504ebe605b2de7636d5fb4480",
                "urls": [
                    "bzz-raw://94cdddbe1a788bf345f532712f8b0c075e8bb133956f1dfbebb282423ed70bed",
                    "dweb:/ipfs/Qmes6vnDZaEddeWcr78BvXx3ZGEjWPQWm6AG8qMvKWydeb"
                ],
                "license": "GPL-3.0"
            },
            "src/registry/SubscriptionPlansRegistry.sol": {
                "keccak256": "0x8631be64d6d6f75aa29179809533685dd0cc330d83cc8a72fc92f44ba6cb3171",
                "urls": [
                    "bzz-raw://5ec9384ac60abe4ba05b43d7502b233e5d4dee0458e1653bf23008b0cd573f9d",
                    "dweb:/ipfs/QmciScEbLaSoDB51uCGdPsNE7vXpov79ahtHZHfAMDTKw9"
                ],
                "license": "GPL-3.0"
            },
            "src/registry/TokenPriceFeedRegistry.sol": {
                "keccak256": "0x57e17711a9409ee1cf4c55785845e4be2853e3499a4cc34df8e33589e0e9299a",
                "urls": [
                    "bzz-raw://1312c685065ae469ca4e07161d13678aa1ccb5513115570a2a59e7c090515d46",
                    "dweb:/ipfs/QmaimCsSQ3fCPj4WnHsWfQtwYY75MtEW2vfos9ZZTLVs4X"
                ],
                "license": "GPL-3.0"
            }
        },
        "version": 1
    },
    "id": 42
}

export default contractABI;