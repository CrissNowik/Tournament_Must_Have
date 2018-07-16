import { basicFunctions } from "./basicFunctions";


export function leagueGenerator(teamList) {
            console.log("LIGA");
            let numberOfTeams = teamList.length;
            let teamNamesList = [];

            for (let i = 0; i < numberOfTeams; i++) {
                teamNamesList.push(teamList[i].firstChild.wholeText);
            }
            basicFunctions.shuffle(teamNamesList); // shuffling teams
            
            let robin = require ("roundrobin"); // call for algorythm
            let readyShedule = robin(numberOfTeams, teamNamesList); // using algorythm
            return readyShedule;
        };
