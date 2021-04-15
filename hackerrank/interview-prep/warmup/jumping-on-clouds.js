// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  // let cloudsNum = c.split("\n")[0];
  // let clouds = c.split("\n")[1].split(" ");
  let times = 0;

  for (let i = 0; i < c.length; i++) {
    if (c[i + 2] === 0) {
      // next next cloud are 0, jump 2 steps
      i++;
      times++;
    } else if (c[i + 1] === 0) {
      // jump 1 step
      times++;
    }
  }

  return times;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]); // 4
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])); // 3
/**
 * 6
 * 0 0 0 0 1 0
 * ->3
 */
