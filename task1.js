//Task 1
const arr = [13, 24, 33, 16, 54, 37] //Data

function calcAverageData(transaction, ...data) {
  if (data.length === 0) {
    return 'Məlumat tapılmadı'
  }
  const result = data.reduce((acc, current) => acc + current, 0) / data.length
  return transaction(result)
}

function calcFloor(num) {
  return Math.floor(num)
}

console.log('Gələn Datanın ortalaması:', calcAverageData(calcFloor, ...arr))
