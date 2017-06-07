function findConesecutiveRuns(array) {
  // console.log([1, 2, 3, 5, 10, 9, 8, 9, 10, 11, 7, 8, 7]);

  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    if((array[i] - arrary[i-1] === 1) || (array[i] - arrary[i-1] === -1)) {
      newArray.push(TRUE);
    } else {
      newArray.push(FALSE);
    }
  }
  console.log(newArray);
}

findConesecutiveRuns();
