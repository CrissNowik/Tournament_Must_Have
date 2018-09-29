import { domElems } from "./domElems";
import { globalVariables } from "./globalVariables";
import { leagueGenerator } from "./leagueGenerator";
import { cupGenerator } from "./cupGenerator";
import { showSheduleLeague } from "./showSheduleLeague";
import { showSheduleCup } from "./showSheduleCup";
import { showIt } from "./showIt";

export let basicFunctions = {
    gettingTeams: function () {
            let newTeam = domElems.teamInput.val();
            let selectedTournamentType = $('#collector__select :selected').val();
            if (domElems.teamList.children().length > 1){ // generator validation
                domElems.collectorAlertB.hide();
                domElems.teamList.css({"display":"flex"});
            }
            if (domElems.teamList.children().length > 30){ // number of teams validation
                domElems.collectorAlertD.show();
                domElems.teamInput.attr('disabled', true);
            } 
            if (domElems.teamList.children().length !== 3 && //cup caution about Lucky team
                domElems.teamList.children().length !== 7 && 
                domElems.teamList.children().length !== 15 && 
                domElems.teamList.children().length !== 31 &&
                selectedTournamentType === 'Cup') 
                
            {
                domElems.cupCaution.show();
            } else {
                domElems.cupCaution.hide();
            }
            if (newTeam != "" && newTeam.length < 22) { // input content validation
                let counter = globalVariables.dataCounter++;
                showIt.showAndHide(domElems.collectorAlertA, domElems.teamList);
                showIt.showAndHide(domElems.collectorAlertC, domElems.teamList);
                domElems.teamList.append(
                    `<li class="collector__listItem" id="collector__listItem" data-nr="${counter}"> ${newTeam}<button class="collector__del" type="button"><p>X</p></button></li>`);
                domElems.teamInput.val("");
            } else if (newTeam === ""){
                domElems.collectorAlertA.show();
            } else {
                domElems.collectorAlertC.show();
            }
        },
    gettingTeamNames: function(teamList, numberOfTeams){
        let teamNamesList = [];

        for (let i = 0; i < numberOfTeams; i++) {
            teamNamesList.push(teamList[i].firstChild.wholeText);
        }
        return teamNamesList;
    },
    shuffle: function (teamList) {
        teamList.sort(function(a, b){
            return 0.5 - Math.random()
        });     
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
            teams.push(globalVariables.lucky);
            for (let i = 0; i < rep; i++) {
               let array = teams.slice(0,2);
               teams.splice(0,2);
               pairsReadyToShow.push(array);
             }
        }
       return pairsReadyToShow;
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
    generatePDF: function (params) {
        let doc = new jsPDF();
        doc.fromHTML($('#header').get(0), 20, 20, {'width': 500});
        doc.save("Testowy PDF21");
    }
}