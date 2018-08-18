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
    showLadderRect: function (where, roundNumber, howMany, isLucky) {
        let lastArrayElem = isLucky.length-1;
        let decision = isLucky[lastArrayElem].indexOf(" Lucky Team");
        if (decision !== -1) {
            for (let i = 0; i < howMany-2; i++) {
                where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                console.log("showLadderRect LUCKY")
            }
            where.append(`<li class="result__ladder_rectRaL${roundNumber}"></li>`);
            where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
        } else {
            for (let i = 0; i < howMany; i++) {
                where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                console.log("showLadderRect")
            }
        }
    },
    showChampRect: function (where, roundNumber) {
        where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
    }
}