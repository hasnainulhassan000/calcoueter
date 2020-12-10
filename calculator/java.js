function setvalue (e){
    var number = document.getElementById("inpu")
    number.value += e
}
function foo() {
    var a = document.getElementById("inpu")
    a.value=""
}
function eq() {
    var a = document.getElementById("inpu")
    a.value=eval(a.value)
}