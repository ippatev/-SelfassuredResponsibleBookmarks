function mathRandom() {
  const arr = new Array(10000);
  const length = arr.length;
  const resultArr = [];

  for (let i = 0; i < length; i++) {
    resultArr.push(Math.random() > 0.5)
  }

  return resultArr;
}

const result = mathRandom()

const trueful = result.filter(x => {
  return x
});

const falseful = result.filter(x => {
  return !x
})

console.log(falseful.length > trueful.length)