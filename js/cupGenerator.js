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

            function showingPairsR1(teamNamesList, numberOfTeams) {
                pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
            };
            function showingPairsR2(howMuchEmpty, lucky) {
               if (lucky === true) {
                for (let i = 0; i < howMuchEmpty; i++) {
                    pairsReadyToShowR2.push(twoEmpty);
                }
                pairsReadyToShowR2.push(emptyAndLucky);
               } else {
                   for (let i = 0; i < howMuchEmpty; i++) {
                    pairsReadyToShowR2.push(twoEmpty);
                   }
               } 
            };
            function showingPairsR3R4(lucky) {
                if (lucky === true) {
                    pairsReadyToShowR3 = [twoEmpty, emptyAndLucky];
                    pairsReadyToShowR4 = twoEmpty;                    
                } else {
                    pairsReadyToShowR3 = [twoEmpty, twoEmpty];
                    pairsReadyToShowR4 = twoEmpty;
                }
            };
            function showingPairsR4R5(lucky) {
                if (lucky === true) {
                    pairsReadyToShowR4 = [twoEmpty, emptyAndLucky];
                    pairsReadyToShowR5 = twoEmpty;                    
                } else {
                    pairsReadyToShowR4 = [twoEmpty, twoEmpty];
                    pairsReadyToShowR5 = twoEmpty;
                }
            };

 // 2 rounds
            if (numberOfTeams<5) {
                showingPairsR1(teamNamesList, numberOfTeams);
                showingPairsR2(1, false);
                final.push(pairsReadyToShowR1, pairsReadyToShowR2);
                return final;
 // 3 rounds

            } else if (numberOfTeams > 4 && numberOfTeams < 9 ) { 
                showingPairsR1(teamNamesList, numberOfTeams);
                if (numberOfTeams === 5 || numberOfTeams === 6) {
                    showingPairsR2(1, true);
                } else {
                    showingPairsR2(2, false);
                } 
                pairsReadyToShowR3 = twoEmpty;
                final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3);
                return final;
 // 4 rounds
            } else if (numberOfTeams > 8 && numberOfTeams < 17) { 
                showingPairsR1(teamNamesList, numberOfTeams);
                if (numberOfTeams === 9 || numberOfTeams === 10) {
                    showingPairsR2(2, true);
                    showingPairsR3R4(true);
                } else if (numberOfTeams === 11 || numberOfTeams === 12) {
                    showingPairsR2(3, false);
                    showingPairsR3R4(true);
                } else if (numberOfTeams === 13 || numberOfTeams === 14){
                    showingPairsR2(3, true);
                    showingPairsR3R4(false); 
                } else if (numberOfTeams === 15 || numberOfTeams === 16) {
                    showingPairsR2(4, false);
                    showingPairsR3R4(false);
                }
                final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4);
                return final;
            } else { 
                showingPairsR1(teamNamesList, numberOfTeams);
                if (numberOfTeams === 17 || numberOfTeams === 18) {
                    showingPairsR2(4, true);
                    pairsReadyToShowR3 = [twoEmpty, twoEmpty, emptyAndLucky]; 
                    showingPairsR4R5(pairsReadyToShowR4, pairsReadyToShowR5, true);                    
                } else if (numberOfTeams === 19 || numberOfTeams === 20) {
                    showingPairsR2(5, false);
                    pairsReadyToShowR3 = [twoEmpty, twoEmpty, emptyAndLucky]; 
                    showingPairsR4R5(true);
                } else if (numberOfTeams === 21 || numberOfTeams === 22) {
                    showingPairsR2(5, true);
                    pairsReadyToShowR3 = [twoEmpty, twoEmpty, twoEmpty]; 
                    showingPairsR4R5(true);
                } else if (numberOfTeams === 23 || numberOfTeams === 24) {
                    showingPairsR2(6, false);
                    for (let u = 0; u < 3; u++) {
                        pairsReadyToShowR3.push(twoEmpty)                 
                    }
                    showingPairsR4R5(true);
                } else if (numberOfTeams === 25 || numberOfTeams === 26) {
                    showingPairsR2(6, true);
                    for (let u = 0; u < 3; u++) {
                        pairsReadyToShowR3.push(twoEmpty)
                    }
                    pairsReadyToShowR3.push(emptyAndLucky); 
                    showingPairsR4R5(false);
                } else if (numberOfTeams === 27 || numberOfTeams === 28) {
                    showingPairsR2(7, false);
                    for (let u = 0; u < 3; u++) {
                        pairsReadyToShowR3.push(twoEmpty)
                    }
                    pairsReadyToShowR3.push(emptyAndLucky); 
                    showingPairsR4R5(false);
                } else if (numberOfTeams === 29 || numberOfTeams === 30) {
                    showingPairsR2(7, true);
                    for (let u = 0; u < 4; u++) {
                        pairsReadyToShowR3.push(twoEmpty)
                    }
                    showingPairsR4R5(false);
                } else if (numberOfTeams === 31 || numberOfTeams === 32) {
                    showingPairsR2(8, false);
                    for (let u = 0; u < 4; u++) {
                        pairsReadyToShowR3.push(twoEmpty)
                    }
                    showingPairsR4R5(false);
                }
               
                final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4, pairsReadyToShowR5);
                return final;
            }          
        };

