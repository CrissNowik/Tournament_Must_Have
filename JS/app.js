$(document).ready(function(){

    let btnConfirm = $('.nav__confirm');
    let btnGenerate = $('.collector__generate');

    //TO REFACTOR 
    btnConfirm.on('click', function(e){
        e.preventDefault();
        let collector = $('.collector');
        let naviScreen = $('.nav');
        naviScreen.hide();
        collector.show();
    });
   
    btnGenerate.on('click', function(e){
        e.preventDefault();
        let result = $('.result');
        let collector = $('.collector');
        result.show();
        collector.hide();
    });

});