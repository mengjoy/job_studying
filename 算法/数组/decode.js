/**
 * '3[a]2[bc]'=> aaabcbc
 * '3[a2[bc]'=>abcbcabcbcabcbc
 * 解码字符串
 */

function decode(st) {
  let stack = [];
  let times = '';

  for (let i = 0; i < st.length; i++) {
    let item = s[i];
    if (typeof item == 'number') {
      if (i === 0 || typeof s[i - 1] == 'number') {
        items += item;
      } else {
        times = item;
      }
    } else if (item == '[') {
      times && stack(Number(items));
      times = '';
    } else if (item == ']') {
      let cur = stack.pop();
      let tmp = '';
      while (typeof cur !== 'number') {
        tmp = cur + tmp;
        cur = stack.pop();
      }
      tmp = tmp.repeat(cur);
      stack.push(tmp);
    } else {
      stack.push(item);
    }
  }
  return stack.join('');
}