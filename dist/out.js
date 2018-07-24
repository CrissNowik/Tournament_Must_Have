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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.basicFunctions = undefined;

var _domElems = __webpack_require__(0);

var _globalVariables = __webpack_require__(2);

var _leagueGenerator = __webpack_require__(4);

var _cupGenerator = __webpack_require__(6);

var _mixGenerator = __webpack_require__(7);

var _showSheduleLeague = __webpack_require__(8);

var _showSheduleCup = __webpack_require__(9);

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
        console.log("teamList", numberOfCompetitors);

        if (tournamentType === 'League') {
            var readySheduleLeague = (0, _leagueGenerator.leagueGenerator)(numberOfCompetitors);
            (0, _showSheduleLeague.showSheduleLeague)(readySheduleLeague);
        } else if (tournamentType === 'Cup') {
            if (numberOfCompetitors < 5) {
                // 2 rounds
                var sheduleToShowUp = (0, _cupGenerator.cupGenerator)(teamList);
                console.log("sheduleToShowUp ", sheduleToShowUp);

                (0, _showSheduleCup.showSheduleCup)(sheduleToShowUp);
            } else if (numberOfCompetitors > 4 && numberOfCompetitors < 9) {
                // 3 rounds
                console.log(" 3 rounds");
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
            teams.push(" Lucky");
            for (var _i2 = 0; _i2 < rep; _i2++) {
                var _array = teams.slice(0, 2);
                teams.splice(0, 2);
                pairsReadyToShow.push(_array);
            }
        }
        return pairsReadyToShow;
    }
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
    idCharArr: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"]
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _domElems = __webpack_require__(0);

var _basicFunctions = __webpack_require__(1);

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

var _basicFunctions = __webpack_require__(1);

function leagueGenerator(teamList) {
            var numberOfTeams = teamList.length;
            var teamNamesList = _basicFunctions.basicFunctions.gettingTeamNames(teamList, numberOfTeams);

            _basicFunctions.basicFunctions.shuffle(teamNamesList); // shuffling teams

            var robin = __webpack_require__(5); // call for algorythm
            var readyShedule = robin(numberOfTeams, teamNamesList); // using algorythm
            return readyShedule;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

const DUMMY = -1;
// returns an array of round representations (array of player pairs).
// http://en.wikipedia.org/wiki/Round-robin_tournament#Scheduling_algorithm
module.exports = function (n, ps) {  // n = num players
  var rs = [];                  // rs = round array
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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cupGenerator = cupGenerator;

var _basicFunctions = __webpack_require__(1);

function cupGenerator(teamList) {
    var numberOfTeams = teamList.length;
    var teamNamesList = _basicFunctions.basicFunctions.gettingTeamNames(teamList, numberOfTeams);
    var pairsReadyToShowR1 = [];
    var pairsReadyToShowR2 = [];
    var pairsReadyToShowR3 = [];
    var pairsReadyToShowR4 = [];
    var pairsReadyToShowR5 = [];

    _basicFunctions.basicFunctions.shuffle(teamNamesList); // shuffling teams

    if (numberOfTeams < 5) {
        // 2 rounds
        pairsReadyToShowR1 = _basicFunctions.basicFunctions.pairing(teamNamesList, numberOfTeams);
        console.log("Cup generator, 2 rounds ", pairsReadyToShowR1);
        return pairsReadyToShowR1;
        // return array with 2 subarrays;
    } else if (numberOfTeams > 4 && numberOfTeams < 9) {// 3 rounds
        // return array with 3 subarrays;
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

var _domElems = __webpack_require__(0);

function showSheduleLeague(readyShedule) {
    for (var i = 0; i < readyShedule.length; i++) {
        var roundCounter = 1 + i;
        var gameCounter = 0;

        if (roundCounter <= 8) {
            _domElems.domElems.sheduleOnScreenA.append("<ul class=\"result__listItem--roundHeader\">Round nr " + roundCounter + "</ul>");
        } else if (8 <= roundCounter && roundCounter <= 16) {
            _domElems.domElems.sheduleOnScreenB.append("<ul class=\"result__listItem--roundHeader\">Round nr " + roundCounter + "</ul>");
        } else if (17 <= roundCounter && roundCounter <= 24) {
            _domElems.domElems.sheduleOnScreenC.append("<ul class=\"result__listItem--roundHeader\">Round nr " + roundCounter + "</ul>");
        } else {
            _domElems.domElems.sheduleOnScreenD.append("<ul class=\"result__listItem--roundHeader\">Round nr " + roundCounter + "</ul>");
        }

        for (var j = 0; j < readyShedule[i].length; j++) {
            var newPair = readyShedule[i][j];
            var pairOnScreen = newPair.join(" ___ - ___ ");

            if (roundCounter <= 8) {
                _domElems.domElems.sheduleOnScreenA.append("<li class=\"result__listItem\">" + pairOnScreen + "</li>");
            } else if (8 <= roundCounter && roundCounter <= 16) {
                gameCounter = _domElems.domElems.sheduleOnScreenA.find('li').length + 1;
                _domElems.domElems.sheduleOnScreenB.attr('start', "" + gameCounter);
                _domElems.domElems.sheduleOnScreenB.append("<li class=\"result__listItem\">" + pairOnScreen + "</li>");
            } else if (17 <= roundCounter && roundCounter <= 24) {
                gameCounter = _domElems.domElems.sheduleOnScreenB.find('li').length * 2 + 1;
                _domElems.domElems.sheduleOnScreenC.attr('start', "" + gameCounter);
                _domElems.domElems.sheduleOnScreenC.append("<li class=\"result__listItem\">" + pairOnScreen + "</li>");
            } else {
                gameCounter = _domElems.domElems.sheduleOnScreenC.find('li').length * 3 + 1;
                _domElems.domElems.sheduleOnScreenD.attr('start', "" + gameCounter);
                _domElems.domElems.sheduleOnScreenD.append("<li class=\"result__listItem\">" + pairOnScreen + "</li>");
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

var _domElems = __webpack_require__(0);

var _globalVariables = __webpack_require__(2);

function showSheduleCup(sheduleRound1) {
    var repsR1 = sheduleRound1.length;
    // let repsR2 = Math.ceil(repsR1/2);
    var roundCounter = 1;
    var idLeft = "";
    var idRight = "";
    var pairOnScreen = "";

    //Round 1
    _domElems.domElems.sheduleOnScreenA.append("<ul class=\"result__listItem--roundHeader\">Round nr " + roundCounter + "</ul>");

    for (var i = 0; i < repsR1; i++) {
        idLeft = _globalVariables.globalVariables.idCharArr[i] + "1";
        idRight = _globalVariables.globalVariables.idCharArr[i] + "2";
        pairOnScreen = sheduleRound1[i].join(" " + idLeft + " ___ - ___ " + ("" + idRight));

        _domElems.domElems.sheduleOnScreenA.append("<li class=\"result__listItem\">" + pairOnScreen + "</li>");
    }
    roundCounter++;
    //Round 2
    _domElems.domElems.sheduleOnScreenA.append("<ul class=\"result__listItem--roundHeader\">Round nr " + roundCounter + "</ul>");

    //  for (let k = 0; k < repsR2; k++) {
    //     pairOnScreen = sheduleRound2[k].join(" ___ - ___ ");   
    //     domElems.sheduleOnScreenA.append(`<li class="result__listItem">${pairOnScreen}</li>`);

    //  }
}

/***/ })
/******/ ]);