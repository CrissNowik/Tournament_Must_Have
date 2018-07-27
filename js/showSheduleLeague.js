import { domElems } from "./domElems";
import { basicFunctions } from "./basicFunctions";

export function showSheduleLeague(readyShedule) {        
       for (let i = 0; i < readyShedule.length; i++) {
           let roundCounter = 1 + i;
           let gameCounter = 0;
            console.log("showSheduleLeague");
            
           if (roundCounter<=8) {
                basicFunctions.showHeader(domElems.sheduleOnScreenA, roundCounter);
            } else if ( 8<=roundCounter && roundCounter<=16) {
                basicFunctions.showHeader(domElems.sheduleOnScreenB, roundCounter);
            } else if (17<=roundCounter&& roundCounter<=24){
                basicFunctions.showHeader(domElems.sheduleOnScreenC, roundCounter);
            } else {
                basicFunctions.showHeader(domElems.sheduleOnScreenD, roundCounter);
            }

            for (let j = 0; j < readyShedule[i].length; j++) {
                let newPair = readyShedule[i][j];
                let pairOnScreen = newPair.join(" ___ - ___ ");

                if (roundCounter<=8) {
                    basicFunctions.showMatch(domElems.sheduleOnScreenA, pairOnScreen); 
                } else if ( 8<=roundCounter && roundCounter<=16) {
                    gameCounter = domElems.sheduleOnScreenA.find('li').length + 1;
                    domElems.sheduleOnScreenB.attr('start', `${gameCounter}`);
                    basicFunctions.showMatch(domElems.sheduleOnScreenB, pairOnScreen);
                } else if (17<=roundCounter&& roundCounter<=24){
                    gameCounter = (domElems.sheduleOnScreenB.find('li').length)*2 + 1;
                    domElems.sheduleOnScreenC.attr('start', `${gameCounter}`);
                    basicFunctions.showMatch(domElems.sheduleOnScreenC, pairOnScreen);
                } else {
                    gameCounter = (domElems.sheduleOnScreenC.find('li').length)*3 + 1;
                    domElems.sheduleOnScreenD.attr('start', `${gameCounter}`);
                    basicFunctions.showMatch(domElems.sheduleOnScreenD, pairOnScreen);
                }
            }    
       }
         
};