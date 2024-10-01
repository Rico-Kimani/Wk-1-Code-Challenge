const basicSalary = 50000;  
const benefits = 5000;     

// Tax Rates
const taxRate = 0.1;  
const nhifDeduction = 500;  
const nssfDeduction = 200; 

// Gross Salary Calculations
const grossSalary = basicSalary + benefits;

// Deductions 
const payee = grossSalary * taxRate;  
const totalDeductions = payee + nhifDeduction + nssfDeduction;

//  Net Salary
const netSalary = grossSalary - totalDeductions;

console.log(`Gross Salary: ${grossSalary}`);
console.log(`PAYE (Tax): ${payee}`);
console.log(`NHIF Deduction: ${nhifDeduction}`);
console.log(`NSSF Deduction: ${nssfDeduction}`);
console.log(`Total Deductions: ${totalDeductions}`);
console.log(`Net Salary: ${netSalary}`);