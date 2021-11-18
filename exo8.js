let copyNumber = 1
function fieldClone() {
let copy = original.cloneNode(true)
copy.id = "copy" + ++copyNumber 
//copyNumber++
form.appendChild(copy)
}