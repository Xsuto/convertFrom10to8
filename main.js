const convertNumber = number =>{
  let newNumber = ''
  while(number > 0){
    number = number / 8
    newNumber += (number - Math.floor(Math.abs(number)))*8
    number = Math.floor(number)
  }
  newNumber = newNumber.split('').reverse().join('')
  console.log(newNumber)
}
convertNumber(2020)
