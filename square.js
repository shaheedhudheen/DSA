function square(n) {
  n = Math.abs(n);
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += n;
  }

  return result;
}

console.log(square(8));
