$(document).ready(function () {

    //DOM elements store
    //
    let domElems = {
        btnGenerate: $('.collector__generate'),
        btnConfirm: $('.nav__confirm'),
        collector: $('.collector'),
        naviScreen: $('.nav'),
        result: $('.result'),
        btnAdd: $('.collector__add'),
        teamList: $('.collector__list'),
        teamInput: $('.collector__input'),
        teamOnList: $('.collector__listItem'),
        collectorAlertA: $('#alertOne'),
        collectorAlertB: $('#alertTwo')
    }

    //globalVariables store
    // 
    let globalVariables = {
        dataCounter: 0
    }

    //Functions 
    //
    function switchingVisibility(toHide, toShow) {
        toHide.hide();
        toShow.show();
    };

    function gettingTeams() {
        let newTeam = domElems.teamInput.val();

        if (domElems.teamList.children().length > 1){
            domElems.collectorAlertB.hide();
        }
        
        if (newTeam != "") {
            let counter = globalVariables.dataCounter++;
            switchingVisibility(domElems.collectorAlertA, domElems.teamList);
            domElems.teamList.append(
                `<li class="collector__listItem" data-nr="${counter}"> ${newTeam}<button class="collector__del" type="button">X</button></li>`);
        } else {
            domElems.collectorAlertA.show();
        }

    };

    function randomizer(teamList) {
        teamList.sort(function(a, b){
            return 0.5 - Math.random()
        });     
    }

    function choosingTournamentType(tournamentType) {
        let teamList = domElems.teamList.children();
       
        if (tournamentType === 'League') {
            leagueGenerator(teamList);
        } else if (tournamentType === 'Cup') {
            cupGenerator();
        } else {
            mixGenerator();
        }
    };

    function leagueGenerator(teamList) {
        console.log("LIGA");
        let numberOfTeams = teamList.length;
        randomizer(teamList);

        if (numberOfTeams % 2 === 0) {
            let matchesPerRound = numberOfTeams / 2;
            let listMiddle = numberOfTeams / 2;
            let hosts = teamList.slice(0,listMiddle);
            let guests = teamList.slice(listMiddle);
            
            
        } else {
            let matchesPerRound = (numberOfTeams + 1) / 2;
            console.log(matchesPerRound, "nieparzysta");
            
            
        }
    };

    function cupGenerator() {
        console.log("CUP");

    };

    function mixGenerator() {
        console.log("MIX");

    };

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
        switchingVisibility(domElems.naviScreen, domElems.collector);
    });

    domElems.btnGenerate.on('click', function (e) {
        e.preventDefault();
        if (domElems.teamList.children().length > 2) {
            switchingVisibility(domElems.collectorAlertB, domElems.result);
            let selectedTeam = $('#collector__select :selected').val();
            switchingVisibility(domElems.collector, domElems.result);
            choosingTournamentType(selectedTeam);
        } else {
            domElems.collectorAlertB.show();
        }

    });

    domElems.btnAdd.bind('click keypress', function (e) {
        e.preventDefault();
        let code = e.keyCode || e.which;
        if (code === 13 || e.type === 'click') {
            gettingTeams();
        };
    });

    domElems.teamInput.on('keypress', function (e) {
        let code = e.keyCode || e.which;
        if (code === 13) {
            e.preventDefault();
            gettingTeams();
        };
    });
});