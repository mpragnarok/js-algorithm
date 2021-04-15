function countingValleys(steps, path) {
  // Write your code here

  // UDDDUDUU --> 1

  // 10 UDUUUDUDDD --> 0
  // 8 UDDDUDUU --> 1

  // initial altitude = 0
  let altitude = 0;
  let countValleys = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      // if altitude was valley
      if (altitude === -1) {
        countValleys++;
      }
      altitude++;
    } else {
      altitude--;
    }
  }
  return countValleys;
}
countingValleys(8, "UDDDUDUU");
