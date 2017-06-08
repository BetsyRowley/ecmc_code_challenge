var array = Array.from(process.argv[2]);
console.log(array);
console.log(typeof(array));
console.log(array.length);

function findConesecutiveRuns() {

  var newArray = [];
  console.log(newArray);
  for(var i = 0; i < array.length; i++) {
    if((array[i] - array[i-1] === 1) || (array[i] - array[i-1] === -1)) {
      newArray.push(0);
    } else {
      newArray.push(1);
    }
  }
  console.log(newArray);
}

findConesecutiveRuns();
