/**
 * Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

 */


const calculateElectronicsBudget = function(laptops, tablets, mobiles) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalCost = (laptops * laptopPrice) + (tablets * tabletPrice) + (mobiles * mobilePrice);
    return totalCost;
};

const totalBudget = calculateElectronicsBudget(2, 1, 3);
console.log('Total electronics budget:', totalBudget); 
