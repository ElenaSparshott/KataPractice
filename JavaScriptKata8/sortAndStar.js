// Sort and Star

function twoSort(s) {
  let firstSort = s.sort()[0]
  let answer = firstSort.split('').join('***')
  return answer
}