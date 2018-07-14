import { domElems } from "./domElems";
import { basicFunctions } from "./basicFunctions";


$(document).ready(function () {

    //Removing teams from list
    //
    domElems.teamList.on('click', 'li.collector__listItem>button.collector__del', function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });

    //Function calls on elems
    //
    domElems.btnConfirm.on('click', function (e) {
        e.preventDefault();
        basicFunctions.switchingVisibility(domElems.naviScreen, domElems.collector);
    });

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

    domElems.btnAdd.bind('click keypress', function (e) {
        e.preventDefault();
        let code = e.keyCode || e.which;
        if (code === 13 || e.type === 'click') {
            basicFunctions.gettingTeams();
        };
    });

    domElems.teamInput.on('keypress', function (e) {
        let code = e.keyCode || e.which;
        if (code === 13) {
            e.preventDefault();
            basicFunctions.gettingTeams();
        };
    });
});