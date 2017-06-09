// console.log(process.argv);
var array = (process.argv[2]).replace("[","").replace("]","").split(',');
// console.log(array);
// console.log(typeof(array));
// console.log(array.length);

function findConsecutiveRuns() {
  var newArray = [];
  var run2 = [];
  var run3 = [];

  for(var i = 0; i < array.length; i++) {
    run2 = array[i] - array[i + 1];
    run3 = array[i + 1] - array[i + 2];
    if((run2 === 1 || run2 === -1) && (run2 === run3)) {
        newArray.push(i);
      }
  }

  if(newArray.length > 0) {
    console.log(newArray);
  } else {
    console.log('No Runs Found');
  }
}

findConsecutiveRuns();
