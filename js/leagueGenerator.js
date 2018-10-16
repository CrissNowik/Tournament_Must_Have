import { basicFunctions } from "./basicFunctions";
import { roundrobin } from "./roundrobin";


export function leagueGenerator(teamList) {
    let numberOfTeams = teamList.length;
    let teamNamesList = basicFunctions.gettingTeamNames(teamList, numberOfTeams);
    basicFunctions.shuffle(teamNamesList); // shuffling teams
    let readyShedule = roundrobin(numberOfTeams, teamNamesList);

    return readyShedule;
};
