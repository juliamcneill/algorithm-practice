// Leetcode company workers use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker's name and the time when it was used. The system emits an alert if any worker uses the key-card three or more times in a one-hour period.

// You are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds to a person's name and the time when their key-card was used in a single day.

// Access times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49".

// Return a list of unique worker names who received an alert for frequent keycard use. Sort the names in ascending order alphabetically.

// Notice that "10:00" - "11:00" is considered to be within a one-hour period, while "23:51" - "00:10" is not considered to be within a one-hour period.

var alertNames = function (keyName, keyTime) {
  var alerted = [];
  var tracker = {};
  var match;

  for (let i = 0; i < keyName.length; i++) {
    if (tracker[keyName[i]] === undefined) {
      tracker[keyName[i]] = [keyTime[i]];
    } else {
      tracker[keyName[i]].push(keyTime[i]);
    }
  }

  for (var key in tracker) {
    tracker[key] = tracker[key].sort();
  }

  for (var key in tracker) {
    for (let i = 0; i < tracker[key].length; i++) {
      match = 0;
      for (let j = i; j < tracker[key].length; j++) {
        if (
          tracker[key][j].substring(0, 2) === tracker[key][i].substring(0, 2) ||
          (tracker[key][j].substring(0, 2) - tracker[key][i].substring(0, 2) ===
            1 &&
            tracker[key][j].substring(3) <= tracker[key][i].substring(3))
        ) {
          match++;
          if (match === 3) {
            if (alerted.includes(key) === false) {
              alerted.push(key);
            }
          }
        }
      }
    }
  }

  return alerted.sort();
};
