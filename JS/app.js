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
            teamOnList: $('collector__listItem'),
            btnGenerate: $('.collector__generate'),
            selectedTournamentType: $('#collector__select.children :selected').val()
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
        let counter = globalVariables.dataCounter ++;
        let newTeam = domElems.teamInput.val();
        domElems.teamList.append(
            `<li class="collector__listItem" data-nr="${counter}"> ${newTeam}
                <button class="collector__del" type="button">
                X
                </button> 
            </li>`);     
    };

    function choosingTournamentType(tournamentType) {
        if (tournamentType === 'League') {
            leagueGenerator();
        } else if (tournamentType === 'Cup') {
            cupGenerator();
        } else {
            mixGenerator();
        } 
    }

    function leagueGenerator() {
        console.log("LIGA");
        
    }

    function cupGenerator() {
        console.log("CUP");
        
    }
    function mixGenerator() {
        console.log("MIX");
        
    }
    
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
        switchingScreens(domElems.collector,domElems.result);
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
    
    domElems.btnGenerate.on('click', function(e){
        e.preventDefault();     
        console.log("na przycisku: ", domElems.selectedTournamentType);
        
        choosingTournamentType(domElems.selectedTournamentType);
    })
});