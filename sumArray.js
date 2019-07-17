function sum(arr) {
  return new Promise((resolve, reject) => {
    const ans = arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    resolve(ans);
  });
}
  
module.exports = sum;