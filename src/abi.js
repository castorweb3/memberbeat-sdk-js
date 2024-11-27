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
            "name": "getTokenPriceFeed",
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
                    "type": "address",
                    "internalType": "address"
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
        "object": "0x6101006040523480156200001257600080fd5b50604051620069193803806200691983398101604081905262000035916200017e565b33806200005c57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000678162000112565b506001600160a01b038216620000905760405163770fa4ef60e01b815260040160405180910390fd5b6040516200009e9062000162565b604051809103906000f080158015620000bb573d6000803e3d6000fd5b506001600160a01b0316608052604051620000d69062000170565b604051809103906000f080158015620000f3573d6000803e3d6000fd5b506001600160a01b0390811660a0529190911660c05260e052620001ba565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6122de8062003fab83390190565b610690806200628983390190565b600080604083850312156200019257600080fd5b82516001600160a01b0381168114620001aa57600080fd5b6020939093015192949293505050565b60805160a05160c05160e051613d396200027260003960008181610448015281816106dc01526120d601526000818161037501526121c40152600081816105bb01528181610673015281816108cb01528181610a100152818161125a01528181611a9b0152611d1a0152600081816104ef0152818161057e0152818161097801528181610a9c01528181610b25015281816112a8015281816112fd0152818161138b015281816114f501526118aa0152613d396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c8063715018a61161010f578063ad0b27fb116100a2578063d94a862b11610071578063d94a862b1461048d578063e6f0375d146104a2578063f2fde38b146104aa578063ffdda9ee146104bd57600080fd5b8063ad0b27fb14610420578063cc5d19c114610433578063cea9830314610446578063d916b8f61461046c57600080fd5b80638da5cb5b116100de5780638da5cb5b146103d65780638f32d59b146103e7578063925a06c6146103fa578063965c64f51461040d57600080fd5b8063715018a61461039957806382d2f5b1146103a15780638815a042146103b45780638a0fa52a146103c757600080fd5b806326cd5274116101875780633b47a9ac116101565780633b47a9ac14610336578063402300461461034b57806348c54b9d1461036b578063571959e01461037357600080fd5b806326cd5274146102b8578063274a1a00146102d85780632ad2a3f314610303578063333160e61461031657600080fd5b8063181f914b116101c3578063181f914b1461024e578063217786ef1461026f57806324210bf01461028257806326aa101f1461029557600080fd5b80630fe155fe146101f557806312d230c91461020a57806314cbd9931461021d578063166ee7671461023b575b600080fd5b610208610203366004612fbf565b6104d0565b005b61020861021836600461307d565b61055f565b6102256105b7565b60405161023291906130c9565b60405180910390f35b610208610249366004613116565b610644565b61026161025c36600461314f565b6106d4565b604051908152602001610232565b61026161027d366004613168565b610736565b61020861029036600461314f565b61081b565b6102a86102a3366004613230565b6108a9565b6040519015158152602001610232565b6102cb6102c636600461314f565b61093e565b604051610232919061344c565b6102eb6102e6366004613230565b6109ef565b6040516001600160a01b039091168152602001610232565b610208610311366004612fbf565b610a7d565b61032961032436600461345f565b610ad5565b604051610232919061348b565b61033e610ba3565b6040516102329190613511565b61035e61035936600461314f565b610ea4565b6040516102329190613573565b6102086110c6565b7f00000000000000000000000000000000000000000000000000000000000000006102eb565b610208611217565b6102086103af366004613116565b61122b565b6102086103c2366004613586565b611289565b610261670de0b6b3a764000081565b6000546001600160a01b03166102eb565b6000546001600160a01b031633146102a8565b61020861040836600461314f565b6112df565b61020861041b36600461345f565b611364565b61020861042e36600461314f565b6113c2565b61035e6104413660046135cc565b6113cf565b7f0000000000000000000000000000000000000000000000000000000000000000610261565b61047f61047a3660046135f8565b611444565b60405161023292919061363e565b6104956118a6565b6040516102329190613660565b61020861192e565b6102086104b8366004613230565b611a34565b6102616104cb3660046135cc565b611a6f565b6104d8611b08565b6040516307f0aaff60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690630fe155fe90610528908690869086906004016136b5565b600060405180830381600087803b15801561054257600080fd5b505af1158015610556573d6000803e3d6000fd5b50505050505050565b610567611b08565b6040516312d230c960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906312d230c990610528908690869086906004016136ea565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166314cbd9936040518163ffffffff1660e01b8152600401600060405180830381865afa158015610617573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261063f9190810190613770565b905090565b61064c611b08565b60405163166ee76760e01b81526001600160a01b03838116600483015282811660248301527f0000000000000000000000000000000000000000000000000000000000000000169063166ee767906044015b600060405180830381600087803b1580156106b857600080fd5b505af11580156106cc573d6000803e3d6000fd5b505050505050565b6000806107017f0000000000000000000000000000000000000000000000000000000000000000846137ba565b90506000670de0b6b3a7640000600161071a82856137d1565b61072491906137e4565b61072e919061380d565b949350505050565b6000808260e00151905060008084608001511161075757836060015161075d565b83608001515b90506000825160038111156107745761077461329d565b0361078b5761072e81836020015161ffff16611b35565b6001825160038111156107a0576107a061329d565b036107b75761072e81836020015161ffff16611b5d565b6002825160038111156107cc576107cc61329d565b036107e35761072e81836020015161ffff16611c34565b815160038111156107f6576107f661329d565b60405163db84f3ef60e01b815260040161081291815260200190565b60405180910390fd5b610823611b08565b600061082e82610ea4565b905060018160a0015160038111156108485761084861329d565b1415801561086c575060008160a0015160038111156108695761086961329d565b14155b8061087a5750428160800151115b1561089a5760405162b33a9d60e41b815260048101839052602401610812565b6108a48282611c68565b505050565b6040516326aa101f60e01b81526001600160a01b0382811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906326aa101f90602401602060405180830381865afa158015610914573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109389190613821565b92915050565b61096260405180606001604052806000815260200160608152602001606081525090565b6040516309b3549d60e21b8152600481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906326cd527490602401600060405180830381865afa1580156109c7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109389190810190613a9e565b6040516213a50d60e91b81526001600160a01b0382811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063274a1a0090602401602060405180830381865afa158015610a59573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109389190613ad2565b610a85611b08565b604051632ad2a3f360e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632ad2a3f390610528908690869086906004016136b5565b6040805160c0810182526000808252602082018190529181018290526060808201819052608082015260a0810191909152604051631998b07360e11b81526004810184905260ff831660248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063333160e690604401600060405180830381865afa158015610b74573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b9c9190810190613aef565b9392505050565b336000908152600460209081526040808320805482518185028101850190935280835260609493830182828015610bf957602002820191906000526020600020905b815481526020019060010190808311610be5575b505050505090506000815190506000816001600160401b03811115610c2057610c20612c5e565b604051908082528060200260200182016040528015610c5957816020015b610c46612b12565b815260200190600190039081610c3e5790505b50905060005b82811015610e9c5760026000858381518110610c7d57610c7d613b23565b602090810291909101810151825281810192909252604090810160002081516101008101835281546001600160a01b039081168252600183015494820194909452600282015490931691830191909152600380820154606084015260048201546080840152600582015460a084019160ff90911690811115610d0157610d0161329d565b6003811115610d1257610d1261329d565b8152600682015460208201526040805160c08101825260078401805492909301929091829060ff166003811115610d4b57610d4b61329d565b6003811115610d5c57610d5c61329d565b81528154610100810461ffff1660208301526040909101906301000000900460ff166001811115610d8f57610d8f61329d565b6001811115610da057610da061329d565b815260200160018201805480602002602001604051908101604052809291908181526020018280548015610dfd57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610ddf575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610e5557602002820191906000526020600020905b815481526020019060010190808311610e41575b5050505050815260200160038201548152505081525050828281518110610e7e57610e7e613b23565b60200260200101819052508080610e9490613b39565b915050610c5f565b509392505050565b610eac612b12565b610eb4611b08565b600082815260026020526040902080546001600160a01b0316610eed57604051631c6efd4b60e01b815260048101849052602401610812565b604080516101008101825282546001600160a01b03908116825260018401546020830152600284015416918101919091526003808301546060830152600483015460808301526005830154839160a084019160ff1690811115610f5257610f5261329d565b6003811115610f6357610f6361329d565b8152600682015460208201526040805160c08101825260078401805492909301929091829060ff166003811115610f9c57610f9c61329d565b6003811115610fad57610fad61329d565b81528154610100810461ffff1660208301526040909101906301000000900460ff166001811115610fe057610fe061329d565b6001811115610ff157610ff161329d565b81526020016001820180548060200260200160405190810160405280929190818152602001828054801561104e57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611030575b50505050508152602001600282018054806020026020016040519081016040528092919081815260200182805480156110a657602002820191906000526020600020905b815481526020019060010190808311611092575b50505050508152602001600382015481525050815250509150505b919050565b6110ce611b08565b6000600680548060200260200160405190810160405280929190818152602001828054801561112657602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611108575b505083519394506000925050505b8181101561120657600083828151811061115057611150613b23565b60209081029190910101516040516370a0823160e01b81523060048201529091506000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156111a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c99190613b52565b90506111f16111e06000546001600160a01b031690565b6001600160a01b03841690836121f6565b505080806111fe90613b39565b915050611134565b5061121360066000612b8b565b5050565b61121f611b08565b6112296000612255565b565b611233611b08565b6040516382d2f5b160e01b81526001600160a01b03838116600483015282811660248301527f000000000000000000000000000000000000000000000000000000000000000016906382d2f5b19060440161069e565b611291611b08565b60405163440ad02160e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638815a0429061069e9085908590600401613b6b565b6112e7611b08565b60405163492d036360e11b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063925a06c690602401600060405180830381600087803b15801561134957600080fd5b505af115801561135d573d6000803e3d6000fd5b5050505050565b61136c611b08565b60405163965c64f560e01b81526004810183905260ff821660248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063965c64f59060440161069e565b6113cc33826122a5565b50565b6113d7612b12565b60006113e384846124a2565b5080519091506001600160a01b031615806114145750836001600160a01b031681600001516001600160a01b031614155b15610b9c5760405163069d323f60e21b81526001600160a01b038516600482015260248101849052604401610812565b61144c612b12565b600085158061146257506001600160a01b038416155b156114805760405163f1e1fdc960e01b815260040160405180910390fd5b3360009081526003602090815260408083208984528252808320548084526002909252909120600101548790036114d35760405163f0783edf60e01b815233600482015260248101889052604401610812565b604051631998b07360e11b81526004810188905260ff871660248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063333160e690604401600060405180830381865afa158015611544573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261156c9190810190613aef565b9050600042861161157e576001611581565b60005b90506000808260038111156115985761159861329d565b146115a45760006115a6565b865b90506000604051806101000160405280336001600160a01b031681526020018c81526020018a6001600160a01b031681526020018981526020018381526020018460038111156115f8576115f861329d565b8152600060208201819052604090910186905260018054929350829161161d83613b39565b9091555050600081815260026020818152604092839020855181546001600160a01b03199081166001600160a01b0392831617835592870151600180840191909155948701519382018054909316931692909217905560608401516003808301919091556080850151600483015560a085015160058301805487959293919260ff199091169184908111156116b4576116b461329d565b021790555060c0820151600682015560e08201518051600783018054909190829060ff191660018360038111156116ed576116ed61329d565b02179055506020820151815461ffff9091166101000262ffff0019821681178355604084015191839163ff000000191663ffffff001990911617630100000083600181111561173e5761173e61329d565b02179055506060820151805161175e916001840191602090910190612ba9565b506080820151805161177a916002840191602090910190612c0e565b5060a0820151816003015550509050508060036000336001600160a01b03166001600160a01b0316815260200190815260200160002060008e81526020019081526020016000208190555060046000336001600160a01b03166001600160a01b031681526020019081526020016000208190806001815401808255809150506001900390600052602060002001600090919091909150558b8a6001600160a01b0316336001600160a01b03167f73bd74e1ff025836c9fc129762ae94e04f2b3db6662a39172d6193a49b1a969a88604051611855919061348b565b60405180910390a4600060018560038111156118735761187361329d565b03611889576118828284611c68565b9050611893565b61189382846126f0565b919c919b50909950505050505050505050565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d94a862b6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611906573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261063f9190810190613b84565b611936611b08565b6000611945620151804261380d565b61195290620151806137ba565b60008181526005602052604081209192505b81548110156108a457600082828154811061198157611981613b23565b6000918252602080832090910154808352600290915260409091209091506001600582015460ff1660038111156119ba576119ba61329d565b14806119de57506000600582015460ff1660038111156119dc576119dc61329d565b145b80156119ee575042816004015411155b15611a1f5760405182907fbb65ea9884c06faec2c4686a4a9e25ccc52e1ad8e5b6bb08354f8207013090e090600090a25b50508080611a2c90613b39565b915050611964565b611a3c611b08565b6001600160a01b038116611a6657604051631e4fbdf760e01b815260006004820152602401610812565b6113cc81612255565b604051600162112b0960e11b031981526001600160a01b038381166004830152602482018390526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ffdda9ee90604401602060405180830381865afa158015611ae4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9c9190613b52565b6000546001600160a01b031633146112295760405163118cdaa760e01b8152336004820152602401610812565b6000611b4462015180836137ba565b611b4e90846137d1565b90508281101561093857600080fd5b6000808080611b77611b72620151808861380d565b612742565b91945092509050611b8885836137d1565b9150600c611b976001846137e4565b611ba1919061380d565b611bab90846137d1565b9250600c611bba6001846137e4565b611bc49190613c34565b611bcf9060016137d1565b91506000611bdd84846127de565b905080821115611beb578091505b611bf86201518088613c34565b62015180611c07868686612864565b611c1191906137ba565b611c1b91906137d1565b945086851015611c2a57600080fd5b5050505092915050565b6000808080611c49611b72620151808861380d565b91945092509050611c5a85846137d1565b92506000611bdd84846127de565b6000808260e0015190506000611c828285604001516129a1565b6000935090508282604001516001811115611c9f57611c9f61329d565b03611cc95781608001518181518110611cba57611cba613b23565b60200260200101519250611ddd565b600182604001516001811115611ce157611ce161329d565b03611ddd5760408085015160a08401519151600162112b0960e11b031981526001600160a01b03918216600482015260248101929092527f0000000000000000000000000000000000000000000000000000000000000000169063ffdda9ee90604401602060405180830381865afa158015611d61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d859190613b52565b925060008260a00151118015611d99575082155b15611ddd576020840151845160408087015190516303be8a9f60e11b815260048101939093526001600160a01b039182166024840152166044820152606401610812565b611de684610736565b608085015260c08401805190611dfb82613b39565b905250600085815260026020818152604092839020875181546001600160a01b03199081166001600160a01b0392831617835592890151600180840191909155948901519382018054909316931692909217905560608601516003808301919091556080870151600483015560a087015160058301805489959293919260ff19909116918490811115611e9057611e9061329d565b021790555060c0820151600682015560e08201518051600783018054909190829060ff19166001836003811115611ec957611ec961329d565b02179055506020820151815461ffff9091166101000262ffff0019821681178355604084015191839163ff000000191663ffffff0019909116176301000000836001811115611f1a57611f1a61329d565b021790555060608201518051611f3a916001840191602090910190612ba9565b5060808201518051611f56916002840191602090910190612c0e565b5060a082015181600301555050905050611f7085856126f0565b82156121ee5760408481015185519151636eb1769f60e11b81526001600160a01b03928316600482015230602482015290916000919083169063dd62ed3e90604401602060405180830381865afa158015611fcf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ff39190613b52565b9050848110156120245785516040516317e3a89960e21b81526001600160a01b039091166004820152602401610812565b60408681018051600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0180546001600160a01b0319166001600160a01b03928316179055905160c08901518951935189815291831693909216907f7c12298d92f5da73db22fb176093bdf79566023af218c560cfd5235cb08af64f9060200160405180910390a485516120d2906001600160a01b038416903088612a26565b60007f00000000000000000000000000000000000000000000000000000000000000001315611c2a576000612106866106d4565b60405163095ea7b360e01b8152306004820152602481018290529091506000906001600160a01b0385169063095ea7b3906044016020604051808303816000875af1158015612159573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061217d9190613821565b9050806121b4576040808901519051638b3fca9b60e01b81523060048201526001600160a01b039091166024820152604401610812565b6121e96001600160a01b038516307f000000000000000000000000000000000000000000000000000000000000000085612a26565b505050505b505092915050565b6040516001600160a01b038381166024830152604482018390526108a491859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612a65565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006122b183836124a2565b6001600160a01b03851660009081526003602081815260408084208885528252808420849055848452600291829052832080546001600160a01b031990811682556001820185905591810180549092169091559081018290556004810182905560058101805460ff191690556006810182905560078101805463ffffffff19168155929450925090816123476008850182612b8b565b612355600283016000612b8b565b5060006003919091018190556001600160a01b0386168152600460205260408120600019935091505b81548110156123c4578382828154811061239a5761239a613b23565b9060005260206000200154036123b2578092506123c4565b806123bc81613b39565b91505061237e565b5060001982131561246557815b81546123df906001906137e4565b81101561243d57816123f28260016137d1565b8154811061240257612402613b23565b906000526020600020015482828154811061241f5761241f613b23565b6000918252602090912001558061243581613b39565b9150506123d1565b508080548061244e5761244e613c48565b600190038181906000526020600020016000905590555b60405184906001600160a01b038716907f06aa12c0ad65927b4a753d119c26e490d3c4a4e11cb631b43131a709dc1e591790600090a35050505050565b6124aa612b12565b6001600160a01b038084166000908152600360208181526040808420878552825280842054808552600280845294829020825161010081018452815488168152600182015494810194909452948501549095169082015282820154606082015260048301546080820152600583015490929160a084019160ff16908111156125345761253461329d565b60038111156125455761254561329d565b8152600682015460208201526040805160c08101825260078401805492909301929091829060ff16600381111561257e5761257e61329d565b600381111561258f5761258f61329d565b81528154610100810461ffff1660208301526040909101906301000000900460ff1660018111156125c2576125c261329d565b60018111156125d3576125d361329d565b81526020016001820180548060200260200160405190810160405280929190818152602001828054801561263057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612612575b505050505081526020016002820180548060200260200160405190810160405280929190818152602001828054801561268857602002820191906000526020600020905b815481526020019060010190808311612674575b50505050508152602001600382015481525050815250509150836001600160a01b031682600001516001600160a01b0316146126e95760405163069d323f60e21b81526001600160a01b038516600482015260248101849052604401610812565b9250929050565b60808101511561121357600062015180826080015161270f919061380d565b61271c90620151806137ba565b600090815260056020908152604082208054600181018255908352912001839055505050565b60008080836226496581018262023ab1600483020590506004600362023ab18302010590910390600062164b09610fa0600185010205905060046105b58202058303601f019250600061098f846050028161279f5761279f6137f7565b0590506000605061098f83020585039050600b820560301994909401606402929092018301996002600c90940290910392909201975095509350505050565b600081600114806127ef5750816003145b806127fa5750816005145b806128055750816007145b806128105750816008145b8061281b575081600a145b80612826575081600c145b156128335750601f610938565b816002146128435750601e610938565b61284c83612ad6565b61285757601c61285a565b601d5b60ff169392505050565b60006107b284101561287557600080fd5b838383600062253d8c60046064600c61288f600e88613c5e565b6128999190613c85565b6128a588611324613cb3565b6128af9190613cb3565b6128b99190613c85565b6128c4906003613cd3565b6128ce9190613c85565b600c806128dc600e88613c5e565b6128e69190613c85565b6128f190600c613cd3565b6128fc600288613c5e565b6129069190613c5e565b6129129061016f613cd3565b61291c9190613c85565b6004600c61292b600e89613c5e565b6129359190613c85565b612941896112c0613cb3565b61294b9190613cb3565b612957906105b5613cd3565b6129619190613c85565b61296d617d4b87613c5e565b6129779190613cb3565b6129819190613cb3565b61298b9190613c5e565b6129959190613c5e565b98975050505050505050565b6000805b836060015151811015612a0157826001600160a01b0316846060015182815181106129d2576129d2613b23565b60200260200101516001600160a01b0316036129ef579050610938565b806129f981613b39565b9150506129a5565b50604051634947d6f360e11b81526001600160a01b0383166004820152602401610812565b6040516001600160a01b038481166024830152838116604483015260648201839052612a5f9186918216906323b872dd90608401612223565b50505050565b600080602060008451602086016000885af180612a88576040513d6000823e3d81fd5b50506000513d91508115612aa0578060011415612aad565b6001600160a01b0384163b155b15612a5f57604051635274afe760e01b81526001600160a01b0385166004820152602401610812565b6000612ae3600483613c34565b158015612af95750612af6606483613c34565b15155b806109385750612b0b61019083613c34565b1592915050565b604080516101008101825260008082526020820181905291810182905260608101829052608081018290529060a0820190815260200160008152602001612b866040805160c0810182526000808252602082018190529181018290526060808201819052608082015260a081019190915290565b905290565b50805460008255906000526020600020908101906113cc9190612c49565b828054828255906000526020600020908101928215612bfe579160200282015b82811115612bfe57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190612bc9565b50612c0a929150612c49565b5090565b828054828255906000526020600020908101928215612bfe579160200282015b82811115612bfe578251825591602001919060010190612c2e565b5b80821115612c0a5760008155600101612c4a565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715612c9657612c96612c5e565b60405290565b60405161010081016001600160401b0381118282101715612c9657612c96612c5e565b604051606081016001600160401b0381118282101715612c9657612c96612c5e565b604051601f8201601f191681016001600160401b0381118282101715612d0957612d09612c5e565b604052919050565b60006001600160401b03821115612d2a57612d2a612c5e565b50601f01601f191660200190565b60006001600160401b03821115612d5157612d51612c5e565b5060051b60200190565b600481106113cc57600080fd5b80356110c181612d5b565b61ffff811681146113cc57600080fd5b80356110c181612d73565b600281106113cc57600080fd5b80356110c181612d8e565b6001600160a01b03811681146113cc57600080fd5b80356110c181612da6565b600082601f830112612dd757600080fd5b81356020612dec612de783612d38565b612ce1565b82815260059290921b84018101918181019086841115612e0b57600080fd5b8286015b84811015612e2f578035612e2281612da6565b8352918301918301612e0f565b509695505050505050565b600082601f830112612e4b57600080fd5b81356020612e5b612de783612d38565b82815260059290921b84018101918181019086841115612e7a57600080fd5b8286015b84811015612e2f5780358352918301918301612e7e565b600060c08284031215612ea757600080fd5b612eaf612c74565b9050612eba82612d68565b8152612ec860208301612d83565b6020820152612ed960408301612d9b565b604082015260608201356001600160401b0380821115612ef857600080fd5b612f0485838601612dc6565b60608401526080840135915080821115612f1d57600080fd5b50612f2a84828501612e3a565b60808301525060a082013560a082015292915050565b600082601f830112612f5157600080fd5b81356020612f61612de783612d38565b82815260059290921b84018101918181019086841115612f8057600080fd5b8286015b84811015612e2f5780356001600160401b03811115612fa35760008081fd5b612fb18986838b0101612e95565b845250918301918301612f84565b600080600060608486031215612fd457600080fd5b8335925060208401356001600160401b0380821115612ff257600080fd5b818601915086601f83011261300657600080fd5b8135613014612de782612d11565b81815288602083860101111561302957600080fd5b816020850160208301376000602083830101528095505050604086013591508082111561305557600080fd5b5061306286828701612f40565b9150509250925092565b803560ff811681146110c157600080fd5b60008060006060848603121561309257600080fd5b833592506130a26020850161306c565b915060408401356001600160401b038111156130bd57600080fd5b61306286828701612e95565b6020808252825182820181905260009190848201906040850190845b8181101561310a5783516001600160a01b0316835292840192918401916001016130e5565b50909695505050505050565b6000806040838503121561312957600080fd5b823561313481612da6565b9150602083013561314481612da6565b809150509250929050565b60006020828403121561316157600080fd5b5035919050565b60006020828403121561317a57600080fd5b81356001600160401b038082111561319157600080fd5b9083019061010082860312156131a657600080fd5b6131ae612c9c565b6131b783612dbb565b8152602083013560208201526131cf60408401612dbb565b604082015260608301356060820152608083013560808201526131f460a08401612d68565b60a082015260c083013560c082015260e08301358281111561321557600080fd5b61322187828601612e95565b60e08301525095945050505050565b60006020828403121561324257600080fd5b8135610b9c81612da6565b60005b83811015613268578181015183820152602001613250565b50506000910152565b6000815180845261328981602086016020860161324d565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b600481106113cc576113cc61329d565b600081518084526020808501945080840160005b838110156132f3578151875295820195908201906001016132d7565b509495945050505050565b600060c08301825161330f816132b3565b845260208381015161ffff16818601526040840151600281106133345761333461329d565b604086015260608481015160c09187019190915280519283905281019160009060e08701905b808310156133835784516001600160a01b0316825293830193600192909201919083019061335a565b5060808601519350868103608088015261339d81856132c3565b935050505060a083015160a08501528091505092915050565b600081518084526020808501808196508360051b8101915082860160005b858110156133fe5782840389526133ec8483516132fe565b988501989350908401906001016133d4565b5091979650505050505050565b80518252600060208201516060602085015261342a6060850182613271565b90506040830151848203604086015261344382826133b6565b95945050505050565b602081526000610b9c602083018461340b565b6000806040838503121561347257600080fd5b823591506134826020840161306c565b90509250929050565b602081526000610b9c60208301846132fe565b600061010060018060a01b038084511685526020840151602086015280604085015116604086015250606083015160608501526080830151608085015260a08301516134e9816132b3565b8060a08601525060c083015160c085015260e08301518160e0860152613443828601826132fe565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561356657603f1988860301845261355485835161349e565b94509285019290850190600101613538565b5092979650505050505050565b602081526000610b9c602083018461349e565b6000806040838503121561359957600080fd5b8235915060208301356001600160401b038111156135b657600080fd5b6135c285828601612e95565b9150509250929050565b600080604083850312156135df57600080fd5b82356135ea81612da6565b946020939093013593505050565b6000806000806080858703121561360e57600080fd5b8435935061361e6020860161306c565b9250604085013561362e81612da6565b9396929550929360600135925050565b604081526000613651604083018561349e565b90508260208301529392505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561356657603f198886030184526136a385835161340b565b94509285019290850190600101613687565b8381526060602082015260006136ce6060830185613271565b82810360408401526136e081856133b6565b9695505050505050565b83815260ff8316602082015260606040820152600061344360608301846132fe565b600082601f83011261371d57600080fd5b8151602061372d612de783612d38565b82815260059290921b8401810191818101908684111561374c57600080fd5b8286015b84811015612e2f57805161376381612da6565b8352918301918301613750565b60006020828403121561378257600080fd5b81516001600160401b0381111561379857600080fd5b61072e8482850161370c565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610938576109386137a4565b80820180821115610938576109386137a4565b81810381811115610938576109386137a4565b634e487b7160e01b600052601260045260246000fd5b60008261381c5761381c6137f7565b500490565b60006020828403121561383357600080fd5b81518015158114610b9c57600080fd5b80516110c181612d5b565b80516110c181612d73565b80516110c181612d8e565b600082601f83011261387557600080fd5b81516020613885612de783612d38565b82815260059290921b840181019181810190868411156138a457600080fd5b8286015b84811015612e2f57805183529183019183016138a8565b600060c082840312156138d157600080fd5b6138d9612c74565b90506138e482613843565b81526138f26020830161384e565b602082015261390360408301613859565b604082015260608201516001600160401b038082111561392257600080fd5b61392e8583860161370c565b6060840152608084015191508082111561394757600080fd5b5061395484828501613864565b60808301525060a082015160a082015292915050565b600082601f83011261397b57600080fd5b8151602061398b612de783612d38565b82815260059290921b840181019181810190868411156139aa57600080fd5b8286015b84811015612e2f5780516001600160401b038111156139cd5760008081fd5b6139db8986838b01016138bf565b8452509183019183016139ae565b6000606082840312156139fb57600080fd5b613a03612cbf565b90508151815260208201516001600160401b0380821115613a2357600080fd5b818401915084601f830112613a3757600080fd5b8151613a45612de782612d11565b818152866020838601011115613a5a57600080fd5b613a6b82602083016020870161324d565b6020850152506040840151915080821115613a8557600080fd5b50613a928482850161396a565b60408301525092915050565b600060208284031215613ab057600080fd5b81516001600160401b03811115613ac657600080fd5b61072e848285016139e9565b600060208284031215613ae457600080fd5b8151610b9c81612da6565b600060208284031215613b0157600080fd5b81516001600160401b03811115613b1757600080fd5b61072e848285016138bf565b634e487b7160e01b600052603260045260246000fd5b600060018201613b4b57613b4b6137a4565b5060010190565b600060208284031215613b6457600080fd5b5051919050565b82815260406020820152600061072e60408301846132fe565b60006020808385031215613b9757600080fd5b82516001600160401b0380821115613bae57600080fd5b818501915085601f830112613bc257600080fd5b8151613bd0612de782612d38565b81815260059190911b83018401908481019088831115613bef57600080fd5b8585015b83811015613c2757805185811115613c0b5760008081fd5b613c198b89838a01016139e9565b845250918601918601613bf3565b5098975050505050505050565b600082613c4357613c436137f7565b500690565b634e487b7160e01b600052603160045260246000fd5b8181036000831280158383131683831282161715613c7e57613c7e6137a4565b5092915050565b600082613c9457613c946137f7565b600160ff1b821460001984141615613cae57613cae6137a4565b500590565b80820182811260008312801582168215821617156121ee576121ee6137a4565b80820260008212600160ff1b84141615613cef57613cef6137a4565b8181058314821517610938576109386137a456fea2646970667358221220582584cfcaed1d96d442493be7251b6a055ab77bf2b7eee4d85915b43e04d5a564736f6c63430008140033608060405234801561001057600080fd5b506122be806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638815a04211610097578063d94a862b11610066578063d94a862b14610224578063d9cd741114610239578063da5d24cf14610241578063e11400bb1461024957600080fd5b80638815a042146101e3578063925a06c6146101f6578063965c64f514610209578063d3c576d81461021c57600080fd5b80632ad2a3f3116100d35780632ad2a3f31461017357806331ec7acc14610186578063333160e6146101a7578063693eafff146101c757600080fd5b80630fe155fe1461010557806312d230c91461011a57806317ba8e481461012d57806326cd527414610153575b600080fd5b610118610113366004611c33565b610251565b005b610118610128366004611d04565b610342565b61014061013b366004611d51565b61070e565b6040519081526020015b60405180910390f35b610166610161366004611d51565b61072f565b60405161014a9190611f59565b610118610181366004611c33565b6109d1565b610199610194366004611d51565b610ac9565b60405161014a929190611f73565b6101ba6101b5366004611f94565b610b6e565b60405161014a9190611fc0565b6101d061016d81565b60405161ffff909116815260200161014a565b6101186101f1366004611fd3565b610d77565b610118610204366004611d51565b6110e0565b610118610217366004611f94565b611260565b6101d0600181565b61022c61148c565b60405161014a919061201a565b6101d0603281565b6101d0600c81565b6101d0603581565b600083815260208190526040812054900361028757604051633f2064f160e11b8152600481018490526024015b60405180910390fd5b6000838152602081905260409020600181016102a38482612105565b50826040516102b291906121c5565b6040519081900381209085907f788fc8e6b76de43c4397d24bf2c794c28a4e1467cef2c4339272f0596b77595d90600090a381511561033c576102f96002820160006117b1565b60005b825181101561033a576103288584838151811061031b5761031b6121e1565b6020026020010151610d77565b806103328161220d565b9150506102fc565b505b50505050565b828180606001515160000361036d57604051630734599160e21b81526004810183905260240161027e565b60008160400151600181111561038557610385611dba565b03610487578060800151516000036103b3576040516304766b2160e51b81526004810183905260240161027e565b806080015151816060015151146103e05760405163cd7c557560e01b81526004810183905260240161027e565b60005b8160600151518110156104855760006001600160a01b031682606001518281518110610411576104116121e1565b60200260200101516001600160a01b03160361047357828260600151828151811061043e5761043e6121e1565b6020026020010151604051639a9d90a560e01b815260040161027e9291909182526001600160a01b0316602082015260400190565b8061047d8161220d565b9150506103e3565b505b602081015161ffff1615806104c657506000815160038111156104ac576104ac611dba565b1480156104c6575061016d61ffff16816020015161ffff16115b806104fa57506001815160038111156104e1576104e1611dba565b1480156104fa5750600c61ffff16816020015161ffff16115b8061052e575060028151600381111561051557610515611dba565b14801561052e5750603261ffff16816020015161ffff16115b80610562575060038151600381111561054957610549611dba565b1480156105625750600161ffff16816020015161ffff16115b1561058b57805160208201516040516307e6fb1960e41b815261027e9285929091600401612226565b600085815260208190526040812080549091036105be57604051633f2064f160e11b81526004810187905260240161027e565b600281015460ff8616106105f157604051631d4a70ef60e11b81526004810187905260ff8616602482015260440161027e565b83816002018660ff168154811061060a5761060a6121e1565b6000918252602090912082516004909202018054909190829060ff1916600183600381111561063b5761063b611dba565b02179055506020820151815461ffff9091166101000262ffff0019821681178355604084015191839163ff000000191663ffffff001990911617630100000083600181111561068c5761068c611dba565b0217905550606082015180516106ac9160018401916020909101906117d5565b50608082015180516106c891600284019160209091019061183a565b5060a0919091015160039091015560405160ff86169087907feba2b351955034fb901061ddc7948219acb1cd4737d2a8528c3d548e4664975c90600090a3505050505050565b6001818154811061071e57600080fd5b600091825260209091200154905081565b61075360405180606001604052806000815260200160608152602001606081525090565b600082815260208190526040812054900361078457604051633f2064f160e11b81526004810183905260240161027e565b600082815260208181526040918290208251606081019093528054835260018101805491928401916107b59061207c565b80601f01602080910402602001604051908101604052809291908181526020018280546107e19061207c565b801561082e5780601f106108035761010080835404028352916020019161082e565b820191906000526020600020905b81548152906001019060200180831161081157829003601f168201915b5050505050815260200160028201805480602002602001604051908101604052809291908181526020016000905b828210156109c3576000848152602090206040805160c08101909152600484029091018054829060ff16600381111561089757610897611dba565b60038111156108a8576108a8611dba565b81528154610100810461ffff1660208301526040909101906301000000900460ff1660018111156108db576108db611dba565b60018111156108ec576108ec611dba565b81526020016001820180548060200260200160405190810160405280929190818152602001828054801561094957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161092b575b50505050508152602001600282018054806020026020016040519081016040528092919081815260200182805480156109a157602002820191906000526020600020905b81548152602001906001019080831161098d575b505050505081526020016003820154815250508152602001906001019061085c565b505050915250909392505050565b60008381526020819052604090205415610a01576040516376e7396560e01b81526004810184905260240161027e565b600083815260208190526040902083815560018101610a208482612105565b506001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601849055604051610a639084906121c5565b6040519081900381209085907f15dd767ca87eb2173e33747d1688729e3fa0e0f3fa4e75fc17ddc59b388c5a5f90600090a360005b825181101561033a57610ab78584838151811061031b5761031b6121e1565b80610ac18161220d565b915050610a98565b60006020819052908152604090208054600182018054919291610aeb9061207c565b80601f0160208091040260200160405190810160405280929190818152602001828054610b179061207c565b8015610b645780601f10610b3957610100808354040283529160200191610b64565b820191906000526020600020905b815481529060010190602001808311610b4757829003601f168201915b5050505050905082565b6040805160c0810182526000808252602082018190529181018290526060808201819052608082015260a081019190915260008381526020819052604081208054909103610bd257604051633f2064f160e11b81526004810185905260240161027e565b600281015460ff841610610c0557604051631d4a70ef60e11b81526004810185905260ff8416602482015260440161027e565b806002018360ff1681548110610c1d57610c1d6121e1565b600091825260209091206040805160c081019091526004909202018054829060ff166003811115610c5057610c50611dba565b6003811115610c6157610c61611dba565b81528154610100810461ffff1660208301526040909101906301000000900460ff166001811115610c9457610c94611dba565b6001811115610ca557610ca5611dba565b815260200160018201805480602002602001604051908101604052809291908181526020018280548015610d0257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610ce4575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610d5a57602002820191906000526020600020905b815481526020019060010190808311610d46575b505050505081526020016003820154815250509150505b92915050565b8181806060015151600003610da257604051630734599160e21b81526004810183905260240161027e565b600081604001516001811115610dba57610dba611dba565b03610e8757806080015151600003610de8576040516304766b2160e51b81526004810183905260240161027e565b80608001515181606001515114610e155760405163cd7c557560e01b81526004810183905260240161027e565b60005b816060015151811015610e855760006001600160a01b031682606001518281518110610e4657610e466121e1565b60200260200101516001600160a01b031603610e7357828260600151828151811061043e5761043e6121e1565b80610e7d8161220d565b915050610e18565b505b602081015161ffff161580610ec65750600081516003811115610eac57610eac611dba565b148015610ec6575061016d61ffff16816020015161ffff16115b80610efa5750600181516003811115610ee157610ee1611dba565b148015610efa5750600c61ffff16816020015161ffff16115b80610f2e5750600281516003811115610f1557610f15611dba565b148015610f2e5750603261ffff16816020015161ffff16115b80610f625750600381516003811115610f4957610f49611dba565b148015610f625750600161ffff16816020015161ffff16115b15610f8b57805160208201516040516307e6fb1960e41b815261027e9285929091600401612226565b60008481526020819052604081208054909103610fbe57604051633f2064f160e11b81526004810186905260240161027e565b6002810180546001818101835560009283526020909220865160049092020180548793919291839160ff191690836003811115610ffd57610ffd611dba565b02179055506020820151815461ffff9091166101000262ffff0019821681178355604084015191839163ff000000191663ffffff001990911617630100000083600181111561104e5761104e611dba565b02179055506060820151805161106e9160018401916020909101906117d5565b506080820151805161108a91600284019160209091019061183a565b5060a0919091015160039091015560028101546110a99060019061224c565b60ff16857f4fab3c19251c63bff8b2993b4b673e4e8e69e66e2573971b3d623630f2a2724f60405160405180910390a35050505050565b600081815260208190526040812054900361111157604051633f2064f160e11b81526004810182905260240161027e565b6000818152602081905260408120818155906111306001830182611875565b61113e6002830160006117b1565b50506001546000199060005b81811015611190578360018281548110611166576111666121e1565b90600052602060002001540361117e57809250611190565b806111888161220d565b91505061114a565b5060001982131561123057815b6111a860018361224c565b8110156112075760016111bb828261225f565b815481106111cb576111cb6121e1565b9060005260206000200154600182815481106111e9576111e96121e1565b600091825260209091200155806111ff8161220d565b91505061119d565b50600180548061121957611219612272565b600190038181906000526020600020016000905590555b60405183907f3411f488b319ea4129f42cf93609e1822167b8b992e644385c9cd921f6f2cc6f90600090a2505050565b6000828152602081905260408120805490910361129357604051633f2064f160e11b81526004810184905260240161027e565b600281015460ff8316106112c657604051631d4a70ef60e11b81526004810184905260ff8316602482015260440161027e565b60ff82165b60028201546112dc9060019061224c565b8110156113fa57600282016112f282600161225f565b81548110611302576113026121e1565b9060005260206000209060040201826002018281548110611325576113256121e1565b6000918252602090912082546004909202018054909160ff1690829060ff1916600183600381111561135957611359611dba565b02179055508154815461ffff610100928390041690910262ffff0019821681178355835460ff6301000000918290041692849263ff000000191663ffffff001990911617908360018111156113b0576113b0611dba565b0217905550600182810180546113c992840191906118af565b50600282810180546113de92840191906118af565b50600391820154910155806113f28161220d565b9150506112cb565b508060020180548061140e5761140e612272565b600082815260208120600460001990930192830201805463ffffffff191681559061143c60018301826118ef565b61144a6002830160006118ef565b6003820160009055505090558160ff16837ff4b7896752f6bbafb0f6911d8a3c2b5f939e8bd3f44905fda87bc21c6cb6a54b60405160405180910390a3505050565b60015460609060008167ffffffffffffffff8111156114ad576114ad611962565b60405190808252806020026020018201604052801561150257816020015b6114ef60405180606001604052806000815260200160608152602001606081525090565b8152602001906001900390816114cb5790505b50905060005b828110156117aa5760008060018381548110611526576115266121e1565b90600052602060002001548152602001908152602001600020604051806060016040529081600082015481526020016001820180546115649061207c565b80601f01602080910402602001604051908101604052809291908181526020018280546115909061207c565b80156115dd5780601f106115b2576101008083540402835291602001916115dd565b820191906000526020600020905b8154815290600101906020018083116115c057829003601f168201915b5050505050815260200160028201805480602002602001604051908101604052809291908181526020016000905b82821015611772576000848152602090206040805160c08101909152600484029091018054829060ff16600381111561164657611646611dba565b600381111561165757611657611dba565b81528154610100810461ffff1660208301526040909101906301000000900460ff16600181111561168a5761168a611dba565b600181111561169b5761169b611dba565b8152602001600182018054806020026020016040519081016040528092919081815260200182805480156116f857602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116116da575b505050505081526020016002820180548060200260200160405190810160405280929190818152602001828054801561175057602002820191906000526020600020905b81548152602001906001019080831161173c575b505050505081526020016003820154815250508152602001906001019061160b565b505050508152505082828151811061178c5761178c6121e1565b602002602001018190525080806117a29061220d565b915050611508565b5092915050565b50805460008255600402906000526020600020908101906117d2919061190d565b50565b82805482825590600052602060002090810192821561182a579160200282015b8281111561182a57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906117f5565b5061183692915061194d565b5090565b82805482825590600052602060002090810192821561182a579160200282015b8281111561182a57825182559160200191906001019061185a565b5080546118819061207c565b6000825580601f10611891575050565b601f0160209004906000526020600020908101906117d2919061194d565b82805482825590600052602060002090810192821561182a5760005260206000209182015b8281111561182a5782548255916001019190600101906118d4565b50805460008255906000526020600020908101906117d2919061194d565b8082111561183657805463ffffffff19168155600061192f60018301826118ef565b61193d6002830160006118ef565b506000600382015560040161190d565b5b80821115611836576000815560010161194e565b634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561199b5761199b611962565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156119ca576119ca611962565b604052919050565b600067ffffffffffffffff8211156119ec576119ec611962565b5060051b60200190565b803560048110611a0557600080fd5b919050565b803561ffff81168114611a0557600080fd5b803560028110611a0557600080fd5b600082601f830112611a3c57600080fd5b81356020611a51611a4c836119d2565b6119a1565b82815260059290921b84018101918181019086841115611a7057600080fd5b8286015b84811015611aa15780356001600160a01b0381168114611a945760008081fd5b8352918301918301611a74565b509695505050505050565b600082601f830112611abd57600080fd5b81356020611acd611a4c836119d2565b82815260059290921b84018101918181019086841115611aec57600080fd5b8286015b84811015611aa15780358352918301918301611af0565b600060c08284031215611b1957600080fd5b611b21611978565b9050611b2c826119f6565b8152611b3a60208301611a0a565b6020820152611b4b60408301611a1c565b6040820152606082013567ffffffffffffffff80821115611b6b57600080fd5b611b7785838601611a2b565b60608401526080840135915080821115611b9057600080fd5b50611b9d84828501611aac565b60808301525060a082013560a082015292915050565b600082601f830112611bc457600080fd5b81356020611bd4611a4c836119d2565b82815260059290921b84018101918181019086841115611bf357600080fd5b8286015b84811015611aa157803567ffffffffffffffff811115611c175760008081fd5b611c258986838b0101611b07565b845250918301918301611bf7565b600080600060608486031215611c4857600080fd5b8335925060208085013567ffffffffffffffff80821115611c6857600080fd5b818701915087601f830112611c7c57600080fd5b813581811115611c8e57611c8e611962565b611ca0601f8201601f191685016119a1565b8181528985838601011115611cb457600080fd5b818585018683013760009181019094015291935060408601359180831115611cdb57600080fd5b5050611ce986828701611bb3565b9150509250925092565b803560ff81168114611a0557600080fd5b600080600060608486031215611d1957600080fd5b83359250611d2960208501611cf3565b9150604084013567ffffffffffffffff811115611d4557600080fd5b611ce986828701611b07565b600060208284031215611d6357600080fd5b5035919050565b60005b83811015611d85578181015183820152602001611d6d565b50506000910152565b60008151808452611da6816020860160208601611d6a565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b60048110611de057611de0611dba565b9052565b600081518084526020808501945080840160005b83811015611e1457815187529582019590820190600101611df8565b509495945050505050565b600060c08301611e30848451611dd0565b602061ffff818501511681860152604084015160028110611e5357611e53611dba565b604086015260608481015160c09187019190915280519283905281019160009060e08701905b80831015611ea25784516001600160a01b03168252938301936001929092019190830190611e79565b50608086015193508681036080880152611ebc8185611de4565b935050505060a083015160a08501528091505092915050565b805182526000602080830151606082860152611ef46060860182611d8e565b9050604084015185820360408701528181518084528484019150848160051b850101858401935060005b82811015611f4c57601f19868303018452611f3a828651611e1f565b94870194938701939150600101611f1e565b5098975050505050505050565b602081526000611f6c6020830184611ed5565b9392505050565b828152604060208201526000611f8c6040830184611d8e565b949350505050565b60008060408385031215611fa757600080fd5b82359150611fb760208401611cf3565b90509250929050565b602081526000611f6c6020830184611e1f565b60008060408385031215611fe657600080fd5b82359150602083013567ffffffffffffffff81111561200457600080fd5b61201085828601611b07565b9150509250929050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561206f57603f1988860301845261205d858351611ed5565b94509285019290850190600101612041565b5092979650505050505050565b600181811c9082168061209057607f821691505b6020821081036120b057634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561210057600081815260208120601f850160051c810160208610156120dd5750805b601f850160051c820191505b818110156120fc578281556001016120e9565b5050505b505050565b815167ffffffffffffffff81111561211f5761211f611962565b6121338161212d845461207c565b846120b6565b602080601f83116001811461216857600084156121505750858301515b600019600386901b1c1916600185901b1785556120fc565b600085815260208120601f198616915b8281101561219757888601518255948401946001909101908401612178565b50858210156121b55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082516121d7818460208701611d6a565b9190910192915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161221f5761221f6121f7565b5060010190565b8381526060810161223a6020830185611dd0565b61ffff83166040830152949350505050565b81810381811115610d7157610d716121f7565b80820180821115610d7157610d716121f7565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220e0eb1b9a5187ded1d63b99eb66857632d21776d0db7ee9679fb0a0d656bf99d364736f6c63430008140033608060405234801561001057600080fd5b50610670806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806326aa101f1161005b57806326aa101f146100d6578063274a1a001461011857806382d2f5b114610143578063ffdda9ee1461015657600080fd5b806314cbd9931461008257806316345f18146100a0578063166ee767146100c1575b600080fd5b61008a610169565b6040516100979190610469565b60405180910390f35b6100b36100ae3660046104d2565b6101cb565b604051908152602001610097565b6100d46100cf3660046104f4565b61025c565b005b6101086100e43660046104d2565b6001600160a01b031660009081526001602081905260409091205460ff1615151490565b6040519015158152602001610097565b61012b6101263660046104d2565b610347565b6040516001600160a01b039091168152602001610097565b6100d46101513660046104f4565b6103ad565b6100b3610164366004610527565b610422565b606060028054806020026020016040519081016040528092919081815260200182805480156101c157602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116101a3575b5050505050905090565b6000806101d783610347565b90506000816001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610219573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023d919061056b565b505050915050806402540be40061025491906105d1565b949350505050565b6001600160a01b03821660009081526001602052604090205460ff16156102a657604051631c01a6cf60e31b81526001600160a01b03831660048201526024015b60405180910390fd5b6040805180820182526001600160a01b0393841680825292841660208083019182526000858152808252848120935184549088166001600160a01b03199182161785559251600194850180549190981690841617909655829052918420805460ff1916821790556002805491820181559093527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace9092018054909216179055565b6001600160a01b03811660009081526001602052604081205460ff1661038b57604051631171f37160e11b81526001600160a01b038316600482015260240161029d565b506001600160a01b039081166000908152602081905260409020600101541690565b6001600160a01b03821660009081526001602052604090205460ff166103f157604051631171f37160e11b81526001600160a01b038316600482015260240161029d565b6001600160a01b03918216600090815260208190526040902060010180546001600160a01b03191691909216179055565b60008061042e846101cb565b905080600003610442576000915050610463565b8061045584670de0b6b3a7640000610601565b61045f9190610618565b9150505b92915050565b6020808252825182820181905260009190848201906040850190845b818110156104aa5783516001600160a01b031683529284019291840191600101610485565b50909695505050505050565b80356001600160a01b03811681146104cd57600080fd5b919050565b6000602082840312156104e457600080fd5b6104ed826104b6565b9392505050565b6000806040838503121561050757600080fd5b610510836104b6565b915061051e602084016104b6565b90509250929050565b6000806040838503121561053a57600080fd5b610543836104b6565b946020939093013593505050565b805169ffffffffffffffffffff811681146104cd57600080fd5b600080600080600060a0868803121561058357600080fd5b61058c86610551565b94506020860151935060408601519250606086015191506105af60808701610551565b90509295509295909350565b634e487b7160e01b600052601160045260246000fd5b80820260008212600160ff1b841416156105ed576105ed6105bb565b8181058314821517610463576104636105bb565b8082028115828204841417610463576104636105bb565b60008261063557634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122077aa95cb5054124b64885b10a53c27544d2f35f2eacafdd7c90bc6155034915664736f6c63430008140033",
        "sourceMap": "1806:24913:46:-:0;;;5194:467;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5268:10;;1269:95:27;;1322:31;;-1:-1:-1;;;1322:31:27;;1350:1;1322:31;;;515:51:59;488:18;;1322:31:27;;;;;;;1269:95;1373:32;1392:12;1373:18;:32::i;:::-;-1:-1:-1;;;;;;5294:30:46;::::1;5290:130;;5347:62;;-1:-1:-1::0;;;5347:62:46::1;;;;;;;;;;;5290:130;5460:31;;;;;:::i;:::-;;;;;;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;;;;;;5430:61:46::1;;::::0;5528:28:::1;::::0;::::1;::::0;::::1;:::i;:::-;;;;;;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;;;;;;5501:55:46;;::::1;;::::0;5566:36;;;::::1;;::::0;5612:42:::1;::::0;1806:24913;;2912:187:27;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:27;;;-1:-1:-1;;;;;;3020:17:27;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;1806:24913:46:-;;;;;;;;:::o;:::-;;;;;;;;:::o;14:350:59:-;92:6;100;153:2;141:9;132:7;128:23;124:32;121:52;;;169:1;166;159:12;121:52;195:16;;-1:-1:-1;;;;;240:31:59;;230:42;;220:70;;286:1;283;276:12;220:70;354:2;339:18;;;;333:25;309:5;;333:25;;-1:-1:-1;;;14:350:59:o;369:203::-;1806:24913:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106101f05760003560e01c8063715018a61161010f578063ad0b27fb116100a2578063d94a862b11610071578063d94a862b1461048d578063e6f0375d146104a2578063f2fde38b146104aa578063ffdda9ee146104bd57600080fd5b8063ad0b27fb14610420578063cc5d19c114610433578063cea9830314610446578063d916b8f61461046c57600080fd5b80638da5cb5b116100de5780638da5cb5b146103d65780638f32d59b146103e7578063925a06c6146103fa578063965c64f51461040d57600080fd5b8063715018a61461039957806382d2f5b1146103a15780638815a042146103b45780638a0fa52a146103c757600080fd5b806326cd5274116101875780633b47a9ac116101565780633b47a9ac14610336578063402300461461034b57806348c54b9d1461036b578063571959e01461037357600080fd5b806326cd5274146102b8578063274a1a00146102d85780632ad2a3f314610303578063333160e61461031657600080fd5b8063181f914b116101c3578063181f914b1461024e578063217786ef1461026f57806324210bf01461028257806326aa101f1461029557600080fd5b80630fe155fe146101f557806312d230c91461020a57806314cbd9931461021d578063166ee7671461023b575b600080fd5b610208610203366004612fbf565b6104d0565b005b61020861021836600461307d565b61055f565b6102256105b7565b60405161023291906130c9565b60405180910390f35b610208610249366004613116565b610644565b61026161025c36600461314f565b6106d4565b604051908152602001610232565b61026161027d366004613168565b610736565b61020861029036600461314f565b61081b565b6102a86102a3366004613230565b6108a9565b6040519015158152602001610232565b6102cb6102c636600461314f565b61093e565b604051610232919061344c565b6102eb6102e6366004613230565b6109ef565b6040516001600160a01b039091168152602001610232565b610208610311366004612fbf565b610a7d565b61032961032436600461345f565b610ad5565b604051610232919061348b565b61033e610ba3565b6040516102329190613511565b61035e61035936600461314f565b610ea4565b6040516102329190613573565b6102086110c6565b7f00000000000000000000000000000000000000000000000000000000000000006102eb565b610208611217565b6102086103af366004613116565b61122b565b6102086103c2366004613586565b611289565b610261670de0b6b3a764000081565b6000546001600160a01b03166102eb565b6000546001600160a01b031633146102a8565b61020861040836600461314f565b6112df565b61020861041b36600461345f565b611364565b61020861042e36600461314f565b6113c2565b61035e6104413660046135cc565b6113cf565b7f0000000000000000000000000000000000000000000000000000000000000000610261565b61047f61047a3660046135f8565b611444565b60405161023292919061363e565b6104956118a6565b6040516102329190613660565b61020861192e565b6102086104b8366004613230565b611a34565b6102616104cb3660046135cc565b611a6f565b6104d8611b08565b6040516307f0aaff60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690630fe155fe90610528908690869086906004016136b5565b600060405180830381600087803b15801561054257600080fd5b505af1158015610556573d6000803e3d6000fd5b50505050505050565b610567611b08565b6040516312d230c960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906312d230c990610528908690869086906004016136ea565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166314cbd9936040518163ffffffff1660e01b8152600401600060405180830381865afa158015610617573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261063f9190810190613770565b905090565b61064c611b08565b60405163166ee76760e01b81526001600160a01b03838116600483015282811660248301527f0000000000000000000000000000000000000000000000000000000000000000169063166ee767906044015b600060405180830381600087803b1580156106b857600080fd5b505af11580156106cc573d6000803e3d6000fd5b505050505050565b6000806107017f0000000000000000000000000000000000000000000000000000000000000000846137ba565b90506000670de0b6b3a7640000600161071a82856137d1565b61072491906137e4565b61072e919061380d565b949350505050565b6000808260e00151905060008084608001511161075757836060015161075d565b83608001515b90506000825160038111156107745761077461329d565b0361078b5761072e81836020015161ffff16611b35565b6001825160038111156107a0576107a061329d565b036107b75761072e81836020015161ffff16611b5d565b6002825160038111156107cc576107cc61329d565b036107e35761072e81836020015161ffff16611c34565b815160038111156107f6576107f661329d565b60405163db84f3ef60e01b815260040161081291815260200190565b60405180910390fd5b610823611b08565b600061082e82610ea4565b905060018160a0015160038111156108485761084861329d565b1415801561086c575060008160a0015160038111156108695761086961329d565b14155b8061087a5750428160800151115b1561089a5760405162b33a9d60e41b815260048101839052602401610812565b6108a48282611c68565b505050565b6040516326aa101f60e01b81526001600160a01b0382811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906326aa101f90602401602060405180830381865afa158015610914573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109389190613821565b92915050565b61096260405180606001604052806000815260200160608152602001606081525090565b6040516309b3549d60e21b8152600481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906326cd527490602401600060405180830381865afa1580156109c7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109389190810190613a9e565b6040516213a50d60e91b81526001600160a01b0382811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063274a1a0090602401602060405180830381865afa158015610a59573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109389190613ad2565b610a85611b08565b604051632ad2a3f360e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632ad2a3f390610528908690869086906004016136b5565b6040805160c0810182526000808252602082018190529181018290526060808201819052608082015260a0810191909152604051631998b07360e11b81526004810184905260ff831660248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063333160e690604401600060405180830381865afa158015610b74573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b9c9190810190613aef565b9392505050565b336000908152600460209081526040808320805482518185028101850190935280835260609493830182828015610bf957602002820191906000526020600020905b815481526020019060010190808311610be5575b505050505090506000815190506000816001600160401b03811115610c2057610c20612c5e565b604051908082528060200260200182016040528015610c5957816020015b610c46612b12565b815260200190600190039081610c3e5790505b50905060005b82811015610e9c5760026000858381518110610c7d57610c7d613b23565b602090810291909101810151825281810192909252604090810160002081516101008101835281546001600160a01b039081168252600183015494820194909452600282015490931691830191909152600380820154606084015260048201546080840152600582015460a084019160ff90911690811115610d0157610d0161329d565b6003811115610d1257610d1261329d565b8152600682015460208201526040805160c08101825260078401805492909301929091829060ff166003811115610d4b57610d4b61329d565b6003811115610d5c57610d5c61329d565b81528154610100810461ffff1660208301526040909101906301000000900460ff166001811115610d8f57610d8f61329d565b6001811115610da057610da061329d565b815260200160018201805480602002602001604051908101604052809291908181526020018280548015610dfd57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610ddf575b5050505050815260200160028201805480602002602001604051908101604052809291908181526020018280548015610e5557602002820191906000526020600020905b815481526020019060010190808311610e41575b5050505050815260200160038201548152505081525050828281518110610e7e57610e7e613b23565b60200260200101819052508080610e9490613b39565b915050610c5f565b509392505050565b610eac612b12565b610eb4611b08565b600082815260026020526040902080546001600160a01b0316610eed57604051631c6efd4b60e01b815260048101849052602401610812565b604080516101008101825282546001600160a01b03908116825260018401546020830152600284015416918101919091526003808301546060830152600483015460808301526005830154839160a084019160ff1690811115610f5257610f5261329d565b6003811115610f6357610f6361329d565b8152600682015460208201526040805160c08101825260078401805492909301929091829060ff166003811115610f9c57610f9c61329d565b6003811115610fad57610fad61329d565b81528154610100810461ffff1660208301526040909101906301000000900460ff166001811115610fe057610fe061329d565b6001811115610ff157610ff161329d565b81526020016001820180548060200260200160405190810160405280929190818152602001828054801561104e57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611030575b50505050508152602001600282018054806020026020016040519081016040528092919081815260200182805480156110a657602002820191906000526020600020905b815481526020019060010190808311611092575b50505050508152602001600382015481525050815250509150505b919050565b6110ce611b08565b6000600680548060200260200160405190810160405280929190818152602001828054801561112657602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611108575b505083519394506000925050505b8181101561120657600083828151811061115057611150613b23565b60209081029190910101516040516370a0823160e01b81523060048201529091506000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156111a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c99190613b52565b90506111f16111e06000546001600160a01b031690565b6001600160a01b03841690836121f6565b505080806111fe90613b39565b915050611134565b5061121360066000612b8b565b5050565b61121f611b08565b6112296000612255565b565b611233611b08565b6040516382d2f5b160e01b81526001600160a01b03838116600483015282811660248301527f000000000000000000000000000000000000000000000000000000000000000016906382d2f5b19060440161069e565b611291611b08565b60405163440ad02160e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638815a0429061069e9085908590600401613b6b565b6112e7611b08565b60405163492d036360e11b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063925a06c690602401600060405180830381600087803b15801561134957600080fd5b505af115801561135d573d6000803e3d6000fd5b5050505050565b61136c611b08565b60405163965c64f560e01b81526004810183905260ff821660248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063965c64f59060440161069e565b6113cc33826122a5565b50565b6113d7612b12565b60006113e384846124a2565b5080519091506001600160a01b031615806114145750836001600160a01b031681600001516001600160a01b031614155b15610b9c5760405163069d323f60e21b81526001600160a01b038516600482015260248101849052604401610812565b61144c612b12565b600085158061146257506001600160a01b038416155b156114805760405163f1e1fdc960e01b815260040160405180910390fd5b3360009081526003602090815260408083208984528252808320548084526002909252909120600101548790036114d35760405163f0783edf60e01b815233600482015260248101889052604401610812565b604051631998b07360e11b81526004810188905260ff871660248201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063333160e690604401600060405180830381865afa158015611544573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261156c9190810190613aef565b9050600042861161157e576001611581565b60005b90506000808260038111156115985761159861329d565b146115a45760006115a6565b865b90506000604051806101000160405280336001600160a01b031681526020018c81526020018a6001600160a01b031681526020018981526020018381526020018460038111156115f8576115f861329d565b8152600060208201819052604090910186905260018054929350829161161d83613b39565b9091555050600081815260026020818152604092839020855181546001600160a01b03199081166001600160a01b0392831617835592870151600180840191909155948701519382018054909316931692909217905560608401516003808301919091556080850151600483015560a085015160058301805487959293919260ff199091169184908111156116b4576116b461329d565b021790555060c0820151600682015560e08201518051600783018054909190829060ff191660018360038111156116ed576116ed61329d565b02179055506020820151815461ffff9091166101000262ffff0019821681178355604084015191839163ff000000191663ffffff001990911617630100000083600181111561173e5761173e61329d565b02179055506060820151805161175e916001840191602090910190612ba9565b506080820151805161177a916002840191602090910190612c0e565b5060a0820151816003015550509050508060036000336001600160a01b03166001600160a01b0316815260200190815260200160002060008e81526020019081526020016000208190555060046000336001600160a01b03166001600160a01b031681526020019081526020016000208190806001815401808255809150506001900390600052602060002001600090919091909150558b8a6001600160a01b0316336001600160a01b03167f73bd74e1ff025836c9fc129762ae94e04f2b3db6662a39172d6193a49b1a969a88604051611855919061348b565b60405180910390a4600060018560038111156118735761187361329d565b03611889576118828284611c68565b9050611893565b61189382846126f0565b919c919b50909950505050505050505050565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d94a862b6040518163ffffffff1660e01b8152600401600060405180830381865afa158015611906573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261063f9190810190613b84565b611936611b08565b6000611945620151804261380d565b61195290620151806137ba565b60008181526005602052604081209192505b81548110156108a457600082828154811061198157611981613b23565b6000918252602080832090910154808352600290915260409091209091506001600582015460ff1660038111156119ba576119ba61329d565b14806119de57506000600582015460ff1660038111156119dc576119dc61329d565b145b80156119ee575042816004015411155b15611a1f5760405182907fbb65ea9884c06faec2c4686a4a9e25ccc52e1ad8e5b6bb08354f8207013090e090600090a25b50508080611a2c90613b39565b915050611964565b611a3c611b08565b6001600160a01b038116611a6657604051631e4fbdf760e01b815260006004820152602401610812565b6113cc81612255565b604051600162112b0960e11b031981526001600160a01b038381166004830152602482018390526000917f00000000000000000000000000000000000000000000000000000000000000009091169063ffdda9ee90604401602060405180830381865afa158015611ae4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9c9190613b52565b6000546001600160a01b031633146112295760405163118cdaa760e01b8152336004820152602401610812565b6000611b4462015180836137ba565b611b4e90846137d1565b90508281101561093857600080fd5b6000808080611b77611b72620151808861380d565b612742565b91945092509050611b8885836137d1565b9150600c611b976001846137e4565b611ba1919061380d565b611bab90846137d1565b9250600c611bba6001846137e4565b611bc49190613c34565b611bcf9060016137d1565b91506000611bdd84846127de565b905080821115611beb578091505b611bf86201518088613c34565b62015180611c07868686612864565b611c1191906137ba565b611c1b91906137d1565b945086851015611c2a57600080fd5b5050505092915050565b6000808080611c49611b72620151808861380d565b91945092509050611c5a85846137d1565b92506000611bdd84846127de565b6000808260e0015190506000611c828285604001516129a1565b6000935090508282604001516001811115611c9f57611c9f61329d565b03611cc95781608001518181518110611cba57611cba613b23565b60200260200101519250611ddd565b600182604001516001811115611ce157611ce161329d565b03611ddd5760408085015160a08401519151600162112b0960e11b031981526001600160a01b03918216600482015260248101929092527f0000000000000000000000000000000000000000000000000000000000000000169063ffdda9ee90604401602060405180830381865afa158015611d61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d859190613b52565b925060008260a00151118015611d99575082155b15611ddd576020840151845160408087015190516303be8a9f60e11b815260048101939093526001600160a01b039182166024840152166044820152606401610812565b611de684610736565b608085015260c08401805190611dfb82613b39565b905250600085815260026020818152604092839020875181546001600160a01b03199081166001600160a01b0392831617835592890151600180840191909155948901519382018054909316931692909217905560608601516003808301919091556080870151600483015560a087015160058301805489959293919260ff19909116918490811115611e9057611e9061329d565b021790555060c0820151600682015560e08201518051600783018054909190829060ff19166001836003811115611ec957611ec961329d565b02179055506020820151815461ffff9091166101000262ffff0019821681178355604084015191839163ff000000191663ffffff0019909116176301000000836001811115611f1a57611f1a61329d565b021790555060608201518051611f3a916001840191602090910190612ba9565b5060808201518051611f56916002840191602090910190612c0e565b5060a082015181600301555050905050611f7085856126f0565b82156121ee5760408481015185519151636eb1769f60e11b81526001600160a01b03928316600482015230602482015290916000919083169063dd62ed3e90604401602060405180830381865afa158015611fcf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ff39190613b52565b9050848110156120245785516040516317e3a89960e21b81526001600160a01b039091166004820152602401610812565b60408681018051600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0180546001600160a01b0319166001600160a01b03928316179055905160c08901518951935189815291831693909216907f7c12298d92f5da73db22fb176093bdf79566023af218c560cfd5235cb08af64f9060200160405180910390a485516120d2906001600160a01b038416903088612a26565b60007f00000000000000000000000000000000000000000000000000000000000000001315611c2a576000612106866106d4565b60405163095ea7b360e01b8152306004820152602481018290529091506000906001600160a01b0385169063095ea7b3906044016020604051808303816000875af1158015612159573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061217d9190613821565b9050806121b4576040808901519051638b3fca9b60e01b81523060048201526001600160a01b039091166024820152604401610812565b6121e96001600160a01b038516307f000000000000000000000000000000000000000000000000000000000000000085612a26565b505050505b505092915050565b6040516001600160a01b038381166024830152604482018390526108a491859182169063a9059cbb906064015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612a65565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006122b183836124a2565b6001600160a01b03851660009081526003602081815260408084208885528252808420849055848452600291829052832080546001600160a01b031990811682556001820185905591810180549092169091559081018290556004810182905560058101805460ff191690556006810182905560078101805463ffffffff19168155929450925090816123476008850182612b8b565b612355600283016000612b8b565b5060006003919091018190556001600160a01b0386168152600460205260408120600019935091505b81548110156123c4578382828154811061239a5761239a613b23565b9060005260206000200154036123b2578092506123c4565b806123bc81613b39565b91505061237e565b5060001982131561246557815b81546123df906001906137e4565b81101561243d57816123f28260016137d1565b8154811061240257612402613b23565b906000526020600020015482828154811061241f5761241f613b23565b6000918252602090912001558061243581613b39565b9150506123d1565b508080548061244e5761244e613c48565b600190038181906000526020600020016000905590555b60405184906001600160a01b038716907f06aa12c0ad65927b4a753d119c26e490d3c4a4e11cb631b43131a709dc1e591790600090a35050505050565b6124aa612b12565b6001600160a01b038084166000908152600360208181526040808420878552825280842054808552600280845294829020825161010081018452815488168152600182015494810194909452948501549095169082015282820154606082015260048301546080820152600583015490929160a084019160ff16908111156125345761253461329d565b60038111156125455761254561329d565b8152600682015460208201526040805160c08101825260078401805492909301929091829060ff16600381111561257e5761257e61329d565b600381111561258f5761258f61329d565b81528154610100810461ffff1660208301526040909101906301000000900460ff1660018111156125c2576125c261329d565b60018111156125d3576125d361329d565b81526020016001820180548060200260200160405190810160405280929190818152602001828054801561263057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612612575b505050505081526020016002820180548060200260200160405190810160405280929190818152602001828054801561268857602002820191906000526020600020905b815481526020019060010190808311612674575b50505050508152602001600382015481525050815250509150836001600160a01b031682600001516001600160a01b0316146126e95760405163069d323f60e21b81526001600160a01b038516600482015260248101849052604401610812565b9250929050565b60808101511561121357600062015180826080015161270f919061380d565b61271c90620151806137ba565b600090815260056020908152604082208054600181018255908352912001839055505050565b60008080836226496581018262023ab1600483020590506004600362023ab18302010590910390600062164b09610fa0600185010205905060046105b58202058303601f019250600061098f846050028161279f5761279f6137f7565b0590506000605061098f83020585039050600b820560301994909401606402929092018301996002600c90940290910392909201975095509350505050565b600081600114806127ef5750816003145b806127fa5750816005145b806128055750816007145b806128105750816008145b8061281b575081600a145b80612826575081600c145b156128335750601f610938565b816002146128435750601e610938565b61284c83612ad6565b61285757601c61285a565b601d5b60ff169392505050565b60006107b284101561287557600080fd5b838383600062253d8c60046064600c61288f600e88613c5e565b6128999190613c85565b6128a588611324613cb3565b6128af9190613cb3565b6128b99190613c85565b6128c4906003613cd3565b6128ce9190613c85565b600c806128dc600e88613c5e565b6128e69190613c85565b6128f190600c613cd3565b6128fc600288613c5e565b6129069190613c5e565b6129129061016f613cd3565b61291c9190613c85565b6004600c61292b600e89613c5e565b6129359190613c85565b612941896112c0613cb3565b61294b9190613cb3565b612957906105b5613cd3565b6129619190613c85565b61296d617d4b87613c5e565b6129779190613cb3565b6129819190613cb3565b61298b9190613c5e565b6129959190613c5e565b98975050505050505050565b6000805b836060015151811015612a0157826001600160a01b0316846060015182815181106129d2576129d2613b23565b60200260200101516001600160a01b0316036129ef579050610938565b806129f981613b39565b9150506129a5565b50604051634947d6f360e11b81526001600160a01b0383166004820152602401610812565b6040516001600160a01b038481166024830152838116604483015260648201839052612a5f9186918216906323b872dd90608401612223565b50505050565b600080602060008451602086016000885af180612a88576040513d6000823e3d81fd5b50506000513d91508115612aa0578060011415612aad565b6001600160a01b0384163b155b15612a5f57604051635274afe760e01b81526001600160a01b0385166004820152602401610812565b6000612ae3600483613c34565b158015612af95750612af6606483613c34565b15155b806109385750612b0b61019083613c34565b1592915050565b604080516101008101825260008082526020820181905291810182905260608101829052608081018290529060a0820190815260200160008152602001612b866040805160c0810182526000808252602082018190529181018290526060808201819052608082015260a081019190915290565b905290565b50805460008255906000526020600020908101906113cc9190612c49565b828054828255906000526020600020908101928215612bfe579160200282015b82811115612bfe57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190612bc9565b50612c0a929150612c49565b5090565b828054828255906000526020600020908101928215612bfe579160200282015b82811115612bfe578251825591602001919060010190612c2e565b5b80821115612c0a5760008155600101612c4a565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715612c9657612c96612c5e565b60405290565b60405161010081016001600160401b0381118282101715612c9657612c96612c5e565b604051606081016001600160401b0381118282101715612c9657612c96612c5e565b604051601f8201601f191681016001600160401b0381118282101715612d0957612d09612c5e565b604052919050565b60006001600160401b03821115612d2a57612d2a612c5e565b50601f01601f191660200190565b60006001600160401b03821115612d5157612d51612c5e565b5060051b60200190565b600481106113cc57600080fd5b80356110c181612d5b565b61ffff811681146113cc57600080fd5b80356110c181612d73565b600281106113cc57600080fd5b80356110c181612d8e565b6001600160a01b03811681146113cc57600080fd5b80356110c181612da6565b600082601f830112612dd757600080fd5b81356020612dec612de783612d38565b612ce1565b82815260059290921b84018101918181019086841115612e0b57600080fd5b8286015b84811015612e2f578035612e2281612da6565b8352918301918301612e0f565b509695505050505050565b600082601f830112612e4b57600080fd5b81356020612e5b612de783612d38565b82815260059290921b84018101918181019086841115612e7a57600080fd5b8286015b84811015612e2f5780358352918301918301612e7e565b600060c08284031215612ea757600080fd5b612eaf612c74565b9050612eba82612d68565b8152612ec860208301612d83565b6020820152612ed960408301612d9b565b604082015260608201356001600160401b0380821115612ef857600080fd5b612f0485838601612dc6565b60608401526080840135915080821115612f1d57600080fd5b50612f2a84828501612e3a565b60808301525060a082013560a082015292915050565b600082601f830112612f5157600080fd5b81356020612f61612de783612d38565b82815260059290921b84018101918181019086841115612f8057600080fd5b8286015b84811015612e2f5780356001600160401b03811115612fa35760008081fd5b612fb18986838b0101612e95565b845250918301918301612f84565b600080600060608486031215612fd457600080fd5b8335925060208401356001600160401b0380821115612ff257600080fd5b818601915086601f83011261300657600080fd5b8135613014612de782612d11565b81815288602083860101111561302957600080fd5b816020850160208301376000602083830101528095505050604086013591508082111561305557600080fd5b5061306286828701612f40565b9150509250925092565b803560ff811681146110c157600080fd5b60008060006060848603121561309257600080fd5b833592506130a26020850161306c565b915060408401356001600160401b038111156130bd57600080fd5b61306286828701612e95565b6020808252825182820181905260009190848201906040850190845b8181101561310a5783516001600160a01b0316835292840192918401916001016130e5565b50909695505050505050565b6000806040838503121561312957600080fd5b823561313481612da6565b9150602083013561314481612da6565b809150509250929050565b60006020828403121561316157600080fd5b5035919050565b60006020828403121561317a57600080fd5b81356001600160401b038082111561319157600080fd5b9083019061010082860312156131a657600080fd5b6131ae612c9c565b6131b783612dbb565b8152602083013560208201526131cf60408401612dbb565b604082015260608301356060820152608083013560808201526131f460a08401612d68565b60a082015260c083013560c082015260e08301358281111561321557600080fd5b61322187828601612e95565b60e08301525095945050505050565b60006020828403121561324257600080fd5b8135610b9c81612da6565b60005b83811015613268578181015183820152602001613250565b50506000910152565b6000815180845261328981602086016020860161324d565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b600481106113cc576113cc61329d565b600081518084526020808501945080840160005b838110156132f3578151875295820195908201906001016132d7565b509495945050505050565b600060c08301825161330f816132b3565b845260208381015161ffff16818601526040840151600281106133345761333461329d565b604086015260608481015160c09187019190915280519283905281019160009060e08701905b808310156133835784516001600160a01b0316825293830193600192909201919083019061335a565b5060808601519350868103608088015261339d81856132c3565b935050505060a083015160a08501528091505092915050565b600081518084526020808501808196508360051b8101915082860160005b858110156133fe5782840389526133ec8483516132fe565b988501989350908401906001016133d4565b5091979650505050505050565b80518252600060208201516060602085015261342a6060850182613271565b90506040830151848203604086015261344382826133b6565b95945050505050565b602081526000610b9c602083018461340b565b6000806040838503121561347257600080fd5b823591506134826020840161306c565b90509250929050565b602081526000610b9c60208301846132fe565b600061010060018060a01b038084511685526020840151602086015280604085015116604086015250606083015160608501526080830151608085015260a08301516134e9816132b3565b8060a08601525060c083015160c085015260e08301518160e0860152613443828601826132fe565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561356657603f1988860301845261355485835161349e565b94509285019290850190600101613538565b5092979650505050505050565b602081526000610b9c602083018461349e565b6000806040838503121561359957600080fd5b8235915060208301356001600160401b038111156135b657600080fd5b6135c285828601612e95565b9150509250929050565b600080604083850312156135df57600080fd5b82356135ea81612da6565b946020939093013593505050565b6000806000806080858703121561360e57600080fd5b8435935061361e6020860161306c565b9250604085013561362e81612da6565b9396929550929360600135925050565b604081526000613651604083018561349e565b90508260208301529392505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561356657603f198886030184526136a385835161340b565b94509285019290850190600101613687565b8381526060602082015260006136ce6060830185613271565b82810360408401526136e081856133b6565b9695505050505050565b83815260ff8316602082015260606040820152600061344360608301846132fe565b600082601f83011261371d57600080fd5b8151602061372d612de783612d38565b82815260059290921b8401810191818101908684111561374c57600080fd5b8286015b84811015612e2f57805161376381612da6565b8352918301918301613750565b60006020828403121561378257600080fd5b81516001600160401b0381111561379857600080fd5b61072e8482850161370c565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610938576109386137a4565b80820180821115610938576109386137a4565b81810381811115610938576109386137a4565b634e487b7160e01b600052601260045260246000fd5b60008261381c5761381c6137f7565b500490565b60006020828403121561383357600080fd5b81518015158114610b9c57600080fd5b80516110c181612d5b565b80516110c181612d73565b80516110c181612d8e565b600082601f83011261387557600080fd5b81516020613885612de783612d38565b82815260059290921b840181019181810190868411156138a457600080fd5b8286015b84811015612e2f57805183529183019183016138a8565b600060c082840312156138d157600080fd5b6138d9612c74565b90506138e482613843565b81526138f26020830161384e565b602082015261390360408301613859565b604082015260608201516001600160401b038082111561392257600080fd5b61392e8583860161370c565b6060840152608084015191508082111561394757600080fd5b5061395484828501613864565b60808301525060a082015160a082015292915050565b600082601f83011261397b57600080fd5b8151602061398b612de783612d38565b82815260059290921b840181019181810190868411156139aa57600080fd5b8286015b84811015612e2f5780516001600160401b038111156139cd5760008081fd5b6139db8986838b01016138bf565b8452509183019183016139ae565b6000606082840312156139fb57600080fd5b613a03612cbf565b90508151815260208201516001600160401b0380821115613a2357600080fd5b818401915084601f830112613a3757600080fd5b8151613a45612de782612d11565b818152866020838601011115613a5a57600080fd5b613a6b82602083016020870161324d565b6020850152506040840151915080821115613a8557600080fd5b50613a928482850161396a565b60408301525092915050565b600060208284031215613ab057600080fd5b81516001600160401b03811115613ac657600080fd5b61072e848285016139e9565b600060208284031215613ae457600080fd5b8151610b9c81612da6565b600060208284031215613b0157600080fd5b81516001600160401b03811115613b1757600080fd5b61072e848285016138bf565b634e487b7160e01b600052603260045260246000fd5b600060018201613b4b57613b4b6137a4565b5060010190565b600060208284031215613b6457600080fd5b5051919050565b82815260406020820152600061072e60408301846132fe565b60006020808385031215613b9757600080fd5b82516001600160401b0380821115613bae57600080fd5b818501915085601f830112613bc257600080fd5b8151613bd0612de782612d38565b81815260059190911b83018401908481019088831115613bef57600080fd5b8585015b83811015613c2757805185811115613c0b5760008081fd5b613c198b89838a01016139e9565b845250918601918601613bf3565b5098975050505050505050565b600082613c4357613c436137f7565b500690565b634e487b7160e01b600052603160045260246000fd5b8181036000831280158383131683831282161715613c7e57613c7e6137a4565b5092915050565b600082613c9457613c946137f7565b600160ff1b821460001984141615613cae57613cae6137a4565b500590565b80820182811260008312801582168215821617156121ee576121ee6137a4565b80820260008212600160ff1b84141615613cef57613cef6137a4565b8181058314821517610938576109386137a456fea2646970667358221220582584cfcaed1d96d442493be7251b6a055ab77bf2b7eee4d85915b43e04d5a564736f6c63430008140033",
        "sourceMap": "1806:24913:46:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8885:227;;;;;;:::i;:::-;;:::i;:::-;;10548:245;;;;;;:::i;:::-;;:::i;14337:142::-;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;12890:189;;;;;;:::i;:::-;;:::i;19039:283::-;;;;;;:::i;:::-;;:::i;:::-;;;8968:25:59;;;8956:2;8941:18;19039:283:46;8822:177:59;18000:836:46;;;;;;:::i;:::-;;:::i;17208:526::-;;;;;;:::i;:::-;;:::i;14036:160::-;;;;;;:::i;:::-;;:::i;:::-;;;10491:14:59;;10484:22;10466:41;;10454:2;10439:18;14036:160:46;10326:187:59;9507:138:46;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;13676:163::-;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;14440:32:59;;;14422:51;;14410:2;14395:18;13676:163:46;14276:203:59;8409:227:46;;;;;;:::i;:::-;;:::i;12498:199::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;14599:454::-;;;:::i;:::-;;;;;;;:::i;20014:346::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;11702:457::-;;;:::i;20496:101::-;20573:17;20496:101;;2293::27;;;:::i;13284:201:46:-;;;;;;:::i;:::-;;:::i;10068:175::-;;;;;;:::i;:::-;;:::i;3563:58::-;;3617:4;3563:58;;1638:85:27;1684:7;1710:6;-1:-1:-1;;;;;1710:6:27;1638:85;;15892:93:46;15934:4;1710:6:27;-1:-1:-1;;;;;1710:6:27;15957:10:46;:21;15892:93;;9227:120;;;;;;:::i;:::-;;:::i;11035:178::-;;;;;;:::i;:::-;;:::i;8083:97::-;;;;;;:::i;:::-;;:::i;15312:419::-;;;;;;:::i;:::-;;:::i;20725:106::-;20804:20;20725:106;;6100:1851;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;9749:120::-;;;:::i;:::-;;;;;;;:::i;16202:727::-;;;:::i;2543:215:27:-;;;;;;:::i;:::-;;:::i;19558:209:46:-;;;;;;:::i;:::-;;:::i;8885:227::-;1531:13:27;:11;:13::i;:::-;9032:73:46::1;::::0;-1:-1:-1;;;9032:73:46;;-1:-1:-1;;;;;9032:27:46::1;:38;::::0;::::1;::::0;:73:::1;::::0;9071:7;;9080:9;;9091:13;;9032:73:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;8885:227:::0;;;:::o;10548:245::-;1531:13:27;:11;:13::i;:::-;10699:87:46::1;::::0;-1:-1:-1;;;10699:87:46;;-1:-1:-1;;;;;10699:27:46::1;:45;::::0;::::1;::::0;:87:::1;::::0;10745:7;;10754:17;;10773:12;;10699:87:::1;;;:::i;14337:142::-:0;14391:16;14426:24;-1:-1:-1;;;;;14426:44:46;;:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;14426:46:46;;;;;;;;;;;;:::i;:::-;14419:53;;14337:142;:::o;12890:189::-;1531:13:27;:11;:13::i;:::-;12996:76:46::1;::::0;-1:-1:-1;;;12996:76:46;;-1:-1:-1;;;;;21862:15:59;;;12996:76:46::1;::::0;::::1;21844:34:59::0;21914:15;;;21894:18;;;21887:43;12996:24:46::1;:42;::::0;::::1;::::0;21779:18:59;;12996:76:46::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;12890:189:::0;;:::o;19039:283::-;19113:7;;19155:38;19172:20;19155:6;:38;:::i;:::-;19132:61;-1:-1:-1;19203:11:46;3617:4;19263:1;19218:42;3617:4;19132:61;19218:42;:::i;:::-;:46;;;;:::i;:::-;19217:78;;;;:::i;:::-;19203:92;19039:283;-1:-1:-1;;;;19039:283:46:o;18000:836::-;18087:7;18106:30;18139:12;:24;;;18106:57;;18173:25;18248:1;18213:12;:32;;;:36;:101;;18287:12;:27;;;18213:101;;;18252:12;:32;;;18213:101;18173:141;-1:-1:-1;18350:10:46;18328:18;;:32;;;;;;;;:::i;:::-;;18324:408;;18383:60;18400:17;18419:11;:23;;;18383:60;;:16;:60::i;18324:408::-;18486:12;18464:18;;:34;;;;;;;;:::i;:::-;;18460:272;;18521:62;18540:17;18559:11;:23;;;18521:62;;:18;:62::i;18460:272::-;18626:11;18604:18;;:33;;;;;;;;:::i;:::-;;18600:132;;18660:61;18678:17;18697:11;:23;;;18660:61;;:17;:61::i;18600:132::-;18809:18;;18801:27;;;;;;;;:::i;:::-;18749:80;;-1:-1:-1;;;18749:80:46;;;;;;8968:25:59;;8956:2;8941:18;;8822:177;18749:80:46;;;;;;;;17208:526;5157:13;:11;:13::i;:::-;17303:32:::1;17338:41;17361:17;17338:22;:41::i;:::-;17303:76:::0;-1:-1:-1;17430:13:46::1;17407:12;:19;;;:36;;;;;;;;:::i;:::-;;;:77;;;;-1:-1:-1::0;17470:14:46::1;17447:12;:19;;;:37;;;;;;;;:::i;:::-;;;17407:77;17406:149;;;;17540:15;17505:12;:32;;;:50;17406:149;17389:277;;;17587:68;::::0;-1:-1:-1;;;17587:68:46;;::::1;::::0;::::1;8968:25:59::0;;;8941:18;;17587:68:46::1;8822:177:59::0;17389:277:46::1;17676:51;17695:17;17714:12;17676:18;:51::i;:::-;;17293:441;17208:526:::0;:::o;14036:160::-;14132:57;;-1:-1:-1;;;14132:57:46;;-1:-1:-1;;;;;14440:32:59;;;14132:57:46;;;14422:51:59;14109:4:46;;14132:24;:42;;;;;;14395:18:59;;14132:57:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;14125:64;14036:160;-1:-1:-1;;14036:160:46:o;9507:138::-;9564:11;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;9564:11:46;9594:44;;-1:-1:-1;;;9594:44:46;;;;;8968:25:59;;;9594:27:46;-1:-1:-1;;;;;9594:35:46;;;;8941:18:59;;9594:44:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;9594:44:46;;;;;;;;;;;;:::i;13676:163::-;13775:57;;-1:-1:-1;;;13775:57:46;;-1:-1:-1;;;;;14440:32:59;;;13775:57:46;;;14422:51:59;13749:7:46;;13775:24;:42;;;;;;14395:18:59;;13775:57:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;8409:227::-;1531:13:27;:11;:13::i;:::-;8556:73:46::1;::::0;-1:-1:-1;;;8556:73:46;;-1:-1:-1;;;;;8556:27:46::1;:38;::::0;::::1;::::0;:73:::1;::::0;8595:7;;8604:9;;8615:13;;8556:73:::1;;;:::i;12498:199::-:0;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12621:69:46;;-1:-1:-1;;;12621:69:46;;;;;27775:25:59;;;27848:4;27836:17;;27816:18;;;27809:45;12621:27:46;-1:-1:-1;;;;;12621:42:46;;;;27748:18:59;;12621:69:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;12621:69:46;;;;;;;;;;;;:::i;:::-;12614:76;12498:199;-1:-1:-1;;;12498:199:46:o;14599:454::-;14737:10;14683:24;14710:38;;;:26;:38;;;;;;;;14683:65;;;;;;;;;;;;;;;;;14650:21;;14683:24;:65;;14710:38;14683:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14758:26;14787:7;:14;14758:43;;14811:35;14868:18;-1:-1:-1;;;;;14849:38:46;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;14811:76;;14902:9;14897:120;14921:18;14917:1;:22;14897:120;;;14979:15;:27;14995:7;15003:1;14995:10;;;;;;;;:::i;:::-;;;;;;;;;;;;14979:27;;;;;;;;;;;;;-1:-1:-1;14979:27:46;14960:46;;;;;;;;;-1:-1:-1;;;;;14960:46:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;14960:46:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:13;14974:1;14960:16;;;;;;;;:::i;:::-;;;;;;:46;;;;14941:3;;;;;:::i;:::-;;;;14897:120;;;-1:-1:-1;15033:13:46;14599:454;-1:-1:-1;;;14599:454:46:o;20014:346::-;20093:19;;:::i;:::-;1531:13:27;:11;:13::i;:::-;20124:33:46::1;20160:23:::0;;;:15:::1;:23;::::0;;;;20197:20;;-1:-1:-1;;;;;20197:20:46::1;20193:131;;20254:59;::::0;-1:-1:-1;;;20254:59:46;;::::1;::::0;::::1;8968:25:59::0;;;8941:18;;20254:59:46::1;8822:177:59::0;20193:131:46::1;20334:19;::::0;;::::1;::::0;::::1;::::0;;;;-1:-1:-1;;;;;20334:19:46;;::::1;::::0;;;;::::1;::::0;::::1;::::0;::::1;::::0;::::1;::::0;::::1;::::0;::::1;::::0;;;;;;;::::1;::::0;;::::1;::::0;;;;;::::1;::::0;::::1;::::0;;;;;::::1;::::0;::::1;::::0;20341:12;;20334:19;;;;::::1;;::::0;;::::1;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;::::0;;::::1;::::0;::::1;::::0;::::1;::::0;::::1;::::0;;;;::::1;::::0;::::1;::::0;;::::1;::::0;::::1;::::0;;;;;;;;;;;::::1;;;::::0;::::1;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;::::0;;;;::::1;::::0;::::1;;;;::::0;::::1;::::0;;;;;;;;::::1;;;;::::0;::::1;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;;-1:-1:-1;;;;;20334:19:46::1;::::0;;;;;::::1;::::0;::::1;;::::0;;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;::::0;::::1;;;;1554:1:27;20014:346:46::0;;;:::o;11702:457::-;1531:13:27;:11;:13::i;:::-;11754:23:46::1;11780;11754:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;;-1:-1:-1;;;;;11754:49:46::1;::::0;;;;;::::1;::::0;::::1;;::::0;;::::1;;;;-1:-1:-1::0;;11835:13:46;;11754:49;;-1:-1:-1;11813:19:46::1;::::0;-1:-1:-1;;;11866:247:46::1;11890:11;11886:1;:15;11866:247;;;11922:12;11944:6;11951:1;11944:9;;;;;;;;:::i;:::-;;::::0;;::::1;::::0;;;;;;11998:30:::1;::::0;-1:-1:-1;;;11998:30:46;;12022:4:::1;11998:30;::::0;::::1;14422:51:59::0;11944:9:46;;-1:-1:-1;11980:15:46::1;::::0;-1:-1:-1;;;;;11998:15:46;::::1;::::0;::::1;::::0;14395:18:59;;11998:30:46::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;11980:48;;12066:36;12085:7;1684::27::0;1710:6;-1:-1:-1;;;;;1710:6:27;;1638:85;12085:7:46::1;-1:-1:-1::0;;;;;12066:18:46;::::1;::::0;12094:7;12066:18:::1;:36::i;:::-;11908:205;;11903:3;;;;;:::i;:::-;;;;11866:247;;;-1:-1:-1::0;12122:30:46::1;12129:23;;12122:30;:::i;:::-;11744:415;;11702:457::o:0;2293:101:27:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;13284:201:46:-;1531:13:27;:11;:13::i;:::-;13396:82:46::1;::::0;-1:-1:-1;;;13396:82:46;;-1:-1:-1;;;;;21862:15:59;;;13396:82:46::1;::::0;::::1;21844:34:59::0;21914:15;;;21894:18;;;21887:43;13396:24:46::1;:45;::::0;::::1;::::0;21779:18:59;;13396:82:46::1;21632:304:59::0;10068:175:46;1531:13:27;:11;:13::i;:::-;10171:65:46::1;::::0;-1:-1:-1;;;10171:65:46;;-1:-1:-1;;;;;10171:27:46::1;:42;::::0;::::1;::::0;:65:::1;::::0;10214:7;;10223:12;;10171:65:::1;;;:::i;9227:120::-:0;1531:13:27;:11;:13::i;:::-;9293:47:46::1;::::0;-1:-1:-1;;;9293:47:46;;::::1;::::0;::::1;8968:25:59::0;;;9293:27:46::1;-1:-1:-1::0;;;;;9293:38:46::1;::::0;::::1;::::0;8941:18:59;;9293:47:46::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;9227:120:::0;:::o;11035:178::-;1531:13:27;:11;:13::i;:::-;11133:73:46::1;::::0;-1:-1:-1;;;11133:73:46;;::::1;::::0;::::1;27775:25:59::0;;;27848:4;27836:17;;27816:18;;;27809:45;11133:27:46::1;-1:-1:-1::0;;;;;11133:45:46::1;::::0;::::1;::::0;27748:18:59;;11133:73:46::1;27605:255:59::0;8083:97:46;8140:33;8153:10;8165:7;8140:12;:33::i;:::-;8083:97;:::o;15312:419::-;15399:19;;:::i;:::-;15431:32;15468:47;15497:8;15507:7;15468:28;:47::i;:::-;-1:-1:-1;15529:20:46;;15430:85;;-1:-1:-1;;;;;;15529:34:46;;;:70;;;15591:8;-1:-1:-1;;;;;15567:32:46;:12;:20;;;-1:-1:-1;;;;;15567:32:46;;;15529:70;15525:171;;;15622:63;;-1:-1:-1;;;15622:63:46;;-1:-1:-1;;;;;29240:32:59;;15622:63:46;;;29222:51:59;29289:18;;;29282:34;;;29195:18;;15622:63:46;29048:274:59;6100:1851:46;6234:19;;:::i;:::-;6255:7;6282:12;;;:36;;-1:-1:-1;;;;;;6298:20:46;;;6282:36;6278:130;;;6341:56;;-1:-1:-1;;;6341:56:46;;;;;;;;;;;6278:130;6482:10;6418:33;6454:39;;;:27;:39;;;;;;;;:48;;;;;;;;;6516:42;;;:15;:42;;;;;;:49;;;:60;;;6512:167;;6599:69;;-1:-1:-1;;;6599:69:46;;6648:10;6599:69;;;29222:51:59;29289:18;;;29282:34;;;29195:18;;6599:69:46;29048:274:59;6512:167:46;6722:70;;-1:-1:-1;;;6722:70:46;;;;;27775:25:59;;;27848:4;27836:17;;27816:18;;;27809:45;6689:30:46;;6722:27;-1:-1:-1;;;;;6722:42:46;;;;27748:18:59;;6722:70:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;6722:70:46;;;;;;;;;;;;:::i;:::-;6689:103;;6802:13;6836:15;6818;:33;:66;;6871:13;6818:66;;;6854:14;6818:66;6802:82;-1:-1:-1;6894:27:46;;6924:6;:24;;;;;;;;:::i;:::-;;:46;;6969:1;6924:46;;;6951:15;6924:46;6894:76;;6981:32;7016:307;;;;;;;;7052:10;-1:-1:-1;;;;;7016:307:46;;;;;7084:7;7016:307;;;;7112:6;-1:-1:-1;;;;;7016:307:46;;;;;7148:15;7016:307;;;;7198:19;7016:307;;;;7239:6;7016:307;;;;;;;;:::i;:::-;;;7273:1;7016:307;;;;;;;;;;;;;7353:23;;;6981:342;;-1:-1:-1;7353:23:46;;7386:25;7353:23;7386:25;:::i;:::-;;;;-1:-1:-1;;7422:25:46;;;;:15;:25;;;;;;;;;:40;;;;-1:-1:-1;;;;;;7422:40:46;;;-1:-1:-1;;;;;7422:40:46;;;;;;;;;;-1:-1:-1;7422:40:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7422:40:46;;;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;7422:40:46;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7422:40:46;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;7422:40:46;;;;;;;;;;;;-1:-1:-1;;7422:40:46;;;;;;;;;;;;;-1:-1:-1;;7422:40:46;-1:-1:-1;;7422:40:46;;;;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;7422:40:46;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;7422:40:46;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;7523:8;7472:27;:39;7500:10;-1:-1:-1;;;;;7472:39:46;-1:-1:-1;;;;;7472:39:46;;;;;;;;;;;;:48;7512:7;7472:48;;;;;;;;;;;:59;;;;7541:26;:38;7568:10;-1:-1:-1;;;;;7541:38:46;-1:-1:-1;;;;;7541:38:46;;;;;;;;;;;;7585:8;7541:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7650:7;7642:6;-1:-1:-1;;;;;7610:61:46;7630:10;-1:-1:-1;;;;;7610:61:46;;7659:11;7610:61;;;;;;:::i;:::-;;;;;;;;7682:19;7729:13;7719:6;:23;;;;;;;;:::i;:::-;;7715:185;;7772:42;7791:8;7801:12;7772:18;:42::i;:::-;7758:56;;7715:185;;;7845:44;7866:8;7876:12;7845:20;:44::i;:::-;7918:12;;;;-1:-1:-1;6100:1851:46;;-1:-1:-1;;;;;;;;;;6100:1851:46:o;9749:120::-;9792:13;9824:27;-1:-1:-1;;;;;9824:36:46;;:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;9824:38:46;;;;;;;;;;;;:::i;16202:727::-;5157:13;:11;:13::i;:::-;16271:18:::1;16292:24;16310:6;16292:15;:24;:::i;:::-;:33;::::0;16319:6:::1;16292:33;:::i;:::-;16335:37;16375:38:::0;;;:26:::1;:38;::::0;;;;16271:54;;-1:-1:-1;16423:500:46::1;16447:26:::0;;16443:30;::::1;16423:500;;;16494:25;16522:19;16542:1;16522:22;;;;;;;;:::i;:::-;;::::0;;;::::1;::::0;;;;;::::1;::::0;16594:34;;;:15:::1;:34:::0;;;;;;;16522:22;;-1:-1:-1;16687:13:46::1;16664:19;::::0;::::1;::::0;::::1;;:36;::::0;::::1;;;;;;:::i;:::-;;:77;;;-1:-1:-1::0;16727:14:46::1;16704:19;::::0;::::1;::::0;::::1;;:37;::::0;::::1;;;;;;:::i;:::-;;16664:77;16663:154;;;;;16802:15;16766:12;:32;;;:51;;16663:154;16642:271;;;16855:43;::::0;16880:17;;16855:43:::1;::::0;;;::::1;16642:271;16480:443;;16475:3;;;;;:::i;:::-;;;;16423:500;;2543:215:27::0;1531:13;:11;:13::i;:::-;-1:-1:-1;;;;;2627:22:27;::::1;2623:91;;2672:31;::::0;-1:-1:-1;;;2672:31:27;;2700:1:::1;2672:31;::::0;::::1;14422:51:59::0;14395:18;;2672:31:27::1;14276:203:59::0;2623:91:27::1;2723:28;2742:8;2723:18;:28::i;19558:209:46:-:0;19683:77;;-1:-1:-1;;;;;;19683:77:46;;-1:-1:-1;;;;;29240:32:59;;;19683:77:46;;;29222:51:59;29289:18;;;29282:34;;;19657:7:46;;19683:24;:49;;;;;;29195:18:59;;19683:77:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;1796:162:27:-;1684:7;1710:6;-1:-1:-1;;;;;1710:6:27;735:10:37;1855:23:27;1851:101;;1901:40;;-1:-1:-1;;;1901:40:27;;735:10:37;1901:40:27;;;14422:51:59;14395:18;;1901:40:27;14276:203:59;9679:207:40;9753:20;9812:23;986:12;9812:5;:23;:::i;:::-;9800:35;;:9;:35;:::i;:::-;9785:50;;9869:9;9853:12;:25;;9845:34;;;;;9087:586;9165:20;;;;9242:40;9254:27;986:12;9254:9;:27;:::i;:::-;9242:11;:40::i;:::-;9197:85;;-1:-1:-1;9197:85:40;-1:-1:-1;9197:85:40;-1:-1:-1;9292:16:40;9301:7;9197:85;9292:16;:::i;:::-;;-1:-1:-1;9340:2:40;9327:9;9335:1;9292:16;9327:9;:::i;:::-;9326:16;;;;:::i;:::-;9318:24;;;;:::i;:::-;;-1:-1:-1;9375:2:40;9362:9;9370:1;9362:5;:9;:::i;:::-;9361:16;;;;:::i;:::-;9360:22;;9381:1;9360:22;:::i;:::-;9352:30;;9392:19;9414:28;9430:4;9436:5;9414:15;:28::i;:::-;9392:50;;9462:11;9456:3;:17;9452:65;;;9495:11;9489:17;;9452:65;9594:27;986:12;9594:9;:27;:::i;:::-;986:12;9541:31;9555:4;9561:5;9568:3;9541:13;:31::i;:::-;:49;;;;:::i;:::-;:81;;;;:::i;:::-;9526:96;;9656:9;9640:12;:25;;9632:34;;;;;;9187:486;;;;9087:586;;;;:::o;8573:508::-;8649:20;;;;8726:40;8738:27;986:12;8738:9;:27;:::i;8726:40::-;8681:85;;-1:-1:-1;8681:85:40;-1:-1:-1;8681:85:40;-1:-1:-1;8776:14:40;8784:6;8681:85;8776:14;:::i;:::-;;;8800:19;8822:28;8838:4;8844:5;8822:15;:28::i;22518:2288:46:-;22640:19;22675:30;22708:12;:24;;;22675:57;;22743:18;22764:58;22790:11;22803:12;:18;;;22764:25;:58::i;:::-;22847:1;;-1:-1:-1;22743:79:46;-1:-1:-1;22847:1:46;22862:11;:23;;;:49;;;;;;;;:::i;:::-;;22858:585;;22941:11;:23;;;22965:10;22941:35;;;;;;;;:::i;:::-;;;;;;;22927:49;;22858:585;;;23024:21;22997:11;:23;;;:48;;;;;;;;:::i;:::-;;22993:450;;23125:18;;;;;23145:21;;;;23075:92;;-1:-1:-1;;;;;;23075:92:46;;-1:-1:-1;;;;;29240:32:59;;;23075:92:46;;;29222:51:59;29289:18;;;29282:34;;;;23075:24:46;:49;;;;29195:18:59;;23075:92:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;23061:106;;23210:1;23186:11;:21;;;:25;:45;;;;-1:-1:-1;23215:16:46;;23186:45;23182:251;;;23339:19;;;;23360:20;;23382:18;;;;;23258:160;;-1:-1:-1;;;23258:160:46;;;;;30814:25:59;;;;-1:-1:-1;;;;;30913:15:59;;;30893:18;;;30886:43;30965:15;30945:18;;;30938:43;30787:18;;23258:160:46;30612:375:59;23182:251:46;23488:36;23511:12;23488:22;:36::i;:::-;23453:32;;;:71;23534:25;;;:27;;;;;;:::i;:::-;;;-1:-1:-1;23571:34:46;;;;:15;:34;;;;;;;;;:49;;;;-1:-1:-1;;;;;;23571:49:46;;;-1:-1:-1;;;;;23571:49:46;;;;;;;;;;-1:-1:-1;23571:49:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;23571:49:46;;;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;23571:49:46;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;23571:49:46;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;23571:49:46;;;;;;;;;;;;-1:-1:-1;;23571:49:46;;;;;;;;;;;;;-1:-1:-1;;23571:49:46;-1:-1:-1;;23571:49:46;;;;;;;;;;;;;;:::i;:::-;;;;;-1:-1:-1;23571:49:46;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;23571:49:46;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;23631:53;23652:17;23671:12;23631:20;:53::i;:::-;23699:15;;23695:1105;;23752:18;;;;;23822:20;;23806:52;;-1:-1:-1;;;23806:52:46;;-1:-1:-1;;;;;21862:15:59;;;23806:52:46;;;21844:34:59;23852:4:46;21894:18:59;;;21887:43;23752:18:46;;23730:12;;23806:15;;;;;;21779:18:59;;23806:52:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;23786:72;;23888:11;23876:9;:23;23872:137;;;23973:20;;23926:68;;-1:-1:-1;;;23926:68:46;;-1:-1:-1;;;;;14440:32:59;;;23926:68:46;;;14422:51:59;14395:18;;23926:68:46;14276:203:59;23872:137:46;24052:18;;;;;;24023:23;:48;;;;;;;-1:-1:-1;24023:48:46;;;;;;;;-1:-1:-1;;;;;;24023:48:46;-1:-1:-1;;;;;24023:48:46;;;;;;24160:18;;24133:25;;;;24111:20;;24091:101;;8968:25:59;;;24091:101:46;;;;24133:25;;24091:101;;;;8956:2:59;8941:18;24091:101:46;;;;;;;24230:20;;24207:72;;-1:-1:-1;;;;;24207:22:46;;;24260:4;24267:11;24207:22;:72::i;:::-;24321:1;24298:20;:24;24294:496;;;24342:26;24371:40;24399:11;24371:27;:40::i;:::-;24444:48;;-1:-1:-1;;;24444:48:46;;24466:4;24444:48;;;29222:51:59;29289:18;;;29282:34;;;24342:69:46;;-1:-1:-1;24429:12:46;;-1:-1:-1;;;;;24444:13:46;;;;;29195:18:59;;24444:48:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;24429:63;;24515:7;24510:147;;24619:18;;;;;24553:85;;-1:-1:-1;;;24553:85:46;;24612:4;24553:85;;;21844:34:59;-1:-1:-1;;;;;21914:15:59;;;21894:18;;;21887:43;21779:18;;24553:85:46;21632:304:59;24510:147:46;24674:85;-1:-1:-1;;;;;24674:22:46;;24705:4;24720:17;24740:18;24674:22;:85::i;:::-;24324:466;;23716:1084;;23695:1105;22665:2141;;22518:2288;;;;:::o;1271:160:35:-;1380:43;;-1:-1:-1;;;;;29240:32:59;;;1380:43:35;;;29222:51:59;29289:18;;;29282:34;;;1353:71:35;;1373:5;;1395:14;;;;;29195:18:59;;1380:43:35;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1380:43:35;;;;;;;;;;;1353:19;:71::i;2912:187:27:-;2985:16;3004:6;;-1:-1:-1;;;;;3020:17:27;;;-1:-1:-1;;;;;;3020:17:27;;;;;;3052:40;;3004:6;;;;;;;3052:40;;2985:16;3052:40;2975:124;2912:187;:::o;25042:905:46:-;25120:25;25149:47;25178:8;25188:7;25149:28;:47::i;:::-;-1:-1:-1;;;;;25214:37:46;;;;;;:27;:37;;;;;;;;:46;;;;;;;;25207:53;;;25277:34;;;:15;:34;;;;;;25270:41;;-1:-1:-1;;;;;;25270:41:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;25270:41:46;;;;;;;;;;;;;;-1:-1:-1;;25270:41:46;;;25117:79;;-1:-1:-1;25277:34:46;-1:-1:-1;25214:37:46;;25270:41;;;;25214:37;25270:41;:::i;:::-;;;;;;;:::i;:::-;-1:-1:-1;25270:41:46;;;;;;;;;-1:-1:-1;;;;;25389:36:46;;;;:26;:36;;;;;-1:-1:-1;;25337:2:46;-1:-1:-1;25389:36:46;-1:-1:-1;25435:203:46;25459:26;;25455:30;;25435:203;;;25536:17;25510:19;25530:1;25510:22;;;;;;;;:::i;:::-;;;;;;;;;:43;25506:122;;25588:1;25573:17;;25608:5;;25506:122;25487:3;;;;:::i;:::-;;;;25435:203;;;;-1:-1:-1;;25652:5:46;:10;25648:237;;;25703:5;25678:158;25715:26;;:30;;25744:1;;25715:30;:::i;:::-;25711:1;:34;25678:158;;;25795:19;25815:5;:1;25819;25815:5;:::i;:::-;25795:26;;;;;;;;:::i;:::-;;;;;;;;;25770:19;25790:1;25770:22;;;;;;;;:::i;:::-;;;;;;;;;;:51;25747:3;;;;:::i;:::-;;;;25678:158;;;;25849:19;:25;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;25648:237;25900:40;;25932:7;;-1:-1:-1;;;;;25900:40:46;;;;;;;;25107:840;;;25042:905;;:::o;26284:433::-;26403:32;;:::i;:::-;-1:-1:-1;;;;;26474:37:46;;;26437:13;26474:37;;;:27;:37;;;;;;;;:46;;;;;;;;;26546:22;;;:15;:22;;;;;;;26531:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;26546:22;26531:37;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;26531:37:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;26606:8;-1:-1:-1;;;;;26582:32:46;:12;:20;;;-1:-1:-1;;;;;26582:32:46;;26578:133;;26637:63;;-1:-1:-1;;;26637:63:46;;-1:-1:-1;;;;;29240:32:59;;26637:63:46;;;29222:51:59;29289:18;;;29282:34;;;29195:18;;26637:63:46;29048:274:59;26578:133:46;26284:433;;;;;:::o;21766:353::-;21879:32;;;;:36;21875:238;;21931:30;21999:6;21964:12;:32;;;:41;;;;:::i;:::-;:50;;22008:6;21964:50;:::i;:::-;22028;;;;:26;:50;;;;;;;:74;;;;;;;;;;;;;;;;-1:-1:-1;21766:353:46;;:::o;3323:743:40:-;3382:12;;;3481:5;3513:31;;;3382:12;3579:6;3570:1;:5;;3569:16;;-1:-1:-1;3626:1:40;3621;3608:6;:10;;:14;3607:20;3603:24;;;;3641:12;3675:7;3657:4;3669:1;3665:5;;3657:14;3656:26;;-1:-1:-1;3721:1:40;3705:4;:12;;3704:18;3700:1;:22;3725:2;3700:27;3696:31;;3741:13;3768:4;3763:1;3758:2;:6;3757:15;;;;;:::i;:::-;;;-1:-1:-1;3786:11:40;3822:2;3805:4;:13;;3804:20;3800:24;;;-1:-1:-1;3851:2:40;3842:6;:11;-1:-1:-1;;3924:6:40;;;;3917:3;:14;:22;;;;:26;;;3885:1;3889:2;:6;;;3876:19;;;;;;;;-1:-1:-1;3842:11:40;-1:-1:-1;3917:26:40;-1:-1:-1;;;;3323:743:40:o;7006:392::-;7083:19;7118:5;7127:1;7118:10;:24;;;;7132:5;7141:1;7132:10;7118:24;:38;;;;7146:5;7155:1;7146:10;7118:38;:52;;;;7160:5;7169:1;7160:10;7118:52;:66;;;;7174:5;7183:1;7174:10;7118:66;:81;;;;7188:5;7197:2;7188:11;7118:81;:96;;;;7203:5;7212:2;7203:11;7118:96;7114:278;;;-1:-1:-1;7244:2:40;7114:278;;;7267:5;7276:1;7267:10;7263:129;;-1:-1:-1;7307:2:40;7263:129;;;7354:17;7366:4;7354:11;:17::i;:::-;:27;;7379:2;7354:27;;;7374:2;7354:27;7340:41;;;7006:392;-1:-1:-1;;;7006:392:40:o;2041:529::-;2129:13;2170:4;2162;:12;;2154:21;;;;;;2207:4;2245:5;2282:3;2185:12;1132:7;2511:1;2503:3;2497:2;2482:11;2491:2;2245:5;2482:11;:::i;:::-;2481:18;;;;:::i;:::-;2466:12;:5;2474:4;2466:12;:::i;:::-;:33;;;;:::i;:::-;2465:41;;;;:::i;:::-;2460:47;;:1;:47;:::i;:::-;2459:53;;;;:::i;:::-;2442:2;;2414:11;2423:2;2414:6;:11;:::i;:::-;2413:18;;;;:::i;:::-;2412:25;;2435:2;2412:25;:::i;:::-;2399:10;2408:1;2399:6;:10;:::i;:::-;:38;;;;:::i;:::-;2392:46;;:3;:46;:::i;:::-;2391:53;;;;:::i;:::-;2375:1;2368:2;2353:11;2362:2;2353:6;:11;:::i;:::-;2352:18;;;;:::i;:::-;2337:12;:5;2345:4;2337:12;:::i;:::-;:33;;;;:::i;:::-;2329:42;;:4;:42;:::i;:::-;2328:48;;;;:::i;:::-;2313:12;2320:5;2313:4;:12;:::i;:::-;:63;;;;:::i;:::-;:131;;;;:::i;:::-;:199;;;;:::i;:::-;:216;;;;:::i;:::-;2297:232;2041:529;-1:-1:-1;;;;;;;;2041:529:40:o;21161:406:46:-;21291:7;;21314:176;21338:12;:27;;;:34;21334:1;:38;21314:176;;;21431:6;-1:-1:-1;;;;;21397:40:46;:12;:27;;;21425:1;21397:30;;;;;;;;:::i;:::-;;;;;;;-1:-1:-1;;;;;21397:40:46;;21393:87;;21464:1;-1:-1:-1;21457:8:46;;21393:87;21374:3;;;;:::i;:::-;;;;21314:176;;;-1:-1:-1;21506:54:46;;-1:-1:-1;;;21506:54:46;;-1:-1:-1;;;;;14440:32:59;;21506:54:46;;;14422:51:59;14395:18;;21506:54:46;14276:203:59;1670:188:35;1797:53;;-1:-1:-1;;;;;32248:15:59;;;1797:53:35;;;32230:34:59;32300:15;;;32280:18;;;32273:43;32332:18;;;32325:34;;;1770:81:35;;1790:5;;1812:18;;;;;32165::59;;1797:53:35;31990:375:59;1770:81:35;1670:188;;;;:::o;7738:720::-;7818:18;7846:19;7984:4;7981:1;7974:4;7968:11;7961:4;7955;7951:15;7948:1;7941:5;7934;7929:60;8041:7;8031:176;;8085:4;8079:11;8130:16;8127:1;8122:3;8107:40;8176:16;8171:3;8164:29;8031:176;-1:-1:-1;;8284:1:35;8278:8;8234:16;;-1:-1:-1;8310:15:35;;:68;;8362:11;8377:1;8362:16;;8310:68;;;-1:-1:-1;;;;;8328:26:35;;;:31;8310:68;8306:146;;;8401:40;;-1:-1:-1;;;8401:40:35;;-1:-1:-1;;;;;14440:32:59;;8401:40:35;;;14422:51:59;14395:18;;8401:40:35;14276:203:59;6321:160:40;6379:13;6417:8;6424:1;6417:4;:8;:::i;:::-;:13;6416:36;;;;-1:-1:-1;6436:10:40;6443:3;6436:4;:10;:::i;:::-;:15;;6416:36;6415:59;;;-1:-1:-1;6458:10:40;6465:3;6458:4;:10;:::i;:::-;:15;6404:70;6321:160;-1:-1:-1;;6321:160:40:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14:127:59;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:253;218:2;212:9;260:4;248:17;;-1:-1:-1;;;;;280:34:59;;316:22;;;277:62;274:88;;;342:18;;:::i;:::-;378:2;371:22;146:253;:::o;404:255::-;476:2;470:9;518:6;506:19;;-1:-1:-1;;;;;540:34:59;;576:22;;;537:62;534:88;;;602:18;;:::i;664:253::-;736:2;730:9;778:4;766:17;;-1:-1:-1;;;;;798:34:59;;834:22;;;795:62;792:88;;;860:18;;:::i;922:275::-;993:2;987:9;1058:2;1039:13;;-1:-1:-1;;1035:27:59;1023:40;;-1:-1:-1;;;;;1078:34:59;;1114:22;;;1075:62;1072:88;;;1140:18;;:::i;:::-;1176:2;1169:22;922:275;;-1:-1:-1;922:275:59:o;1202:187::-;1251:4;-1:-1:-1;;;;;1276:6:59;1273:30;1270:56;;;1306:18;;:::i;:::-;-1:-1:-1;1372:2:59;1351:15;-1:-1:-1;;1347:29:59;1378:4;1343:40;;1202:187::o;1394:194::-;1465:4;-1:-1:-1;;;;;1490:6:59;1487:30;1484:56;;;1520:18;;:::i;:::-;-1:-1:-1;1565:1:59;1561:14;1577:4;1557:25;;1394:194::o;1593:105::-;1672:1;1665:5;1662:12;1652:40;;1688:1;1685;1678:12;1703:142;1775:20;;1804:35;1775:20;1804:35;:::i;1850:117::-;1935:6;1928:5;1924:18;1917:5;1914:29;1904:57;;1957:1;1954;1947:12;1972:132;2039:20;;2068:30;2039:20;2068:30;:::i;2109:110::-;2193:1;2186:5;2183:12;2173:40;;2209:1;2206;2199:12;2224:152;2301:20;;2330:40;2301:20;2330:40;:::i;2381:131::-;-1:-1:-1;;;;;2456:31:59;;2446:42;;2436:70;;2502:1;2499;2492:12;2517:134;2585:20;;2614:31;2585:20;2614:31;:::i;2656:748::-;2710:5;2763:3;2756:4;2748:6;2744:17;2740:27;2730:55;;2781:1;2778;2771:12;2730:55;2817:6;2804:20;2843:4;2867:71;2883:54;2934:2;2883:54;:::i;:::-;2867:71;:::i;:::-;2972:15;;;3058:1;3054:10;;;;3042:23;;3038:32;;;3003:12;;;;3082:15;;;3079:35;;;3110:1;3107;3100:12;3079:35;3146:2;3138:6;3134:15;3158:217;3174:6;3169:3;3166:15;3158:217;;;3254:3;3241:17;3271:31;3296:5;3271:31;:::i;:::-;3315:18;;3353:12;;;;3191;;3158:217;;;-1:-1:-1;3393:5:59;2656:748;-1:-1:-1;;;;;;2656:748:59:o;3409:673::-;3463:5;3516:3;3509:4;3501:6;3497:17;3493:27;3483:55;;3534:1;3531;3524:12;3483:55;3570:6;3557:20;3596:4;3620:71;3636:54;3687:2;3636:54;:::i;3620:71::-;3725:15;;;3811:1;3807:10;;;;3795:23;;3791:32;;;3756:12;;;;3835:15;;;3832:35;;;3863:1;3860;3853:12;3832:35;3899:2;3891:6;3887:15;3911:142;3927:6;3922:3;3919:15;3911:142;;;3993:17;;3981:30;;4031:12;;;;3944;;3911:142;;4087:869;4145:5;4193:4;4181:9;4176:3;4172:19;4168:30;4165:50;;;4211:1;4208;4201:12;4165:50;4233:22;;:::i;:::-;4224:31;;4278:33;4301:9;4278:33;:::i;:::-;4271:5;4264:48;4344:37;4377:2;4366:9;4362:18;4344:37;:::i;:::-;4339:2;4332:5;4328:14;4321:61;4414:47;4457:2;4446:9;4442:18;4414:47;:::i;:::-;4409:2;4402:5;4398:14;4391:71;4513:2;4502:9;4498:18;4485:32;-1:-1:-1;;;;;4577:2:59;4569:6;4566:14;4563:34;;;4593:1;4590;4583:12;4563:34;4629:57;4682:3;4673:6;4662:9;4658:22;4629:57;:::i;:::-;4624:2;4617:5;4613:14;4606:81;4740:3;4729:9;4725:19;4712:33;4696:49;;4770:2;4760:8;4757:16;4754:36;;;4786:1;4783;4776:12;4754:36;;4823:59;4878:3;4867:8;4856:9;4852:24;4823:59;:::i;:::-;4817:3;4810:5;4806:15;4799:84;;4944:3;4933:9;4929:19;4916:33;4910:3;4903:5;4899:15;4892:58;4087:869;;;;:::o;4961:923::-;5026:5;5079:3;5072:4;5064:6;5060:17;5056:27;5046:55;;5097:1;5094;5087:12;5046:55;5133:6;5120:20;5159:4;5183:71;5199:54;5250:2;5199:54;:::i;5183:71::-;5288:15;;;5374:1;5370:10;;;;5358:23;;5354:32;;;5319:12;;;;5398:15;;;5395:35;;;5426:1;5423;5416:12;5395:35;5462:2;5454:6;5450:15;5474:381;5490:6;5485:3;5482:15;5474:381;;;5576:3;5563:17;-1:-1:-1;;;;;5599:11:59;5596:35;5593:125;;;5672:1;5701:2;5697;5690:14;5593:125;5743:69;5808:3;5803:2;5789:11;5781:6;5777:24;5773:33;5743:69;:::i;:::-;5731:82;;-1:-1:-1;5833:12:59;;;;5507;;5474:381;;5889:1029;6031:6;6039;6047;6100:2;6088:9;6079:7;6075:23;6071:32;6068:52;;;6116:1;6113;6106:12;6068:52;6152:9;6139:23;6129:33;;6213:2;6202:9;6198:18;6185:32;-1:-1:-1;;;;;6277:2:59;6269:6;6266:14;6263:34;;;6293:1;6290;6283:12;6263:34;6331:6;6320:9;6316:22;6306:32;;6376:7;6369:4;6365:2;6361:13;6357:27;6347:55;;6398:1;6395;6388:12;6347:55;6434:2;6421:16;6459:49;6475:32;6504:2;6475:32;:::i;6459:49::-;6531:2;6524:5;6517:17;6571:7;6566:2;6561;6557;6553:11;6549:20;6546:33;6543:53;;;6592:1;6589;6582:12;6543:53;6647:2;6642;6638;6634:11;6629:2;6622:5;6618:14;6605:45;6691:1;6686:2;6681;6674:5;6670:14;6666:23;6659:34;6712:5;6702:15;;;;6770:2;6759:9;6755:18;6742:32;6726:48;;6799:2;6789:8;6786:16;6783:36;;;6815:1;6812;6805:12;6783:36;;6838:74;6904:7;6893:8;6882:9;6878:24;6838:74;:::i;:::-;6828:84;;;5889:1029;;;;;:::o;6923:156::-;6989:20;;7049:4;7038:16;;7028:27;;7018:55;;7069:1;7066;7059:12;7084:492;7189:6;7197;7205;7258:2;7246:9;7237:7;7233:23;7229:32;7226:52;;;7274:1;7271;7264:12;7226:52;7310:9;7297:23;7287:33;;7339:36;7371:2;7360:9;7356:18;7339:36;:::i;:::-;7329:46;;7426:2;7415:9;7411:18;7398:32;-1:-1:-1;;;;;7445:6:59;7442:30;7439:50;;;7485:1;7482;7475:12;7439:50;7508:62;7562:7;7553:6;7542:9;7538:22;7508:62;:::i;7581:658::-;7752:2;7804:21;;;7874:13;;7777:18;;;7896:22;;;7723:4;;7752:2;7975:15;;;;7949:2;7934:18;;;7723:4;8018:195;8032:6;8029:1;8026:13;8018:195;;;8097:13;;-1:-1:-1;;;;;8093:39:59;8081:52;;8188:15;;;;8153:12;;;;8129:1;8047:9;8018:195;;;-1:-1:-1;8230:3:59;;7581:658;-1:-1:-1;;;;;;7581:658:59:o;8244:388::-;8312:6;8320;8373:2;8361:9;8352:7;8348:23;8344:32;8341:52;;;8389:1;8386;8379:12;8341:52;8428:9;8415:23;8447:31;8472:5;8447:31;:::i;:::-;8497:5;-1:-1:-1;8554:2:59;8539:18;;8526:32;8567:33;8526:32;8567:33;:::i;:::-;8619:7;8609:17;;;8244:388;;;;;:::o;8637:180::-;8696:6;8749:2;8737:9;8728:7;8724:23;8720:32;8717:52;;;8765:1;8762;8755:12;8717:52;-1:-1:-1;8788:23:59;;8637:180;-1:-1:-1;8637:180:59:o;9004:1065::-;9094:6;9147:2;9135:9;9126:7;9122:23;9118:32;9115:52;;;9163:1;9160;9153:12;9115:52;9203:9;9190:23;-1:-1:-1;;;;;9273:2:59;9265:6;9262:14;9259:34;;;9289:1;9286;9279:12;9259:34;9312:22;;;;9368:6;9350:16;;;9346:29;9343:49;;;9388:1;9385;9378:12;9343:49;9414:22;;:::i;:::-;9459;9478:2;9459:22;:::i;:::-;9452:5;9445:37;9535:2;9531;9527:11;9514:25;9509:2;9502:5;9498:14;9491:49;9572:31;9599:2;9595;9591:11;9572:31;:::i;:::-;9567:2;9560:5;9556:14;9549:55;9657:2;9653;9649:11;9636:25;9631:2;9624:5;9620:14;9613:49;9716:3;9712:2;9708:12;9695:26;9689:3;9682:5;9678:15;9671:51;9755:36;9786:3;9782:2;9778:12;9755:36;:::i;:::-;9749:3;9742:5;9738:15;9731:61;9846:3;9842:2;9838:12;9825:26;9819:3;9812:5;9808:15;9801:51;9898:3;9894:2;9890:12;9877:26;9928:2;9918:8;9915:16;9912:36;;;9944:1;9941;9934:12;9912:36;9981:57;10030:7;10019:8;10015:2;10011:17;9981:57;:::i;:::-;9975:3;9964:15;;9957:82;-1:-1:-1;9968:5:59;9004:1065;-1:-1:-1;;;;;9004:1065:59:o;10074:247::-;10133:6;10186:2;10174:9;10165:7;10161:23;10157:32;10154:52;;;10202:1;10199;10192:12;10154:52;10241:9;10228:23;10260:31;10285:5;10260:31;:::i;10518:250::-;10603:1;10613:113;10627:6;10624:1;10621:13;10613:113;;;10703:11;;;10697:18;10684:11;;;10677:39;10649:2;10642:10;10613:113;;;-1:-1:-1;;10760:1:59;10742:16;;10735:27;10518:250::o;10773:271::-;10815:3;10853:5;10847:12;10880:6;10875:3;10868:19;10896:76;10965:6;10958:4;10953:3;10949:14;10942:4;10935:5;10931:16;10896:76;:::i;:::-;11026:2;11005:15;-1:-1:-1;;11001:29:59;10992:39;;;;11033:4;10988:50;;10773:271;-1:-1:-1;;10773:271:59:o;11049:127::-;11110:10;11105:3;11101:20;11098:1;11091:31;11141:4;11138:1;11131:15;11165:4;11162:1;11155:15;11181:111;11260:1;11253:5;11250:12;11240:46;;11266:18;;:::i;11297:435::-;11350:3;11388:5;11382:12;11415:6;11410:3;11403:19;11441:4;11470:2;11465:3;11461:12;11454:19;;11507:2;11500:5;11496:14;11528:1;11538:169;11552:6;11549:1;11546:13;11538:169;;;11613:13;;11601:26;;11647:12;;;;11682:15;;;;11574:1;11567:9;11538:169;;;-1:-1:-1;11723:3:59;;11297:435;-1:-1:-1;;;;;11297:435:59:o;11737:1197::-;11791:3;11830:4;11825:3;11821:14;11860:5;11854:12;11875:32;11904:2;11875:32;:::i;:::-;11916:15;;11950:4;11994:14;;;11988:21;12011:6;11984:34;11970:12;;;11963:56;12065:4;12054:16;;12048:23;12107:1;12090:19;;12080:53;;12113:18;;:::i;:::-;12158:4;12149:14;;12142:36;12226:4;12215:16;;;12209:23;12264:4;12248:14;;;12241:28;;;;12318:21;;12348:20;;;;12422:23;;;-1:-1:-1;;12395:3:59;12386:13;;;12473:201;12487:6;12484:1;12481:13;12473:201;;;12554:13;;-1:-1:-1;;;;;12550:39:59;12536:54;;12649:15;;;;12586:1;12502:9;;;;;12612:14;;;;12473:201;;;12477:3;12722:4;12715:5;12711:16;12705:23;12683:45;;12771:3;12764:5;12760:15;12753:4;12748:3;12744:14;12737:39;12799:51;12844:5;12828:14;12799:51;:::i;:::-;12785:65;;;;;12899:4;12892:5;12888:16;12882:23;12875:4;12870:3;12866:14;12859:47;12922:6;12915:13;;;11737:1197;;;;:::o;12939:640::-;13003:3;13041:5;13035:12;13068:6;13063:3;13056:19;13094:4;13135:2;13130:3;13126:12;13160:11;13187;13180:18;;13237:6;13234:1;13230:14;13223:5;13219:26;13207:38;;13279:2;13272:5;13268:14;13300:1;13310:243;13324:6;13321:1;13318:13;13310:243;;;13395:5;13389:4;13385:16;13380:3;13373:29;13423:50;13468:4;13459:6;13453:13;13423:50;:::i;:::-;13531:12;;;;13415:58;-1:-1:-1;13496:15:59;;;;13346:1;13339:9;13310:243;;;-1:-1:-1;13569:4:59;;12939:640;-1:-1:-1;;;;;;;12939:640:59:o;13584:431::-;13667:5;13661:12;13656:3;13649:25;13631:3;13720:4;13713:5;13709:16;13703:23;13758:4;13751;13746:3;13742:14;13735:28;13784:47;13825:4;13820:3;13816:14;13802:12;13784:47;:::i;:::-;13772:59;;13879:4;13872:5;13868:16;13862:23;13927:3;13921:4;13917:14;13910:4;13905:3;13901:14;13894:38;13948:61;14004:4;13988:14;13948:61;:::i;:::-;13941:68;13584:431;-1:-1:-1;;;;;13584:431:59:o;14020:251::-;14195:2;14184:9;14177:21;14158:4;14215:50;14261:2;14250:9;14246:18;14238:6;14215:50;:::i;14484:250::-;14550:6;14558;14611:2;14599:9;14590:7;14586:23;14582:32;14579:52;;;14627:1;14624;14617:12;14579:52;14663:9;14650:23;14640:33;;14692:36;14724:2;14713:9;14709:18;14692:36;:::i;:::-;14682:46;;14484:250;;;;;:::o;14739:272::-;14928:2;14917:9;14910:21;14891:4;14948:57;15001:2;14990:9;14986:18;14978:6;14948:57;:::i;15016:777::-;15071:3;15099:6;15141:1;15137;15132:3;15128:11;15124:19;15182:2;15174:5;15168:12;15164:21;15159:3;15152:34;15235:4;15228:5;15224:16;15218:23;15211:4;15206:3;15202:14;15195:47;15303:2;15295:4;15288:5;15284:16;15278:23;15274:32;15267:4;15262:3;15258:14;15251:56;;15356:4;15349:5;15345:16;15339:23;15332:4;15327:3;15323:14;15316:47;15412:4;15405:5;15401:16;15395:23;15388:4;15383:3;15379:14;15372:47;15465:4;15458:5;15454:16;15448:23;15480:42;15509:12;15480:42;:::i;:::-;15554:12;15547:4;15542:3;15538:14;15531:36;;15616:4;15609:5;15605:16;15599:23;15592:4;15587:3;15583:14;15576:47;15671:4;15664:5;15660:16;15654:23;15709:2;15702:4;15697:3;15693:14;15686:26;15728:59;15783:2;15778:3;15774:12;15758:14;15728:59;:::i;15798:858::-;16002:4;16031:2;16071;16060:9;16056:18;16101:2;16090:9;16083:21;16124:6;16159;16153:13;16190:6;16182;16175:22;16228:2;16217:9;16213:18;16206:25;;16290:2;16280:6;16277:1;16273:14;16262:9;16258:30;16254:39;16240:53;;16328:2;16320:6;16316:15;16349:1;16359:268;16373:6;16370:1;16367:13;16359:268;;;16466:2;16462:7;16450:9;16442:6;16438:22;16434:36;16429:3;16422:49;16494:53;16540:6;16531;16525:13;16494:53;:::i;:::-;16484:63;-1:-1:-1;16605:12:59;;;;16570:15;;;;16395:1;16388:9;16359:268;;;-1:-1:-1;16644:6:59;;15798:858;-1:-1:-1;;;;;;;15798:858:59:o;16661:275::-;16852:2;16841:9;16834:21;16815:4;16872:58;16926:2;16915:9;16911:18;16903:6;16872:58;:::i;16941:422::-;17039:6;17047;17100:2;17088:9;17079:7;17075:23;17071:32;17068:52;;;17116:1;17113;17106:12;17068:52;17152:9;17139:23;17129:33;;17213:2;17202:9;17198:18;17185:32;-1:-1:-1;;;;;17232:6:59;17229:30;17226:50;;;17272:1;17269;17262:12;17226:50;17295:62;17349:7;17340:6;17329:9;17325:22;17295:62;:::i;:::-;17285:72;;;16941:422;;;;;:::o;17368:315::-;17436:6;17444;17497:2;17485:9;17476:7;17472:23;17468:32;17465:52;;;17513:1;17510;17503:12;17465:52;17552:9;17539:23;17571:31;17596:5;17571:31;:::i;:::-;17621:5;17673:2;17658:18;;;;17645:32;;-1:-1:-1;;;17368:315:59:o;17868:454::-;17952:6;17960;17968;17976;18029:3;18017:9;18008:7;18004:23;18000:33;17997:53;;;18046:1;18043;18036:12;17997:53;18082:9;18069:23;18059:33;;18111:36;18143:2;18132:9;18128:18;18111:36;:::i;:::-;18101:46;;18197:2;18186:9;18182:18;18169:32;18210:31;18235:5;18210:31;:::i;:::-;17868:454;;;;-1:-1:-1;18260:5:59;;18312:2;18297:18;18284:32;;-1:-1:-1;;17868:454:59:o;18327:346::-;18546:2;18535:9;18528:21;18509:4;18566:58;18620:2;18609:9;18605:18;18597:6;18566:58;:::i;:::-;18558:66;;18660:6;18655:2;18644:9;18640:18;18633:34;18327:346;;;;;:::o;18678:834::-;18866:4;18895:2;18935;18924:9;18920:18;18965:2;18954:9;18947:21;18988:6;19023;19017:13;19054:6;19046;19039:22;19092:2;19081:9;19077:18;19070:25;;19154:2;19144:6;19141:1;19137:14;19126:9;19122:30;19118:39;19104:53;;19192:2;19184:6;19180:15;19213:1;19223:260;19237:6;19234:1;19231:13;19223:260;;;19330:2;19326:7;19314:9;19306:6;19302:22;19298:36;19293:3;19286:49;19358:45;19396:6;19387;19381:13;19358:45;:::i;:::-;19348:55;-1:-1:-1;19461:12:59;;;;19426:15;;;;19259:1;19252:9;19223:260;;19517:566;19832:6;19821:9;19814:25;19875:2;19870;19859:9;19855:18;19848:30;19795:4;19901:45;19942:2;19931:9;19927:18;19919:6;19901:45;:::i;:::-;19994:9;19986:6;19982:22;19977:2;19966:9;19962:18;19955:50;20022:55;20070:6;20062;20022:55;:::i;:::-;20014:63;19517:566;-1:-1:-1;;;;;;19517:566:59:o;20088:421::-;20329:6;20318:9;20311:25;20384:4;20376:6;20372:17;20367:2;20356:9;20352:18;20345:45;20426:2;20421;20410:9;20406:18;20399:30;20292:4;20446:57;20499:2;20488:9;20484:18;20476:6;20446:57;:::i;20514:745::-;20579:5;20632:3;20625:4;20617:6;20613:17;20609:27;20599:55;;20650:1;20647;20640:12;20599:55;20679:6;20673:13;20705:4;20729:71;20745:54;20796:2;20745:54;:::i;20729:71::-;20834:15;;;20920:1;20916:10;;;;20904:23;;20900:32;;;20865:12;;;;20944:15;;;20941:35;;;20972:1;20969;20962:12;20941:35;21008:2;21000:6;20996:15;21020:210;21036:6;21031:3;21028:15;21020:210;;;21109:3;21103:10;21126:31;21151:5;21126:31;:::i;:::-;21170:18;;21208:12;;;;21053;;21020:210;;21264:363;21359:6;21412:2;21400:9;21391:7;21387:23;21383:32;21380:52;;;21428:1;21425;21418:12;21380:52;21461:9;21455:16;-1:-1:-1;;;;;21486:6:59;21483:30;21480:50;;;21526:1;21523;21516:12;21480:50;21549:72;21613:7;21604:6;21593:9;21589:22;21549:72;:::i;21941:127::-;22002:10;21997:3;21993:20;21990:1;21983:31;22033:4;22030:1;22023:15;22057:4;22054:1;22047:15;22073:168;22146:9;;;22177;;22194:15;;;22188:22;;22174:37;22164:71;;22215:18;;:::i;22246:125::-;22311:9;;;22332:10;;;22329:36;;;22345:18;;:::i;22376:128::-;22443:9;;;22464:11;;;22461:37;;;22478:18;;:::i;22509:127::-;22570:10;22565:3;22561:20;22558:1;22551:31;22601:4;22598:1;22591:15;22625:4;22622:1;22615:15;22641:120;22681:1;22707;22697:35;;22712:18;;:::i;:::-;-1:-1:-1;22746:9:59;;22641:120::o;22766:277::-;22833:6;22886:2;22874:9;22865:7;22861:23;22857:32;22854:52;;;22902:1;22899;22892:12;22854:52;22934:9;22928:16;22987:5;22980:13;22973:21;22966:5;22963:32;22953:60;;23009:1;23006;22999:12;23048:146;23131:13;;23153:35;23131:13;23153:35;:::i;23199:136::-;23277:13;;23299:30;23277:13;23299:30;:::i;23340:156::-;23428:13;;23450:40;23428:13;23450:40;:::i;23501:670::-;23566:5;23619:3;23612:4;23604:6;23600:17;23596:27;23586:55;;23637:1;23634;23627:12;23586:55;23666:6;23660:13;23692:4;23716:71;23732:54;23783:2;23732:54;:::i;23716:71::-;23821:15;;;23907:1;23903:10;;;;23891:23;;23887:32;;;23852:12;;;;23931:15;;;23928:35;;;23959:1;23956;23949:12;23928:35;23995:2;23987:6;23983:15;24007:135;24023:6;24018:3;24015:15;24007:135;;;24089:10;;24077:23;;24120:12;;;;24040;;24007:135;;24176:914;24245:5;24293:4;24281:9;24276:3;24272:19;24268:30;24265:50;;;24311:1;24308;24301:12;24265:50;24333:22;;:::i;:::-;24324:31;;24378:44;24412:9;24378:44;:::i;:::-;24371:5;24364:59;24455:48;24499:2;24488:9;24484:18;24455:48;:::i;:::-;24450:2;24443:5;24439:14;24432:72;24536:58;24590:2;24579:9;24575:18;24536:58;:::i;:::-;24531:2;24524:5;24520:14;24513:82;24639:2;24628:9;24624:18;24618:25;-1:-1:-1;;;;;24703:2:59;24695:6;24692:14;24689:34;;;24719:1;24716;24709:12;24689:34;24755:68;24819:3;24810:6;24799:9;24795:22;24755:68;:::i;:::-;24750:2;24743:5;24739:14;24732:92;24870:3;24859:9;24855:19;24849:26;24833:42;;24900:2;24890:8;24887:16;24884:36;;;24916:1;24913;24906:12;24884:36;;24953:70;25019:3;25008:8;24997:9;24993:24;24953:70;:::i;:::-;24947:3;24940:5;24936:15;24929:95;;25078:3;25067:9;25063:19;25057:26;25051:3;25044:5;25040:15;25033:51;24176:914;;;;:::o;25095:931::-;25171:5;25224:3;25217:4;25209:6;25205:17;25201:27;25191:55;;25242:1;25239;25232:12;25191:55;25271:6;25265:13;25297:4;25321:71;25337:54;25388:2;25337:54;:::i;25321:71::-;25426:15;;;25512:1;25508:10;;;;25496:23;;25492:32;;;25457:12;;;;25536:15;;;25533:35;;;25564:1;25561;25554:12;25533:35;25600:2;25592:6;25588:15;25612:385;25628:6;25623:3;25620:15;25612:385;;;25707:3;25701:10;-1:-1:-1;;;;;25730:11:59;25727:35;25724:125;;;25803:1;25832:2;25828;25821:14;25724:125;25874:80;25950:3;25945:2;25931:11;25923:6;25919:24;25915:33;25874:80;:::i;:::-;25862:93;;-1:-1:-1;25975:12:59;;;;25645;;25612:385;;26031:953;26093:5;26141:4;26129:9;26124:3;26120:19;26116:30;26113:50;;;26159:1;26156;26149:12;26113:50;26181:22;;:::i;:::-;26172:31;;26232:9;26226:16;26219:5;26212:31;26287:2;26276:9;26272:18;26266:25;-1:-1:-1;;;;;26351:2:59;26343:6;26340:14;26337:34;;;26367:1;26364;26357:12;26337:34;26405:6;26394:9;26390:22;26380:32;;26450:3;26443:4;26439:2;26435:13;26431:23;26421:51;;26468:1;26465;26458:12;26421:51;26497:2;26491:9;26522:49;26538:32;26567:2;26538:32;:::i;26522:49::-;26594:2;26587:5;26580:17;26634:3;26629:2;26624;26620;26616:11;26612:20;26609:29;26606:49;;;26651:1;26648;26641:12;26606:49;26664:67;26728:2;26723;26716:5;26712:14;26707:2;26703;26699:11;26664:67;:::i;:::-;26758:2;26747:14;;26740:29;-1:-1:-1;26815:2:59;26800:18;;26794:25;;-1:-1:-1;26831:16:59;;;26828:36;;;26860:1;26857;26850:12;26828:36;;26896:81;26973:3;26962:8;26951:9;26947:24;26896:81;:::i;:::-;26891:2;26884:5;26880:14;26873:105;;26031:953;;;;:::o;26989:355::-;27082:6;27135:2;27123:9;27114:7;27110:23;27106:32;27103:52;;;27151:1;27148;27141:12;27103:52;27184:9;27178:16;-1:-1:-1;;;;;27209:6:59;27206:30;27203:50;;;27249:1;27246;27239:12;27203:50;27272:66;27330:7;27321:6;27310:9;27306:22;27272:66;:::i;27349:251::-;27419:6;27472:2;27460:9;27451:7;27447:23;27443:32;27440:52;;;27488:1;27485;27478:12;27440:52;27520:9;27514:16;27539:31;27564:5;27539:31;:::i;27865:369::-;27965:6;28018:2;28006:9;27997:7;27993:23;27989:32;27986:52;;;28034:1;28031;28024:12;27986:52;28067:9;28061:16;-1:-1:-1;;;;;28092:6:59;28089:30;28086:50;;;28132:1;28129;28122:12;28086:50;28155:73;28220:7;28211:6;28200:9;28196:22;28155:73;:::i;28239:127::-;28300:10;28295:3;28291:20;28288:1;28281:31;28331:4;28328:1;28321:15;28355:4;28352:1;28345:15;28371:135;28410:3;28431:17;;;28428:43;;28451:18;;:::i;:::-;-1:-1:-1;28498:1:59;28487:13;;28371:135::o;28511:184::-;28581:6;28634:2;28622:9;28613:7;28609:23;28605:32;28602:52;;;28650:1;28647;28640:12;28602:52;-1:-1:-1;28673:16:59;;28511:184;-1:-1:-1;28511:184:59:o;28700:343::-;28917:6;28906:9;28899:25;28960:2;28955;28944:9;28940:18;28933:30;28880:4;28980:57;29033:2;29022:9;29018:18;29010:6;28980:57;:::i;29327:1163::-;29445:6;29476:2;29519;29507:9;29498:7;29494:23;29490:32;29487:52;;;29535:1;29532;29525:12;29487:52;29568:9;29562:16;-1:-1:-1;;;;;29638:2:59;29630:6;29627:14;29624:34;;;29654:1;29651;29644:12;29624:34;29692:6;29681:9;29677:22;29667:32;;29737:7;29730:4;29726:2;29722:13;29718:27;29708:55;;29759:1;29756;29749:12;29708:55;29788:2;29782:9;29811:71;29827:54;29878:2;29827:54;:::i;29811:71::-;29916:15;;;29998:1;29994:10;;;;29986:19;;29982:28;;;29947:12;;;;30022:19;;;30019:39;;;30054:1;30051;30044:12;30019:39;30086:2;30082;30078:11;30098:362;30114:6;30109:3;30106:15;30098:362;;;30193:3;30187:10;30229:2;30216:11;30213:19;30210:109;;;30273:1;30302:2;30298;30291:14;30210:109;30344:73;30409:7;30404:2;30390:11;30386:2;30382:20;30378:29;30344:73;:::i;:::-;30332:86;;-1:-1:-1;30438:12:59;;;;30131;;30098:362;;;-1:-1:-1;30479:5:59;29327:1163;-1:-1:-1;;;;;;;;29327:1163:59:o;30495:112::-;30527:1;30553;30543:35;;30558:18;;:::i;:::-;-1:-1:-1;30592:9:59;;30495:112::o;30992:127::-;31053:10;31048:3;31044:20;31041:1;31034:31;31084:4;31081:1;31074:15;31108:4;31105:1;31098:15;31124:200;31190:9;;;31163:4;31218:9;;31246:10;;31258:12;;;31242:29;31281:12;;;31273:21;;31239:56;31236:82;;;31298:18;;:::i;:::-;31236:82;31124:200;;;;:::o;31329:193::-;31368:1;31394;31384:35;;31399:18;;:::i;:::-;-1:-1:-1;;;31435:18:59;;-1:-1:-1;;31455:13:59;;31431:38;31428:64;;;31472:18;;:::i;:::-;-1:-1:-1;31506:10:59;;31329:193::o;31527:216::-;31591:9;;;31619:11;;;31566:3;31649:9;;31677:10;;31673:19;;31702:10;;31694:19;;31670:44;31667:70;;;31717:18;;:::i;31748:237::-;31820:9;;;31787:7;31845:9;;-1:-1:-1;;;31856:18:59;;31841:34;31838:60;;;31878:18;;:::i;:::-;31951:1;31942:7;31937:16;31934:1;31931:23;31927:1;31920:9;31917:38;31907:72;;31959:18;;:::i",
        "linkReferences": {},
        "immutableReferences": {
            "44348": [
                {
                    "start": 1263,
                    "length": 32
                },
                {
                    "start": 1406,
                    "length": 32
                },
                {
                    "start": 2424,
                    "length": 32
                },
                {
                    "start": 2716,
                    "length": 32
                },
                {
                    "start": 2853,
                    "length": 32
                },
                {
                    "start": 4776,
                    "length": 32
                },
                {
                    "start": 4861,
                    "length": 32
                },
                {
                    "start": 5003,
                    "length": 32
                },
                {
                    "start": 5365,
                    "length": 32
                },
                {
                    "start": 6314,
                    "length": 32
                }
            ],
            "44351": [
                {
                    "start": 1467,
                    "length": 32
                },
                {
                    "start": 1651,
                    "length": 32
                },
                {
                    "start": 2251,
                    "length": 32
                },
                {
                    "start": 2576,
                    "length": 32
                },
                {
                    "start": 4698,
                    "length": 32
                },
                {
                    "start": 6811,
                    "length": 32
                },
                {
                    "start": 7450,
                    "length": 32
                }
            ],
            "44353": [
                {
                    "start": 885,
                    "length": 32
                },
                {
                    "start": 8644,
                    "length": 32
                }
            ],
            "44355": [
                {
                    "start": 1096,
                    "length": 32
                },
                {
                    "start": 1756,
                    "length": 32
                },
                {
                    "start": 8406,
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
        "getBillingPlan(uint256,uint8)": "333160e6",
        "getNextChargeTimestamp((address,uint256,address,uint256,uint256,uint8,uint256,(uint8,uint16,uint8,address[],uint256[],uint256)))": "217786ef",
        "getPlan(uint256)": "26cd5274",
        "getPlans()": "d94a862b",
        "getRegisteredTokens()": "14cbd993",
        "getServiceProvider()": "571959e0",
        "getServiceProviderFee()": "cea98303",
        "getSubscriptionAtIndex(uint256)": "40230046",
        "getSubscriptions()": "3b47a9ac",
        "getTokenPriceFeed(address)": "274a1a00",
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_serviceProvider\",\"type\":\"address\"},{\"internalType\":\"int256\",\"name\":\"_serviceProviderFee\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MemberBeatSubscriptionManager__AllowanceTooLow\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"}],\"name\":\"MemberBeatSubscriptionManager__AlreadySubscribed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"period\",\"type\":\"uint256\"}],\"name\":\"MemberBeatSubscriptionManager__InvalidBillingPeriod\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MemberBeatSubscriptionManager__InvalidServiceProviderAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MemberBeatSubscriptionManager__InvalidSubscriptionData\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"}],\"name\":\"MemberBeatSubscriptionManager__NotSubscribed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"subscriptionIndex\",\"type\":\"uint256\"}],\"name\":\"MemberBeatSubscriptionManager__SubscriptionNotDue\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"subscriptionIndex\",\"type\":\"uint256\"}],\"name\":\"MemberBeatSubscriptionManager__SubscriptionNotFound\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"MemberBeatSubscriptionManager__TokenAmountCalculationFailed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"MemberBeatSubscriptionManager__TokenApprovalFailed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"}],\"name\":\"MemberBeatSubscriptionManager__TokenFeeTransferFailed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"MemberBeatSubscriptionManager__TokenNotAllowed\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"}],\"name\":\"SubscriptionCancelled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"billingCycle\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenAmount\",\"type\":\"uint256\"}],\"name\":\"SubscriptionCharged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"billingPlan\",\"type\":\"tuple\"}],\"name\":\"SubscriptionCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"subscriptionIndex\",\"type\":\"uint256\"}],\"name\":\"SubscriptionDueForCharge\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"SERVICE_PROVIDER_FEE_FACTOR\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"_billingPlan\",\"type\":\"tuple\"}],\"name\":\"addBillingPlan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_priceFeedAddress\",\"type\":\"address\"}],\"name\":\"addTokenPriceFeed\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"calculateServiceProviderFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_fiatAmount\",\"type\":\"uint256\"}],\"name\":\"convertFiatToTokenAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_planName\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan[]\",\"name\":\"_billingPlans\",\"type\":\"tuple[]\"}],\"name\":\"createPlan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"}],\"name\":\"deletePlan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"_billingPlanIdex\",\"type\":\"uint8\"}],\"name\":\"getBillingPlan\",\"outputs\":[{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"startTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"nextChargeTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"enum MemberBeatDataTypes.Status\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"billingCycle\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"billingPlan\",\"type\":\"tuple\"}],\"internalType\":\"struct MemberBeatDataTypes.Subscription\",\"name\":\"subscription\",\"type\":\"tuple\"}],\"name\":\"getNextChargeTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"}],\"name\":\"getPlan\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"planName\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan[]\",\"name\":\"billingPlans\",\"type\":\"tuple[]\"}],\"internalType\":\"struct MemberBeatDataTypes.Plan\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPlans\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"planName\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan[]\",\"name\":\"billingPlans\",\"type\":\"tuple[]\"}],\"internalType\":\"struct MemberBeatDataTypes.Plan[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRegisteredTokens\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getServiceProvider\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getServiceProviderFee\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_index\",\"type\":\"uint256\"}],\"name\":\"getSubscriptionAtIndex\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"startTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"nextChargeTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"enum MemberBeatDataTypes.Status\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"billingCycle\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"billingPlan\",\"type\":\"tuple\"}],\"internalType\":\"struct MemberBeatDataTypes.Subscription\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getSubscriptions\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"startTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"nextChargeTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"enum MemberBeatDataTypes.Status\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"billingCycle\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"billingPlan\",\"type\":\"tuple\"}],\"internalType\":\"struct MemberBeatDataTypes.Subscription[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenAddress\",\"type\":\"address\"}],\"name\":\"getTokenPriceFeed\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"}],\"name\":\"getUserSubscription\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"startTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"nextChargeTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"enum MemberBeatDataTypes.Status\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"billingCycle\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"billingPlan\",\"type\":\"tuple\"}],\"internalType\":\"struct MemberBeatDataTypes.Subscription\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"subscriptionIndex\",\"type\":\"uint256\"}],\"name\":\"handleSubscriptionCharge\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenAddress\",\"type\":\"address\"}],\"name\":\"isTokenRegistered\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"processDueSubscriptions\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"_billingPlanIndex\",\"type\":\"uint8\"}],\"name\":\"removeBillingPlan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"_billingPlanIndex\",\"type\":\"uint8\"},{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_startTimestamp\",\"type\":\"uint256\"}],\"name\":\"subscribe\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"planId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"startTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"nextChargeTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"enum MemberBeatDataTypes.Status\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"billingCycle\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"billingPlan\",\"type\":\"tuple\"}],\"internalType\":\"struct MemberBeatDataTypes.Subscription\",\"name\":\"\",\"type\":\"tuple\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"}],\"name\":\"unsubscribe\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"_billingPlanIndex\",\"type\":\"uint8\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan\",\"name\":\"_billingPlan\",\"type\":\"tuple\"}],\"name\":\"updateBillingPlan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_planId\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_planName\",\"type\":\"string\"},{\"components\":[{\"internalType\":\"enum MemberBeatDataTypes.Period\",\"name\":\"period\",\"type\":\"uint8\"},{\"internalType\":\"uint16\",\"name\":\"periodValue\",\"type\":\"uint16\"},{\"internalType\":\"enum MemberBeatDataTypes.PricingType\",\"name\":\"pricingType\",\"type\":\"uint8\"},{\"internalType\":\"address[]\",\"name\":\"tokenAddresses\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"tokenPrices\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256\",\"name\":\"fiatPrice\",\"type\":\"uint256\"}],\"internalType\":\"struct MemberBeatDataTypes.BillingPlan[]\",\"name\":\"_billingPlans\",\"type\":\"tuple[]\"}],\"name\":\"updatePlan\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_newPriceFeedAddress\",\"type\":\"address\"}],\"name\":\"updateTokenPriceFeed\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"This contract integrates with SubscriptionPlansRegistry and TokenPriceFeedRegistry to handle subscription plans and token price feeds. It includes functionality for subscribing, unsubscribing, creating, updating, and deleting plans, as well as charging subscriptions.Utilizes the SafeERC20 library for safe token transfers.\",\"errors\":{\"OwnableInvalidOwner(address)\":[{\"details\":\"The owner is not a valid owner account. (eg. `address(0)`)\"}],\"OwnableUnauthorizedAccount(address)\":[{\"details\":\"The caller account is not authorized to perform an operation.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC-20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{\"addBillingPlan(uint256,(uint8,uint16,uint8,address[],uint256[],uint256))\":{\"params\":{\"_billingPlan\":\"The billing plan to add.\",\"_planId\":\"The ID of the plan to add the billing plan to.\"}},\"addTokenPriceFeed(address,address)\":{\"params\":{\"_priceFeedAddress\":\"The address of the price feed.\",\"_tokenAddress\":\"The address of the token.\"}},\"calculateServiceProviderFee(uint256)\":{\"params\":{\"amount\":\"The amount to calculate the fee for.\"},\"returns\":{\"_0\":\"The calculated service provider fee.\"}},\"claimTokens()\":{\"details\":\"This function retrieves the list of charged token addresses, transfers their balances to the owner's address, and then resets the list of charged token addresses.This function can only be called by the contract owner.Since this function is for the owner only, and the tokens are in our control, it is safe to loop and transfer.\"},\"convertFiatToTokenAmount(address,uint256)\":{\"params\":{\"_fiatAmount\":\"The fiat amount to be converted.\",\"_tokenAddress\":\"The address of the token.\"},\"returns\":{\"_0\":\"The equivalent token amount.\"}},\"createPlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])\":{\"params\":{\"_billingPlans\":\"The billing plans associated with the new plan.\",\"_planId\":\"The ID of the new plan.\",\"_planName\":\"The name of the new plan.\"}},\"deletePlan(uint256)\":{\"params\":{\"_planId\":\"The ID of the plan to delete.\"}},\"getBillingPlan(uint256,uint8)\":{\"params\":{\"_billingPlanIdex\":\"The index of the billing plan within the subscription plan.\",\"_planId\":\"The ID of the subscription plan.\"},\"returns\":{\"_0\":\"BillingPlan struct containing details of the requested billing plan.\"}},\"getNextChargeTimestamp((address,uint256,address,uint256,uint256,uint8,uint256,(uint8,uint16,uint8,address[],uint256[],uint256)))\":{\"params\":{\"subscription\":\"The subscription details for which the next charge timestamp is calculated.\"},\"returns\":{\"_0\":\"The next charge timestamp for the subscription.\"}},\"getPlan(uint256)\":{\"params\":{\"_planId\":\"The ID of the plan to retrieve.\"},\"returns\":{\"_0\":\"Returns the plan details.\"}},\"getPlans()\":{\"returns\":{\"_0\":\"Returns an array of all plans.\"}},\"getRegisteredTokens()\":{\"returns\":{\"_0\":\"Returns an array of addresses of all registered tokens.\"}},\"getServiceProvider()\":{\"returns\":{\"_0\":\"The address of the service provider.\"}},\"getServiceProviderFee()\":{\"returns\":{\"_0\":\"The service provider fee as an integer.\"}},\"getSubscriptionAtIndex(uint256)\":{\"details\":\"This function can only be called by the owner.\",\"params\":{\"_index\":\"The index of the subscription to retrieve.\"},\"returns\":{\"_0\":\"The subscription details.\"}},\"getSubscriptions()\":{\"returns\":{\"_0\":\"Returns an array of all subscriptions.\"}},\"getTokenPriceFeed(address)\":{\"params\":{\"_tokenAddress\":\"The address of the token.\"},\"returns\":{\"_0\":\"Returns the address of the price feed.\"}},\"getUserSubscription(address,uint256)\":{\"params\":{\"_account\":\"The address of the user.\",\"_planId\":\"The ID of the plan.\"},\"returns\":{\"_0\":\"Returns the user's subscription details for the specified plan.\"}},\"handleSubscriptionCharge(uint256)\":{\"details\":\"This function checks if a subscription is due for charge and processes the charge if applicable.\",\"params\":{\"subscriptionIndex\":\"The index of the subscription to be charged.\"}},\"isOwner()\":{\"returns\":{\"_0\":\"Returns true if the caller is the owner, otherwise false.\"}},\"isTokenRegistered(address)\":{\"params\":{\"_tokenAddress\":\"The address of the token.\"},\"returns\":{\"_0\":\"Returns true if the token is registered, otherwise false.\"}},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"processDueSubscriptions()\":{\"details\":\"This function checks each subscription scheduled for today and emits an event if the subscription is due for a charge.\"},\"removeBillingPlan(uint256,uint8)\":{\"params\":{\"_billingPlanIndex\":\"The index of the billing plan within the plan.\",\"_planId\":\"The ID of the plan containing the billing plan to remove.\"}},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"subscribe(uint256,uint8,address,uint256)\":{\"params\":{\"_billingPlanIndex\":\"The index of the billing plan within the selected plan.\",\"_planId\":\"The ID of the plan to subscribe to.\",\"_startTimestamp\":\"The start timestamp for the subscription.\",\"_token\":\"The address of the token to be used for the subscription.\"},\"returns\":{\"_0\":\"Returns the subscription details and the spent token amount.\"}},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"},\"unsubscribe(uint256)\":{\"params\":{\"_planId\":\"The ID of the plan to unsubscribe from.\"}},\"updateBillingPlan(uint256,uint8,(uint8,uint16,uint8,address[],uint256[],uint256))\":{\"params\":{\"_billingPlan\":\"The updated billing plan details.\",\"_billingPlanIndex\":\"The index of the billing plan within the plan.\",\"_planId\":\"The ID of the plan containing the billing plan to update.\"}},\"updatePlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])\":{\"params\":{\"_billingPlans\":\"The updated billing plans associated with the plan.\",\"_planId\":\"The ID of the plan to update.\",\"_planName\":\"The updated name of the plan.\"}},\"updateTokenPriceFeed(address,address)\":{\"params\":{\"_newPriceFeedAddress\":\"The new address of the price feed.\",\"_tokenAddress\":\"The address of the token.\"}}},\"title\":\"MemberBeatSubscriptionManager\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"addBillingPlan(uint256,(uint8,uint16,uint8,address[],uint256[],uint256))\":{\"notice\":\"Adds a billing plan to an existing plan.\"},\"addTokenPriceFeed(address,address)\":{\"notice\":\"Adds a price feed address for a token.\"},\"calculateServiceProviderFee(uint256)\":{\"notice\":\"Calculates the service provider fee for a given amount.\"},\"claimTokens()\":{\"notice\":\"Transfers the balances of all charged tokens from the contract to the owner's wallet.\"},\"convertFiatToTokenAmount(address,uint256)\":{\"notice\":\"Converts a fiat amount to a token amount.\"},\"createPlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])\":{\"notice\":\"Creates a new plan.\"},\"deletePlan(uint256)\":{\"notice\":\"Deletes an existing plan.\"},\"getBillingPlan(uint256,uint8)\":{\"notice\":\"Retrieves a specific billing plan from the subscription plans registry.\"},\"getNextChargeTimestamp((address,uint256,address,uint256,uint256,uint8,uint256,(uint8,uint16,uint8,address[],uint256[],uint256)))\":{\"notice\":\"Calculates the next charge timestamp for a given subscription.\"},\"getPlan(uint256)\":{\"notice\":\"Retrieves a plan by its ID.\"},\"getPlans()\":{\"notice\":\"Retrieves all plans.\"},\"getRegisteredTokens()\":{\"notice\":\"Retrieves all registered tokens.\"},\"getServiceProvider()\":{\"notice\":\"Retrieves the address of the service provider.\"},\"getServiceProviderFee()\":{\"notice\":\"Retrieves the service provider fee.\"},\"getSubscriptionAtIndex(uint256)\":{\"notice\":\"Retrieves a subscription at a specific index.\"},\"getSubscriptions()\":{\"notice\":\"Retrieves all subscriptions.\"},\"getTokenPriceFeed(address)\":{\"notice\":\"Retrieves the price feed address for a token.\"},\"getUserSubscription(address,uint256)\":{\"notice\":\"Retrieves a user's subscription for a specific plan.\"},\"handleSubscriptionCharge(uint256)\":{\"notice\":\"Handles the charge process for a specific subscription.\"},\"isOwner()\":{\"notice\":\"Checks if the caller is the owner of the contract.\"},\"isTokenRegistered(address)\":{\"notice\":\"Checks if a token is registered.\"},\"processDueSubscriptions()\":{\"notice\":\"Processes subscriptions that are due for charge.\"},\"removeBillingPlan(uint256,uint8)\":{\"notice\":\"Removes a billing plan from an existing plan.\"},\"subscribe(uint256,uint8,address,uint256)\":{\"notice\":\"Subscribes a user to a plan.\"},\"unsubscribe(uint256)\":{\"notice\":\"Unsubscribes a user from a plan.\"},\"updateBillingPlan(uint256,uint8,(uint8,uint16,uint8,address[],uint256[],uint256))\":{\"notice\":\"Updates a billing plan within an existing plan.\"},\"updatePlan(uint256,string,(uint8,uint16,uint8,address[],uint256[],uint256)[])\":{\"notice\":\"Updates an existing plan.\"},\"updateTokenPriceFeed(address,address)\":{\"notice\":\"Updates the price feed address for a token.\"}},\"notice\":\"Manages subscriptions, including creation, charging, and cancellation of subscriptions.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/MemberBeatSubscriptionManager.sol\":\"MemberBeatSubscriptionManager\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@chainlink/contracts/=lib/chainlink-brownie-contracts/contracts/src/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@solidity-datetime/contracts/=lib/solidity-datetime/contracts/\",\":chainlink-brownie-contracts/=lib/chainlink-brownie-contracts/contracts/src/v0.6/vendor/@arbitrum/nitro-contracts/src/\",\":ds-test/=lib/openzeppelin-contracts/lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":foundry-devops/=lib/foundry-devops/\",\":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solidity-datetime/=lib/solidity-datetime/\"]},\"sources\":{\"lib/chainlink-brownie-contracts/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol\":{\"keccak256\":\"0xfe4e8bb4861bb3860ba890ab91a3b818ec66e5a8f544fb608cfcb73f433472cd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://644cff84052e1e82b5bb502b2a46e8f142a62b0db4cd9b38200798ba8373c6f7\",\"dweb:/ipfs/QmTa99QHrJBn3SXDizquPBUiTxVCNKQrHgaWJhuds5Sce2\"]},\"lib/openzeppelin-contracts/contracts/access/Ownable.sol\":{\"keccak256\":\"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6\",\"dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC1363.sol\":{\"keccak256\":\"0x9b6b3e7803bc5f2f8cd7ad57db8ac1def61a9930a5a3107df4882e028a9605d7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://da62d6be1f5c6edf577f0cb45666a8aa9c2086a4bac87d95d65f02e2f4c36a4b\",\"dweb:/ipfs/QmNkpvBpoCMvX8JwAFNSc5XxJ2q5BXJpL5L1txb4QkqVFF\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a\",\"dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS\"]},\"lib/openzeppelin-contracts/contracts/interfaces/IERC20.sol\":{\"keccak256\":\"0xce41876e78d1badc0512229b4d14e4daf83bc1003d7f83978d18e0e56f965b9c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a2608291cb038b388d80b79a06b6118a42f7894ff67b7da10ec0dbbf5b2973ba\",\"dweb:/ipfs/QmWohqcBLbcxmA4eGPhZDXe5RYMMEEpFq22nfkaUMvTfw1\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xe06a3f08a987af6ad2e1c1e774405d4fe08f1694b67517438b467cecf0da0ef7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://df6f0c459663c9858b6cba2cda1d14a7d05a985bed6d2de72bd8e78c25ee79db\",\"dweb:/ipfs/QmeTTxZ7qVk9rjEv2R4CpCwdf8UMCcRqDNMvzNxHc3Fnn9\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0xca2ae13e0610f6a99238dd00b97bd786bc92732dae6d6b9d61f573ec51018310\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://75f8c71ce0c91c40dd5f249ace0b7d8270f8f1767231bcf71490f7157d6ba862\",\"dweb:/ipfs/QmYXgxeDyFHvz3JsXxLEYN6GNUR44ThHeFj5XkpkgMoG4w\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0x9d8da059267bac779a2dbbb9a26c2acf00ca83085e105d62d5d4ef96054a47f5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c78e2aa4313323cecd1ef12a8d6265b96beee1a199923abf55d9a2a9e291ad23\",\"dweb:/ipfs/QmUTs2KStXucZezzFo3EYeqYu47utu56qrF7jj1Gue65vb\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/Errors.sol\":{\"keccak256\":\"0x6afa713bfd42cf0f7656efa91201007ac465e42049d7de1d50753a373648c123\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ba1d02f4847670a1b83dec9f7d37f0b0418d6043447b69f3a29a5f9efc547fcf\",\"dweb:/ipfs/QmQ7iH2keLNUKgq2xSWcRmuBE5eZ3F5whYAkAGzCNNoEWB\"]},\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621\",\"dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL\"]},\"lib/solidity-datetime/contracts/DateTime.sol\":{\"keccak256\":\"0x3e6031d05cd13aa1ea1bcaf59d6a4b20054ddc18a86514e44e66cd4ed4dc4445\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ce88e00d8a888f45bcf3ef95df7bcf8b90b97e4465b0427ba3407e3d19dc931\",\"dweb:/ipfs/QmWwtMzN9fpxWF3RvhzsPFjQCsmiKhWV7LMKngKj5Xu3ne\"]},\"src/IMemberBeatSubscriptionManager.sol\":{\"keccak256\":\"0xe8761367a32f6f70481b21c72ca1db1f3a60454fcb373fe4779421abcb99a294\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://995bd7399907f1a12f86c905342ee4434f69310b2ec0f340fa7975452a562d74\",\"dweb:/ipfs/QmfDC2gfZX5Wmx54n7QqG8HkvRx27v5r9fw5Sjk4EZb3tA\"]},\"src/MemberBeatSubscriptionManager.sol\":{\"keccak256\":\"0xb5fa2d2edf068d5f1c73b8868801a94488b54e0c25278f9e1613fc7eab9f7477\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://607aa6d5782aca38f6f8a31ec9b9b0852a8211863cb9db718241275fb1bcadd9\",\"dweb:/ipfs/QmWGLATH4nYsRRMRdNPVpj5xDptTKMhbgSjp5ULE4V1E99\"]},\"src/common/MemberBeatDataTypes.sol\":{\"keccak256\":\"0x2a716bd1cde8c352a7bdc5b0e04506c0c5b41bd504ebe605b2de7636d5fb4480\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://94cdddbe1a788bf345f532712f8b0c075e8bb133956f1dfbebb282423ed70bed\",\"dweb:/ipfs/Qmes6vnDZaEddeWcr78BvXx3ZGEjWPQWm6AG8qMvKWydeb\"]},\"src/registry/SubscriptionPlansRegistry.sol\":{\"keccak256\":\"0xa5713e72b312c04aee3ba75100315728b75abb9b7045466ee1a89705274ba842\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://25a1a34e91573c73b28ba4336b38fd5369dbe31ebb365b43655e4e6d16cdc2b7\",\"dweb:/ipfs/Qmdwm7pS9pT4avaxMQQzasHkLAZ4U3PtfSeSZYgdEyqn1T\"]},\"src/registry/TokenPriceFeedRegistry.sol\":{\"keccak256\":\"0x467e98478c7834020ae3cce65f23b9586f6006377a36ad01eaec70bb812faca0\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://d01e9ad8dcd00becc3630f78e80990b83eb375ee444534256aa72a5128d43f08\",\"dweb:/ipfs/QmNsY7QKtPYtCSk2237vKB4DJNsXxT488Cnu29YBRRADMT\"]}},\"version\":1}",
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
                            "name": "_tokenAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getTokenPriceFeed",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
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
                    "getTokenPriceFeed(address)": {
                        "params": {
                            "_tokenAddress": "The address of the token."
                        },
                        "returns": {
                            "_0": "Returns the address of the price feed."
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
                    "getTokenPriceFeed(address)": {
                        "notice": "Retrieves the price feed address for a token."
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
                "keccak256": "0xe8761367a32f6f70481b21c72ca1db1f3a60454fcb373fe4779421abcb99a294",
                "urls": [
                    "bzz-raw://995bd7399907f1a12f86c905342ee4434f69310b2ec0f340fa7975452a562d74",
                    "dweb:/ipfs/QmfDC2gfZX5Wmx54n7QqG8HkvRx27v5r9fw5Sjk4EZb3tA"
                ],
                "license": "GPL-3.0"
            },
            "src/MemberBeatSubscriptionManager.sol": {
                "keccak256": "0xb5fa2d2edf068d5f1c73b8868801a94488b54e0c25278f9e1613fc7eab9f7477",
                "urls": [
                    "bzz-raw://607aa6d5782aca38f6f8a31ec9b9b0852a8211863cb9db718241275fb1bcadd9",
                    "dweb:/ipfs/QmWGLATH4nYsRRMRdNPVpj5xDptTKMhbgSjp5ULE4V1E99"
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
                "keccak256": "0xa5713e72b312c04aee3ba75100315728b75abb9b7045466ee1a89705274ba842",
                "urls": [
                    "bzz-raw://25a1a34e91573c73b28ba4336b38fd5369dbe31ebb365b43655e4e6d16cdc2b7",
                    "dweb:/ipfs/Qmdwm7pS9pT4avaxMQQzasHkLAZ4U3PtfSeSZYgdEyqn1T"
                ],
                "license": "GPL-3.0"
            },
            "src/registry/TokenPriceFeedRegistry.sol": {
                "keccak256": "0x467e98478c7834020ae3cce65f23b9586f6006377a36ad01eaec70bb812faca0",
                "urls": [
                    "bzz-raw://d01e9ad8dcd00becc3630f78e80990b83eb375ee444534256aa72a5128d43f08",
                    "dweb:/ipfs/QmNsY7QKtPYtCSk2237vKB4DJNsXxT488Cnu29YBRRADMT"
                ],
                "license": "GPL-3.0"
            }
        },
        "version": 1
    },
    "id": 46
}

export default contractABI;