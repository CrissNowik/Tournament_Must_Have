import { basicFunctions } from "./basicFunctions";

export  function cupGenerator(teamList) {
            let numberOfTeams = teamList.length;
            let teamNamesList = basicFunctions.gettingTeamNames(teamList, numberOfTeams);
            
            basicFunctions.shuffle(teamNamesList); // shuffling teams

            let pairsReadyToShow = basicFunctions.pairing(teamNamesList, numberOfTeams);
            return pairsReadyToShow;
        };

