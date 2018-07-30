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
                    // for (let j = 0; j < 2; j++) {
                    //     pairsReadyToShowR2.push(twoEmpty)                        
                    // }
                    // pairsReadyToShowR2.push(emptyAndLucky);
                    pairsReadyToShowR2.push(twoEmpty, twoEmpty, emptyAndLucky);
                } else {
                    // for (let k = 0; k < 3; k++) {
                    //     pairsReadyToShowR2.push(twoEmpty)                        
                    // }
                    pairsReadyToShowR2.push(twoEmpty, twoEmpty, twoEmpty);
                }
                pairsReadyToShowR3.push(twoEmpty, emptyAndLucky);
                pairsReadyToShowR4.push(twoEmpty);
                final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4);
                return final;
            } else { // 5 rounds
                // return array with 5 subarrays;
            }          
        };

