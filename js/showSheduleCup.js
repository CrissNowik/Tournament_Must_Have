import { domElems } from "./domElems";
import { globalVariables } from "./globalVariables";

export function showSheduleCup(readyShedule) {
    let repsR1 = readyShedule.length;
    let repsR2 = Math.ceil(repsR1/2);
    let roundCounter = 1;
    let pairsInR2 = [];
    let idLeft = ""; 
    let idRight = "";
    let pairOnScreen = "";
    //Round 1
    domElems.sheduleOnScreenA.append(`<ul class="result__listItem--roundHeader">Round nr ${roundCounter}</ul>`); 
    for (let i = 0; i < repsR1; i++) {
        idLeft = globalVariables.idCharArr[i] + "1";
        idRight = globalVariables.idCharArr[i] + "2";
        pairOnScreen = readyShedule[i].join(` ${idLeft}` + " ___ - ___ " + `${idRight}`);   
        
        domElems.sheduleOnScreenA.append(`<li class="result__listItem">${pairOnScreen}</li>`);
    }
    roundCounter++;
    //Round 2
    domElems.sheduleOnScreenA.append(`<ul class="result__listItem--roundHeader">Round nr ${roundCounter}</ul>`);
    if (repsR2 % 2 === 0) {
        for (let j = 0; j < repsR2; j++) {
           let array = globalVariables.idCharArr.slice(0,2);
           globalVariables.idCharArr.splice(0,2);
           pairsInR2.push(array);
         }
     } else {
         let teams = globalVariables.idCharArr;
         teams.splice(-1, 1, " Lucky");
         for (let i = 0; i < repsR2; i++) {
            let array = teams.slice(0,2);
            teams.splice(0,2);
            pairsInR2.push(array);
          }
     }
console.log("pairsInR2", pairsInR2);


     for (let k = 0; k < pairsInR2.length; k++) {
    
        pairOnScreen = pairsInR2[k].join(" ___ - ___ ");   
        domElems.sheduleOnScreenA.append(`<li class="result__listItem">${pairOnScreen}</li>`);
         
     }

}