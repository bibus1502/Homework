//1

function printAll(arr, ...arrays) {
    return arr.(...arrays)

}
printAll(1, 2, 3)

//2

function concatAll(arr, ...arrays) {
    return arr.concat(...arrays)
   }
   console.log(concatAll())

   