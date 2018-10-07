import { domElems } from "./domElems";
import { showIt } from "./showIt";

export function showSheduleLeague(readyShedule) {      
       for (let i = 0; i < readyShedule.length; i++) {
           let roundCounter = 1 + i;
           let gameCounter = 0;
            console.log("showSheduleLeague", readyShedule);
            
           if (roundCounter<=8) {
                showIt.showHeader(domElems.sheduleOnScreenA, roundCounter);
                domElems.sheduleOnScreenA.addClass("col-12");  
            } else if ( 8<=roundCounter && roundCounter<=16) {
                showIt.showHeader(domElems.sheduleOnScreenB, roundCounter);
                domElems.sheduleOnScreenA.removeClass("col-12").addClass("col-6");
                domElems.sheduleOnScreenB.addClass("col-6");
            } else if (17<=roundCounter&& roundCounter<=24){
                showIt.showHeader(domElems.sheduleOnScreenC, roundCounter);
                domElems.sheduleOnScreenA.removeClass("col-12 col-6").addClass("col-4");
                domElems.sheduleOnScreenB.removeClass("col-6").addClass("col-4");
                domElems.sheduleOnScreenC.addClass("col-4");
            } else {
                showIt.showHeader(domElems.sheduleOnScreenD, roundCounter);
                domElems.sheduleOnScreenA.removeClass("col-12 col-6 col-4");
                domElems.sheduleOnScreenB.removeClass("col-6 col-4");
                domElems.sheduleOnScreenC.removeClass("col-4");
            }

            for (let j = 0; j < readyShedule[i].length; j++) {
                let newPair = readyShedule[i][j];
                let pairOnScreen = newPair.join(" ___ - ___ ");

                if (roundCounter<=8) {
                    showIt.showMatch(domElems.sheduleOnScreenA, pairOnScreen); 
                } else if ( 8<=roundCounter && roundCounter<=16) {
                    gameCounter = domElems.sheduleOnScreenA.find('li').length + 1;
                    domElems.sheduleOnScreenB.attr('start', `${gameCounter}`);
                    showIt.showMatch(domElems.sheduleOnScreenB, pairOnScreen);
                } else if (17<=roundCounter&& roundCounter<=24){
                    gameCounter = (domElems.sheduleOnScreenB.find('li').length)*2 + 1;
                    domElems.sheduleOnScreenC.attr('start', `${gameCounter}`);
                    showIt.showMatch(domElems.sheduleOnScreenC, pairOnScreen);
                } else {
                    gameCounter = (domElems.sheduleOnScreenC.find('li').length)*3 + 1;
                    domElems.sheduleOnScreenD.attr('start', `${gameCounter}`);
                    showIt.showMatch(domElems.sheduleOnScreenD, pairOnScreen);
                }
            }    
       }
         
};