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
    showLadderRect: function (where, roundNumber) {
        where.append(`<li class="result__ladder_rectR${roundNumber}"></li><li class="result__ladder_rectR${roundNumber}"></li>`);
    },
    showChampRect: function (where, roundNumber) {
        where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
    }
}