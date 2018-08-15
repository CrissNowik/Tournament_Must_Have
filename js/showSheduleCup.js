import { domElems } from "./domElems";
import { basicFunctions } from "./basicFunctions";
import { globalVariables } from "./globalVariables";

export function showSheduleCup(sheduleArray, numberOfTeams) {
    let roundCounter = 1;
    let pairOnScreen = "";

    domElems.sheduleOnScreenB.css('display', 'none');    
    domElems.sheduleOnScreenC.css('display', 'none');
    domElems.sheduleOnScreenD.css('display', 'none');
    domElems.cupLadder.css('display', 'flex');

    function makeLadderRectR1(where, idLeft, idRight, teamOne, teamTwo){
        where.append(`<li class="result__ladder_rect">${idLeft}${teamOne}</li><li class="result__ladder_rect">${idRight}${teamTwo}</li>`);
    }
    function makeLadderRect(where, roundNumber) {
        where.append(`<li class="result__ladder_rectR${roundNumber}"></li><li class="result__ladder_rectR${roundNumber}"></li>`);
    }


    function showingTwoFirstRoundsCup() {
        let repsR1 = sheduleArray[0].length;
        let repsR2 = Math.ceil(sheduleArray[0].length/2);
        let idLeft = ""; 
        let idRight = "";
        let teamOne = "";
        let teamTwo = "";
        //Round 1   
            basicFunctions.showHeader(domElems.sheduleOnScreenA, roundCounter);
            for (let i = 0; i < repsR1; i++) {
                idLeft = globalVariables.idCharArr[i] + "1";
                idRight = globalVariables.idCharArr[i] + "2";
                teamOne = sheduleArray[0][i][0];
                teamTwo = sheduleArray[0][i][1];
                pairOnScreen = sheduleArray[0][i].join(` ${idLeft}` + " ___ - ___ " + `${idRight}`);
                makeLadderRectR1(domElems.ladder_round1, idLeft, idRight, teamOne, teamTwo);
                basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen);
            }
            roundCounter++;
            
        //Round 2
            basicFunctions.showHeader(domElems.sheduleOnScreenA, roundCounter);
            if (numberOfTeams === 3 || numberOfTeams === 4) {
                for (let k = 0; k < repsR2; k++) {
                    pairOnScreen = sheduleArray[1].join(" ___ - ___ ");                  
                    makeLadderRect(domElems.ladder_round2, 2);
                    basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen); 
                }
            } else {
                for (let k = 0; k < repsR2; k++) {
                    pairOnScreen = sheduleArray[1][k].join(" ___ - ___ ");   
                    makeLadderRect(domElems.ladder_round2, 2);
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
                makeLadderRect(domElems.ladder_round3, 3);
                basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen);   
            }
            roundCounter++;
        } else if (numberOfTeams > 8 && numberOfTeams < 33) {
            for (let l = 0; l < repsR3; l++) {    
                pairOnScreen = sheduleArray[2][l].join(" ___ - ___ ");
                makeLadderRect(domElems.ladder_round3, 3); 
                basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen);   
            }
            roundCounter++;
             // Round 4
            let repsR4 = Math.ceil(sheduleArray[2].length/2);

            basicFunctions.showHeader(domElems.sheduleOnScreenA, roundCounter);
            if (numberOfTeams > 8 && numberOfTeams < 17) {
                for (let n = 0; n < repsR4; n++) {
                    pairOnScreen = sheduleArray[3].join(" ___ - ___ ");
                    makeLadderRect(domElems.ladder_round4, 4);   
                    basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen); 
                }
            } else if (numberOfTeams > 16) {
                for (let n = 0; n < repsR4; n++) {
                    pairOnScreen = sheduleArray[3][n].join(" ___ - ___ ");
                    makeLadderRect(domElems.ladder_round4, 4);   
                    basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen); 
                }
                roundCounter++;
                // Round 5
                let repsR5 = Math.ceil(sheduleArray[3].length/2);

                basicFunctions.showHeader(domElems.sheduleOnScreenA, roundCounter);
                for (let o = 0; o < repsR5; o++) {
                    pairOnScreen = sheduleArray[4].join(" ___ - ___ ");
                    makeLadderRect(domElems.ladder_round5, 5);   
                    basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen);
                }
            }
        } 
        
    } 
};
