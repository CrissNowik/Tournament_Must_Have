import { domElems } from "./domElems";
import { globalVariables } from "./globalVariables";
import { basicFunctions } from "./basicFunctions";

export function showSheduleCup(sheduleArray) {
    let repsR1 = sheduleArray[0].length;
    let repsR2 = sheduleArray[1].length/2;
    let roundCounter = 1;
    let idLeft = ""; 
    let idRight = "";
    let pairOnScreen = "";


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
}