    // import 'domElems' from 'elems';
    // console.log(domElems.btnConfirm);

$(document).ready(function(){

    function switchingScreens (toHide,toShow){
        toHide.hide();
        toShow.show();
    };

    domElems.btnConfirm.on('click', function(e){
        e.preventDefault();
        switchingScreens(domElems.naviScreen,domElems.collector);
    });
    domElems.btnGenerate.on('click', function(e){
        e.preventDefault();
        switchingScreens(domElems.collector,domElems.result);
    });

  


 
});