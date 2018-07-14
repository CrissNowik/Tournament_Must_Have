import { domElems } from "./domElems";
import { globalVariables } from "./globalVariables";
import { leagueGenerator } from "./leagueGenerator";
import { cupGenerator } from "./cupGenerator";
import { mixGenerator } from "./mixGenerator";

export let basicFunctions = {
    randomizer: function (teamList) {
                    teamList.sort(function(a, b){
                        return 0.5 - Math.random()
                    });     
                },
    switchingVisibility: function (toHide, toShow) {
                            toHide.hide();
                            toShow.show();
                        },
            
    gettingTeams: function () {
                    let newTeam = domElems.teamInput.val();
                    if (domElems.teamList.children().length > 1){
                        domElems.collectorAlertB.hide();
                    }
                    if (newTeam != "") {
                        let counter = globalVariables.dataCounter++;
                        this.switchingVisibility(domElems.collectorAlertA, domElems.teamList);
                        domElems.teamList.append(
                            `<li class="collector__listItem" data-nr="${counter}"> ${newTeam}<button class="collector__del" type="button">X</button></li>`);
                    } else {
                        domElems.collectorAlertA.show();
                    }
                },
    choosingTournamentType: function (tournamentType) {
                    let teamList = domElems.teamList.children();
                    if (tournamentType === 'League') {
                        leagueGenerator(teamList);
                    } else if (tournamentType === 'Cup') {
                        cupGenerator();
                    } else {
                        mixGenerator();
                    }
                }
}