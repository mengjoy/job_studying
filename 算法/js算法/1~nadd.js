function Sum_Solution(n) {
  let res = n;
  (n > 0) && (res += Sum_Solution(n - 1));
  return res;
}

function Sum_Solution2(n) {
  return (1 + n) * n / 2;
}