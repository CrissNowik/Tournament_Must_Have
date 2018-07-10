$(document).ready(function(){

    let domElems = {
        btnGenerate: $('.collector__generate'),
        btnConfirm: $('.nav__confirm'),
        collector: $('.collector'),
        naviScreen: $('.nav'),
        result: $('.result'),
        btnAdd: $('.collector__add'),
        teamList: $('.collector__list'),
        teamInput: $('.collector__input'),
        btnDel: $('.collector__del')
    }

    function switchingScreens (toHide,toShow){
        toHide.hide();
        toShow.show();
    };

    function getTeams() {
        let newTeam = domElems.teamInput.val();
        domElems.teamList.append(`<li> ${newTeam} </li>`);
        // TODO
        // button in each li for removing it from list
    };



    domElems.btnConfirm.on('click', function(e){
        e.preventDefault();
        switchingScreens(domElems.naviScreen,domElems.collector);
    });
    domElems.btnGenerate.on('click', function(e){
        e.preventDefault();
        switchingScreens(domElems.collector,domElems.result);
    });

    domElems.btnAdd.on('click', function(e){
        e.preventDefault();
        getTeams();
    });

  


 
});