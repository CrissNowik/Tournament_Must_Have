import { basicFunctions } from "./basicFunctions";
import { globalVariables } from "./globalVariables";
import { cupPairGenerators } from "./cupPairGenerators";


export  function cupGenerator(teamList) {
            let final  = [];
            let numberOfTeams = teamList.length;
            let teamNamesList = basicFunctions.gettingTeamNames(teamList, numberOfTeams);
            // let pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4, pairsReadyToShowR5;
            // pairsReadyToShowR1 = pairsReadyToShowR2 = pairsReadyToShowR3 = pairsReadyToShowR4 = pairsReadyToShowR5 = [];
            // let twoEmpty = [globalVariables.empty, globalVariables.empty];
            // let emptyAndLucky = [globalVariables.empty, globalVariables.lucky];

            basicFunctions.shuffle(teamNamesList); // shuffling teams

            // function generatingPairsR1(teamNamesList, numberOfTeams) {
            //     pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
            // };
            // function generatingPairsR2(howMuchEmpty, lucky) {
            //     pairsReadyToShowR2 = [];
            //     if (lucky === true) {
            //     for (let i = 0; i < howMuchEmpty; i++) {
            //         pairsReadyToShowR2.push(twoEmpty);
            //     }
            //     pairsReadyToShowR2.push(emptyAndLucky);
            //     } else {
            //        for (let i = 0; i < howMuchEmpty; i++) {
            //         pairsReadyToShowR2.push(twoEmpty);
            //        }
            //     } 
            // };
            // function generatingPairsR3(howMuchEmpty, lucky) {
            //     pairsReadyToShowR3 = [];
            //     if (lucky === true) {
            //     for (let i = 0; i < howMuchEmpty; i++) {
            //         pairsReadyToShowR3.push(twoEmpty);
            //     }
            //     pairsReadyToShowR3.push(emptyAndLucky);
            //     } else {
            //        for (let i = 0; i < howMuchEmpty; i++) {
            //         pairsReadyToShowR3.push(twoEmpty);
            //        } 
            //     }
            // };
            // function generatingPairsR3R4(lucky) {
            //     if (lucky === true) {
            //         pairsReadyToShowR3 = [twoEmpty, emptyAndLucky];
            //         pairsReadyToShowR4 = twoEmpty;                    
            //     } else {
            //         pairsReadyToShowR3 = [twoEmpty, twoEmpty];
            //         pairsReadyToShowR4 = twoEmpty;
            //     }
            // };
            // function generatingPairsR4R5(lucky) {
            //     if (lucky === true) {
            //         pairsReadyToShowR4 = [twoEmpty, emptyAndLucky];
            //         pairsReadyToShowR5 = twoEmpty;                    
            //     } else {
            //         pairsReadyToShowR4 = [twoEmpty, twoEmpty];
            //         pairsReadyToShowR5 = twoEmpty;
            //     }
            // };

 // 2 rounds
            if (numberOfTeams<5) {
                cupPairGenerators.generatingPairsR1(teamNamesList, numberOfTeams);
                cupPairGenerators.generatingPairsR2(1, false);
                final.push(pairsReadyToShowR1, pairsReadyToShowR2);
                return final;
 // 3 rounds

            } else if (numberOfTeams > 4 && numberOfTeams < 9 ) { 
                cupPairGenerators.generatingPairsR1(teamNamesList, numberOfTeams);
                if (numberOfTeams === 5 || numberOfTeams === 6) {
                    cupPairGenerators.generatingPairsR2(1, true);
                } else {
                    cupPairGenerators.generatingPairsR2(2, false);
                } 
                pairsReadyToShowR3 = twoEmpty;
                final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3);
                return final;
 // 4 rounds
            } else if (numberOfTeams > 8 && numberOfTeams < 17) { 
                generatingPairsR1(teamNamesList, numberOfTeams);
                if (numberOfTeams === 9 || numberOfTeams === 10) {
                    cupPairGenerators.generatingPairsR2(2, true);
                    cupPairGenerators.generatingPairsR3R4(true);
                } else if (numberOfTeams === 11 || numberOfTeams === 12) {
                    cupPairGenerators.generatingPairsR2(3, false);
                    cupPairGenerators.generatingPairsR3R4(true);
                } else if (numberOfTeams === 13 || numberOfTeams === 14){
                    cupPairGenerators.generatingPairsR2(3, true);
                    cupPairGenerators.generatingPairsR3R4(false); 
                } else if (numberOfTeams === 15 || numberOfTeams === 16) {
                    cupPairGenerators.generatingPairsR2(4, false);
                    cupPairGenerators.generatingPairsR3R4(false);
                }
                final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4);
                return final;
            } else { 
                cupPairGenerators.generatingPairsR1(teamNamesList, numberOfTeams);
                if (numberOfTeams === 17 || numberOfTeams === 18) {
                    cupPairGenerators.generatingPairsR2(4, true);
                    cupPairGenerators.generatingPairsR3(2, true);
                    cupPairGenerators.generatingPairsR4R5(true);                    
                } else if (numberOfTeams === 19 || numberOfTeams === 20) {
                    cupPairGenerators.generatingPairsR2(5, false);
                    cupPairGenerators.generatingPairsR3(2, true); 
                    cupPairGenerators.generatingPairsR4R5(true);
                } else if (numberOfTeams === 21 || numberOfTeams === 22) {
                    cupPairGenerators.generatingPairsR2(5, true);
                    cupPairGenerators.generatingPairsR3(3, false); 
                    cupPairGenerators.generatingPairsR4R5(true);
                } else if (numberOfTeams === 23 || numberOfTeams === 24) {
                    cupPairGenerators.generatingPairsR2(6, false);
                    cupPairGenerators.generatingPairsR3(3, false); 
                    cupPairGenerators.generatingPairsR4R5(true);
                } else if (numberOfTeams === 25 || numberOfTeams === 26) {
                    cupPairGenerators.generatingPairsR2(6, true);
                    cupPairGenerators.generatingPairsR3(3, true);  
                    cupPairGenerators.generatingPairsR4R5(false);
                } else if (numberOfTeams === 27 || numberOfTeams === 28) {
                    cupPairGenerators.generatingPairsR2(7, false);
                    cupPairGenerators.generatingPairsR3(3, true); 
                    cupPairGenerators.generatingPairsR4R5(false);
                } else if (numberOfTeams === 29 || numberOfTeams === 30) {
                    cupPairGenerators.generatingPairsR2(7, true);
                    cupPairGenerators.generatingPairsR3(4, false); 
                    cupPairGenerators.generatingPairsR4R5(false);
                } else if (numberOfTeams === 31 || numberOfTeams === 32) {
                    cupPairGenerators.generatingPairsR2(8, false);
                    cupPairGenerators.generatingPairsR3(4, false);
                    cupPairGenerators.generatingPairsR4R5(false);
                }
               
                final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4, pairsReadyToShowR5);
                return final;
            }          
        };

