



//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.
const primeNum = Number(prompt("Enter a number"))
""
//? Flag method
let isPrime = true
if (primeNum < 2) {
  console.log("Number should be bigger than 1 ")
} else {
  for (let i = 2; i < primeNum; i++) {
    if (primeNum % i === 0) {
      //? Tam bolunuyorsa asal degildir
      console.log(`${primeNum} is not a prime number-${i}`)
      isPrime = false
      break
    }
  }
  if (isPrime === true) {
    console.log(`${primeNum} is a prime number`)
  }
}