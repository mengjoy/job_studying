/**
 * 报数算法
 */
function isK(n) {
  if (n % 7 == 0) {
    return true;
  } else {
    while (n != 0) {
      let num = n % 10;
      if (num == 7) {
        return true;
      }
      n = n / 10;
    }
    return false;
  }
}

function main(arr) {
  let player = arr[0][0];//多少个人参加
  let num = arr[0][1];//m编号
  if (num > player) {
    throw 'num>player'
  }
  let time = arr[0][2];//第k次拍手
  let index = 0;

  while (player != 0 && num != 0 && time != 0) {
    var callnum = 0;
    var up = true;
    console.log('up:', up);
    for (var i = 1; ; i++) {
      if (up) {
        callnum++;
      } else {
        callnum--;
      }
      console.log('callnum;', up, callnum)

      if (callnum == player) {
        up = false;
      } else if (callnum == 1) {
        up = true;
      }

      if (callnum = num && isK(i)) {
        time--;
        // console.log(time == 0, i)
        if (time == 0) {
          // console.log(i);
          index++;
          player = arr[index][0];
          num = arr[index][1];
          if (num > player) {
            throw 'error'
          }

          time = arr[index][2];
          console.log(index)
          break;
        }
      }
    }
  }
}

let arr = [[4, 3, 1], [4, 3, 2], [4, 3, 3], [4, 3, 4], [0, 0, 0]];

main(arr);