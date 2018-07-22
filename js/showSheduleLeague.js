import { domElems } from "./domElems";

export function showSheduleLeague(readyShedule) {        
       for (let i = 0; i < readyShedule.length; i++) {
           let roundCounter = 1 + i;
           let gameCounter = 0;

           if (roundCounter<=8) {
            domElems.sheduleOnScreenA.append(
                `<ul class="result__listItem--roundHeader">Round nr ${roundCounter}</ul>`);    
            } else if ( 8<=roundCounter && roundCounter<=16) {
                domElems.sheduleOnScreenB.append(
                    `<ul class="result__listItem--roundHeader">Round nr ${roundCounter}</ul>`);
            } else if (17<=roundCounter&& roundCounter<=24){
                domElems.sheduleOnScreenC.append(
                    `<ul class="result__listItem--roundHeader">Round nr ${roundCounter}</ul>`);
            } else {
                domElems.sheduleOnScreenD.append(
                    `<ul class="result__listItem--roundHeader">Round nr ${roundCounter}</ul>`);
            }

            for (let j = 0; j < readyShedule[i].length; j++) {
                let newPair = readyShedule[i][j];
                let pairOnScreen = newPair.join(" ___ - ___ ");

                if (roundCounter<=8) {
                    domElems.sheduleOnScreenA.append(
                        `<li class="result__listItem">${pairOnScreen}</li>`); 
                } else if ( 8<=roundCounter && roundCounter<=16) {
                    gameCounter = domElems.sheduleOnScreenA.find('li').length + 1;
                    domElems.sheduleOnScreenB.attr('start', `${gameCounter}`);
                    domElems.sheduleOnScreenB.append(
                        `<li class="result__listItem">${pairOnScreen}</li>`); 
                } else if (17<=roundCounter&& roundCounter<=24){
                    gameCounter = (domElems.sheduleOnScreenB.find('li').length)*2 + 1;
                    domElems.sheduleOnScreenC.attr('start', `${gameCounter}`);
                    domElems.sheduleOnScreenC.append(
                       `<li class="result__listItem">${pairOnScreen}</li>`); 
                } else {
                    gameCounter = (domElems.sheduleOnScreenC.find('li').length)*3 + 1;
                    domElems.sheduleOnScreenD.attr('start', `${gameCounter}`);
                    domElems.sheduleOnScreenD.append(
                        `<li class="result__listItem">${pairOnScreen}</li>`); 
                }
            }    
       }
         
};