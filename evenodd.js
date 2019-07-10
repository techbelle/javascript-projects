//Even and Odd Numbers
//Show all the numbers up to a defined limit, and whether they are even or odd


showNumbers(10);
function showNumbers (limit){
    for (let i = 0; i <= limit; i++){
        if (i % 2 === 0)
console.log (i, 'EVEN');
    else console.log (i, 'ODD');
        }

}