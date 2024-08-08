





let a = (Math.floor(Math.random() * 100))


alert('Sizda chiqgan random son: ' + a)



if (a % 3 == 0 && a % 5 == 0) {
    alert('fizz buzz')
} else if (a % 3 == 0) {
    alert(a + ' bu fizz son')
} else if (a % 5 == 0) {
    alert(a + ' bu buzz son')
} else {
    alert(' sonni fizz ham buzz ham emas')
}