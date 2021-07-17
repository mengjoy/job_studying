let arr = '00100,11100,11001,11111';

function fuNum(line) {
  let lines = line.split(',');
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr[i] = 0;
    for (let j = 0; j < lines.length; j++) {
      arr[i] += parseInt(lines[j][i]);

    }
  }
  let min = arr[0];
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

  }
  console.log(min);
}

fuNum(arr);
