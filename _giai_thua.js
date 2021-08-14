function giaiThua(n) {
  if (n == 0) return 1;
  let t = n * giaiThua(n -1);
  return t;
}

giaiThua(3);