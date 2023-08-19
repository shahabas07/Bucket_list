var addbtn = document.querySelector("#b");
var inp = document.querySelector("#learn");
var box = document.querySelector(".listbox");
var res = document.querySelector(".reset");
var arr = [];

function remove(i) {
    arr.splice(i, 1);
    console.log(arr)
    display()
}

function display() {
    box.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        console.log(i)
        box.innerHTML += `<div class = "item">${arr[i]}<span class="tick"><img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png"  alt="" onclick="remove(${i})"></span> </div><br/>`
    }
}
function addtoarray() {
    arr.push(inp.value)
    display()

}
addbtn.onclick = function name() {
    console.log(inp.value);
    addtoarray()
}
console.log(res)
res.onclick = function reset() {
    arr = []
    display()
}