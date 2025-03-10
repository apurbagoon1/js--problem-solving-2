/**
 * Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
 */

        
const calculateTotalMonthlySalary = function(employees) {
    let totalSalary = 0;

    for (const employee of employees) {
        const currentSalary = employee.starting + (employee.experience * employee.increment);
        totalSalary += currentSalary;
    }

    return totalSalary;
};

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const totalMonthlySalary = calculateTotalMonthlySalary(employees);
console.log('Total monthly salary:', totalMonthlySalary); 
        

