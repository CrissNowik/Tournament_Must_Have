/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
var domElems = exports.domElems = {
        logo: $('#header__logo'),
        naviScreen: $('#nav'),
        btnConfirm: $('#nav__confirm'),
        collector: $('#collector'),
        teamInput: $('#collector__input'),
        btnAdd: $('#collector__add'),
        btnGenerate: $('#collector__generate'),
        btnPDFShedule: $('#generatePDFplan'),
        btnPDFLadder: $('#generatePDFladder'),
        btnPDFLadderSection: $('#btnPDFLadderSection'),
        teamList: $('#collector__list'),
        teamOnList: $('#collector__listItem'),
        result: $('#result'),
        collectorAlertA: $('#alertOne'),
        collectorAlertB: $('#alertTwo'),
        collectorAlertC: $('#alertThree'),
        collectorAlertD: $('#alertFour'),
        resultList: $('#result_list'),
        sheduleOnScreenA: $('#result__listA'),
        sheduleOnScreenB: $('#result__listB'),
        sheduleOnScreenC: $('#result__listC'),
        sheduleOnScreenD: $('#result__listD'),
        cupCaution: $('#alertCup'),
        cupLadder: $('#result__lader'),
        ladder_round1: $('#ladder_round1'),
        ladder_round2: $('#ladder_round2'),
        ladder_round3: $('#ladder_round3'),
        ladder_round4: $('#ladder_round4'),
        ladder_round5: $('#ladder_round5'),
        ladder_round6: $('#ladder_round6'),
        line_container1: $('#line_contR1'),
        line_container2: $('#line_contR2'),
        line_container3: $('#line_contR3'),
        line_container4: $('#line_contR4'),
        line_container5: $('#line_contR5'),
        line_container6: $('#line_contR6')
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var globalVariables = exports.globalVariables = {
    dataCounter: 0,
    idCharArr: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"],
    empty: "  . . . . . . . . . . . . . .   ",
    lucky: " Lucky Team"
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showIt = undefined;

var _globalVariables = __webpack_require__(1);

var _domElems = __webpack_require__(0);

var showIt = exports.showIt = {
    showAndHide: function showAndHide(toHide, toShow) {
        toHide.hide();
        toShow.show().css({
            "display": "flex"
        });
    },
    showHeader: function showHeader(where, roundCounter) {
        where.append("<ul class=\"result__listItem--roundHeader\">Round nr " + roundCounter + "</ul>");
    },
    showChamp: function showChamp(where) {
        where.append("<ul class=\"result__listItem--roundHeader\">Champion:</ul><li class=\"result__champ\">" + _globalVariables.globalVariables.empty + "</li>");
    },
    showMatch: function showMatch(where, pairOnScreen) {
        where.append("<li class=\"result__listItem\"><p class=\"result__listItemTxt\">" + pairOnScreen + "</p></li>");
    },
    showLadderRectR1: function showLadderRectR1(where, idLeft, idRight, teamOne, teamTwo) {
        where.append("<li class=\"result__ladder_rect\">" + idLeft + teamOne + "</li><li class=\"result__ladder_rect\">" + idRight + teamTwo + "</li>");
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
     *    numberOfTeams - <number> represents how many teams starts competition - useful for "special" cases
     * ---------------
     * how it works:
     *    1. check if there was lucky team round before and in current round
     *    2. create ladder rectangles with correct classes for suitable case 
     */

    showLadderRect: function showLadderRect(where, roundNumber, howMany, isLucky, luckyBefore, numberOfTeams) {
        var lastElemIsLucky = isLucky.length - 1;
        var lastElemLuckyBefore = luckyBefore.length - 1;
        var decision = isLucky[lastElemIsLucky].indexOf(" Lucky Team");
        var decisionBef = luckyBefore[lastElemLuckyBefore].indexOf(" Lucky Team");
        if (decisionBef !== -1 && decision !== -1) {
            if (numberOfTeams === 19 || numberOfTeams === 20) {
                for (var i = 0; i < howMany - 2; i++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
                }
                where.append("<li class=\"result__ladder_rectRaL" + roundNumber + "a\"></li>");
                where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
            } else {
                for (var _i = 0; _i < howMany - 2; _i++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
                }
                where.append("<li class=\"result__ladder_rectRaL" + roundNumber + "\"></li>");
                where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
            }
        } else if (decisionBef === -1 && decision === -1) {
            if (numberOfTeams === 13 || numberOfTeams === 14) {
                for (var _i2 = 0; _i2 < howMany; _i2++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "a\"></li>");
                }
            } else if (numberOfTeams === 25 || numberOfTeams === 26) {
                for (var _i3 = 0; _i3 < howMany; _i3++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "d\"></li>");
                }
            } else if (numberOfTeams === 27 || numberOfTeams === 28) {
                for (var _i4 = 0; _i4 < howMany; _i4++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "e\"></li>");
                }
            } else {
                for (var _i5 = 0; _i5 < howMany; _i5++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
                }
            }
        } else if (decisionBef !== -1 && decision === -1) {
            if (numberOfTeams === 11 || numberOfTeams === 12) {
                for (var _i6 = 0; _i6 < howMany - 2; _i6++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
                }
                where.append("<li class=\"result__ladder_rectRaL" + roundNumber + "a\"></li>");
                where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
            } else if (numberOfTeams === 17 || numberOfTeams === 18) {
                for (var _i7 = 0; _i7 < howMany - 2; _i7++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
                }
                where.append("<li class=\"result__ladder_rectRaL" + roundNumber + "\"></li>");
                where.append("<li class=\"result__ladder_rectR" + roundNumber + "a\"></li>");
            } else if (numberOfTeams === 19 || numberOfTeams === 20) {
                for (var _i8 = 0; _i8 < howMany - 2; _i8++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
                }
                where.append("<li class=\"result__ladder_rectRaL" + roundNumber + "\"></li>");
                where.append("<li class=\"result__ladder_rectR" + roundNumber + "b\"></li>");
            } else if (numberOfTeams === 21 || numberOfTeams === 22) {
                for (var _i9 = 0; _i9 < howMany - 2; _i9++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
                }
                where.append("<li class=\"result__ladder_rectRaL" + roundNumber + "\"></li>");
                where.append("<li class=\"result__ladder_rectR" + roundNumber + "c\"></li>");
            } else if (numberOfTeams === 27 || numberOfTeams === 28) {
                for (var _i10 = 0; _i10 < howMany - 2; _i10++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
                }
                where.append("<li class=\"result__ladder_rectRaL" + roundNumber + "a\"></li>");
                where.append("<li class=\"result__ladder_rectR" + roundNumber + "b\"></li>");
            } else {
                for (var _i11 = 0; _i11 < howMany - 2; _i11++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
                }
                where.append("<li class=\"result__ladder_rectRaL" + roundNumber + "\"></li>");
                where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
            }
        } else if (decisionBef === -1 && decision !== -1) {
            if (numberOfTeams === 21 || numberOfTeams === 22) {
                for (var _i12 = 0; _i12 < howMany - 2; _i12++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
                }
                where.append("<li class=\"result__ladder_rectR" + roundNumber + "a\"></li>");
                where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
            } else {
                for (var _i13 = 0; _i13 < howMany; _i13++) {
                    where.append("<li class=\"result__ladder_rectR" + roundNumber + "\"></li>");
                }
            }
        }
    },
    showChampRect: function showChampRect(where, roundNumber, postfix) {
        where.append("<li class=\"result__ladder_rect" + roundNumber + postfix + "\"></li>");
    },
    showLinesR1: function showLinesR1(where, amount, round) {
        for (var i = 0; i < amount; i++) {
            where.append("<div class=\"result__ladder_lineR" + round + "\"></div>");
        }
    },
    drawLines: function drawLines(where, amount, decision, round, postfix, postfixL) {
        if (decision !== -1) {
            for (var i = 0; i < amount - 1; i++) {
                where.append("<div class=\"result__ladder_lineR" + round + postfix + "\"></div>");
            }
            where.append("<div class=\"result__ladder_luckyLine" + round + postfixL + "\"></div>");
        } else {
            for (var _i14 = 0; _i14 < amount; _i14++) {
                where.append("<div class=\"result__ladder_lineR" + round + postfix + "\"></div>");
            }
        }
    },
    drawSpecLines: function drawSpecLines(where, amount, decision, round, postfix1, postfix2, postfix3) {
        if (decision !== -1) {
            for (var i = 0; i < amount - 1; i++) {
                where.append("<div class=\"result__ladder_lineR" + round + postfix1 + "\"></div>");
            }
            where.append("<div class=\"result__ladder_luckyLine" + round + postfix2 + "\"></div>");
        } else {
            for (var _i15 = 0; _i15 < amount - 1; _i15++) {
                where.append("<div class=\"result__ladder_lineR" + round + postfix1 + "\"></div>");
            }
            where.append("<div class=\"result__ladder_lineR" + round + postfix3 + "\"></div>");
        }
    },
    showLines: function showLines(where, amount, round, isLucky, numberOfTeams) {
        var lastElemIsLucky = isLucky.length - 1;
        var decision = isLucky[lastElemIsLucky].indexOf(" Lucky Team");
        if (numberOfTeams < 7) {
            this.drawLines(where, amount, decision, round, "a", "a");
        } else if (numberOfTeams > 6 && numberOfTeams < 33) {
            if (numberOfTeams === 7 || numberOfTeams === 8) {
                this.drawLines(where, amount, decision, round, "b", "a");
            } else if (numberOfTeams === 9 || numberOfTeams === 10) {
                this.drawLines(where, amount, decision, round, "b", "a");
            } else if (numberOfTeams === 11 || numberOfTeams === 12) {
                this.drawLines(where, amount, decision, round, "b", "b");
                _domElems.domElems.line_container4.find("div").css({
                    "height": "478px"
                });
            } else if (numberOfTeams === 13 || numberOfTeams === 14) {
                this.drawSpecLines(where, amount, decision, round, "b", "b", "d");
            } else if (numberOfTeams === 15 || numberOfTeams === 16) {
                this.drawLines(where, amount, decision, round, "c", "b");
            } else if (numberOfTeams === 17 || numberOfTeams === 18) {
                this.drawLines(where, amount, decision, round, "c", "d");
                _domElems.domElems.line_container6.find("div").css({
                    "height": "714px",
                    "margin-top": "660px"
                });
            } else if (numberOfTeams === 19 || numberOfTeams === 20) {
                this.drawLines(where, amount, decision, round, "c", "b");
                _domElems.domElems.line_container6.find("div").css({
                    "height": "794px",
                    "margin-top": "660px"
                });
            } else if (numberOfTeams === 21 || numberOfTeams === 22) {
                this.drawSpecLines(where, amount, decision, round, "c", "b", "d");
                _domElems.domElems.line_container5.find("div").css({
                    "height": "638px"
                });
            } else if (numberOfTeams === 23 || numberOfTeams === 24) {
                this.drawLines(where, amount, decision, round, "c", "b");
                _domElems.domElems.line_container6.find("div").css({
                    "height": "674px",
                    "margin-top": "660px"
                });
            } else if (numberOfTeams === 25 || numberOfTeams === 26) {
                this.drawLines(where, amount, decision, round, "c", "d");
                _domElems.domElems.line_container6.find("div").css({
                    "height": "1194px",
                    "margin-top": "620px"
                });
            } else if (numberOfTeams === 27 || numberOfTeams === 28) {
                this.drawLines(where, amount, decision, round, "c", "b");
                _domElems.domElems.line_container6.find("div").css({
                    "height": "1114px",
                    "margin-top": "660px"
                });
            } else if (numberOfTeams === 29 || numberOfTeams === 30) {
                this.drawSpecLines(where, amount, decision, round, "c", "b", "d");
                _domElems.domElems.line_container5.find("div").css({
                    "height": "640px",
                    "margin-left": "-166px"
                });
                _domElems.domElems.line_container6.find("div").css({
                    "height": "1280px"
                });
            } else if (numberOfTeams === 31 || numberOfTeams === 32) {
                this.drawLines(where, amount, decision, round, "c", "b");
                _domElems.domElems.line_container5.find("div").css({
                    "margin-left": "-166px"
                });
                _domElems.domElems.line_container6.find("div").css({
                    "height": "1274px",
                    "margin-top": "660px"
                });
            }
        }
    },
    specialLine: function specialLine(where, amount, postfix) {
        for (var i = 0; i < amount; i++) {
            where.find("div").after("<div class=\"result__ladder_luckyLine5" + postfix + "\"></div>");
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.basicFunctions = undefined;

var _domElems = __webpack_require__(0);

var _globalVariables = __webpack_require__(1);

var _leagueGenerator = __webpack_require__(5);

var _cupGenerator = __webpack_require__(7);

var _showSheduleLeague = __webpack_require__(9);

var _showSheduleCup = __webpack_require__(10);

var _showIt = __webpack_require__(2);

var _generatePdfShedule = __webpack_require__(11);

var _generatePdfLadder = __webpack_require__(12);

var basicFunctions = exports.basicFunctions = {
    gettingTeams: function gettingTeams() {
        var newTeam = _domElems.domElems.teamInput.val();
        var selectedTournamentType = $('#collector__select :selected').val();
        if (_domElems.domElems.teamList.children().length > 1) {
            // generator validation
            _domElems.domElems.collectorAlertB.hide();
            _domElems.domElems.teamList.css({ "display": "flex" });
        }
        if (_domElems.domElems.teamList.children().length > 30) {
            // number of teams validation
            _domElems.domElems.collectorAlertD.show();
            _domElems.domElems.teamInput.attr('disabled', true);
        }
        if (_domElems.domElems.teamList.children().length !== 3 && //cup caution about Lucky team
        _domElems.domElems.teamList.children().length !== 7 && _domElems.domElems.teamList.children().length !== 15 && _domElems.domElems.teamList.children().length !== 31 && selectedTournamentType === 'Cup') {
            _domElems.domElems.cupCaution.show();
        } else {
            _domElems.domElems.cupCaution.hide();
        }
        if (newTeam != "" && newTeam.length < 22) {
            // input content validation
            var counter = _globalVariables.globalVariables.dataCounter++;
            _showIt.showIt.showAndHide(_domElems.domElems.collectorAlertA, _domElems.domElems.teamList);
            _showIt.showIt.showAndHide(_domElems.domElems.collectorAlertC, _domElems.domElems.teamList);
            _domElems.domElems.teamList.append("<li class=\"collector__listItem\" id=\"collector__listItem\" data-nr=\"" + counter + "\"> " + newTeam + "<button class=\"collector__del\" type=\"button\"><p>X</p></button></li>");
            _domElems.domElems.teamInput.val("");
        } else if (newTeam === "") {
            _domElems.domElems.collectorAlertA.show();
        } else {
            _domElems.domElems.collectorAlertC.show();
        }
    },
    gettingTeamNames: function gettingTeamNames(teamList, numberOfTeams) {
        var teamNamesList = [];

        for (var i = 0; i < numberOfTeams; i++) {
            teamNamesList.push(teamList[i].firstChild.wholeText);
        }
        return teamNamesList;
    },
    shuffle: function shuffle(teamList) {
        teamList.sort(function (a, b) {
            return 0.5 - Math.random();
        });
    },
    pairing: function pairing(teamNamesList, numberOfTeams) {
        var pairsReadyToShow = [];
        var rep = Math.ceil(numberOfTeams / 2);

        if (numberOfTeams % 2 === 0) {
            for (var i = 0; i < rep; i++) {
                var array = teamNamesList.slice(0, 2);
                teamNamesList.splice(0, 2);
                pairsReadyToShow.push(array);
            }
        } else {
            var teams = teamNamesList;
            teams.push(_globalVariables.globalVariables.lucky);
            for (var _i = 0; _i < rep; _i++) {
                var _array = teams.slice(0, 2);
                teams.splice(0, 2);
                pairsReadyToShow.push(_array);
            }
        }
        return pairsReadyToShow;
    },
    choosingTournamentType: function choosingTournamentType(tournamentType) {
        var teamList = _domElems.domElems.teamList.children();
        var numberOfCompetitors = teamList.length;

        if (tournamentType === 'League') {
            var readySheduleLeague = (0, _leagueGenerator.leagueGenerator)(teamList);
            (0, _showSheduleLeague.showSheduleLeague)(readySheduleLeague);
            _domElems.domElems.btnPDFShedule.on('click', function (e) {
                e.preventDefault();
                window.print();
            });
        } else if (tournamentType === 'Cup') {
            if (numberOfCompetitors < 5) {
                // 2 rounds
                var sheduleToShowUp = (0, _cupGenerator.cupGenerator)(teamList);
                (0, _showSheduleCup.showSheduleCup)(sheduleToShowUp, numberOfCompetitors);
                PDFSheduleCall();
                PDFLadderCall(numberOfCompetitors);
            } else if (numberOfCompetitors > 4 && numberOfCompetitors < 9) {
                // 3 rounds
                var _sheduleToShowUp = (0, _cupGenerator.cupGenerator)(teamList);
                (0, _showSheduleCup.showSheduleCup)(_sheduleToShowUp, numberOfCompetitors);
                PDFSheduleCall();
                PDFLadderCall(numberOfCompetitors);
            } else if (numberOfCompetitors > 8 && numberOfCompetitors < 17) {
                // 4 rounds
                var _sheduleToShowUp2 = (0, _cupGenerator.cupGenerator)(teamList);
                (0, _showSheduleCup.showSheduleCup)(_sheduleToShowUp2, numberOfCompetitors);
                PDFSheduleCall();
                PDFLadderCall(numberOfCompetitors);
            } else {
                // 5 rounds
                var _sheduleToShowUp3 = (0, _cupGenerator.cupGenerator)(teamList);
                (0, _showSheduleCup.showSheduleCup)(_sheduleToShowUp3, numberOfCompetitors);
                PDFSheduleCall();
                PDFLadderCall(numberOfCompetitors);
            }
        }
    }
};

function PDFSheduleCall() {
    _domElems.domElems.btnPDFShedule.on('click', function (e) {
        var element = document.getElementById('result_list');
        e.preventDefault();
        (0, _generatePdfShedule.generatePdfShedule)(element);
    });
}

function PDFLadderCall(numberOfCompetitors) {
    _domElems.domElems.btnPDFLadder.on('click', function (e) {
        var element = document.getElementById('result__lader');
        e.preventDefault();
        (0, _generatePdfLadder.generatePdfLadder)(element, numberOfCompetitors);
    });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _domElems = __webpack_require__(0);

var _basicFunctions = __webpack_require__(3);

var _showIt = __webpack_require__(2);

$(document).ready(function () {

    //refresh website
    _domElems.domElems.logo.on('click', function (e) {
        e.preventDefault();
        location.reload(true);
    });

    // removing teams from list
    _domElems.domElems.teamList.on('click', 'li#collector__listItem>button.collector__del', function (e) {
        e.preventDefault();
        $(this).parent().remove();
        if (_domElems.domElems.teamInput.attr('disabled')) {
            _domElems.domElems.teamInput.removeAttr('disabled');
        }
        //cup caution about Lucky team
        var selectedTournamentType = $('#collector__select :selected').val();
        if (_domElems.domElems.teamList.children().length !== 4 && _domElems.domElems.teamList.children().length !== 8 && _domElems.domElems.teamList.children().length !== 16 && _domElems.domElems.teamList.children().length !== 32 && selectedTournamentType === 'Cup') {
            _domElems.domElems.cupCaution.show();
        } else {
            _domElems.domElems.cupCaution.hide();
        }
    });
    // creating new tournament
    _domElems.domElems.btnConfirm.on('click', function (e) {
        e.preventDefault();
        _showIt.showIt.showAndHide(_domElems.domElems.naviScreen, _domElems.domElems.collector);
    });
    // adding teams by button click
    _domElems.domElems.btnAdd.bind('click keypress', function (e) {
        e.preventDefault();
        var code = e.keyCode || e.which;
        if (code === 13 || e.type === 'click') {
            _basicFunctions.basicFunctions.gettingTeams();
        };
    });
    // adding teams by keyboard
    _domElems.domElems.teamInput.on('keypress', function (e) {
        var code = e.keyCode || e.which;
        if (code === 13) {
            e.preventDefault();
            _basicFunctions.basicFunctions.gettingTeams();
        };
    });
    // generating shedule 
    _domElems.domElems.btnGenerate.on('click', function (e) {
        e.preventDefault();
        if (_domElems.domElems.teamList.children().length > 2) {
            _showIt.showIt.showAndHide(_domElems.domElems.collectorAlertB, _domElems.domElems.result);
            var selectedTournamentType = $('#collector__select :selected').val();
            _showIt.showIt.showAndHide(_domElems.domElems.collector, _domElems.domElems.result);
            _basicFunctions.basicFunctions.choosingTournamentType(selectedTournamentType);
        } else {
            _domElems.domElems.collectorAlertB.show();
        }
    });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.leagueGenerator = leagueGenerator;

var _basicFunctions = __webpack_require__(3);

var _roundrobin = __webpack_require__(6);

function leagueGenerator(teamList) {
    var numberOfTeams = teamList.length;
    var teamNamesList = _basicFunctions.basicFunctions.gettingTeamNames(teamList, numberOfTeams);
    _basicFunctions.basicFunctions.shuffle(teamNamesList); // shuffling teams
    var readyShedule = (0, _roundrobin.roundrobin)(numberOfTeams, teamNamesList);

    return readyShedule;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundrobin = roundrobin;
var DUMMY = -1;

function roundrobin(n, ps) {
  // n = num players
  var rs = []; // rs = round array
  if (!ps) {
    ps = [];
    for (var k = 1; k <= n; k += 1) {
      ps.push(k);
    }
  } else {
    ps = ps.slice();
  }

  if (n % 2 === 1) {
    ps.push(DUMMY); // so we can match algorithm for even numbers
    n += 1;
  }
  for (var j = 0; j < n - 1; j += 1) {
    rs[j] = []; // create inner match array for round j
    for (var i = 0; i < n / 2; i += 1) {
      if (ps[i] !== DUMMY && ps[n - 1 - i] !== DUMMY) {
        rs[j].push([ps[i], ps[n - 1 - i]]); // insert pair as a match
      }
    }
    ps.splice(1, 0, ps.pop()); // permutate for next round
  }
  return rs;
};

// Eirik Albrigtsen for his roundrobin algorythm https://github.com/clux/roundrobin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cupGenerator = cupGenerator;

var _basicFunctions = __webpack_require__(3);

var _cupPairGenerators = __webpack_require__(8);

function cupGenerator(teamList) {
    var final = [];
    var numberOfTeams = teamList.length;
    var teamNamesList = _basicFunctions.basicFunctions.gettingTeamNames(teamList, numberOfTeams);
    var pairsReadyToShowR1 = void 0,
        pairsReadyToShowR2 = void 0,
        pairsReadyToShowR3 = void 0,
        pairsReadyToShowR4 = void 0,
        pairsReadyToShowR5 = void 0;
    pairsReadyToShowR1 = pairsReadyToShowR2 = pairsReadyToShowR3 = pairsReadyToShowR4 = pairsReadyToShowR5 = [];

    _basicFunctions.basicFunctions.shuffle(teamNamesList);

    // 2 rounds
    if (numberOfTeams < 5) {
        pairsReadyToShowR1 = _basicFunctions.basicFunctions.pairing(teamNamesList, numberOfTeams);
        pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(1, false);
        final.push(pairsReadyToShowR1, pairsReadyToShowR2);
        return final;
        // 3 rounds
    } else if (numberOfTeams > 4 && numberOfTeams < 9) {
        pairsReadyToShowR1 = _basicFunctions.basicFunctions.pairing(teamNamesList, numberOfTeams);
        if (numberOfTeams === 5 || numberOfTeams === 6) {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(1, true);
        } else {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(2, false);
        }
        pairsReadyToShowR3 = _cupPairGenerators.cupPairGenerators.generatingPairsR3(1, false);
        final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3);
        return final;
        // 4 rounds
    } else if (numberOfTeams > 8 && numberOfTeams < 17) {
        pairsReadyToShowR1 = _basicFunctions.basicFunctions.pairing(teamNamesList, numberOfTeams);
        if (numberOfTeams === 9 || numberOfTeams === 10) {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(2, true);
            pairsReadyToShowR3 = _cupPairGenerators.cupPairGenerators.generatingPairsPuRound(true);
            pairsReadyToShowR4 = _cupPairGenerators.cupPairGenerators.generatingPairsLastRound();
        } else if (numberOfTeams === 11 || numberOfTeams === 12) {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(3, false);
            pairsReadyToShowR3 = _cupPairGenerators.cupPairGenerators.generatingPairsPuRound(true);
            pairsReadyToShowR4 = _cupPairGenerators.cupPairGenerators.generatingPairsLastRound();
        } else if (numberOfTeams === 13 || numberOfTeams === 14) {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(3, true);
            pairsReadyToShowR3 = _cupPairGenerators.cupPairGenerators.generatingPairsPuRound(false);
            pairsReadyToShowR4 = _cupPairGenerators.cupPairGenerators.generatingPairsLastRound();
        } else if (numberOfTeams === 15 || numberOfTeams === 16) {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(4, false);
            pairsReadyToShowR3 = _cupPairGenerators.cupPairGenerators.generatingPairsPuRound(false);
            pairsReadyToShowR4 = _cupPairGenerators.cupPairGenerators.generatingPairsLastRound();
        }
        final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4);
        return final;
    } else {
        pairsReadyToShowR1 = _basicFunctions.basicFunctions.pairing(teamNamesList, numberOfTeams);
        if (numberOfTeams === 17 || numberOfTeams === 18) {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(4, true);
            pairsReadyToShowR3 = _cupPairGenerators.cupPairGenerators.generatingPairsR3(2, true);
            pairsReadyToShowR4 = _cupPairGenerators.cupPairGenerators.generatingPairsPuRound(true);
            pairsReadyToShowR5 = _cupPairGenerators.cupPairGenerators.generatingPairsLastRound();
        } else if (numberOfTeams === 19 || numberOfTeams === 20) {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(5, false);
            pairsReadyToShowR3 = _cupPairGenerators.cupPairGenerators.generatingPairsR3(2, true);
            pairsReadyToShowR4 = _cupPairGenerators.cupPairGenerators.generatingPairsPuRound(true);
            pairsReadyToShowR5 = _cupPairGenerators.cupPairGenerators.generatingPairsLastRound();
        } else if (numberOfTeams === 21 || numberOfTeams === 22) {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(5, true);
            pairsReadyToShowR3 = _cupPairGenerators.cupPairGenerators.generatingPairsR3(3, false);
            pairsReadyToShowR4 = _cupPairGenerators.cupPairGenerators.generatingPairsPuRound(true);
            pairsReadyToShowR5 = _cupPairGenerators.cupPairGenerators.generatingPairsLastRound();
        } else if (numberOfTeams === 23 || numberOfTeams === 24) {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(6, false);
            pairsReadyToShowR3 = _cupPairGenerators.cupPairGenerators.generatingPairsR3(3, false);
            pairsReadyToShowR4 = _cupPairGenerators.cupPairGenerators.generatingPairsPuRound(true);
            pairsReadyToShowR5 = _cupPairGenerators.cupPairGenerators.generatingPairsLastRound();
        } else if (numberOfTeams === 25 || numberOfTeams === 26) {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(6, true);
            pairsReadyToShowR3 = _cupPairGenerators.cupPairGenerators.generatingPairsR3(3, true);
            pairsReadyToShowR4 = _cupPairGenerators.cupPairGenerators.generatingPairsPuRound(false);
            pairsReadyToShowR5 = _cupPairGenerators.cupPairGenerators.generatingPairsLastRound();
        } else if (numberOfTeams === 27 || numberOfTeams === 28) {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(7, false);
            pairsReadyToShowR3 = _cupPairGenerators.cupPairGenerators.generatingPairsR3(3, true);
            pairsReadyToShowR4 = _cupPairGenerators.cupPairGenerators.generatingPairsPuRound(false);
            pairsReadyToShowR5 = _cupPairGenerators.cupPairGenerators.generatingPairsLastRound();
        } else if (numberOfTeams === 29 || numberOfTeams === 30) {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(7, true);
            pairsReadyToShowR3 = _cupPairGenerators.cupPairGenerators.generatingPairsR3(4, false);
            pairsReadyToShowR4 = _cupPairGenerators.cupPairGenerators.generatingPairsPuRound(false);
            pairsReadyToShowR5 = _cupPairGenerators.cupPairGenerators.generatingPairsLastRound();
        } else if (numberOfTeams === 31 || numberOfTeams === 32) {
            pairsReadyToShowR2 = _cupPairGenerators.cupPairGenerators.generatingPairsR2(8, false);
            pairsReadyToShowR3 = _cupPairGenerators.cupPairGenerators.generatingPairsR3(4, false);
            pairsReadyToShowR4 = _cupPairGenerators.cupPairGenerators.generatingPairsPuRound(false);
            pairsReadyToShowR5 = _cupPairGenerators.cupPairGenerators.generatingPairsLastRound();
        }
        final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4, pairsReadyToShowR5);
        return final;
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cupPairGenerators = undefined;

var _globalVariables = __webpack_require__(1);

var TWOEMPTY = [_globalVariables.globalVariables.empty, _globalVariables.globalVariables.empty];
var EMPTYANDLUCKY = [_globalVariables.globalVariables.empty, _globalVariables.globalVariables.lucky];

var cupPairGenerators = exports.cupPairGenerators = {
    generatingPairsR2: function generatingPairsR2(howMuchEmpty, lucky) {
        var pairsReadyToShowR2 = [];
        if (howMuchEmpty === 1 && lucky === false) {
            pairsReadyToShowR2 = TWOEMPTY;
        } else {
            if (lucky === true) {
                for (var i = 0; i < howMuchEmpty; i++) {
                    pairsReadyToShowR2.push(TWOEMPTY);
                }
                pairsReadyToShowR2.push(EMPTYANDLUCKY);
            } else {
                for (var _i = 0; _i < howMuchEmpty; _i++) {
                    pairsReadyToShowR2.push(TWOEMPTY);
                }
            }
        }
        return pairsReadyToShowR2;
    },
    generatingPairsR3: function generatingPairsR3(howMuchEmpty, lucky) {
        var pairsReadyToShowR3 = [];
        if (howMuchEmpty === 1 && lucky === false) {
            pairsReadyToShowR3 = TWOEMPTY;
        } else {
            if (lucky === true) {
                for (var i = 0; i < howMuchEmpty; i++) {
                    pairsReadyToShowR3.push(TWOEMPTY);
                }
                pairsReadyToShowR3.push(EMPTYANDLUCKY);
            } else {
                for (var _i2 = 0; _i2 < howMuchEmpty; _i2++) {
                    pairsReadyToShowR3.push(TWOEMPTY);
                }
            }
        }
        return pairsReadyToShowR3;
    },
    generatingPairsPuRound: function generatingPairsPuRound(lucky) {
        var pairsReadyToShowOneBeforeLastRound = [];
        if (lucky === true) {
            pairsReadyToShowOneBeforeLastRound = [TWOEMPTY, EMPTYANDLUCKY];
        } else {
            pairsReadyToShowOneBeforeLastRound = [TWOEMPTY, TWOEMPTY];
        }
        return pairsReadyToShowOneBeforeLastRound;
    },
    generatingPairsLastRound: function generatingPairsLastRound() {
        var pairsReadyToShowLastRound = [];
        pairsReadyToShowLastRound = TWOEMPTY;
        return pairsReadyToShowLastRound;
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showSheduleLeague = showSheduleLeague;

var _domElems = __webpack_require__(0);

var _showIt = __webpack_require__(2);

function showSheduleLeague(readyShedule) {
    for (var i = 0; i < readyShedule.length; i++) {
        var roundCounter = 1 + i;
        var gameCounter = 0;

        if (roundCounter <= 8) {
            _showIt.showIt.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
            _domElems.domElems.sheduleOnScreenA.addClass("col-12");
        } else if (8 <= roundCounter && roundCounter <= 16) {
            _showIt.showIt.showHeader(_domElems.domElems.sheduleOnScreenB, roundCounter);
            _domElems.domElems.sheduleOnScreenA.removeClass("col-12").addClass("col-6");
            _domElems.domElems.sheduleOnScreenB.addClass("col-6");
        } else if (17 <= roundCounter && roundCounter <= 24) {
            _showIt.showIt.showHeader(_domElems.domElems.sheduleOnScreenC, roundCounter);
            _domElems.domElems.sheduleOnScreenA.removeClass("col-12 col-6").addClass("col-4");
            _domElems.domElems.sheduleOnScreenB.removeClass("col-6").addClass("col-4");
            _domElems.domElems.sheduleOnScreenC.addClass("col-4");
        } else {
            _showIt.showIt.showHeader(_domElems.domElems.sheduleOnScreenD, roundCounter);
            _domElems.domElems.sheduleOnScreenA.removeClass("col-12 col-6 col-4");
            _domElems.domElems.sheduleOnScreenB.removeClass("col-6 col-4");
            _domElems.domElems.sheduleOnScreenC.removeClass("col-4");
        }

        for (var j = 0; j < readyShedule[i].length; j++) {
            var newPair = readyShedule[i][j];
            var pairOnScreen = newPair.join(" ___ - ___ ");

            if (roundCounter <= 8) {
                _showIt.showIt.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
            } else if (8 <= roundCounter && roundCounter <= 16) {
                gameCounter = _domElems.domElems.sheduleOnScreenA.find('li').length + 1;
                _domElems.domElems.sheduleOnScreenB.attr('start', "" + gameCounter);
                _showIt.showIt.showMatch(_domElems.domElems.sheduleOnScreenB, pairOnScreen);
            } else if (17 <= roundCounter && roundCounter <= 24) {
                gameCounter = _domElems.domElems.sheduleOnScreenB.find('li').length * 2 + 1;
                _domElems.domElems.sheduleOnScreenC.attr('start', "" + gameCounter);
                _showIt.showIt.showMatch(_domElems.domElems.sheduleOnScreenC, pairOnScreen);
            } else {
                gameCounter = _domElems.domElems.sheduleOnScreenC.find('li').length * 3 + 1;
                _domElems.domElems.sheduleOnScreenD.attr('start', "" + gameCounter);
                _showIt.showIt.showMatch(_domElems.domElems.sheduleOnScreenD, pairOnScreen);
            }
        }
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showSheduleCup = showSheduleCup;

var _domElems = __webpack_require__(0);

var _globalVariables = __webpack_require__(1);

var _showIt = __webpack_require__(2);

function showSheduleCup(sheduleArray, numberOfTeams) {
    var roundCounter = 1;
    var pairOnScreen = "";
    _domElems.domElems.resultList.addClass("container");
    _domElems.domElems.sheduleOnScreenA.addClass("col-12");
    _domElems.domElems.sheduleOnScreenB.css('display', 'none');
    _domElems.domElems.sheduleOnScreenC.css('display', 'none');
    _domElems.domElems.sheduleOnScreenD.css('display', 'none');
    _domElems.domElems.cupLadder.css('display', 'flex');
    _domElems.domElems.btnPDFLadderSection.css('display', 'flex');

    function showingTwoFirstRoundsCup() {
        var repsR1 = sheduleArray[0].length;
        var repsR2 = Math.ceil(sheduleArray[0].length / 2);
        var idLeft = "";
        var idRight = "";
        var teamOne = "";
        var teamTwo = "";
        //Round 1   
        _showIt.showIt.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
        for (var i = 0; i < repsR1; i++) {
            idLeft = _globalVariables.globalVariables.idCharArr[i] + "1";
            idRight = _globalVariables.globalVariables.idCharArr[i] + "2";
            teamOne = sheduleArray[0][i][0];
            teamTwo = sheduleArray[0][i][1];
            pairOnScreen = sheduleArray[0][i].join(" " + idLeft + " ___ - ___ " + ("" + idRight));
            _showIt.showIt.showLadderRectR1(_domElems.domElems.ladder_round1, idLeft, idRight, teamOne, teamTwo);
            _showIt.showIt.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
        }
        var amount = sheduleArray[0].length * 2 / 2;
        _showIt.showIt.showLinesR1(_domElems.domElems.line_container1, amount, 1);
        roundCounter++;

        //Round 2
        _showIt.showIt.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
        if (numberOfTeams === 3 || numberOfTeams === 4) {
            for (var k = 0; k < repsR2; k++) {
                pairOnScreen = sheduleArray[1].join(" ___ - ___ ");
                _showIt.showIt.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
                _showIt.showIt.showChamp(_domElems.domElems.sheduleOnScreenA);
                _showIt.showIt.showChampRect(_domElems.domElems.ladder_round3, 3, "a");
            }
            var howMany = sheduleArray[0].length * 2 / 2;
            _showIt.showIt.showLadderRect(_domElems.domElems.ladder_round2, 2, howMany, sheduleArray[1], sheduleArray[0], numberOfTeams);
            var _amount = sheduleArray[0].length / 2;
            _showIt.showIt.showLines(_domElems.domElems.line_container2, _amount, 2, sheduleArray[1], numberOfTeams);
        } else {
            for (var _k = 0; _k < repsR2; _k++) {
                pairOnScreen = sheduleArray[1][_k].join(" ___ - ___ ");
                _showIt.showIt.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
            }
            var _howMany = sheduleArray[0].length * 2 / 2;
            _showIt.showIt.showLadderRect(_domElems.domElems.ladder_round2, 2, _howMany, sheduleArray[1], sheduleArray[0], numberOfTeams);
            var _amount2 = sheduleArray[0].length / 2;
            _showIt.showIt.showLines(_domElems.domElems.line_container2, _amount2, 2, sheduleArray[1], numberOfTeams);
        }
        roundCounter++;
    };

    if (numberOfTeams < 5) {
        showingTwoFirstRoundsCup();
    } else if (numberOfTeams > 4) {
        showingTwoFirstRoundsCup();
        //Round 3
        var repsR3 = Math.ceil(sheduleArray[1].length / 2);

        _showIt.showIt.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
        if (numberOfTeams > 4 && numberOfTeams < 9) {
            for (var l = 0; l < repsR3; l++) {
                pairOnScreen = sheduleArray[2].join(" ___ - ___ ");
                _showIt.showIt.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
                _showIt.showIt.showChamp(_domElems.domElems.sheduleOnScreenA);
            }
            var howMany = sheduleArray[1].length * 2 / 2;
            _showIt.showIt.showLadderRect(_domElems.domElems.ladder_round3, 3, howMany, sheduleArray[2], sheduleArray[1], numberOfTeams);

            if (numberOfTeams === 5 || numberOfTeams === 6) {
                _showIt.showIt.showChampRect(_domElems.domElems.ladder_round4, 4, "a");
                var amount = sheduleArray[1].length / 2;
                _showIt.showIt.showLines(_domElems.domElems.line_container3, amount, 3, sheduleArray[2], numberOfTeams);
            } else if (numberOfTeams === 7 || numberOfTeams === 8) {
                _showIt.showIt.showChampRect(_domElems.domElems.ladder_round4, 4, "b");
                var _amount3 = sheduleArray[1].length / 2;
                _showIt.showIt.showLines(_domElems.domElems.line_container3, _amount3, 3, sheduleArray[2], numberOfTeams);
            }
            roundCounter++;
        } else if (numberOfTeams > 8 && numberOfTeams < 33) {
            for (var _l = 0; _l < repsR3; _l++) {
                pairOnScreen = sheduleArray[2][_l].join(" ___ - ___ ");
                _showIt.showIt.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
            }
            var _howMany2 = sheduleArray[1].length * 2 / 2;
            _showIt.showIt.showLadderRect(_domElems.domElems.ladder_round3, 3, _howMany2, sheduleArray[2], sheduleArray[1], numberOfTeams);
            var _amount4 = sheduleArray[1].length / 2;
            _showIt.showIt.showLines(_domElems.domElems.line_container3, _amount4, 3, sheduleArray[2], numberOfTeams);
            roundCounter++;
            // Round 4
            var repsR4 = Math.ceil(sheduleArray[2].length / 2);

            _showIt.showIt.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
            if (numberOfTeams > 8 && numberOfTeams < 17) {
                for (var n = 0; n < repsR4; n++) {
                    pairOnScreen = sheduleArray[3].join(" ___ - ___ ");
                    _showIt.showIt.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
                    _showIt.showIt.showChamp(_domElems.domElems.sheduleOnScreenA);
                }
                var _howMany3 = sheduleArray[2].length * 2 / 2;
                _showIt.showIt.showLadderRect(_domElems.domElems.ladder_round4, 4, _howMany3, sheduleArray[3], sheduleArray[2], numberOfTeams);
                if (numberOfTeams > 8 && numberOfTeams < 13) {
                    _showIt.showIt.showChampRect(_domElems.domElems.ladder_round5, 5, "a");
                } else if (numberOfTeams > 12 && numberOfTeams < 17) {
                    var _amount6 = sheduleArray[2].length / 2;
                    _showIt.showIt.showChampRect(_domElems.domElems.ladder_round5, 5, "b");
                    _showIt.showIt.showLines(_domElems.domElems.line_container5, _amount6, 5, sheduleArray[3], numberOfTeams);
                }
                var _amount5 = sheduleArray[2].length / 2;
                _showIt.showIt.showLines(_domElems.domElems.line_container4, _amount5, 4, sheduleArray[3], numberOfTeams);
            } else if (numberOfTeams > 16) {
                for (var _n = 0; _n < repsR4; _n++) {
                    pairOnScreen = sheduleArray[3][_n].join(" ___ - ___ ");
                    _showIt.showIt.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
                }
                var _howMany4 = sheduleArray[2].length * 2 / 2;
                _showIt.showIt.showLadderRect(_domElems.domElems.ladder_round4, 4, _howMany4, sheduleArray[3], sheduleArray[2], numberOfTeams);
                var _amount7 = sheduleArray[3].length / 2;
                _showIt.showIt.showLines(_domElems.domElems.line_container5, _amount7, 5, sheduleArray[4], numberOfTeams);
                roundCounter++;
                // Round 5
                var repsR5 = Math.ceil(sheduleArray[3].length / 2);

                _showIt.showIt.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
                for (var o = 0; o < repsR5; o++) {
                    pairOnScreen = sheduleArray[4].join(" ___ - ___ ");
                    _showIt.showIt.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
                    _showIt.showIt.showChamp(_domElems.domElems.sheduleOnScreenA);
                }
                var many = sheduleArray[3].length * 2 / 2;
                _showIt.showIt.showLadderRect(_domElems.domElems.ladder_round5, 5, many, sheduleArray[4], sheduleArray[3], numberOfTeams);
                if (numberOfTeams === 17 || numberOfTeams === 18) {
                    _showIt.showIt.showChampRect(_domElems.domElems.ladder_round6, 6, "a");
                    _showIt.showIt.showLines(_domElems.domElems.line_container6, _amount7, 6, sheduleArray[4], numberOfTeams);
                    _showIt.showIt.specialLine(_domElems.domElems.line_container5, 1, "a");
                } else if (numberOfTeams === 19 || numberOfTeams === 20) {
                    _showIt.showIt.showChampRect(_domElems.domElems.ladder_round6, 6, "b");
                    _showIt.showIt.showLines(_domElems.domElems.line_container6, _amount7, 6, sheduleArray[4], numberOfTeams);
                    _showIt.showIt.specialLine(_domElems.domElems.line_container5, 1, "b");
                } else if (numberOfTeams > 20 && numberOfTeams < 25) {
                    _showIt.showIt.showChampRect(_domElems.domElems.ladder_round6, 6, "c");
                    _showIt.showIt.showLines(_domElems.domElems.line_container6, _amount7, 6, sheduleArray[4], numberOfTeams);
                    _showIt.showIt.specialLine(_domElems.domElems.line_container5, 1, "spec");
                    if (numberOfTeams === 21 || numberOfTeams === 22) {
                        _domElems.domElems.line_container5.find("div.result__ladder_luckyLine5spec").css({
                            "margin-top": "333px"
                        });
                    } else if (numberOfTeams === 23 || numberOfTeams === 24) {
                        _domElems.domElems.line_container5.find("div.result__ladder_luckyLine5spec").css({
                            "margin-top": "373px"
                        });
                    }
                } else if (numberOfTeams === 25 || numberOfTeams === 26) {
                    _showIt.showIt.showChampRect(_domElems.domElems.ladder_round6, 6, "d");
                    _showIt.showIt.showLines(_domElems.domElems.line_container6, _amount7, 6, sheduleArray[4], numberOfTeams);
                    _showIt.showIt.specialLine(_domElems.domElems.line_container5, 1, "specA");
                    _domElems.domElems.line_container5.find("div.result__ladder_luckyLine5specA").css({
                        "height": "400px"
                    });
                } else if (numberOfTeams === 27 || numberOfTeams === 28) {
                    _showIt.showIt.showChampRect(_domElems.domElems.ladder_round6, 6, "d");
                    _showIt.showIt.showLines(_domElems.domElems.line_container6, _amount7, 6, sheduleArray[4], numberOfTeams);
                    _showIt.showIt.specialLine(_domElems.domElems.line_container5, 1, "specA");
                    _domElems.domElems.line_container5.find("div.result__ladder_luckyLine5specA").css({
                        "height": "480px"
                    });
                } else {
                    _showIt.showIt.showChampRect(_domElems.domElems.ladder_round6, 6, "e");
                    _showIt.showIt.showLines(_domElems.domElems.line_container6, _amount7, 6, sheduleArray[4], numberOfTeams);
                    _showIt.showIt.specialLine(_domElems.domElems.line_container5, 1, "specA");
                    _domElems.domElems.line_container5.find("div.result__ladder_luckyLine5specA").css({
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
        if (container === "result__ladder_rectR4" || container === "result__ladder_rectR4a" || container === "result__ladder_rectR5" || container === "result__ladder_rectR5a" || container === "result__ladder_rectR5b" || container === "result__ladder_rectR5c" || container === "result__ladder_rectR5d" || container === "result__ladder_rectR5e" || container === "result__ladder_rectR3" || container === "result__ladder_rectR3c") {
            var rectangle = $("#ladder_round" + round + " :nth-last-child(1)");
            rectangle.css("margin-bottom", "20px");
        }
    };

    if (numberOfTeams < 7) {
        var ulR3 = $('#ladder_round3')[0].lastElementChild.className;
        cutBottomMargins(3, ulR3);
    } else if (numberOfTeams > 6 && numberOfTeams < 17) {
        var _ulR = $('#ladder_round3')[0].lastElementChild.className;
        var ulR4 = $('#ladder_round4')[0].lastElementChild.className;
        cutBottomMargins(3, _ulR);
        cutBottomMargins(4, ulR4);
    } else if (numberOfTeams > 16) {
        var _ulR2 = $('#ladder_round3')[0].lastElementChild.className;
        var _ulR3 = $('#ladder_round4')[0].lastElementChild.className;
        var ulR5 = $('#ladder_round5')[0].lastElementChild.className;
        cutBottomMargins(3, _ulR2);
        cutBottomMargins(4, _ulR3);
        cutBottomMargins(5, ulR5);
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generatePdfShedule = generatePdfShedule;
function generatePdfShedule(element) {
    html2canvas(element).then(function (canvas) {
        var imgData = canvas.toDataURL('image/png');
        var doc = new jsPDF();
        doc.setFontSize(8);
        doc.text(10, 10, 'Created by Tournament Must Have tool by CrissNowik');
        doc.addImage(imgData, 'PNG', -60, 15);
        doc.save('Game_Plan.pdf');
    });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generatePdfLadder = generatePdfLadder;
function generatePdfLadder(element, numberOfCompetitors) {
    if (numberOfCompetitors < 17) {
        html2canvas(element).then(function (canvas) {
            var imgData = canvas.toDataURL('image/png');
            var doc = new jsPDF();
            doc.setFontSize(8);
            doc.text(10, 10, 'Created by Tournament Must Have tool by CrissNowik');
            if (numberOfCompetitors < 5) {
                doc.addImage(imgData, 'PNG', -20, 15); //- 3,4 
            } else if (numberOfCompetitors === 5 || numberOfCompetitors === 6) {
                doc.addImage(imgData, 'PNG', 10, 15, 250, 120); //- 5,6
            } else if (numberOfCompetitors === 7 || numberOfCompetitors === 8) {
                doc.addImage(imgData, 'PNG', 10, 15, 250, 140); //-7,8
            } else if (numberOfCompetitors > 8 && numberOfCompetitors < 13) {
                doc.addImage(imgData, 'PNG', -10, 15, 250, 160); //- 9,10,11,12
            } else if (numberOfCompetitors === 13 || numberOfCompetitors === 14) {
                doc.addImage(imgData, 'PNG', -10, 15, 240, 180); //- 13,14
            } else if (numberOfCompetitors === 15 || numberOfCompetitors === 16) {
                doc.addImage(imgData, 'PNG', -10, 15, 240, 200); //- 15,16 
            }
            doc.save('Game_Ladder.pdf');
        });
    } else {
        html2canvas(element).then(function (canvas) {
            var imgData = canvas.toDataURL('image/png');
            var doc = new jsPDF('portrait', 'mm', 'a3');
            doc.setFontSize(8);
            doc.text(10, 10, 'Created by Tournament Must Have tool by CrissNowik');
            if (numberOfCompetitors === 17 || numberOfCompetitors === 18) {
                doc.addImage(imgData, 'PNG', -10, 15, 300, 260); // 17-18
            } else if (numberOfCompetitors === 19 || numberOfCompetitors === 20) {
                doc.addImage(imgData, 'PNG', -10, 15, 300, 280); // 19-20
            } else if (numberOfCompetitors === 21 || numberOfCompetitors === 22) {
                doc.addImage(imgData, 'PNG', -10, 15, 300, 300); // 21-22
            } else if (numberOfCompetitors === 23 || numberOfCompetitors === 24) {
                doc.addImage(imgData, 'PNG', -10, 15, 300, 320); // 23-24
            } else if (numberOfCompetitors === 25 || numberOfCompetitors === 26) {
                doc.addImage(imgData, 'PNG', -10, 15, 300, 340); // 25-26
            } else if (numberOfCompetitors === 27 || numberOfCompetitors === 28) {
                doc.addImage(imgData, 'PNG', -10, 15, 300, 360); // 27-28
            } else if (numberOfCompetitors === 29 || numberOfCompetitors === 30) {
                doc.addImage(imgData, 'PNG', -10, 15, 300, 390); // 29-30
            } else if (numberOfCompetitors === 31 || numberOfCompetitors === 32) {
                doc.addImage(imgData, 'PNG', -10, 12, 300, 410); // 31-32
            }
            doc.save('Game_Ladder.pdf');
        });
    }
}

/***/ })
/******/ ]);