function maxProfit(input) {
  //initialize profit
  let profit = 0;
  // initialize profit array index format ["pub","theatre","commercial park"]
  let result = new Array(3).fill(0);
  while (input >= 4) {
    //Array index format = ["pub","theatre","Commercial park"]
    let tempStore = [];
    if (input >= 4) {
      let findDiff = input - 4;
      let tempProfit = findDiff * 1000;
      tempStore[0] = tempProfit;
    }
    if (input >= 5) {
      let findDiff = input - 5;
      let tempProfit = findDiff * 1500;
      tempStore[1] = tempProfit;
    }
    if (input >= 10) {
      let findDiff = input - 10;
      let tempProfit = findDiff * 3000;
      tempStore[2] = tempProfit;
    }
    //finding maximum amount
    let findMax = Math.max(...tempStore);
    // finding maximum amount index
    let findStoreIndex = tempStore.indexOf(findMax);
    //finding the next iteration if possible
    if (findStoreIndex == 0) {
      result[0]++;
      input = input - 4;
    }
    if (findStoreIndex == 1) {
      result[1]++;
      input = input - 5;
    }
    if (findStoreIndex == 2) {
      result[2]++;
      input = input - 10;
    }
    profit += parseInt(findMax);
  }

  return [profit, result];
}

function handleSubmit() {
  const inputElem = document.getElementById("input");
  const inputVal = parseInt(inputElem.value);
  if (!inputElem.value) {
    alert("please enter the value in the input box before submitting");
  } else {
    if (inputVal < 4) {
      alert("Minimum input value should be greater than 3");
    } else {
      const prevAns = document.getElementById("answer");
      if (prevAns.hasChildNodes()) {
        prevAns.removeChild(prevAns.children[0]);
      }
      const result = maxProfit(inputVal);
      const ansElem = document.getElementById("answer");
      const divElem = document.createElement("div");
      const timeunit = document.createElement("h3");
      timeunit.innerText = "Time Unit: " + inputVal;
      const profit = document.createElement("h3");
      profit.innerText = `Profit : ${result[0]}`;
      const solution = document.createElement("h3");
      solution.innerText = `Solution => T: ${result[1][1]} P: ${result[1][0]} C: ${result[1][2]}`;
      divElem.append(timeunit, profit, solution);
      ansElem.appendChild(divElem);
      console.log(result);
    }
  }
}
