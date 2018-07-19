import { domElems } from "./domElems";
import { globalVariables } from "./globalVariables";
import { leagueGenerator } from "./leagueGenerator";
import { cupGenerator } from "./cupGenerator";
import { mixGenerator } from "./mixGenerator";
import { showShedule } from "./showShedule";


export let basicFunctions = {
    shuffle: function (teamList) {
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
                    if (domElems.teamList.children().length > 30){
                        domElems.collectorAlertD.show();
                        domElems.teamInput.attr('disabled', true);
                    }
                    if (newTeam != "") {
                        let counter = globalVariables.dataCounter++;
                        this.switchingVisibility(domElems.collectorAlertA, domElems.teamList);
                        domElems.teamList.append(
                            `<li class="collector__listItem" id="collector__listItem" data-nr="${counter}"> ${newTeam}<button class="collector__del" type="button">X</button></li>`);
                    } else {
                        domElems.collectorAlertA.show();
                    }
                },
    choosingTournamentType: function (tournamentType) {
                    let teamList = domElems.teamList.children();
                    
                    if (tournamentType === 'League') {
                        let readySheduleLeague = leagueGenerator(teamList);                        
                        showShedule(readySheduleLeague);
                    } else if (tournamentType === 'Cup') {
                        cupGenerator();
                    } else {
                        mixGenerator();
                    }
                },
    randomWithoutRepeat: function(howMuch, range) {     
        // wypełnienie tablicy
        let numbers = new Array(range);
        for (let i=0; i<range; i++) {
           numbers[i] = i + 1;
        }
        // losowanie howMuch liczb
        for (let i=0; i<howMuch; i++) {
           let rand = Math.floor(Math.random()*range);
           console.log("wylosowano: ", numbers[rand]);
           numbers[rand] = numbers[range - 1];
           range--;
        }
     }
}