import { basicFunctions } from "./basicFunctions";
import { globalVariables } from "./globalVariables";

export  function cupGenerator(teamList) {
            let numberOfTeams = teamList.length;
            let teamNamesList = basicFunctions.gettingTeamNames(teamList, numberOfTeams);
            let final  = [];
            let pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4, pairsReadyToShowR5;
            pairsReadyToShowR1 = pairsReadyToShowR2 = pairsReadyToShowR3 = pairsReadyToShowR4 = pairsReadyToShowR5 = [];
            

            basicFunctions.shuffle(teamNamesList); // shuffling teams

            if (numberOfTeams<5) { // 2 rounds
                pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
                pairsReadyToShowR2 = [globalVariables.empty, globalVariables.empty];
                final.push(pairsReadyToShowR1, pairsReadyToShowR2);
                return final;
            } else if (numberOfTeams > 4 && numberOfTeams < 9 ) { // 3 rounds
                // return array with 3 subarrays;
            } else if (numberOfTeams > 8 && numberOfTeams < 17) { // 4 rounds
                // return array with 4 subarrays;
            } else { // 5 rounds
                // return array with 5 subarrays;
            }          
        };

