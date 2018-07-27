import { domElems } from "./domElems";
import { globalVariables } from "./globalVariables";
import { basicFunctions } from "./basicFunctions";

export function showSheduleCup(sheduleArray) {
    let repsR1 = sheduleArray[0].length;
    let repsR2 = sheduleArray[1].length;
    let repsR3 = sheduleArray[2].length;
    let roundCounter = 1;
    let idLeft = ""; 
    let idRight = "";
    let pairOnScreen = "";
console.log(sheduleArray);


    //Round 1    
    basicFunctions.showHeader(domElems.sheduleOnScreenA, roundCounter);
    for (let i = 0; i < repsR1; i++) {
        idLeft = globalVariables.idCharArr[i] + "1";
        idRight = globalVariables.idCharArr[i] + "2";
        pairOnScreen = sheduleArray[0][i].join(` ${idLeft}` + " ___ - ___ " + `${idRight}`);
        basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen);
    }
    roundCounter++;
    
    //Round 2
    basicFunctions.showHeader(domElems.sheduleOnScreenA, roundCounter);
     for (let k = 0; k < repsR2; k++) {
        pairOnScreen = sheduleArray[1].join(" ___ - ___ ");   
        basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen);   
     }
     roundCounter++;

     //Round 3
     
     basicFunctions.showHeader(domElems.sheduleOnScreenA, roundCounter);
     for (let l = 0; l < repsR3; l++) {
        pairOnScreen = sheduleArray[2].join(" ___ - ___ ");   
        basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen);   
     }
     roundCounter++;
}