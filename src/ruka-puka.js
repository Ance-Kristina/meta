var pieejas_kodu_saraksts = ["ZIEMA", "ANCE", "DRAUGS"]

function ieeja(){
    const sms_kods = document.getElementById("biletes_kods").value;

    const kods = sms_kods.toUpperCase();
    const ieeja = document.getElementById("modal-ieeja-div");
    if (pieejas_kodu_saraksts.includes(kods)){
        ieeja.classList.add("neredzams");
    } else{
        const nepareizs_kods = document.getElementById("nepareizs-kods");
        nepareizs_kods.classList.remove("neredzams");
    }
}

/* ----------------------------------------------------------  SĀKUMS --------*/
function nr1(){
    const sakums = document.getElementById("modal-nr1-div");
    sakums.classList.remove("neredzams");
}

function aizvert_krusts_sakums(){
    const nr1 = document.getElementById("modal-nr1-div");
    nr1.classList.add("neredzams");
}

function baravika(){
    const baravika = document.getElementById("baravika");
    baravika.classList.remove("neredzams");
}

function gailene(){
    const gailene = document.getElementById("gailene");
    gailene.classList.remove("neredzams");
}

function mushmire(){
    const mushmire = document.getElementById("mushmire");
    mushmire.classList.remove("neredzams");
}

/* ---------------------------------------------------------------  2 --------*/
function nr2(){
    const nr2 = document.getElementById("modal-2-div");
    nr2.classList.remove("neredzams");
}

function aizvert_krusts_2(){
    const aizvert_2 = document.getElementById("modal-2-div");
    aizvert_2.classList.add("neredzams");
}

function pogs_2(){
    const poga_2 = document.getElementById("modal-2-div");
    poga_2.classList.add("neredzams");
    const atvert_2_2 = document.getElementById("modal-2-2-div");
    atvert_2_2.classList.remove("neredzams");
}

function aizvert_krusts_2_2(){
    const aizvert_2_2 = document.getElementById("modal-2-2-div");
    aizvert_2_2.classList.add("neredzams");
}


/* ---------------------------------------------------------------  3 --------*/
function nr3(){
    const nr3 = document.getElementById("modal-3-div");
    nr3.classList.remove("neredzams");
}

function aizvert_krusts_3(){
    const aizvert_3 = document.getElementById("modal-3-div");
    aizvert_3.classList.add("neredzams");
}

/* ---------------------------------------------------------------  4 --------*/
function nr4(){
    const nr4 = document.getElementById("modal-4-div");
    nr4.classList.remove("neredzams");
}

function aizvert_krusts_4(){
    const aizvert_4 = document.getElementById("modal-4-div");
    aizvert_4.classList.add("neredzams");
}

function pogs_4(){
    const atbilde_4 = document.getElementById("atbilde-4");
    atbilde_4.classList.remove("neredzams");
}

/* ---------------------------------------------------------------  5 --------*/
function nr5(){
    const nr5 = document.getElementById("modal-5-div");
    nr5.classList.remove("neredzams");
}

function aizvert_krusts_5(){
    const aizvert_5 = document.getElementById("modal-5-div");
    aizvert_5.classList.add("neredzams");
}

function pogs_5(){
    const atbilde_5 = document.getElementById("atbilde-5");
    atbilde_5.classList.remove("neredzams");
}

/* ---------------------------------------------------------------  6 --------*/
function nr6(){
    const nr6 = document.getElementById("modal-6-div");
    nr6.classList.remove("neredzams");
}

function aizvert_krusts_6(){
    const aizvert_6 = document.getElementById("modal-6-div");
    aizvert_6.classList.add("neredzams");
}

/* ---------------------------------------------------------------  7 --------*/
function nr7(){
    const nr7 = document.getElementById("modal-7-div");
    nr7.classList.remove("neredzams");
}

function aizvert_krusts_7(){
    const aizvert_7 = document.getElementById("modal-7-div");
    aizvert_7.classList.add("neredzams");
}

/* ---------------------------------------------------------------  8 --------*/
function nr8(){
    const nr8 = document.getElementById("modal-8-div");
    nr8.classList.remove("neredzams");
}

function aizvert_krusts_8(){
    const aizvert_8 = document.getElementById("modal-8-div");
    aizvert_8.classList.add("neredzams");
}

/* ---------------------------------------------------------------  9 --------*/
function nr9(){
    const nr9 = document.getElementById("modal-9-div");
    nr9.classList.remove("neredzams");
}

function aizvert_krusts_9(){
    const aizvert_9 = document.getElementById("modal-9-div");
    aizvert_9.classList.add("neredzams");
}

/* ---------------------------------------------------------------  10 --------*/
function nr10(){
    const nr10 = document.getElementById("modal-10-div");
    nr10.classList.remove("neredzams");
}

function aizvert_krusts_10(){
    const aizvert_10 = document.getElementById("modal-10-div");
    aizvert_10.classList.add("neredzams");
}

/* ---------------------------------------------------------------  11 --------*/
function nr11(){
    const nr11 = document.getElementById("modal-11-div");
    nr11.classList.remove("neredzams");
}

function aizvert_krusts_11(){
    const aizvert_11 = document.getElementById("modal-11-div");
    aizvert_11.classList.add("neredzams");
}

/* ---------------------------------------------------------------  12 --------*/
function nr12(){
    const nr12 = document.getElementById("modal-12-div");
    nr12.classList.remove("neredzams");
}

function aizvert_krusts_12(){
    const aizvert_12 = document.getElementById("modal-12-div");
    aizvert_12.classList.add("neredzams");
}

/* ---------------------------------------------------------------  13 --------*/
function nr13(){
    const nr13_1 = document.getElementById("modal-13-1-div");
    nr13_1.classList.remove("neredzams");
}

function aizvert_krusts_13_1(){
    const aizvert_13_1 = document.getElementById("modal-13-1-div");
    aizvert_13_1.classList.add("neredzams");
}

function pogs_13(){
    const poga_13 = document.getElementById("modal-13-1-div");
    poga_13.classList.add("neredzams");
    const atvert_13_2 = document.getElementById("modal-13-2-div");
    atvert_13_2.classList.remove("neredzams");
}

function aizvert_krusts_13_2(){
    const aizvert_13_2 = document.getElementById("modal-13-2-div");
    aizvert_13_2.classList.add("neredzams");
}

function pogs_13_2(){
    const poga_13_2 = document.getElementById("modal-13-2-div");
    poga_13_2.classList.add("neredzams");
    const atvert_13_3 = document.getElementById("modal-13-3-div");
    atvert_13_3.classList.remove("neredzams");
}

function aizvert_krusts_13_3(){
    const aizvert_13_3 = document.getElementById("modal-13-3-div");
    aizvert_13_3.classList.add("neredzams");
}

/* ---------------------------------------------------------------  14 --------*/
function nr14(){
    const nr14 = document.getElementById("modal-14-div");
    nr14.classList.remove("neredzams");
}

function aizvert_krusts_14(){
    const aizvert_14 = document.getElementById("modal-14-div");
    aizvert_14.classList.add("neredzams");
}