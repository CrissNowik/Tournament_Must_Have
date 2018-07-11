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
        teamOnList: $('collector__listItem')
    }    
    
    function switchingScreens (toHide,toShow){
        toHide.hide();
        toShow.show();
    };


    // TO DO - id for each li
    function getTeams(count) {
        console.log(count);
        
        let newTeam = domElems.teamInput.val();
        domElems.teamList.append(
            `<li class="collector__listItem" data-nr="${count.lenght}"> ${newTeam} ${count.lenght}
                <button class="collector__del" type="button">
                X
                </button> 
            </li>`);     
    };

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
            getTeams();
        };  
    });

    domElems.teamInput.on('keypress', function(e){
        let code = e.keyCode || e.which;
        if (code === 13) {
            e.preventDefault();
            getTeams();
        };  
    });

    domElems.teamList.on('click', 'li.collector__listItem>button.collector__del', function(e){
        e.preventDefault();     
        $(this).parent().remove();
    });
  

 
});