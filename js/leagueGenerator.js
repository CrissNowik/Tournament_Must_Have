import { basicFunctions } from "./basicFunctions";


export function leagueGenerator(teamList) {
            let numberOfTeams = teamList.length;
            let teamNamesList = basicFunctions.gettingTeamNames(teamList, numberOfTeams);

            basicFunctions.shuffle(teamNamesList); // shuffling teams
            
            let robin = require ('roundrobin'); // call for algorythm
            let readyShedule = robin(numberOfTeams, teamNamesList); // using algorythm          
            return readyShedule;
        };
