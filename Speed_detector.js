const speed = 60; 
const speedLimit = 70;
const kmPerPoint = 5;

if (speed <= speedLimit) {
  console.log("OK");
} else {
  const  difference = speed - speedLimit;
  const points = difference > 0 ? Math.floor(difference / kmPerPoint) : 0;
  console.log(`Points: ${points}`);

  if (points > 12) {
    console.log("License suspended");
  }
}