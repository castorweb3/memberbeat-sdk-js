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

import { ethers } from 'ethers';
import contractABI from './abi';

/**
 * Enum for subscription periods.
 * @readonly
 * @enum {number}
 */
export class Period {
  static Day = 0;
  static Month = 1;
  static Year = 2;
  static Lifetime = 3;
}

/**
 * Enum for pricing types.
 * @readonly
 * @enum {number}
 */
export class PricingType {
  static TokenPrice = 0;
  static FiatPrice = 1;
}

/**
 * Enum for subscription statuses.
 * @readonly
 * @enum {number}
 */
export class Status {
  static Pending = 0;
  static Active = 1;
  static Suspended = 2;
  static Canceled = 3;
}

/**
 * Class representing a billing plan.
 */
export class BillingPlan {
  /**
   * Create a billing plan.
   * @param {Period} period - The billing period.
   * @param {number} periodValue - The value for the billing period (e.g., 1 for 1 Month).
   * @param {PricingType} pricingType - The type of pricing.
   * @param {string[]} tokenAddresses - Array of token addresses for the billing plan.
   * @param {number[]} tokenPrices - Array of token prices corresponding to the token addresses.
   * @param {number} fiatPrice - The fiat price for the billing plan.
   */
  constructor(period, periodValue, pricingType, tokenAddresses, tokenPrices, fiatPrice) {
    this.period = period;
    this.periodValue = periodValue;
    this.pricingType = pricingType;
    this.tokenAddresses = tokenAddresses;
    this.tokenPrices = tokenPrices;
    this.fiatPrice = fiatPrice;
  }
}

/**
 * Class representing a plan.
 */
export class Plan {
  /**
   * Create a plan.
   * @param {number} planId - The ID of the plan.
   * @param {string} planName - The name of the plan.
   * @param {BillingPlan[]} billingPlans - Array of billing plans associated with the plan.
   */
  constructor(planId, planName, billingPlans) {
    this.planId = planId;
    this.planName = planName;
    this.billingPlans = billingPlans;
  }
}

/**
 * Class representing a subscription.
 */
export class Subscription {
  /**
   * Create a subscription.
   * @param {string} account - The account address.
   * @param {number} planId - The ID of the plan.
   * @param {string} token - The token address.
   * @param {number} startTimestamp - The start timestamp of the subscription.
   * @param {number} nextChargeTimestamp - The next charge timestamp of the subscription.
   * @param {Status} status - The status of the subscription.
   * @param {number} billingCycle - The billing cycle of the subscription.
   * @param {BillingPlan} billingPlan - The billing plan associated with the subscription.
   */
  constructor(account, planId, token, startTimestamp, nextChargeTimestamp, status, billingCycle, billingPlan) {
    this.account = account;
    this.planId = planId;
    this.token = token;
    this.startTimestamp = startTimestamp;
    this.nextChargeTimestamp = nextChargeTimestamp;
    this.status = status;
    this.billingCycle = billingCycle;
    this.billingPlan = billingPlan;
  }
}

/**
 * ERC20 contract ABI (Application Binary Interface).
 * @type {Array<string>}
 */
const ERC20ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)"
];

export const memberbeatABI = contractABI;

/**
 * Creates a Memberbeat contract instance.
 * @param {string} contractAddress - The contract address.
 * @param {Object} signer - The signer to use.
 * @returns {Object} The Memberbeat contract instance.
 * @throws Will throw an error if the contract address or signer is not provided.
 */
export const createMemberbeat = async (contractAddress, signer) => {
  if (!contractAddress) {
    throw new Error("Please provide a contract address");
  }

  if (!signer) {
    throw new Error("Please provide a signer");
  }

  const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);  
      
  /**
   * @typedef {Object} BillingPlan
   * @property {number} period - The period type (e.g., 0 for day, 1 for month).
   * @property {number} periodValue - The value of the period.
   * @property {number} pricingType - The pricing type (e.g., 0 for token, 1 for fiat).
   * @property {string[]} tokenAddresses - Array of token addresses.
   * @property {BigInt[]} tokenPrices - Array of token prices.
   * @property {BigInt} fiatPrice - The fiat price.
   */

  /**
   * Checks if the current user is owner.
   * @returns {Promise<Boolean>} True if the user is owner
   * @throws Will throw an error if checking the user fails.
   */
  const isOwner = async () => {
    try {
      return await contract.isOwner();      
    } catch (error) {
        console.error("Error checking is owner: ", error);
        throw error;
    }
  };

  /**
   * Fetches all plans from the contract.
   * @returns {Promise<Plan[]>} The list of plans.
   * @throws Will throw an error if fetching plans fails.
   */
  const getPlans = async () => {
    try {
        const plansArr = await contract.getPlans();
        const plans = [];
        for (let i = 0; i < plansArr.length; i++) {
            plans.push(_readPlanFromArray(plansArr[i]));
        }        
        return plans;
    } catch (error) {
        console.error("Error fetching plans: ", error);
        throw error;
    }
  };

  /**
  * Fetches a specific plan from the contract by ID.
  * @param {string} planId - The ID of the plan to fetch.
  * @returns {Promise<Plan>} The plan object.
  * @throws Will throw an error if fetching the plan fails.
  */
  const getPlan = async (planId) => {
    try {
        const planArr = await contract.getPlan(planId);         
        const plan = _readPlanFromArray(planArr);
        return plan;
    } catch (error) {
        console.error("Error getting a plan: ", error);
        throw error;
    }
  };

  /**
  * Creates a new plan in the contract.
  * @param {Plan} plan - The plan object  
  * @returns {Promise<Object>} The result of the creation transaction.
  * @throws Will throw an error if the planId or name is missing, or if the transaction fails.
  */
  const createPlan = async (plan) => {
    if (!plan.planId || !plan.planName) {
      throw new Error("Please provide planId and planName");
    }
  
    try {
      console.log("Trying to create a plan with ID", plan.planId, " and name", plan.planName);
        
      const billingPlansArray = plan.billingPlans.map(bp => {
        const convertedTokenPrices = bp.tokenPrices.map(price => price ? ethers.parseEther(price.toString()) : 0);
        const convertedFiatPrice = bp.fiatPrice ? ethers.parseEther(bp.fiatPrice.toString()) : 0;
        
        return {
          period: bp.period,
          periodValue: bp.periodValue,
          pricingType: bp.pricingType,
          tokenAddresses: bp.tokenAddresses,
          tokenPrices: convertedTokenPrices,
          fiatPrice: convertedFiatPrice
        };
      });
      
      const tx = await contract.createPlan(plan.planId, plan.planName, billingPlansArray); 
      await tx.wait();
      console.log("tx", tx);
      return { success: true, message: "Plan created" };
    } catch (error) {
      console.error("Error creating a plan: ", error);
      throw error;
    }
  };

  /**
  * Updates an existing plan in the contract.
  * @param {Plan} plan - The plan object.  
  * @returns {Promise<Object>} The result of the update transaction.
  * @throws Will throw an error if the planId or name is missing, or if the transaction fails.
  */
  const updatePlan = async (plan) => {
    if (!plan.planId || !plan.planName) {
      throw new Error("Please provide planId and planName");
    } 
    
    try {
      console.log("Trying to update a plan with ID", plan.planId, " and name", plan.planName);
      const billingPlansArray = plan.billingPlans.map(bp => {
        const convertedTokenPrices = bp.tokenPrices.map(price => price ? ethers.parseEther(price.toString()) : 0);
        const convertedFiatPrice = bp.fiatPrice ? ethers.parseEther(bp.fiatPrice.toString()) : 0;
        
        return {
          period: bp.period,
          periodValue: bp.periodValue,
          pricingType: bp.pricingType,
          tokenAddresses: bp.tokenAddresses,
          tokenPrices: convertedTokenPrices,
          fiatPrice: convertedFiatPrice
        };
      });  

      const tx = await contract.updatePlan(plan.planId, plan.planName, billingPlansArray); 
      await tx.wait();
      console.log("tx", tx);
      return { success: true, message: "Plan updated" };
    } catch (error) {
        console.error("Error updating a plan: ", error.message);
        throw error;
    }
  };

  /**
  * Deletes a plan from the contract.
  * @param {number} planId - The ID of the plan to delete.
  * @returns {Promise<Object>} The result of the delete transaction.
  * @throws Will throw an error if deleting the plan fails.
  */
  const deletePlan = async (planId) => {
    try {
      console.log("Trying to delete a plan with ID", planId);
      const tx = await contract.deletePlan(planId); 
      await tx.wait();
      console.log("tx", tx);
      return { success: true, message: "Plan deleted" };
    } catch (error) {
      console.error("Error deleting a plan: ", error);
      throw error;
    }
  };

  /**
  * Fetches a specific billing plan from a plan by ID and index.
  * @param {number} planId - The ID of the plan.
  * @param {number} billingPlanIndex - The index of the billing plan within the plan.
  * @returns {Promise<BillingPlan>} The billing plan object.
  * @throws Will throw an error if fetching the billing plan fails.
  */
  const getBillingPlan = async (planId, billingPlanIndex) => {
    try {
        const billingPlanArr = await contract.getBillingPlan(planId, billingPlanIndex);
        const billingPlan = _readBillingPlanFromArray(billingPlanArr);
        return billingPlan;      
    } catch (error) {
        console.error("Error getting a billing plan: ", error);
        throw error;
    }
  };


  /**
   * Adds a billing plan to the contract.
   * @param {number} planId - The ID of the plan.
   * @param {BillingPlan} billingPlan - The billing plan object.
   * @returns {Promise<Object>} The result of the transaction.
   * @throws Will throw an error if the transaction fails.
   */
  const addBillingPlan = async (planId, billingPlan) => {
    try {
      const { period, periodValue, pricingType, tokenAddresses, tokenPrices, fiatPrice } = billingPlan;

      const convertedTokenPrices = tokenPrices.map(price => BigInt(price));
      const convertedFiatPrice = BigInt(fiatPrice);

      const formattedBillingPlan = {
        period,
        periodValue,
        pricingType,
        tokenAddresses,
        tokenPrices: convertedTokenPrices,
        fiatPrice: convertedFiatPrice
      };

      const tx = await contract.addBillingPlan(planId, formattedBillingPlan);
      await tx.wait();
      return { success: true, message: "Billing plan added" };
    } catch (error) {
      console.error("Error adding a billing plan: ", error);
      throw error;
    }
  };

  /**
   * Updates a billing plan in the contract.
   * @param {number} planId - The ID of the billing plan.
   * @param {number} billingPlanIndex - The index of the billing plan.
   * @param {BillingPlan} billingPlan - The billing plan object.
   * @returns {Promise<Object>} The result of the transaction.
   * @throws Will throw an error if the transaction fails.
   */
  const updateBillingPlan = async (planId, billingPlanIndex, billingPlan) => {
    try {
      const { period, periodValue, pricingType, tokenAddresses, tokenPrices, fiatPrice } = billingPlan;

      const convertedTokenPrices = tokenPrices.map(price => BigInt(price));
      const convertedFiatPrice = BigInt(fiatPrice);

      const formattedBillingPlan = {
        period,
        periodValue,
        pricingType,
        tokenAddresses,
        tokenPrices: convertedTokenPrices,
        fiatPrice: convertedFiatPrice
      };

      const tx = await contract.updateBillingPlan(planId, billingPlanIndex, formattedBillingPlan);
      await tx.wait();
      return { success: true, message: "Billing plan updated" };
    } catch (error) {
      console.error("Error updating a billing plan: ", error);
      throw error;
    }
  };

  /**
   * Removes a billing plan from a plan by ID and index.
   * @param {number} planId - The ID of the plan.
   * @param {number} billingPlanIndex - The index of the billing plan to remove.
   * @returns {Promise<boolean>} True if the removal was successful.
   * @throws Will throw an error if the transaction fails.
   */
  const removeBillingPlan = async (planId, billingPlanIndex) => {
    try {
      const tx = await contract.removeBillingPlan(planId, billingPlanIndex);
      await tx.wait();
      return true;
    } catch (error) {
      console.error("Error removing a billing plan: ", error);
      throw error;
    }
  };  

  /**
   * Subscribes to a plan.
   * @param {Plan} plan - The plan object.
   * @param {number} billingPlanIndex - The billing plan index.
   * @param {string} token - The token address.
   * @param {number} startTimestamp - The start timestamp.
   */
  const subscribe = async (plan, billingPlanIndex, token, startTimestamp) => {
    console.log("Subscribing to plan", plan, "billingPlanIndex", billingPlanIndex, "token address", token);
    
    try {
      const billingPlan = plan.billingPlans[billingPlanIndex];
      if (!billingPlan) {
        throw Error(`Billing plan not found at index ${billingPlanIndex}`);
      }

      let tokenAmount;
      
      console.log("billingPlan", billingPlan);
      if (billingPlan.pricingType === PricingType.FiatPrice) {
        console.log("Converting fiat price to token amount", billingPlan.fiatPrice);
        const fiatPriceWei = ethers.parseUnits(billingPlan.fiatPrice.toString(), 18);
        tokenAmount = await contract.convertFiatToTokenAmount(token, fiatPriceWei);
      } else if (billingPlan.pricingType === PricingType.TokenPrice) {
        const tokenIndex = billingPlan.tokenAddresses.indexOf(token); 
        if (tokenIndex === -1) { 
          throw new Error("Token address not found in billing plan."); 
        }                 
        console.log("Taking token amount from billing plan token prices");        
        tokenAmount = ethers.parseUnits(billingPlan.tokenPrices[tokenIndex] + "", 18);
      }

      console.log("Token amount", tokenAmount);
      const neededAmount = tokenAmount;

      const balance = await _getBalance(signer, token);
      if (balance < neededAmount) {
        throw Error("You don't have enought balance");
      }

      const allowance = await _getAllowance(signer, token);                  
      if (allowance < neededAmount) {
        await _approveToken(signer, token, neededAmount);
      }

      console.log(`Plan ID: ${plan.planId}`);
      console.log(`Billing Plan Index: ${billingPlanIndex}`);
      console.log(`Token: ${token}`);
      console.log(`Start timestamp: ${startTimestamp}`);
      console.log(`Token Amount: ${tokenAmount.toString()}`);

      const tx = await contract.subscribe(plan.planId, billingPlanIndex, token, startTimestamp);
      await tx.wait();
      console.log(`Successfully subscribed to plan ID ${plan.planId}, billing plan ${billingPlanIndex} with token ${token}`);
    } catch (error) {
      console.error('Error subscribing:', error);
      throw error;
    }
  };
  
  /**
   * Unsubscribes from a plan.
   * @param {number} planId - The ID of the plan.
   * @param {string} token - The token address.
   * @returns {Promise<void>}
   * @throws Will throw an error if unsubscribing fails.
   */
  const unsubscribe = async (planId, token) => {
    try {
        const tx = await contract.unsubscribe(planId);        
        await tx.wait();        
        console.log(`Successfully unsubscribed the plan ID ${planId}`);
        _removeAllowance(signer, token, contractAddress);
    } catch (error) {
        console.error('Error unsubscribing:', error);
        throw error;
    }
  };

  /**
   * Gets all subscriptions.
   * @returns {Promise<Object[]>} The list of subscriptions.
   * @throws Will throw an error if fetching subscriptions fails.
   */
  const getSubscriptions = async () => {
    try {
      const subscriptionsArr = await contract.getSubscriptions();
      const subscriptions = [];
      for (let i = 0; i < subscriptionsArr.length; i++) {
        subscriptions.push(_readSubscriptionFromArray(subscriptionsArr[i]));
      }        
      return subscriptions;
    } catch (error) {
        console.error("Error fetching subscriptions: ", error);
        throw error;
    }
  };

  /**
   * Gets a user subscription.
   * @param {string} account - The user account address.
   * @param {number} planId - The plan ID.
   * @returns {Promise<Object>} The subscription object.
   * @throws Will throw an error if fetching the subscription fails.
   */
  const getUserSubscription = async (account, planId) => {
    try {
      const subscriptionArr = await contract.getUserSubscription(account, planId);      
      const subscription = _readSubscriptionFromArray(subscriptionArr);
      return subscription;
    } catch (error) {
        console.error("Error fetching subscription: ", error);
        throw error;
    }
  };

  /**
   * Gets the registered tokens.
   * @returns {Promise<string[]>} The list of registered tokens.
   */
  const getRegisteredTokens = async () => {
    try {      
      const tokens = await contract.getRegisteredTokens();
      return tokens;
    } catch (error) {
      console.error('Error fetching registered tokens:', error);
      throw error;
    }
  };

  /**
   * Checks if a token is registered.
   * @param {string} tokenAddress - The token address.
   * @returns {Promise<boolean>} True if the token is registered.
   * @throws Will throw an error if checking the token registration fails.
   */
  const isTokenRegistered = async (tokenAddress) => {
    try {      
      const registered = await contract.isTokenRegistered(tokenAddress);
      return registered;
    } catch (error) {
      console.error('Error checking if token registered:', error);
      throw error;
    }
  };

  /**
  * Converts fiat amount to token amount.
  * @param {string} tokenAddress - The token address.
  * @param {BigInt} fiatAmount - The fiat amount.
  * @returns {Promise<BigInt>} The token amount.
  * @throws Will throw an error if the conversion fails.
  */
  const convertFiatToTokenAmount = async (tokenAddress, fiatAmount) => {
    try {      
      const tokenAmount = await contract.convertFiatToTokenAmount(tokenAddress, fiatAmount);
      return tokenAmount;
    } catch (error) {
      console.error('Error converting fiat to token amount:', error);
      throw error;
    }
  };

  /**
  * Adds a token price feed.
  * @param {string} tokenAddress - The token address.
  * @param {string} priceFeedAddress - The price feed address.
  * @returns {Promise<Object>} The result of the transaction.
  * @throws Will throw an error if adding the token price feed fails.
  */
  const addTokenPriceFeed = async (tokenAddress, priceFeedAddress) => {
    try {      
      const tx = await contract.addTokenPriceFeed(tokenAddress, priceFeedAddress);
      await tx.wait();
      return { success: true, message: "Token price feed added" };
    } catch (error) {
      console.error('Error adding token price feed:', error);
      throw error;
    }
  };

  /**
  * Updates a token price feed.
  * @param {string} tokenAddress - The token address.
  * @param {string} newPriceFeedAddress - The new price feed address.
  * @returns {Promise<Object>} The result of the transaction.
  * @throws Will throw an error if updating the token price feed fails.
  */
  const updateTokenPriceFeed = async (tokenAddress, newPriceFeedAddress) => {
    try {      
      const tx = await contract.updateTokenPriceFeed(tokenAddress, newPriceFeedAddress);
      await tx.wait();
      return { success: true, message: "Token price feed updated" };
    } catch (error) {
      console.error('Error updating token price feed:', error);
      throw error;
    }
  };

  /**
  * Removes a token price feed.
  * @param {string} tokenAddress - The token address.  
  * @returns {Promise<Object>} The result of the transaction.
  * @throws Will throw an error if removing the token price feed fails.
  */
  const deleteTokenPriceFeed = async (tokenAddress) => {
    try {      
      const tx = await contract.deleteTokenPriceFeed(tokenAddress);
      await tx.wait();
      return { success: true, message: "Token price feed deleted" };
    } catch (error) {
      console.error('Error deleting token price feed:', error);
      throw error;
    }
  };


  /**
   * Gets the allowance of tokens for a given token.
   * @param {Object} signer - The signer to use.
   * @param {string} token - The token address.
   * @returns {Promise<number>} The allowance of tokens.
   */
  const _getAllowance = async (signer, token) => {    
    try {
        console.log("Checking allowance of ", signer, " for token", token);
        const tokenContract = new ethers.Contract(token, ERC20ABI, signer);
        console.log("Got token contract instance", tokenContract);
        const allowance = await tokenContract.allowance(signer.getAddress(), contractAddress);        
        console.log(`Allowance: ${allowance.toString()}`);
        return allowance;        
    } catch (error) {
        console.error('Error checking allowance:', error);
    }
  };

  /**
   * Gets the balance for a given token.
   * @param {Object} signer - The signer to use.
   * @param {string} token - The token address.
   * @returns {Promise<number>} The token balance.
   */
  const _getBalance = async (signer, token) => {    
    try {
        console.log("Checking balance of ", signer, " for token", token);
        const tokenContract = new ethers.Contract(token, ERC20ABI, signer);        
        const balance = await tokenContract.balanceOf(signer.getAddress());        
        console.log(`Balance: ${balance.toString()}`);
        return balance;        
    } catch (error) {
        console.error('Error checking balance:', error);
        throw error;
    }
  };

  /**
   * Approves tokens for a given token and amount.
   * @param {Object} signer - The signer to use.
   * @param {string} token - The token address.
   * @param {number} amount - The amount to approve.
   * @returns {Promise<boolean>} Whether the approval was successful.
   */
  const _approveToken = async (signer, token, amount) => {
      try {    
        const tokenContract = new ethers.Contract(token, ERC20ABI, signer);
        const tx = await tokenContract.approve(contractAddress, amount);  
        await tx.wait();
        console.log('Token approved');      
        return true;
      } catch (error) {
          console.error('Error approving token:', error);
          return false;
      }         
  };

  /**
   * Removes the token allowance.
   * @param {Object} signer - The signer to use.
   * @param {string} token - The token address.
   * @param {string} contractAddress - The contract address.
   * @returns {Promise<boolean>} Whether the allowance removal was successful.
   */
  const _removeAllowance = async (signer, token, contractAddress) => {
      try {
          const tokenContract = new ethers.Contract(token, ERC20ABI, signer);
          const tx = await tokenContract.approve(contractAddress, 0);  
          await tx.wait();
          console.log('Token disapproved', token);
          return true;               
      } catch (error) {
          console.error('Error removing allowance:', error);
          return false;
      }
  };

  /**
   * Parses a plan array into a plan object.
   * @param {Array} planArr - The array containing plan data.
   * @returns {Plan} The parsed plan object.
   */
  const _readPlanFromArray = (planArr) => {
    const billingPlans = [];
    const billingPlansArr = planArr[2];
    for (let i = 0; i < billingPlansArr.length; i++) {
        billingPlans.push(_readBillingPlanFromArray(billingPlansArr[i]));
    }

    const plan = new Plan(
      parseInt(planArr[0]), 
      planArr[1], 
      billingPlans
    );

    return plan;
  };

  /**
   * Parses a billing plan array into a billing plan object.
   * @param {Array} billingPlanArr - The array containing billing plan data.
   * @returns {BillingPlan} The parsed billing plan object.
   */
  const _readBillingPlanFromArray = (billingPlanArr) => {
    const tokenPrices = [];
    const tokenPricessArr = billingPlanArr[4];
    for (let i = 0; i < tokenPricessArr.length; i++) {
        tokenPrices.push(ethers.formatUnits(tokenPricessArr[i], 18));
    }    

    const periodValue = parseInt(billingPlanArr[0]); 
    const period = Object.values(Period).includes(periodValue) ? periodValue : undefined; 
    
    const pricingTypeValue = parseInt(billingPlanArr[2]); 
    const pricingType = Object.values(PricingType).includes(pricingTypeValue) ? pricingTypeValue : undefined;

    const billingPlan = new BillingPlan(
      period, 
      parseInt(billingPlanArr[1]), 
      pricingType, 
      billingPlanArr[3], 
      tokenPrices, 
      ethers.formatUnits(billingPlanArr[5], 18)
    );    

    return billingPlan;
  };

  /**
   * Reads a subscription from an array.
   * @param {Array} subscriptionArr - The subscription array.
   * @returns {Subscription} The subscription object.
   */
  const _readSubscriptionFromArray = (subscriptionArr) => {

    const statusValue = parseInt(subscriptionArr[5]); 
    const status = Object.values(Status).includes(statusValue) ? statusValue : undefined;

    const subscription = new Subscription(
      subscriptionArr[0], 
      parseInt(subscriptionArr[1]), 
      subscriptionArr[2], 
      parseInt(subscriptionArr[3]), 
      parseInt(subscriptionArr[4]), 
      status, 
      parseInt(subscriptionArr[6]), 
      _readBillingPlanFromArray(subscriptionArr[7])
    );

    return subscription;
  }

  return {
    // user functions
    isOwner,
    getPlans,
    getPlan,
    getBillingPlan,            
    subscribe,
    unsubscribe,
    getSubscriptions,
    getUserSubscription,
    getRegisteredTokens,
    isTokenRegistered,
    convertFiatToTokenAmount,

    // owner functions
    createPlan,
    updatePlan,
    deletePlan,        
    addBillingPlan,
    updateBillingPlan,
    removeBillingPlan,
    addTokenPriceFeed,
    updateTokenPriceFeed,    
    deleteTokenPriceFeed,     
  };
};