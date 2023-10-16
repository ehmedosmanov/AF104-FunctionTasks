//Task 4
const arr = [6, 8, 4, 2, 3] //Data

function calcData(even, odd, ...data) {
  if (data.length === 0) {
    return 'Məlumat tapılmadı'
  }
  const filteredEvenData = even(...data)
  const filteredOddData = odd(...data)

  const sumEvenData = filteredEvenData.reduce(
    (acc, current) => acc + current,
    0
  )
  const sumOddData = filteredOddData.reduce((acc, current) => acc + current, 0)
  return sumEvenData * sumOddData //Kod oxunaqlıqı pisdi məncə callback istifade eləməy üçün bu metodla yazdım bele alındı
}

function filterEvenNumbersFromData(...numbers) {
  return numbers.filter(num => num % 2 === 0)
}

function filterOddNumbersFromData(...numbers) {
  return numbers.filter(num => num % 2 !== 0)
}

const result = calcData(
  filterEvenNumbersFromData,
  filterOddNumbersFromData,
  ...arr
)

console.log(
  `Data-dan gələn tək və cüt ədədlərinin cəminin bir birinə hasili: ${result}`
)
