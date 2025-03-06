/**
 * Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

 */


const findLowestNumber = function(numbers) {
    return Math.min(...numbers);
};

const heights = [167, 190, 120, 165, 137];
const lowestHeight = findLowestNumber(heights);
console.log('Lowest number in the array:', lowestHeight); 
