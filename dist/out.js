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

var _mixGenerator = __webpack_require__(7);

var _showSheduleLeague = __webpack_require__(8);

var _showSheduleCup = __webpack_require__(9);

var DUMMY = -1;

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
                console.log(" 4 rounds");
            } else {
                // 5 rounds
                console.log(" 5 rounds");
            }
        } else {
            (0, _mixGenerator.mixGenerator)();
        }
    },
    randomWithoutRepeat: function randomWithoutRepeat(howMuch, range) {
        // wypełnienie tablicy
        var numbers = new Array(range);
        for (var i = 0; i < range; i++) {
            numbers[i] = i + 1;
        }
        // losowanie howMuch liczb
        for (var _i = 0; _i < howMuch; _i++) {
            var rand = Math.floor(Math.random() * range);
            console.log("wylosowano: ", numbers[rand]);
            numbers[rand] = numbers[range - 1];
            range--;
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
            for (var _i2 = 0; _i2 < rep; _i2++) {
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
    sheduleOnScreenD: $('#result__listD')
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
    empty: "..............",
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

function cupGenerator(teamList) {
    var numberOfTeams = teamList.length;
    var teamNamesList = _basicFunctions.basicFunctions.gettingTeamNames(teamList, numberOfTeams);
    var final = [];
    var pairsReadyToShowR1 = void 0,
        pairsReadyToShowR2 = void 0,
        pairsReadyToShowR3 = void 0,
        pairsReadyToShowR4 = void 0,
        pairsReadyToShowR5 = void 0;
    pairsReadyToShowR1 = pairsReadyToShowR2 = pairsReadyToShowR3 = pairsReadyToShowR4 = pairsReadyToShowR5 = [];
    var twoEmpty = [_globalVariables.globalVariables.empty, _globalVariables.globalVariables.empty];

    _basicFunctions.basicFunctions.shuffle(teamNamesList); // shuffling teams

    if (numberOfTeams < 5) {
        // 2 rounds
        pairsReadyToShowR1 = _basicFunctions.basicFunctions.pairing(teamNamesList, numberOfTeams);
        pairsReadyToShowR2 = twoEmpty;
        final.push(pairsReadyToShowR1, pairsReadyToShowR2);
        return final;
    } else if (numberOfTeams > 4 && numberOfTeams < 9) {
        // 3 rounds
        pairsReadyToShowR1 = _basicFunctions.basicFunctions.pairing(teamNamesList, numberOfTeams);
        if (numberOfTeams === 5 || numberOfTeams === 6) {
            pairsReadyToShowR2.push(twoEmpty, [_globalVariables.globalVariables.empty, _globalVariables.globalVariables.lucky]);
        } else {
            for (var i = 0; i < 2; i++) {
                pairsReadyToShowR2.push(twoEmpty);
            }
        }
        pairsReadyToShowR3 = twoEmpty;
        final.push(pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3);
        return final;
    } else if (numberOfTeams > 8 && numberOfTeams < 17) {// 4 rounds
        // return array with 4 subarrays;
    } else {// 5 rounds
            // return array with 5 subarrays;
        }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
            value: true
});
exports.mixGenerator = mixGenerator;
function mixGenerator() {
            console.log("MIX");
};

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showSheduleCup = showSheduleCup;

var _domElems = __webpack_require__(1);

var _globalVariables = __webpack_require__(2);

var _basicFunctions = __webpack_require__(0);

function showSheduleCup(sheduleArray, numberOfTeams) {
    var repsR1 = sheduleArray[0].length;
    var repsR2 = Math.ceil(sheduleArray[0].length / 2);
    var roundCounter = 1;
    var idLeft = "";
    var idRight = "";
    var pairOnScreen = "";
    console.log(sheduleArray);

    if (numberOfTeams < 5) {
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
        } else if (numberOfTeams > 4 && numberOfTeams < 9) {
            for (var _k = 0; _k < repsR2; _k++) {
                pairOnScreen = sheduleArray[1][_k].join(" ___ - ___ ");
                _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
            }
        }
        roundCounter++;
    } else {
        //Round 1  
        _basicFunctions.basicFunctions.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
        for (var _i = 0; _i < repsR1; _i++) {
            idLeft = _globalVariables.globalVariables.idCharArr[_i] + "1";
            idRight = _globalVariables.globalVariables.idCharArr[_i] + "2";
            pairOnScreen = sheduleArray[0][_i].join(" " + idLeft + " ___ - ___ " + ("" + idRight));
            _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
        }
        roundCounter++;

        //Round 2
        _basicFunctions.basicFunctions.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
        if (numberOfTeams === 3 || numberOfTeams === 4) {
            for (var _k2 = 0; _k2 < repsR2; _k2++) {
                pairOnScreen = sheduleArray[1].join(" ___ - ___ ");
                _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
            }
        } else if (numberOfTeams > 4 && numberOfTeams < 9) {
            for (var _k3 = 0; _k3 < repsR2; _k3++) {
                pairOnScreen = sheduleArray[1][_k3].join(" ___ - ___ ");
                _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
            }
        }
        roundCounter++;
        //Round 3
        var repsR3 = Math.ceil(sheduleArray[1].length / 2);
        _basicFunctions.basicFunctions.showHeader(_domElems.domElems.sheduleOnScreenA, roundCounter);
        for (var l = 0; l < repsR3; l++) {
            pairOnScreen = sheduleArray[2].join(" ___ - ___ ");
            _basicFunctions.basicFunctions.showMatch(_domElems.domElems.sheduleOnScreenA, pairOnScreen);
        }
        roundCounter++;
    }
};

/***/ })
/******/ ]);