import { domElems } from "./domElems";
import { basicFunctions } from "./basicFunctions";
import { showIt } from "./showIt";


$(document).ready(function () {
   
    // removing teams from list
    domElems.teamList.on('click', 'li#collector__listItem>button.collector__del', function (e) {
        e.preventDefault();
        $(this).parent().remove();
        if (domElems.teamInput.attr('disabled')) {
            domElems.teamInput.removeAttr('disabled');
        }
        //cup caution about Lucky team
        let selectedTournamentType = $('#collector__select :selected').val();
        if (domElems.teamList.children().length !== 4 && 
            domElems.teamList.children().length !== 8 && 
            domElems.teamList.children().length !== 16 && 
            domElems.teamList.children().length !== 32 && 
            selectedTournamentType === 'Cup') 
            {
                domElems.cupCaution.show();
            } else {
                domElems.cupCaution.hide();
            }
    });
    // creating new tournament
    domElems.btnConfirm.on('click', function (e) {
        e.preventDefault();
        showIt.showAndHide(domElems.naviScreen, domElems.collector);
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
            showIt.showAndHide(domElems.collectorAlertB, domElems.result);
            let selectedTournamentType = $('#collector__select :selected').val();
            showIt.showAndHide(domElems.collector, domElems.result);
            basicFunctions.choosingTournamentType(selectedTournamentType);
        } else {
            domElems.collectorAlertB.show();
        }
    });
});