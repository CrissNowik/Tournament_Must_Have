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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.basicFunctions = undefined;

var _domElems = __webpack_require__(1);

var _globalVariables = __webpack_require__(2);

var _leagueGenerator = __webpack_require__(4);

var _cupGenerator = __webpack_require__(6);

var _showSheduleLeague = __webpack_require__(7);

var _showSheduleCup = __webpack_require__(8);

var basicFunctions = exports.basicFunctions = {
    shuffle: function shuffle(teamList) {
        teamList.sort(function (a, b) {
            return 0.5 - Math.random();
        });
    },
    switchingVisibility: function switchingVisibility(toHide, toShow) {
        toHide.hide();
        toShow.show();
    },
    gettingTeams: function gettingTeams() {
        var newTeam = _domElems.domElems.teamInput.val();
        if (_domElems.domElems.teamList.children().length > 1) {
            // generator validation
            _domElems.domElems.collectorAlertB.hide();
        }
        if (_domElems.domElems.teamList.children().length > 30) {
            // number of teams validation
            _domElems.domElems.collectorAlertD.show();
            _domElems.domElems.teamInput.attr('disabled', true);
        }
        if (_domElems.domElems.teamList.children().length !== 3 && //cup caution about Lucky team
        _domElems.domElems.teamList.children().length !== 7 && _domElems.domElems.teamList.children().length !== 15 && _domElems.domElems.teamList.children().length !== 31) {
            _domElems.domElems.cupCaution.show();
        } else {
            _domElems.domElems.cupCaution.hide();
        }
        if (newTeam != "" && newTeam.length < 26) {
            // input content validation
            var counter = _globalVariables.globalVariables.dataCounter++;
            this.switchingVisibility(_domElems.domElems.collectorAlertA, _domElems.domElems.teamList);
            this.switchingVisibility(_domElems.domElems.collectorAlertC, _domElems.domElems.teamList);
            _domElems.domElems.teamList.append("<li class=\"collector__listItem\" id=\"collector__listItem\" data-nr=\"" + counter + "\"> " + newTeam + "<button class=\"collector__del\" type=\"button\">X</button></li>");
            _domElems.domElems.teamInput.val("");
        } else if (newTeam === "") {
            _domElems.domElems.collectorAlertA.show();
        } else {
            _domElems.domElems.collectorAlertC.show();
        }
    },
    choosingTournamentType: function choosingTournamentType(tournamentType) {
        var teamList = _domElems.domElems.teamList.children();
        var numberOfCompetitors = teamList.length;

        if (tournamentType === 'League') {
            var readySheduleLeague = (0, _leagueGenerator.leagueGenerator)(teamList);
            (0, _showSheduleLeague.showSheduleLeague)(readySheduleLeague);
        } else if (tournamentType === 'Cup') {
            if (numberOfCompetitors < 5) {
                // 2 rounds
                var sheduleToShowUp = (0, _cupGenerator.cupGenerator)(teamList);
                (0, _showSheduleCup.showSheduleCup)(sheduleToShowUp, numberOfCompetitors);
            } else if (numberOfCompetitors > 4 && numberOfCompetitors < 9) {
                // 3 rounds
                var _sheduleToShowUp = (0, _cupGenerator.cupGenerator)(teamList);
                (0, _showSheduleCup.showSheduleCup)(_sheduleToShowUp, numberOfCompetitors);
            } else if (numberOfCompetitors > 8 && numberOfCompetitors < 17) {
                // 4 rounds
                var _sheduleToShowUp2 = (0, _cupGenerator.cupGenerator)(teamList);
                (0, _showSheduleCup.showSheduleCup)(_sheduleToShowUp2, numberOfCompetitors);
            } else {
                // 5 rounds
                var _sheduleToShowUp3 = (0, _cupGenerator.cupGenerator)(teamList);
                (0, _showSheduleCup.showSheduleCup)(_sheduleToShowUp3, numberOfCompetitors);
            }
        }
    },
    gettingTeamNames: function gettingTeamNames(teamList, numberOfTeams) {
        var teamNamesList = [];

        for (var i = 0; i < numberOfTeams; i++) {
            teamNamesList.push(teamList[i].firstChild.wholeText);
        }
        return teamNamesList;
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
            teams.push(" Lucky Team");
            for (var _i = 0; _i < rep; _i++) {
                var _array = teams.slice(0, 2);
                teams.splice(0, 2);
                pairsReadyToShow.push(_array);
            }
        }
        return pairsReadyToShow;
    },
    showHeader: function showHeader(where, roundCounter) {
        where.append("<ul class=\"result__listItem--roundHeader\">Round nr " + roundCounter + "</ul>");
    },
    showMatch: function showMatch(where, pairOnScreen) {
        where.append("<li class=\"result__listItem\">" + pairOnScreen + "</li>");
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//DOM elements store
//
var domElems = exports.domElems = {
    naviScreen: $('#nav'),
    btnConfirm: $('#nav__confirm'),
    collector: $('#collector'),
    teamInput: $('#collector__input'),
    btnAdd: $('#collector__add'),
    btnGenerate: $('#collector__generate'),
    teamList: $('#collector__list'),
    teamOnList: $('#collector__listItem'),
    result: $('#result'),
    collectorAlertA: $('#alertOne'),
    collectorAlertB: $('#alertTwo'),
    collectorAlertC: $('#alertThree'),
    collectorAlertD: $('#alertFour'),
    sheduleOnScreenA: $('#result__listA'),
    sheduleOnScreenB: $('#result__listB'),
    sheduleOnScreenC: $('#result__listC'),
    sheduleOnScreenD: $('#result__listD'),
    cupCaution: $('#alertCup')
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var globalVariables = exports.globalVariables = {
    dataCounter: 0,
    idCharArr: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"],
    empty: "  . . . . . . . . . . . . . . ",
    lucky: " Lucky Team"
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _domElems = __webpack_require__(1);

var _basicFunctions = __webpack_require__(0);

$(document).ready(function () {
    // removing teams from list
    _domElems.domElems.teamList.on('click', 'li#collector__listItem>button.collector__del', function (e) {
        e.preventDefault();
        $(this).parent().remove();
        if (_domElems.domElems.teamInput.attr('disabled')) {
            _domElems.domElems.teamInput.removeAttr('disabled');
        }
        if (_domElems.domElems.teamList.children().length !== 4 && //cup caution about Lucky team
        _domElems.domElems.teamList.children().length !== 8 && _domElems.domElems.teamList.children().length !== 16 && _domElems.domElems.teamList.children().length !== 32) {
            _domElems.domElems.cupCaution.show();
        } else {
            _domElems.domElems.cupCaution.hide();
        }
    });
    // creating new tournament
    _domElems.domElems.btnConfirm.on('click', function (e) {
        e.preventDefault();
        _basicFunctions.basicFunctions.switchingVisibility(_domElems.domElems.naviScreen, _domElems.domElems.collector);
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
            _basicFunctions.basicFunctions.switchingVisibility(_domElems.domElems.collectorAlertB, _domElems.domElems.result);
            var selectedTournamentType = $('#collector__select :selected').val();
            _basicFunctions.basicFunctions.switchingVisibility(_domElems.domElems.collector, _domElems.domElems.result);
            _basicFunctions.basicFunctions.choosingTournamentType(selectedTournamentType);
        } else {
            _domElems.domElems.collectorAlertB.show();
        }
    });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
            value: true
});
exports.leagueGenerator = leagueGenerator;

var _basicFunctions = __webpack_require__(0);

var _roundrobin = __webpack_require__(5);

function leagueGenerator(teamList) {
            var numberOfTeams = teamList.length;
            var teamNamesList = _basicFunctions.basicFunctions.gettingTeamNames(teamList, numberOfTeams);
            _basicFunctions.basicFunctions.shuffle(teamNamesList); // shuffling teams
            var readyShedule = (0, _roundrobin.roundrobin)(numberOfTeams, teamNamesList);

            return readyShedule;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundrobin = roundrobin;
var DUMMY = -1;
// returns an array of round representations (array of player pairs).
// http://en.wikipedia.org/wiki/Round-robin_tournament#Scheduling_algorithm
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cupGenerator = cupGenerator;

var _basicFunctions = __webpack_require__(0);

var _globalVariables = __webpack_require__(2);

var _cupPairGenerators = __webpack_require__(9);

function cupGenerator(teamList) {
    var final = [];
    var numberOfTeams = teamList.length;
    var teamNamesList = _basicFunctions.basicFunctions.gettingTeamNames(teamList, numberOfTeams);
    // let pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4, pairsReadyToShowR5;
    // pairsReadyToShowR1 = pairsReadyToShowR2 = pairsReadyToShowR3 = pairsReadyToShowR4 = pairsReadyToShowR5 = [];
    // let twoEmpty = [globalVariables.empty, globalVariables.empty];
    // let emptyAndLucky = [globalVariables.empty, globalVariables.lucky];

    _basicFunctions.basicFunctions.shuffle(teamNamesList); // shuffling teams

    // function generatingPairsR1(teamNamesList, numberOfTeams) {
    //     pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
    // };
    // function generatingPairsR2(howMuchEmpty, lucky) {
    //     pairsReadyToShowR2 = [];
    //     if (lucky === true) {
    //     for (let i = 0; i < howMuchEmpty; i++) {
    //         pairsReadyToShowR2.push(twoEmpty);
    //     }
    //     pairsReadyToShowR2.push(emptyAndLucky);
    //     } else {
    //        for (let i = 0; i < howMuchEmpty; i++) {
    //         pairsReadyToShowR2.push(twoEmpty);
    //        }
    //     } 
    // };
    // function generatingPairsR3(howMuchEmpty, lucky) {
    //     pairsReadyToShowR3 = [];
    //     if (lucky === true) {
    //     for (let i = 0; i < howMuchEmpty; i++) {
    //         pairsReadyToShowR3.push(twoEmpty);
    //     }
    //     pairsReadyToShowR3.push(emptyAndLucky);
    //     } else {
    //        for (let i = 0; i < howMuchEmpty; i++) {
    //         pairsReadyToShowR3.push(twoEmpty);
    //        } 
    //     }
    // };
    // function generatingPairsR3R4(lucky) {
    //     if (lucky === true) {
    //         pairsReadyToShowR3 = [twoEmpty, emptyAndLucky];
    //         pairsReadyToShowR4 = twoEmpty;                    
    //     } else {
    //         pairsReadyToShowR3 = [twoEmpty, twoEmpty];
    //         pairsReadyToShowR4 = twoEmpty;
    //     }
    // };
    // function generatingPairsR4R5(lucky) {
    //     if (lucky === true) {
    //         pairsReadyToShowR4 = [twoEmpty, emptyAndLucky];
    //         pairsReadyToShowR5 = twoEmpty;                    
    //     } else {
    //         pairsReadyToShowR4 = [twoEmpty, twoEmpty];
    //         pairsReadyToShowR5 = twoEmpty;
    //     }
    // };

    // 2 rounds
    if (numberOfTeams < 5) {
        _cupPairGenerators.cupPairGenerators.generatingPairsR1(teamNamesList, numberOfTeams);
        _cupPairGenerators.cupPairGenerators.generatingPairsR2(1, false);
        final.push(pairsReadyToShowR1, pairsReadyToShowR2);
        return final;
        // 3 rounds
    } else if (numberOfTeams > 4 && numberOfTeams < 9) {
        _cupPairGenerators.cupPairGenerators.generatingPairsR1(teamNamesList, numberOfTeams);
        if (numberOfTeams === 5 || numberOfTeams === 6) {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(1, true);
        } else {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(2, false);
        }
        pairsReadyToShowR3 = twoEmpty;
        final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3);
        return final;
        // 4 rounds
    } else if (numberOfTeams > 8 && numberOfTeams < 17) {
        generatingPairsR1(teamNamesList, numberOfTeams);
        if (numberOfTeams === 9 || numberOfTeams === 10) {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(2, true);
            _cupPairGenerators.cupPairGenerators.generatingPairsR3R4(true);
        } else if (numberOfTeams === 11 || numberOfTeams === 12) {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(3, false);
            _cupPairGenerators.cupPairGenerators.generatingPairsR3R4(true);
        } else if (numberOfTeams === 13 || numberOfTeams === 14) {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(3, true);
            _cupPairGenerators.cupPairGenerators.generatingPairsR3R4(false);
        } else if (numberOfTeams === 15 || numberOfTeams === 16) {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(4, false);
            _cupPairGenerators.cupPairGenerators.generatingPairsR3R4(false);
        }
        final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4);
        return final;
    } else {
        _cupPairGenerators.cupPairGenerators.generatingPairsR1(teamNamesList, numberOfTeams);
        if (numberOfTeams === 17 || numberOfTeams === 18) {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(4, true);
            _cupPairGenerators.cupPairGenerators.generatingPairsR3(2, true);
            _cupPairGenerators.cupPairGenerators.generatingPairsR4R5(true);
        } else if (numberOfTeams === 19 || numberOfTeams === 20) {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(5, false);
            _cupPairGenerators.cupPairGenerators.generatingPairsR3(2, true);
            _cupPairGenerators.cupPairGenerators.generatingPairsR4R5(true);
        } else if (numberOfTeams === 21 || numberOfTeams === 22) {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(5, true);
            _cupPairGenerators.cupPairGenerators.generatingPairsR3(3, false);
            _cupPairGenerators.cupPairGenerators.generatingPairsR4R5(true);
        } else if (numberOfTeams === 23 || numberOfTeams === 24) {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(6, false);
            _cupPairGenerators.cupPairGenerators.generatingPairsR3(3, false);
            _cupPairGenerators.cupPairGenerators.generatingPairsR4R5(true);
        } else if (numberOfTeams === 25 || numberOfTeams === 26) {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(6, true);
            _cupPairGenerators.cupPairGenerators.generatingPairsR3(3, true);
            _cupPairGenerators.cupPairGenerators.generatingPairsR4R5(false);
        } else if (numberOfTeams === 27 || numberOfTeams === 28) {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(7, false);
            _cupPairGenerators.cupPairGenerators.generatingPairsR3(3, true);
            _cupPairGenerators.cupPairGenerators.generatingPairsR4R5(false);
        } else if (numberOfTeams === 29 || numberOfTeams === 30) {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(7, true);
            _cupPairGenerators.cupPairGenerators.generatingPairsR3(4, false);
            _cupPairGenerators.cupPairGenerators.generatingPairsR4R5(false);
        } else if (numberOfTeams === 31 || numberOfTeams === 32) {
            _cupPairGenerators.cupPairGenerators.generatingPairsR2(8, false);
            _cupPairGenerators.cupPairGenerators.generatingPairsR3(4, false);
            _cupPairGenerators.cupPairGenerators.generatingPairsR4R5(false);
        }

        final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4, pairsReadyToShowR5);
        return final;
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showSheduleLeague = showSheduleLeague;

var _domElems = __webpack_require__(1);

var _basicFunctions = __webpack_require__(0);

function showSheduleLeague(readyShedule) {
    for (var i = 0; i < readyShedule.length; i++) {
        var roundCounter = 1 + i;
        var gameCounter = 0;
        console.log("showSheduleLeague");

        if (roundCounter <= 8) {
            _basicFunctions.basicFunctions.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
        } else if (8 <= roundCounter && roundCounter <= 16) {
            _basicFunctions.basicFunctions.showHeader(_domElems.domElems.sheduleOnScreenB, roundCounter);
        } else if (17 <= roundCounter && roundCounter <= 24) {
            _basicFunctions.basicFunctions.showHeader(_domElems.domElems.sheduleOnScreenC, roundCounter);
        } else {
            _basicFunctions.basicFunctions.showHeader(_domElems.domElems.sheduleOnScreenD, roundCounter);
        }

        for (var j = 0; j < readyShedule[i].length; j++) {
            var newPair = readyShedule[i][j];
            var pairOnScreen = newPair.join(" ___ - ___ ");

            if (roundCounter <= 8) {
                _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
            } else if (8 <= roundCounter && roundCounter <= 16) {
                gameCounter = _domElems.domElems.sheduleOnScreenA.find('li').length + 1;
                _domElems.domElems.sheduleOnScreenB.attr('start', "" + gameCounter);
                _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenB, pairOnScreen);
            } else if (17 <= roundCounter && roundCounter <= 24) {
                gameCounter = _domElems.domElems.sheduleOnScreenB.find('li').length * 2 + 1;
                _domElems.domElems.sheduleOnScreenC.attr('start', "" + gameCounter);
                _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenC, pairOnScreen);
            } else {
                gameCounter = _domElems.domElems.sheduleOnScreenC.find('li').length * 3 + 1;
                _domElems.domElems.sheduleOnScreenD.attr('start', "" + gameCounter);
                _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenD, pairOnScreen);
            }
        }
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.showSheduleCup = showSheduleCup;

var _domElems = __webpack_require__(1);

var _basicFunctions = __webpack_require__(0);

var _globalVariables = __webpack_require__(2);

function showSheduleCup(sheduleArray, numberOfTeams) {
    var roundCounter = 1;
    var pairOnScreen = "";
    console.log("do wyświetlenia: ", sheduleArray);

    function showingTwoFirstRoundsCup() {
        var repsR1 = sheduleArray[0].length;
        var repsR2 = Math.ceil(sheduleArray[0].length / 2);
        var idLeft = "";
        var idRight = "";
        //Round 1   
        _basicFunctions.basicFunctions.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
        for (var i = 0; i < repsR1; i++) {
            idLeft = _globalVariables.globalVariables.idCharArr[i] + "1";
            idRight = _globalVariables.globalVariables.idCharArr[i] + "2";
            pairOnScreen = sheduleArray[0][i].join(" " + idLeft + " ___ - ___ " + ("" + idRight));
            _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
        }
        roundCounter++;

        //Round 2
        _basicFunctions.basicFunctions.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
        if (numberOfTeams === 3 || numberOfTeams === 4) {
            for (var k = 0; k < repsR2; k++) {
                pairOnScreen = sheduleArray[1].join(" ___ - ___ ");
                _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
            }
        } else {
            for (var _k = 0; _k < repsR2; _k++) {
                pairOnScreen = sheduleArray[1][_k].join(" ___ - ___ ");
                _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
            }
        }
        roundCounter++;
    };

    if (numberOfTeams < 5) {
        showingTwoFirstRoundsCup();
    } else if (numberOfTeams > 4) {
        showingTwoFirstRoundsCup();
        //Round 3
        var repsR3 = Math.ceil(sheduleArray[1].length / 2);

        _basicFunctions.basicFunctions.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
        if (numberOfTeams > 4 && numberOfTeams < 9) {
            for (var l = 0; l < repsR3; l++) {
                pairOnScreen = sheduleArray[2].join(" ___ - ___ ");
                _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
            }
            roundCounter++;
        } else if (numberOfTeams > 8 && numberOfTeams < 33) {
            for (var _l = 0; _l < repsR3; _l++) {
                pairOnScreen = sheduleArray[2][_l].join(" ___ - ___ ");
                _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
            }
            roundCounter++;
            // Round 4
            var repsR4 = Math.ceil(sheduleArray[2].length / 2);

            _basicFunctions.basicFunctions.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
            if (numberOfTeams > 8 && numberOfTeams < 17) {
                for (var n = 0; n < repsR4; n++) {
                    pairOnScreen = sheduleArray[3].join(" ___ - ___ ");
                    _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
                }
            } else if (numberOfTeams > 16) {
                for (var _n = 0; _n < repsR4; _n++) {
                    console.log("testowanko: ", _typeof(sheduleArray[3][_n]));

                    pairOnScreen = sheduleArray[3][_n].join(" ___ - ___ ");
                    _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
                }
                roundCounter++;
                // Round 5
                var repsR5 = Math.ceil(sheduleArray[3].length / 2);

                _basicFunctions.basicFunctions.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
                for (var o = 0; o < repsR5; o++) {
                    pairOnScreen = sheduleArray[4].join(" ___ - ___ ");
                    _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
                }
            }
        }
    }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pairGenerators = undefined;

var _globalVariables = __webpack_require__(2);

var _basicFunctions = __webpack_require__(0);

var pairsReadyToShowR1 = void 0,
    pairsReadyToShowR2 = void 0,
    pairsReadyToShowR3 = void 0,
    pairsReadyToShowR4 = void 0,
    pairsReadyToShowR5 = void 0;
pairsReadyToShowR1 = pairsReadyToShowR2 = pairsReadyToShowR3 = pairsReadyToShowR4 = pairsReadyToShowR5 = [];
var twoEmpty = [_globalVariables.globalVariables.empty, _globalVariables.globalVariables.empty];
var emptyAndLucky = [_globalVariables.globalVariables.empty, _globalVariables.globalVariables.lucky];

var pairGenerators = exports.pairGenerators = {
    generatingPairsR1: function generatingPairsR1(teamNamesList, numberOfTeams) {
        pairsReadyToShowR1 = _basicFunctions.basicFunctions.pairing(teamNamesList, numberOfTeams);
    },
    generatingPairsR2: function generatingPairsR2(howMuchEmpty, lucky) {
        pairsReadyToShowR2 = [];
        if (lucky === true) {
            for (var i = 0; i < howMuchEmpty; i++) {
                pairsReadyToShowR2.push(twoEmpty);
            }
            pairsReadyToShowR2.push(emptyAndLucky);
        } else {
            for (var _i = 0; _i < howMuchEmpty; _i++) {
                pairsReadyToShowR2.push(twoEmpty);
            }
        }
    },
    generatingPairsR3: function generatingPairsR3(howMuchEmpty, lucky) {
        pairsReadyToShowR3 = [];
        if (lucky === true) {
            for (var i = 0; i < howMuchEmpty; i++) {
                pairsReadyToShowR3.push(twoEmpty);
            }
            pairsReadyToShowR3.push(emptyAndLucky);
        } else {
            for (var _i2 = 0; _i2 < howMuchEmpty; _i2++) {
                pairsReadyToShowR3.push(twoEmpty);
            }
        }
    },
    generatingPairsR3R4: function generatingPairsR3R4(lucky) {
        if (lucky === true) {
            pairsReadyToShowR3 = [twoEmpty, emptyAndLucky];
            pairsReadyToShowR4 = twoEmpty;
        } else {
            pairsReadyToShowR3 = [twoEmpty, twoEmpty];
            pairsReadyToShowR4 = twoEmpty;
        }
    },
    generatingPairsR4R5: function generatingPairsR4R5(lucky) {
        if (lucky === true) {
            pairsReadyToShowR4 = [twoEmpty, emptyAndLucky];
            pairsReadyToShowR5 = twoEmpty;
        } else {
            pairsReadyToShowR4 = [twoEmpty, twoEmpty];
            pairsReadyToShowR5 = twoEmpty;
        }
    }
};

/***/ })
/******/ ]);