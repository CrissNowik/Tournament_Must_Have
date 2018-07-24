import { basicFunctions } from "./basicFunctions";

export  function cupGenerator(teamList) {
            let numberOfTeams = teamList.length;
            let teamNamesList = basicFunctions.gettingTeamNames(teamList, numberOfTeams);
            let pairsReadyToShowR1 = [];
            let pairsReadyToShowR2 = [];
            let pairsReadyToShowR3 = [];
            let pairsReadyToShowR4 = [];
            let pairsReadyToShowR5 = [];

            basicFunctions.shuffle(teamNamesList); // shuffling teams

            if (numberOfTeams<5) { // 2 rounds
                pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
                console.log("Cup generator, 2 rounds ", pairsReadyToShowR1 );
                return pairsReadyToShowR1;
                // return array with 2 subarrays;
            } else if (numberOfTeams > 4 && numberOfTeams < 9 ) { // 3 rounds
                // return array with 3 subarrays;
            } else if (numberOfTeams > 8 && numberOfTeams < 17) { // 4 rounds
                // return array with 4 subarrays;
            } else { // 5 rounds
                // return array with 5 subarrays;
            }          
        };

