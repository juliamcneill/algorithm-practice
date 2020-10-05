// You have k servers numbered from 0 to k-1 that are being used to handle multiple requests simultaneously. Each server has infinite computational capacity but cannot handle more than one request at a time. The requests are assigned to servers according to a specific algorithm:

// The ith (0-indexed) request arrives.
// If all servers are busy, the request is dropped (not handled at all).
// If the (i % k)th server is available, assign the request to that server.
// Otherwise, assign the request to the next available server (wrapping around the list of servers and starting from 0 if necessary). For example, if the ith server is busy, try to assign the request to the (i+1)th server, then the (i+2)th server, and so on.
// You are given a strictly increasing array arrival of positive integers, where arrival[i] represents the arrival time of the ith request, and another array load, where load[i] represents the load of the ith request (the time it takes to complete). Your goal is to find the busiest server(s). A server is considered busiest if it handled the most number of requests successfully among all the servers.

// Return a list containing the IDs (0-indexed) of the busiest server(s). You may return the IDs in any order.

var busiestServers = function (k, arrival, load) {
  var result = [];
  var requestCounts = [];
  var servers = [];
  var spot;
  var dropped;
  var substracted;

  var servers = Array(k).fill(0);
  var requestCounts = Array(k).fill(0);

  for (let i = 0; i < arrival.length; i++) {
    for (let j = 0; j < servers.length; j++) {
      if (servers[j] !== 0) {
        subtracted =
          servers[j] - (arrival[i] - arrival[i - 1]) >= 0
            ? servers[j] - (arrival[i] - arrival[i - 1])
            : 0;
        servers[j] = subtracted;
      }
    }

    dropped = false;

    if (servers[i % k] === 0) {
      servers[i % k] = load[i];
      requestCounts[i % k]++;
      dropped = true;
    }

    if (dropped === false) {
      for (let l = (i % k) + 1; l < k; l++) {
        if (servers[l] === 0) {
          servers[l] = load[i];
          requestCounts[l]++;
          dropped = true;
          break;
        }
      }
    }

    if (dropped === false) {
      for (let l = 0; l < i % k; l++) {
        if (servers[l] === 0) {
          servers[l] = load[i];
          requestCounts[l]++;
          dropped = true;
          break;
        }
      }
    }
  }

  for (let i = 0; i < requestCounts.length; i++) {
    if (requestCounts[i] === Math.max(...requestCounts)) {
      result.push(i);
    }
  }

  return result;
};
