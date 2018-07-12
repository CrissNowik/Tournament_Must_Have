$(document).ready(function(){
    
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
            teamOnList: $('collector__listItem')
    }                             
    
    //globalVariables store
    // 
    let globalVariables = {
            dataCounter: 0
    }
    
    //Functions 
    //
    function switchingScreens (toHide,toShow){
        toHide.hide();
        toShow.show();
    };

    function gettingTeams() {
        let newTeam = domElems.teamInput.val();
        if (newTeam != "") {
            let counter = globalVariables.dataCounter++;
            
            domElems.teamList.append(
                `<li class="collector__listItem" data-nr="${counter}"> ${newTeam}<button class="collector__del" type="button">X</button></li>`);     
        } else {
            alert("Name a team");
        }
        
    };

    function choosingTournamentType(tournamentType) {
        if (tournamentType === 'League') {
            leagueGenerator();
        } else if (tournamentType === 'Cup') {
            cupGenerator();
        } else {
            mixGenerator();
        } 
    };

    function leagueGenerator() {
        console.log("LIGA");
        
    };

    function cupGenerator() {
        console.log("CUP");
        
    };
    function mixGenerator() {
        console.log("MIX");
        
    };
    
    //Removing teams from list
    //
    domElems.teamList.on('click', 'li.collector__listItem>button.collector__del', function(e){
        e.preventDefault();     
        $(this).parent().remove();
    });
    
    //Function calls on elems
    //
    domElems.btnConfirm.on('click', function(e){
        e.preventDefault();
        switchingScreens(domElems.naviScreen,domElems.collector);
    });

    domElems.btnGenerate.on('click', function(e){
        e.preventDefault();
        if (domElems.teamList.children().length > 2) {
            let selectedTeam = $('#collector__select :selected').val();
            switchingScreens(domElems.collector,domElems.result);
            choosingTournamentType(selectedTeam);
        } else {
            alert("You need at least 3 teams!");
        }
        
    });

    domElems.btnAdd.bind('click keypress', function(e){
        e.preventDefault();
        let code = e.keyCode || e.which;
        if (code === 13 || e.type === 'click') {
            gettingTeams();
        };  
    });

    domElems.teamInput.on('keypress', function(e){
        let code = e.keyCode || e.which;
        if (code === 13) {
            e.preventDefault();
            gettingTeams();
        };  
    });
});