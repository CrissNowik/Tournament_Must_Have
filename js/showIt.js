import { globalVariables } from "./globalVariables";

export let showIt = {
    showAndHide: function (toHide, toShow) {
        toHide.hide();
        toShow.show();
    },
    showHeader: function (where, roundCounter) {
        where.append(`<ul class="result__listItem--roundHeader">Round nr ${roundCounter}</ul>`)
    },
    showChamp: function (where) {
        where.append(`<ul class="result__listItem--roundHeader">Champion:</ul><li class="result__champ">${globalVariables.empty}</li>`);
    },
    showMatch: function(where, pairOnScreen){
        where.append(`<li class="result__listItem">${pairOnScreen}</li>`);
    },
    showLadderRectR1: function (where, idLeft, idRight, teamOne, teamTwo){
        where.append(`<li class="result__ladder_rect">${idLeft}${teamOne}</li><li class="result__ladder_rect">${idRight}${teamTwo}</li>`);
    },
     /**
     * showLadderRect - main function of drawing rectangles in ladder
     * ---------------
     * params:
     *    where - <domElem> where created rectangle should be placed
     *    roundNumber - <number> used in creating proper class name for sass
     *    howMany - <number>how many rectangles function should create
     *    isLucky - <array> represents teams in current round, useful for state if there is lucky team
     *    luckyBefore - <array> represents teams in round before, useful for state if round before was lucky team
     * ---------------
     * how it works:
     *    1. check if there was lucky team round before and in current round
     *    2. create ladder rectangles with correct classes for suitable case 
     */
   
    showLadderRect: function (where, roundNumber, howMany, isLucky, luckyBefore) {
        let lastElemIsLucky = isLucky.length-1;
        let lastElemLuckyBefore = luckyBefore.length-1;
        let decision = isLucky[lastElemIsLucky].indexOf(" Lucky Team");
        let decisionBef = luckyBefore[lastElemLuckyBefore].indexOf(" Lucky Team");
        if (decisionBef !== -1 && decision !== -1) {
            for (let i = 0; i < howMany-2; i++) {                                          
                where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
            }
            where.append(`<li class="result__ladder_rectRaL${roundNumber}"></li>`);
            where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
            console.log(`${roundNumber}`,"showLadderRect + +")
        } else if (decisionBef === -1 && decision === -1) {
            for (let i = 0; i < howMany; i++) {                                            
                where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                }
                console.log(`${roundNumber}`,"showLadderRect - -")
        } else if (decisionBef !== -1 && decision === -1){
            for (let i = 0; i < howMany-2; i++) {
                where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
            }
            where.append(`<li class="result__ladder_rectRaL${roundNumber}"></li>`);
            where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
            console.log(`${roundNumber}`,"showLadderRect + -")
        } else if (decisionBef === -1 && decision !== -1){
            for (let i = 0; i < howMany; i++) {                                             
                where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
            }
            console.log(`${roundNumber}`,"showLadderRect - +")
        }
    },
    showChampRect: function (where, roundNumber) {
        where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
    }
}