// @ts-check
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
    return ratePerHour * 8;
  }
  /**
   * Calculates the rate per month
   *
   * @param {number} ratePerHour
   * @param {number} discount for example 20% written as 0.2
   * @returns {number} the rounded up monthly rate
   */
  export function monthRate(ratePerHour, discount) {
    let discountedRate = ratePerHour - (ratePerHour * discount);
    let monthlyFee = (discountedRate * 22) * 8;
    
     return Math.ceil(monthlyFee);
  }
  /**
   * Calculates the number of days in a budget, rounded down
   *
   * @param {number} budget the total budget
   * @param {number} ratePerHour the rate per hour
   * @param {number} discount to apply, example 20% written as 0.2
   * @returns {number} the number of days
   */
  export function daysInBudget(budget, ratePerHour, discount) {
     let discountedRate = ratePerHour - (ratePerHour * discount);
     return Math.floor(budget / (discountedRate * 8));   
  }
  /**
   * Applies a discount to the value
   *
   * @param {number} value
   * @param {number} percentage for example 20% written as 0.2
   * @returns {number} the discounted value
   */
  function applyDiscount(value, percentage) {
    throw new Error('Implement the applyDiscount function');
  }
  