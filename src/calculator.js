/**
 * Adds two numbers together.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * Adds two numbers together.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} a - b
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Adds two numbers together.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} a * b
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Adds two numbers together.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} a / b
 * @throws Argument b must be non-zero.
 */
function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

/**
 * 
 * @param {number} value1 - The first number
 * @param {number} value2 - The second number
 * @param {"add" | "multiply"} operationType - The operation type
 * @param {boolean} hasDiscount - To apply a discount or not
 * @returns {number} The calculated value
 */
function calculateWithDiscount(value1, value2, operationType, hasDiscount) {
    let result;

    if (operationType === "add") {
        result = add(value1, value2);
    } else if (operationType === "multiply") {
        result = multiply(value1, value2);
    } else {
        throw new Error("Unknown operation type");
    }

    if (hasDiscount) {
        result = result > 100 ? result * 0.9 : result * 0.95;
    }

    return result;
}

module.exports = { add, subtract, multiply, divide, calculateWithDiscount };