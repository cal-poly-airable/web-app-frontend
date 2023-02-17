



//2 functions, one holds all the data and calls the other function to calc averages



let data = [
    { time: 1676148444631, HR: 114, O2: 67 },
    { time: 1676148444634, HR: 110, O2: 65 },
    { time: 1676148444639, HR: 118, O2: 68 },
    // more data points ...
  ];
  
  let sumHR = 0;
  let sumO2 = 0;
  let totalTimeDiff = 0;
  
  for (let i = 0; i < data.length - 1; i++) {
    let timeDiff = data[i+1].time - data[i].time;
    sumHR += data[i].HR * timeDiff;
    sumO2 += data[i].O2 * timeDiff;
    totalTimeDiff += timeDiff;
  }
  
  let avgHR = sumHR / totalTimeDiff;
  let avgO2 = sumO2 / totalTimeDiff;
  
  console.log("Weighted average HR:", avgHR);
  console.log("Weighted average O2:", avgO2);