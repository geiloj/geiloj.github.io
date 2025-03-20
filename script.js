let cm = document.getElementById("cm");
let kg = document.getElementById("kg");
let alter = document.getElementById("alter");
let bild = document.createElement("img");
let arr = ["Untergewicht", "Normalgewicht", "Übergewicht", "Adipositas Grad I", "Adipositas Grad II"];
let i;

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
    let bmi = ((10000*kg.value)/(cm.value*cm.value)).toFixed(2);
    if(isNaN(bmi)) {
        foo2();
        return;
    }

    bild.src = "normal.jpg";
    if (bmi < 18.5){i = 0;}
    if (bmi > 18.5){i = 1;}
    if (bmi > 24.9){i = 2;}
    if (bmi > 29.9){i = 3;}
    if (bmi > 34.9){i = 4;}
    if (bmi<18.5 || bmi>29.9) {
        bild.src = "schlecht.jpg";
    }else{
        if(bmi<25) {
            bild.src = "gut.jpg";
        }
    }

    document.getElementById("out").innerHTML = bmi+" ("+arr[i]+")";
    document.getElementById("out").appendChild(bild);

}
function foo2() {
    document.getElementById("cm").value = "";
    document.getElementById("kg").value = "";
    document.getElementById("alter").value = "";
    document.getElementById("out").firstChild.remove();
    document.getElementById("out").removeChild(bild);
}
