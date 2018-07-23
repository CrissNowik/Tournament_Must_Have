import { basicFunctions } from "./basicFunctions";

export  function cupGenerator(teamList) {
            let numberOfTeams = teamList.length;
            let teamNamesList = basicFunctions.gettingTeamNames(teamList, numberOfTeams);
            
            basicFunctions.shuffle(teamNamesList); // shuffling teams

            let pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
            // let pairsReadyToShowR2 = basicFunctions.pairing(pairsReadyToShowR1, pairsReadyToShowR1.length)
            console.log("pairsReadyToShowR1", pairsReadyToShowR1);
            // console.log("pairsReadyToShowR2", pairsReadyToShowR2);

            return pairsReadyToShowR1;
        };

