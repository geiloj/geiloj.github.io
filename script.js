let cm = document.getElementById("cm");
let kg = document.getElementById("kg");
let alter = document.getElementById("alter");
let bild = document.createElement("img");
bild.id = "bild";
kg.addEventListener("keyup", function(e) {
    if(e.key === "Enter") {
        foo()
    }
})

alter.addEventListener("keyup", function(e) {
    if(e.key === "Enter") {
        foo()
    }
})



function foo() {
    let bmi = ((10000*kg.value)/(cm.value*cm.value)).toFixed(2)
    document.getElementById("out").innerHTML = bmi;
    bild.src = "normal.jpg";
    if (bmi<18.5 || bmi>29.9) {
        bild.src = "schlecht.jpg";
    }else{
        if(bmi<25) {
            bild.src = "gut.jpg";
        }
    }
    document.body.appendChild(bild);

}
function foo2() {
    document.getElementById("cm").value = "";
    document.getElementById("kg").value = "";
    document.getElementById("alter").value = "";
}