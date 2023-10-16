//Task 2 və 3
const arr = [2, 4, 1, 3, 7] //Data

function calcData(transaction, ...data) {
  if (data.length === 0) {
    return 'Məlumat tapılmadı'
  }
  const filteredData = transaction(...data)
  const result = filteredData.reduce((acc, current) => acc + current, 0)
  return result
}

//Сüt ədədlər
function filterEvenNumbersFromData(...numbers) {
  return numbers.filter(num => num % 2 === 0)
}

//Tək ədədlər
function filterOddNumbersFromData(...numbers) {
  return numbers.filter(num => num % 2 !== 0)
}

console.log(calcData(filterEvenNumbersFromData, ...arr))
console.log(calcData(filterOddNumbersFromData, ...arr))
