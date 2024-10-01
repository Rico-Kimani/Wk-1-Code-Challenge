const score = 40;  

if (score >= 0 && score <= 100) {
  let grade;

  if (score > 79) {
    grade = 'A';
  } else if (score >= 60) {
    grade = 'B';
  } else if (score >= 50) {
    grade = 'C';
  } else if (score >= 40) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  console.log(`The grade for ${score} is: ${grade}`);
} else {
  console.log("Error: Please enter a mark between 0 and 100.");
}
