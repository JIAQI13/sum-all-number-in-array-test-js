function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach(item=>{
    Array.isArray(item) ? sum += sumItems(item) : sum+=item;
  })
  return sum;
}

module.exports = sumItems;