var alfabets = [
"A", "Ā", "B", "C", "Č", 
"D", "E", "Ē", "F", "G", 
"Ģ", "H", "I", "Ī", "J", 
"K", "Ķ", "L", "Ļ", "M", 
"N", "Ņ", "O", "P", "R", 
"S", "Š", "T", "U", "Ū", 
"V", "Z", "Ž" ]

function bingo_poga(){
    let random_index = Math.floor(Math.random() * (alfabets.length));
    let burts = alfabets[random_index];

    console.log(alfabets);

    if (alfabets.length >=1) {
        document.getElementById("bingo-burts").innerHTML = burts;
        alfabets.splice(random_index, 1);
    }
    else{
        document.getElementById("bingo-burts").classList.remove("bingo-burts")
        document.getElementById("bingo-burts").classList.add("atjauno-lapu")
        document.getElementById("bingo-burts").innerHTML = "Atjauno lapu un sāc no sākuma";
    }
    
    
    console.log(alfabets);
}

