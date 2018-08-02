import { domElems } from "./domElems";
import { globalVariables } from "./globalVariables";
import { basicFunctions } from "./basicFunctions";

export function showSheduleCup(sheduleArray, numberOfTeams) {
    let repsR1 = sheduleArray[0].length;
    let repsR2 = Math.ceil(sheduleArray[0].length/2);
    let roundCounter = 1;
    let idLeft = ""; 
    let idRight = "";
    let pairOnScreen = "";
console.log("do wyświetlenia: ", sheduleArray);

        function showingTwoFirstRoundsCup() {
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
                if (numberOfTeams === 3 || numberOfTeams === 4) {
                    for (let k = 0; k < repsR2; k++) {
                        pairOnScreen = sheduleArray[1].join(" ___ - ___ ");   
                        basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen); 
                    }
                } else {
                    for (let k = 0; k < repsR2; k++) {
                        pairOnScreen = sheduleArray[1][k].join(" ___ - ___ ");   
                        basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen); 
                    }
                }
                roundCounter++;
                };
     
    if (numberOfTeams<5) {
        showingTwoFirstRoundsCup();
    } else if (numberOfTeams > 4) {
        showingTwoFirstRoundsCup();
        //Round 3
        let repsR3 = Math.ceil(sheduleArray[1].length/2);

        basicFunctions.showHeader(domElems.sheduleOnScreenA, roundCounter);
        if (numberOfTeams > 4 && numberOfTeams < 9) {
            for (let l = 0; l < repsR3; l++) {            
                pairOnScreen = sheduleArray[2].join(" ___ - ___ ");
                basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen);   
            }
            roundCounter++;
        } else if (numberOfTeams > 8 && numberOfTeams < 33) {
            for (let l = 0; l < repsR3; l++) {    
                pairOnScreen = sheduleArray[2][l].join(" ___ - ___ "); 
                basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen);   
            }
            roundCounter++;
             // Round 4
            let repsR4 = Math.ceil(sheduleArray[2].length/2);

            basicFunctions.showHeader(domElems.sheduleOnScreenA, roundCounter);
            for (let n = 0; n < repsR4; n++) {
                pairOnScreen = sheduleArray[3].join(" ___ - ___ ");   
                basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen); 
            }
            roundCounter++;
        } 
        
    } 
};

