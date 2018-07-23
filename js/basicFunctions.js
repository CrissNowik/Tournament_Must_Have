import { domElems } from "./domElems";
import { globalVariables } from "./globalVariables";
import { leagueGenerator } from "./leagueGenerator";
import { cupGenerator } from "./cupGenerator";
import { mixGenerator } from "./mixGenerator";
import { showSheduleLeague } from "./showSheduleLeague";
import { showSheduleCup } from "./showSheduleCup";


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
                    if (domElems.teamList.children().length > 1){ // generator validation
                        domElems.collectorAlertB.hide();
                    }
                    if (domElems.teamList.children().length > 30){ // number of teams validation
                        domElems.collectorAlertD.show();
                        domElems.teamInput.attr('disabled', true);
                    } 
                    if (newTeam != "" && newTeam.length < 26) { // input content validation
                        let counter = globalVariables.dataCounter++;
                        this.switchingVisibility(domElems.collectorAlertA, domElems.teamList);
                        this.switchingVisibility(domElems.collectorAlertC, domElems.teamList);
                        domElems.teamList.append(
                            `<li class="collector__listItem" id="collector__listItem" data-nr="${counter}"> ${newTeam}<button class="collector__del" type="button">X</button></li>`);
                        domElems.teamInput.val("");
                    } else if (newTeam === ""){
                        domElems.collectorAlertA.show();
                    } else {
                        domElems.collectorAlertC.show();
                    }
                },
    choosingTournamentType: function (tournamentType) {
                    let teamList = domElems.teamList.children();
                    
                    if (tournamentType === 'League') {
                        let readySheduleLeague = leagueGenerator(teamList);
                        showSheduleLeague(readySheduleLeague);
                    } else if (tournamentType === 'Cup') {
                        let sheduleRound1 = cupGenerator(teamList);
                        showSheduleCup(sheduleRound1);
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
     },
     gettingTeamNames: function(teamList, numberOfTeams){
        let teamNamesList = [];

        for (let i = 0; i < numberOfTeams; i++) {
            teamNamesList.push(teamList[i].firstChild.wholeText);
        }
        return teamNamesList;
     },
     pairing: function (teamNamesList, numberOfTeams) {
         let pairsReadyToShow = [];
         let rep = Math.ceil(numberOfTeams/2);

         if (numberOfTeams % 2 === 0) {
            for (let i = 0; i < rep; i++) {
               let array = teamNamesList.slice(0,2);
               teamNamesList.splice(0,2);
               pairsReadyToShow.push(array);
             }
         } else {
             let teams = teamNamesList;
             teams.push(" Lucky");
             for (let i = 0; i < rep; i++) {
                let array = teams.slice(0,2);
                teams.splice(0,2);
                pairsReadyToShow.push(array);
              }
         }
        return pairsReadyToShow;
     }
}