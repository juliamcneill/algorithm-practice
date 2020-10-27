// You are given an array of network towers towers and an integer radius, where towers[i] = [xi, yi, qi] denotes the ith network tower with location (xi, yi) and quality factor qi. All the coordinates are integral coordinates on the X-Y plane, and the distance between two coordinates is the Euclidean distance.

// The integer radius denotes the maximum distance in which the tower is reachable. The tower is reachable if the distance is less than or equal to radius. Outside that distance, the signal becomes garbled, and the tower is not reachable.

// The signal quality of the ith tower at a coordinate (x, y) is calculated with the formula ⌊qi / (1 + d)⌋, where d is the distance between the tower and the coordinate. The network quality at a coordinate is the sum of the signal qualities from all the reachable towers.

// Return the integral coordinate where the network quality is maximum. If there are multiple coordinates with the same network quality, return the lexicographically minimum coordinate.

var bestCoordinate = function (towers, radius) {
  var gridLimit = 0;

  for (let i = 0; i < towers.length; i++) {
    for (let j = 0; j < towers[i].length; j++) {
      if (towers[i][j] > gridLimit) {
        gridLimit = towers[i][j];
      }
    }
  }

  var temp;
  var max = 0;
  var result = [];

  for (let i = 0; i <= gridLimit; i++) {
    for (let j = 0; j <= gridLimit; j++) {
      temp = 0;
      for (let k = 0; k < towers.length; k++) {
        if (
          ((i - towers[k][0]) ** 2 + (j - towers[k][1]) ** 2) ** (1 / 2) <=
          radius
        ) {
          temp += Math.floor(
            towers[k][2] /
              (1 +
                ((i - towers[k][0]) ** 2 + (j - towers[k][1]) ** 2) ** (1 / 2))
          );
        }
      }

      if (temp > max) {
        console.log([i, j]);
        result = [i, j];
        max = temp;
      }
    }
  }

  return result;
};
