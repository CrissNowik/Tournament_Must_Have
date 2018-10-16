import { domElems } from "./domElems";
import { globalVariables } from "./globalVariables";
import { showIt } from "./showIt";

export function showSheduleCup(sheduleArray, numberOfTeams) {
    let roundCounter = 1;
    let pairOnScreen = "";
    domElems.resultList.addClass("container");
    domElems.sheduleOnScreenA.addClass("col-12");
    domElems.sheduleOnScreenB.css('display', 'none');
    domElems.sheduleOnScreenC.css('display', 'none');
    domElems.sheduleOnScreenD.css('display', 'none');
    domElems.cupLadder.css('display', 'flex');
    domElems.btnPDFLadderSection.css('display', 'flex');


    function showingTwoFirstRoundsCup() {
        let repsR1 = sheduleArray[0].length;
        let repsR2 = Math.ceil(sheduleArray[0].length / 2);
        let idLeft = "";
        let idRight = "";
        let teamOne = "";
        let teamTwo = "";
        //Round 1   
        showIt.showHeader(domElems.sheduleOnScreenA, roundCounter);
        for (let i = 0; i < repsR1; i++) {
            idLeft = globalVariables.idCharArr[i] + "1";
            idRight = globalVariables.idCharArr[i] + "2";
            teamOne = sheduleArray[0][i][0];
            teamTwo = sheduleArray[0][i][1];
            pairOnScreen = sheduleArray[0][i].join(` ${idLeft}` + " ___ - ___ " + `${idRight}`);
            showIt.showLadderRectR1(domElems.ladder_round1, idLeft, idRight, teamOne, teamTwo);
            showIt.showMatch(domElems.sheduleOnScreenA, pairOnScreen);
        }
        let amount = (sheduleArray[0].length * 2) / 2;
        showIt.showLinesR1(domElems.line_container1, amount, 1);
        roundCounter++;

        //Round 2
        showIt.showHeader(domElems.sheduleOnScreenA, roundCounter);
        if (numberOfTeams === 3 || numberOfTeams === 4) {
            for (let k = 0; k < repsR2; k++) {
                pairOnScreen = sheduleArray[1].join(" ___ - ___ ");
                showIt.showMatch(domElems.sheduleOnScreenA, pairOnScreen);
                showIt.showChamp(domElems.sheduleOnScreenA);
                showIt.showChampRect(domElems.ladder_round3, 3, "a");
            }
            let howMany = (sheduleArray[0].length * 2) / 2;
            showIt.showLadderRect(domElems.ladder_round2, 2, howMany, sheduleArray[1], sheduleArray[0], numberOfTeams);
            let amount = sheduleArray[0].length / 2;
            showIt.showLines(domElems.line_container2, amount, 2, sheduleArray[1], numberOfTeams);
        } else {
            for (let k = 0; k < repsR2; k++) {
                pairOnScreen = sheduleArray[1][k].join(" ___ - ___ ");
                showIt.showMatch(domElems.sheduleOnScreenA, pairOnScreen);
            }
            let howMany = (sheduleArray[0].length * 2) / 2;
            showIt.showLadderRect(domElems.ladder_round2, 2, howMany, sheduleArray[1], sheduleArray[0], numberOfTeams);
            let amount = sheduleArray[0].length / 2;
            showIt.showLines(domElems.line_container2, amount, 2, sheduleArray[1], numberOfTeams);
        }
        roundCounter++;
    };

    if (numberOfTeams < 5) {
        showingTwoFirstRoundsCup();
    } else if (numberOfTeams > 4) {
        showingTwoFirstRoundsCup();
        //Round 3
        let repsR3 = Math.ceil(sheduleArray[1].length / 2);

        showIt.showHeader(domElems.sheduleOnScreenA, roundCounter);
        if (numberOfTeams > 4 && numberOfTeams < 9) {
            for (let l = 0; l < repsR3; l++) {
                pairOnScreen = sheduleArray[2].join(" ___ - ___ ");
                showIt.showMatch(domElems.sheduleOnScreenA, pairOnScreen);
                showIt.showChamp(domElems.sheduleOnScreenA);
            }
            let howMany = (sheduleArray[1].length * 2) / 2;
            showIt.showLadderRect(domElems.ladder_round3, 3, howMany, sheduleArray[2], sheduleArray[1], numberOfTeams);

            if (numberOfTeams === 5 || numberOfTeams === 6) {
                showIt.showChampRect(domElems.ladder_round4, 4, "a");
                let amount = sheduleArray[1].length / 2;
                showIt.showLines(domElems.line_container3, amount, 3, sheduleArray[2], numberOfTeams);
            } else if (numberOfTeams === 7 || numberOfTeams === 8) {
                showIt.showChampRect(domElems.ladder_round4, 4, "b");
                let amount = sheduleArray[1].length / 2;
                showIt.showLines(domElems.line_container3, amount, 3, sheduleArray[2], numberOfTeams);
            }
            roundCounter++;
        } else if (numberOfTeams > 8 && numberOfTeams < 33) {
            for (let l = 0; l < repsR3; l++) {
                pairOnScreen = sheduleArray[2][l].join(" ___ - ___ ");
                showIt.showMatch(domElems.sheduleOnScreenA, pairOnScreen);
            }
            let howMany = (sheduleArray[1].length * 2) / 2;
            showIt.showLadderRect(domElems.ladder_round3, 3, howMany, sheduleArray[2], sheduleArray[1], numberOfTeams);
            let amount = sheduleArray[1].length / 2;
            showIt.showLines(domElems.line_container3, amount, 3, sheduleArray[2], numberOfTeams);
            roundCounter++;
            // Round 4
            let repsR4 = Math.ceil(sheduleArray[2].length / 2);

            showIt.showHeader(domElems.sheduleOnScreenA, roundCounter);
            if (numberOfTeams > 8 && numberOfTeams < 17) {
                for (let n = 0; n < repsR4; n++) {
                    pairOnScreen = sheduleArray[3].join(" ___ - ___ ");
                    showIt.showMatch(domElems.sheduleOnScreenA, pairOnScreen);
                    showIt.showChamp(domElems.sheduleOnScreenA);
                }
                let howMany = (sheduleArray[2].length * 2) / 2;
                showIt.showLadderRect(domElems.ladder_round4, 4, howMany, sheduleArray[3], sheduleArray[2], numberOfTeams);
                if (numberOfTeams > 8 && numberOfTeams < 13) {
                    showIt.showChampRect(domElems.ladder_round5, 5, "a");
                } else if (numberOfTeams > 12 && numberOfTeams < 17) {
                    let amount = sheduleArray[2].length / 2;
                    showIt.showChampRect(domElems.ladder_round5, 5, "b");
                    showIt.showLines(domElems.line_container5, amount, 5, sheduleArray[3], numberOfTeams);
                }
                let amount = sheduleArray[2].length / 2;
                showIt.showLines(domElems.line_container4, amount, 4, sheduleArray[3], numberOfTeams);
            } else if (numberOfTeams > 16) {
                for (let n = 0; n < repsR4; n++) {
                    pairOnScreen = sheduleArray[3][n].join(" ___ - ___ ");
                    showIt.showMatch(domElems.sheduleOnScreenA, pairOnScreen);
                }
                let howMany = (sheduleArray[2].length * 2) / 2;
                showIt.showLadderRect(domElems.ladder_round4, 4, howMany, sheduleArray[3], sheduleArray[2], numberOfTeams);
                let amount = sheduleArray[3].length / 2;
                showIt.showLines(domElems.line_container5, amount, 5, sheduleArray[4], numberOfTeams);
                roundCounter++;
                // Round 5
                let repsR5 = Math.ceil(sheduleArray[3].length / 2);

                showIt.showHeader(domElems.sheduleOnScreenA, roundCounter);
                for (let o = 0; o < repsR5; o++) {
                    pairOnScreen = sheduleArray[4].join(" ___ - ___ ");
                    showIt.showMatch(domElems.sheduleOnScreenA, pairOnScreen);
                    showIt.showChamp(domElems.sheduleOnScreenA);
                }
                let many = (sheduleArray[3].length * 2) / 2;
                showIt.showLadderRect(domElems.ladder_round5, 5, many, sheduleArray[4], sheduleArray[3], numberOfTeams);
                if (numberOfTeams === 17 || numberOfTeams === 18) {
                    showIt.showChampRect(domElems.ladder_round6, 6, "a");
                    showIt.showLines(domElems.line_container6, amount, 6, sheduleArray[4], numberOfTeams);
                    showIt.specialLine(domElems.line_container5, 1, "a");
                } else if (numberOfTeams === 19 || numberOfTeams === 20) {
                    showIt.showChampRect(domElems.ladder_round6, 6, "b");
                    showIt.showLines(domElems.line_container6, amount, 6, sheduleArray[4], numberOfTeams);
                    showIt.specialLine(domElems.line_container5, 1, "b");
                } else if (numberOfTeams > 20 && numberOfTeams < 25) {
                    showIt.showChampRect(domElems.ladder_round6, 6, "c");
                    showIt.showLines(domElems.line_container6, amount, 6, sheduleArray[4], numberOfTeams);
                    showIt.specialLine(domElems.line_container5, 1, "spec");
                    if (numberOfTeams === 21 || numberOfTeams === 22) {
                        domElems.line_container5.find("div.result__ladder_luckyLine5spec").css({
                            "margin-top": "333px"
                        });
                    } else if (numberOfTeams === 23 || numberOfTeams === 24) {
                        domElems.line_container5.find("div.result__ladder_luckyLine5spec").css({
                            "margin-top": "373px"
                        });
                    }
                } else if (numberOfTeams === 25 || numberOfTeams === 26) {
                    showIt.showChampRect(domElems.ladder_round6, 6, "d");
                    showIt.showLines(domElems.line_container6, amount, 6, sheduleArray[4], numberOfTeams);
                    showIt.specialLine(domElems.line_container5, 1, "specA");
                    domElems.line_container5.find("div.result__ladder_luckyLine5specA").css({
                        "height": "400px"
                    });
                } else if (numberOfTeams === 27 || numberOfTeams === 28) {
                    showIt.showChampRect(domElems.ladder_round6, 6, "d");
                    showIt.showLines(domElems.line_container6, amount, 6, sheduleArray[4], numberOfTeams);
                    showIt.specialLine(domElems.line_container5, 1, "specA");
                    domElems.line_container5.find("div.result__ladder_luckyLine5specA").css({
                        "height": "480px"
                    });
                } else {
                    showIt.showChampRect(domElems.ladder_round6, 6, "e");
                    showIt.showLines(domElems.line_container6, amount, 6, sheduleArray[4], numberOfTeams);
                    showIt.specialLine(domElems.line_container5, 1, "specA")
                    domElems.line_container5.find("div.result__ladder_luckyLine5specA").css({
                        "height": "640",
                        "margin-left": "-166px"
                    });
                }
            }
        }

    }
    /**
     * cutBottomMargins - function for cutting bottom margins of the rectangles which are last in column
     *                      it give us more consistent look of the website
     *
     * @param {number} round - ladder round number
     * @param {string} container - name of the last rectangle where margin bottom will be cut
     */

    function cutBottomMargins(round, container) {
        if (container === "result__ladder_rectR4" ||
            container === "result__ladder_rectR4a" ||
            container === "result__ladder_rectR5" ||
            container === "result__ladder_rectR5a" ||
            container === "result__ladder_rectR5b" ||
            container === "result__ladder_rectR5c" ||
            container === "result__ladder_rectR5d" ||
            container === "result__ladder_rectR5e" ||
            container === "result__ladder_rectR3" ||
            container === "result__ladder_rectR3c"
        ) {
            let rectangle = $(`#ladder_round${round} :nth-last-child(1)`);
            rectangle.css("margin-bottom", "20px");
        }
    };

    if (numberOfTeams < 7) {
        let ulR3 = $('#ladder_round3')[0].lastElementChild.className;
        cutBottomMargins(3, ulR3);
    } else if (numberOfTeams > 6 && numberOfTeams < 17) {
        let ulR3 = $('#ladder_round3')[0].lastElementChild.className;
        let ulR4 = $('#ladder_round4')[0].lastElementChild.className;
        cutBottomMargins(3, ulR3);
        cutBottomMargins(4, ulR4);
    } else if (numberOfTeams > 16) {
        let ulR3 = $('#ladder_round3')[0].lastElementChild.className;
        let ulR4 = $('#ladder_round4')[0].lastElementChild.className;
        let ulR5 = $('#ladder_round5')[0].lastElementChild.className;
        cutBottomMargins(3, ulR3);
        cutBottomMargins(4, ulR4);
        cutBottomMargins(5, ulR5);
    }
};