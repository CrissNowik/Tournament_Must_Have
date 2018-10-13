import { basicFunctions } from "./basicFunctions";
import { cupPairGenerators } from "./cupPairGenerators";

export  function cupGenerator(teamList) {
            let final  = [];
            let numberOfTeams = teamList.length;
            let teamNamesList = basicFunctions.gettingTeamNames(teamList, numberOfTeams);
            let pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4, pairsReadyToShowR5;
            pairsReadyToShowR1 = pairsReadyToShowR2 = pairsReadyToShowR3 = pairsReadyToShowR4 = pairsReadyToShowR5 = [];

            basicFunctions.shuffle(teamNamesList);

 // 2 rounds
            if (numberOfTeams<5) {
                    pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(1, false);
                final.push(pairsReadyToShowR1, pairsReadyToShowR2);
                return final;
 // 3 rounds
            } else if (numberOfTeams > 4 && numberOfTeams < 9 ) { 
                    pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
                if (numberOfTeams === 5 || numberOfTeams === 6) {
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(1, true);
                } else {
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(2, false);
                }                
                    pairsReadyToShowR3 = cupPairGenerators.generatingPairsR3(1, false);
                final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3);
                return final;
 // 4 rounds
            } else if (numberOfTeams > 8 && numberOfTeams < 17) { 
                    pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
                if (numberOfTeams === 9 || numberOfTeams === 10) {
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(2, true);
                    pairsReadyToShowR3 = cupPairGenerators.generatingPairsPuRound(true);
                    pairsReadyToShowR4 = cupPairGenerators.generatingPairsLastRound();
                } else if (numberOfTeams === 11 || numberOfTeams === 12) {
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(3, false);
                    pairsReadyToShowR3 = cupPairGenerators.generatingPairsPuRound(true);
                    pairsReadyToShowR4 = cupPairGenerators.generatingPairsLastRound();
                } else if (numberOfTeams === 13 || numberOfTeams === 14){
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(3, true);
                    pairsReadyToShowR3 = cupPairGenerators.generatingPairsPuRound(false);
                    pairsReadyToShowR4 = cupPairGenerators.generatingPairsLastRound(); 
                } else if (numberOfTeams === 15 || numberOfTeams === 16) {
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(4, false);
                    pairsReadyToShowR3 = cupPairGenerators.generatingPairsPuRound(false);
                    pairsReadyToShowR4 = cupPairGenerators.generatingPairsLastRound();
                }
                final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4);
                return final;
            } else { 
                    pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
                if (numberOfTeams === 17 || numberOfTeams === 18) {
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(4, true);
                    pairsReadyToShowR3 = cupPairGenerators.generatingPairsR3(2, true);
                    pairsReadyToShowR4 = cupPairGenerators.generatingPairsPuRound(true); 
                    pairsReadyToShowR5 = cupPairGenerators.generatingPairsLastRound();     
                } else if (numberOfTeams === 19 || numberOfTeams === 20) {
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(5, false);
                    pairsReadyToShowR3 = cupPairGenerators.generatingPairsR3(2, true); 
                    pairsReadyToShowR4 = cupPairGenerators.generatingPairsPuRound(true);
                    pairsReadyToShowR5 = cupPairGenerators.generatingPairsLastRound();  
                } else if (numberOfTeams === 21 || numberOfTeams === 22) {
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(5, true);
                    pairsReadyToShowR3 = cupPairGenerators.generatingPairsR3(3, false); 
                    pairsReadyToShowR4 = cupPairGenerators.generatingPairsPuRound(true);
                    pairsReadyToShowR5 = cupPairGenerators.generatingPairsLastRound();  
                } else if (numberOfTeams === 23 || numberOfTeams === 24) {
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(6, false);
                    pairsReadyToShowR3 = cupPairGenerators.generatingPairsR3(3, false); 
                    pairsReadyToShowR4 = cupPairGenerators.generatingPairsPuRound(true);
                    pairsReadyToShowR5 = cupPairGenerators.generatingPairsLastRound();  
                } else if (numberOfTeams === 25 || numberOfTeams === 26) {
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(6, true);
                    pairsReadyToShowR3 = cupPairGenerators.generatingPairsR3(3, true);  
                    pairsReadyToShowR4 = cupPairGenerators.generatingPairsPuRound(false);
                    pairsReadyToShowR5 = cupPairGenerators.generatingPairsLastRound();  
                } else if (numberOfTeams === 27 || numberOfTeams === 28) {
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(7, false);
                    pairsReadyToShowR3 = cupPairGenerators.generatingPairsR3(3, true); 
                    pairsReadyToShowR4 = cupPairGenerators.generatingPairsPuRound(false);
                    pairsReadyToShowR5 = cupPairGenerators.generatingPairsLastRound();  
                } else if (numberOfTeams === 29 || numberOfTeams === 30) {
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(7, true);
                    pairsReadyToShowR3 = cupPairGenerators.generatingPairsR3(4, false); 
                    pairsReadyToShowR4 = cupPairGenerators.generatingPairsPuRound(false);
                    pairsReadyToShowR5 = cupPairGenerators.generatingPairsLastRound();  
                } else if (numberOfTeams === 31 || numberOfTeams === 32) {
                    pairsReadyToShowR2 = cupPairGenerators.generatingPairsR2(8, false);
                    pairsReadyToShowR3 = cupPairGenerators.generatingPairsR3(4, false);
                    pairsReadyToShowR4 = cupPairGenerators.generatingPairsPuRound(false);
                    pairsReadyToShowR5 = cupPairGenerators.generatingPairsLastRound();  
                }
                final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4, pairsReadyToShowR5);
                return final;
            }          
        };

