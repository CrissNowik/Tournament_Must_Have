import { domElems } from "./domElems";
import { globalVariables } from "./globalVariables";

export function showSheduleCup(readyShedule) {
    let repsR1 = readyShedule.length;
    let repsR2 = Math.ceil(repsR1/2);
    let roundCounter = 1;
    //Round 1
    domElems.sheduleOnScreenA.append(`<ul class="result__listItem--roundHeader">Round nr ${roundCounter}</ul>`); 
    for (let i = 0; i < repsR1; i++) {
        let idLeft = ""; 
        idLeft = globalVariables.idCharArr[i] + "1";
        let idRight = "";
        idRight = globalVariables.idCharArr[i] + "2";
        let pairOnScreen = readyShedule[i].join(` ${idLeft}` + " ___ - ___ " + `${idRight}`);   
        
        domElems.sheduleOnScreenA.append(`<li class="result__listItem">${pairOnScreen}</li>`);
    }
    roundCounter++;
    //Round 2
    domElems.sheduleOnScreenA.append(`<ul class="result__listItem--roundHeader">Round nr ${roundCounter}</ul>`);
    for (let j = 0; j < repsR2; j++) {
      
      //TO DO: parowanie w kolejnych rundach 
    }
}