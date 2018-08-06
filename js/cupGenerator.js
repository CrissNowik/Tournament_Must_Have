import { basicFunctions } from "./basicFunctions";
import { globalVariables } from "./globalVariables";

export  function cupGenerator(teamList) {
            let numberOfTeams = teamList.length;
            let teamNamesList = basicFunctions.gettingTeamNames(teamList, numberOfTeams);
            let final  = [];
            let pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4, pairsReadyToShowR5;
            pairsReadyToShowR1 = pairsReadyToShowR2 = pairsReadyToShowR3 = pairsReadyToShowR4 = pairsReadyToShowR5 = [];
            let twoEmpty = [globalVariables.empty, globalVariables.empty];
            let emptyAndLucky = [globalVariables.empty, globalVariables.lucky];

            basicFunctions.shuffle(teamNamesList); // shuffling teams
 // 2 rounds
            if (numberOfTeams<5) {
                pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
                pairsReadyToShowR2 = twoEmpty;
                final.push(pairsReadyToShowR1, pairsReadyToShowR2);
                return final;
 // 3 rounds

            } else if (numberOfTeams > 4 && numberOfTeams < 9 ) { 
                pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
                if (numberOfTeams === 5 || numberOfTeams === 6) {
                    pairsReadyToShowR2.push(twoEmpty, emptyAndLucky)
                } else {
                    for (let i = 0; i < 2; i++) {
                        pairsReadyToShowR2.push(twoEmpty);
                     }
                } 
                pairsReadyToShowR3 = twoEmpty;
                final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3);
                return final;
 // 4 rounds
            } else if (numberOfTeams > 8 && numberOfTeams < 17) { 
                pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
                if (numberOfTeams === 9 || numberOfTeams === 10) {
                    pairsReadyToShowR2 = [];
                    for (let j = 0; j < 2; j++) {
                        pairsReadyToShowR2.push(twoEmpty)                        
                    }
                    pairsReadyToShowR2.push(emptyAndLucky);
                    pairsReadyToShowR3 = [twoEmpty, emptyAndLucky];
                    pairsReadyToShowR4 = twoEmpty;
                } else if (numberOfTeams === 11 || numberOfTeams === 12) {
                    pairsReadyToShowR2 = [];
                    for (let k = 0; k < 3; k++) {
                        pairsReadyToShowR2.push(twoEmpty)                        
                    }
                    pairsReadyToShowR3 = [twoEmpty, emptyAndLucky];
                    pairsReadyToShowR4 = twoEmpty;
                } else if (numberOfTeams === 13 || numberOfTeams === 14){
                    pairsReadyToShowR2 = [];
                    for (let l = 0; l < 3; l++) {
                        pairsReadyToShowR2.push(twoEmpty)                 
                    }
                    pairsReadyToShowR2.push(emptyAndLucky)
                    pairsReadyToShowR3 = [twoEmpty, twoEmpty]; 
                    pairsReadyToShowR4 = twoEmpty; 
                } else if (numberOfTeams === 15 || numberOfTeams === 16) {
                    pairsReadyToShowR2 = [];
                    for (let m = 0; m < 4; m++) {
                        pairsReadyToShowR2.push(twoEmpty)                 
                    }
                    pairsReadyToShowR3 = [twoEmpty, twoEmpty]; 
                    pairsReadyToShowR4 = twoEmpty;
                }
                
                final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4);
                return final;
            } else { 
                pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
                if (numberOfTeams === 17 || numberOfTeams === 18) {
                    pairsReadyToShowR2 = [];
                    for (let n = 0; n < 4; n++) {
                        pairsReadyToShowR2.push(twoEmpty)                 
                    }
                    pairsReadyToShowR2.push(emptyAndLucky);
                    pairsReadyToShowR3 = [twoEmpty, twoEmpty, emptyAndLucky]; 
                    pairsReadyToShowR4 = [twoEmpty, emptyAndLucky];
                    pairsReadyToShowR5 = twoEmpty;
                } else if (numberOfTeams === 19 || numberOfTeams === 20) {
                    pairsReadyToShowR2 = [];
                    for (let n = 0; n < 5; n++) {
                        pairsReadyToShowR2.push(twoEmpty)                 
                    }
                    pairsReadyToShowR3 = [twoEmpty, twoEmpty, emptyAndLucky]; 
                    pairsReadyToShowR4 = [twoEmpty, emptyAndLucky];
                    pairsReadyToShowR5 = twoEmpty;
                } else if (numberOfTeams === 21 || numberOfTeams === 22) {
                    pairsReadyToShowR2 = [];
                    for (let o = 0; o < 5; o++) {
                        pairsReadyToShowR2.push(twoEmpty)                 
                    }
                    pairsReadyToShowR2.push(emptyAndLucky)
                    pairsReadyToShowR3 = [twoEmpty, twoEmpty, twoEmpty]; 
                    pairsReadyToShowR4 = [twoEmpty, emptyAndLucky];
                    pairsReadyToShowR5 = twoEmpty;
                } else if (numberOfTeams === 23 || numberOfTeams === 24) {
                    pairsReadyToShowR2 = [];
                    for (let o = 0; o < 6; o++) {
                        pairsReadyToShowR2.push(twoEmpty)                 
                    }
                    for (let u = 0; u < 3; u++) {
                        pairsReadyToShowR3.push(twoEmpty)                 
                    }
                    pairsReadyToShowR4 = [twoEmpty, emptyAndLucky];
                    pairsReadyToShowR5 = twoEmpty;
                } else if (numberOfTeams === 25 || numberOfTeams === 26) {
                    pairsReadyToShowR2 = [];
                    for (let o = 0; o < 6; o++) {
                        pairsReadyToShowR2.push(twoEmpty)                 
                    }
                    pairsReadyToShowR2.push(emptyAndLucky)
                    for (let u = 0; u < 3; u++) {
                        pairsReadyToShowR3.push(twoEmpty)
                    }
                    pairsReadyToShowR3.push(emptyAndLucky); 
                    pairsReadyToShowR4 = [twoEmpty, twoEmpty];
                    pairsReadyToShowR5 = twoEmpty;
                } else if (numberOfTeams === 27 || numberOfTeams === 28) {
                    pairsReadyToShowR2 = [];
                    for (let o = 0; o < 7; o++) {
                        pairsReadyToShowR2.push(twoEmpty)                 
                    }
                    for (let u = 0; u < 3; u++) {
                        pairsReadyToShowR3.push(twoEmpty)
                    }
                    pairsReadyToShowR3.push(emptyAndLucky); 
                    pairsReadyToShowR4 = [twoEmpty, twoEmpty];
                    pairsReadyToShowR5 = twoEmpty;
                } else if (numberOfTeams === 29 || numberOfTeams === 30) {
                    pairsReadyToShowR2 = [];
                    for (let o = 0; o < 7; o++) {
                        pairsReadyToShowR2.push(twoEmpty)                 
                    }
                    pairsReadyToShowR2.push(emptyAndLucky)
                    for (let u = 0; u < 4; u++) {
                        pairsReadyToShowR3.push(twoEmpty)
                    }
                    pairsReadyToShowR4 = [twoEmpty, twoEmpty];
                    pairsReadyToShowR5 = twoEmpty;
                } else if (numberOfTeams === 31 || numberOfTeams === 32) {
                    pairsReadyToShowR2 = [];
                    for (let o = 0; o < 8; o++) {
                        pairsReadyToShowR2.push(twoEmpty)                 
                    }
                    for (let u = 0; u < 4; u++) {
                        pairsReadyToShowR3.push(twoEmpty)
                    }
                    pairsReadyToShowR4 = [twoEmpty, twoEmpty];
                    pairsReadyToShowR5 = twoEmpty;
                }
               
                final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4, pairsReadyToShowR5);
                return final;
            }          
        };

