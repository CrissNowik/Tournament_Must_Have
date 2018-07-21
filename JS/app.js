import { domElems } from "./domElems";
import { basicFunctions } from "./basicFunctions";


$(document).ready(function () {
    // removing teams from list
    domElems.teamList.on('click', 'li#collector__listItem>button.collector__del', function (e) {
        e.preventDefault();
        $(this).parent().remove();
        if (domElems.teamInput.attr('disabled')) {
            domElems.teamInput.removeAttr('disabled');
        }
        
    });
    // creating new tournament
    domElems.btnConfirm.on('click', function (e) {
        e.preventDefault();
        basicFunctions.switchingVisibility(domElems.naviScreen, domElems.collector);
    });
    // adding teams by button click
    domElems.btnAdd.bind('click keypress', function (e) {
        e.preventDefault();
        let code = e.keyCode || e.which;
        if (code === 13 || e.type === 'click') {
            basicFunctions.gettingTeams();
        };
    });
    // adding teams by keyboard
    domElems.teamInput.on('keypress', function (e) {
        let code = e.keyCode || e.which;
        if (code === 13) {
            e.preventDefault();
            basicFunctions.gettingTeams();
        };
    });
    // generating shedule 
    domElems.btnGenerate.on('click', function (e) {
        e.preventDefault();
        if (domElems.teamList.children().length > 2) {
            basicFunctions.switchingVisibility(domElems.collectorAlertB, domElems.result);
            let selectedTeam = $('#collector__select :selected').val();
            basicFunctions.switchingVisibility(domElems.collector, domElems.result);
            basicFunctions.choosingTournamentType(selectedTeam);
        } else {
            domElems.collectorAlertB.show();
        }
    });
});