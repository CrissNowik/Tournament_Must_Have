import { domElems } from "./domElems";
import { globalVariables } from "./globalVariables";
import { leagueGenerator } from "./leagueGenerator";
import { cupGenerator } from "./cupGenerator";
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
                    if (domElems.teamList.children().length !== 3 && //cup caution about Lucky team
                        domElems.teamList.children().length !== 7 && 
                        domElems.teamList.children().length !== 16 && 
                        domElems.teamList.children().length !== 31) 
                    {
                        domElems.cupCaution.show();
                    } else {
                        domElems.cupCaution.hide();
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
                    let numberOfCompetitors = teamList.length;
                    
                    if (tournamentType === 'League') {
                        let readySheduleLeague = leagueGenerator(teamList);
                        showSheduleLeague(readySheduleLeague);
                    } else if (tournamentType === 'Cup') {
                        if (numberOfCompetitors<5) { // 2 rounds
                            let sheduleToShowUp = cupGenerator(teamList);
                            showSheduleCup(sheduleToShowUp, numberOfCompetitors);
                        } else if (numberOfCompetitors > 4 && numberOfCompetitors < 9 ) { // 3 rounds
                            let sheduleToShowUp = cupGenerator(teamList);
                            showSheduleCup(sheduleToShowUp, numberOfCompetitors);
                        } else if (numberOfCompetitors > 8 && numberOfCompetitors < 17) { // 4 rounds
                            let sheduleToShowUp = cupGenerator(teamList);
                            showSheduleCup(sheduleToShowUp, numberOfCompetitors); 
                        } else { // 5 rounds
                            let sheduleToShowUp = cupGenerator(teamList);
                            showSheduleCup(sheduleToShowUp, numberOfCompetitors);
                        }
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
             teams.push(" Lucky Team");
             for (let i = 0; i < rep; i++) {
                let array = teams.slice(0,2);
                teams.splice(0,2);
                pairsReadyToShow.push(array);
              }
         }
        return pairsReadyToShow;
    },
     showHeader: function (where, roundCounter) {
        where.append(`<ul class="result__listItem--roundHeader">Round nr ${roundCounter}</ul>`)
    },
    showMatch: function(where, pairOnScreen){
        where.append(`<li class="result__listItem">${pairOnScreen}</li>`);
    }
}