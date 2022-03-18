/* ------------------  RĒĶINS  ------------------ */

function rekins(){
    /* REĶINA NR */
    let datums = new Date().getDate().toString();
    let menesis = new Date().getMonth().toString();
    menesis++;
    let gads = new Date().getFullYear().toString();
    let h = new Date().getHours().toString();
    let min = new Date().getMinutes().toString();
    let nummurs = datums+menesis+"-"+h+min+"-"+gads.toString();

    let pasutijuma_forma = document.getElementById("pasutijuma-forma");

    /* IEVIETOT RĒĶINA NR */
    let input_rekina_nr = document.createElement("input");
    pasutijuma_forma.appendChild(input_rekina_nr);
    input_rekina_nr.setAttribute("type", "text");
    input_rekina_nr.setAttribute("id", "rekina-nr");
    input_rekina_nr.setAttribute("name", "Rēķina_nummurs");
    input_rekina_nr.setAttribute("value", nummurs);
    input_rekina_nr.classList.add("balts_input");

    /* IEVIETOT REKVIZĪTUS */
    let input_rekviziti = document.createElement("input");
    pasutijuma_forma.appendChild(input_rekviziti);
    input_rekviziti.setAttribute("type", "text");
    input_rekviziti.setAttribute("id", "rekviziti");
    input_rekviziti.setAttribute("name", "Rekvizīti");
    input_rekviziti.setAttribute("value", "SIA Bbasic, Reģ.nr.LV41203059216, LV94HABA0551042672408, Maksājuma mērķis: rēķina nummurs un Jūsu e-pasts");
    input_rekviziti.classList.add("balts_input");

    /* SUMMA EUR */
    summa_eur();

    /* CC E-PASTS */
    let input_cc = document.createElement("input");
    let e_pasts_cc = document.getElementById("epasta_lauks").value;
    pasutijuma_forma.appendChild(input_cc);
    input_cc.setAttribute("type", "hidden");
    input_cc.setAttribute("name", "_cc");
    input_cc.setAttribute("value", e_pasts_cc);
    
}


function summa_eur(){
    /* VIKTORĪNA "DABAS DRAUGS" */
    let viktorina_1 = document.getElementById("viktorina_1");
    let v1 = Number(viktorina_1.value);
    if (viktorina_1.checked == false){
        v1 = 0;
    }else{
        v1 = Number(viktorina_1.value);
    }
    /* VIKTORĪNA "EIROPA PIE MANĀM KĀJĀM" */
    let viktorina_2 = document.getElementById("viktorina_2");
    let v2 = Number(viktorina_2.value);
    if (viktorina_2.checked == false){
        v2 =0;
    }else{
        v2 = Number(viktorina_2.value);
    }

    let summa = v1 + v2; 

    let rekina_summa = document.getElementById("tiesibas");
    rekina_summa.setAttribute("value", summa);

    console.log(summa);
    console.log(rekina_summa);
}
