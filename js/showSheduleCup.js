import { domElems } from "./domElems";
import { globalVariables } from "./globalVariables";

export function showSheduleCup(sheduleRound1) {
    let repsR1 = sheduleRound1.length;
    // let repsR2 = Math.ceil(repsR1/2);
    let roundCounter = 1;
    let idLeft = ""; 
    let idRight = "";
    let pairOnScreen = "";
    
    //Round 1
    domElems.sheduleOnScreenA.append(`<ul class="result__listItem--roundHeader">Round nr ${roundCounter}</ul>`); 
    
    for (let i = 0; i < repsR1; i++) {
        idLeft = globalVariables.idCharArr[i] + "1";
        idRight = globalVariables.idCharArr[i] + "2";
        pairOnScreen = sheduleRound1[i].join(` ${idLeft}` + " ___ - ___ " + `${idRight}`);   
        
        domElems.sheduleOnScreenA.append(`<li class="result__listItem">${pairOnScreen}</li>`);
    }
    roundCounter++;
    //Round 2
    domElems.sheduleOnScreenA.append(`<ul class="result__listItem--roundHeader">Round nr ${roundCounter}</ul>`);
    
    //  for (let k = 0; k < repsR2; k++) {
    //     pairOnScreen = sheduleRound2[k].join(" ___ - ___ ");   
    //     domElems.sheduleOnScreenA.append(`<li class="result__listItem">${pairOnScreen}</li>`);
         
    //  }

}