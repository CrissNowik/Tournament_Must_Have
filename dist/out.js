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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
    btnGenerate: $('.collector__generate'),
    btnConfirm: $('.nav__confirm'),
    collector: $('.collector'),
    naviScreen: $('.nav'),
    result: $('.result'),
    btnAdd: $('.collector__add'),
    teamList: $('.collector__list'),
    teamInput: $('.collector__input'),
    teamOnList: $('.collector__listItem'),
    collectorAlertA: $('#alertOne'),
    collectorAlertB: $('#alertTwo')
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

var _globalVariables = __webpack_require__(3);

var _leagueGenerator = __webpack_require__(4);

var _cupGenerator = __webpack_require__(5);

var _mixGenerator = __webpack_require__(6);

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
            _domElems.domElems.collectorAlertB.hide();
        }
        if (newTeam != "") {
            var counter = _globalVariables.globalVariables.dataCounter++;
            this.switchingVisibility(_domElems.domElems.collectorAlertA, _domElems.domElems.teamList);
            _domElems.domElems.teamList.append("<li class=\"collector__listItem\" data-nr=\"" + counter + "\"> " + newTeam + "<button class=\"collector__del\" type=\"button\">X</button></li>");
        } else {
            _domElems.domElems.collectorAlertA.show();
        }
    },
    choosingTournamentType: function choosingTournamentType(tournamentType) {
        var teamList = _domElems.domElems.teamList.children();
        console.log("Choosing team: ", teamList);

        if (tournamentType === 'League') {
            var readySheduleLeague = (0, _leagueGenerator.leagueGenerator)(teamList);
        } else if (tournamentType === 'Cup') {
            (0, _cupGenerator.cupGenerator)();
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
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _domElems = __webpack_require__(0);

var _basicFunctions = __webpack_require__(1);

$(document).ready(function () {
    //Removing teams from list
    //
    _domElems.domElems.teamList.on('click', 'li.collector__listItem>button.collector__del', function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });

    //Function calls on elems
    //
    _domElems.domElems.btnConfirm.on('click', function (e) {
        e.preventDefault();
        _basicFunctions.basicFunctions.switchingVisibility(_domElems.domElems.naviScreen, _domElems.domElems.collector);
    });

    _domElems.domElems.btnAdd.bind('click keypress', function (e) {
        e.preventDefault();
        var code = e.keyCode || e.which;
        if (code === 13 || e.type === 'click') {
            _basicFunctions.basicFunctions.gettingTeams();
            _domElems.domElems.teamInput.val("");
        };
    });

    _domElems.domElems.teamInput.on('keypress', function (e) {
        var code = e.keyCode || e.which;
        if (code === 13) {
            e.preventDefault();
            _basicFunctions.basicFunctions.gettingTeams();
            _domElems.domElems.teamInput.val("");
        };
    });

    _domElems.domElems.btnGenerate.on('click', function (e) {
        e.preventDefault();
        if (_domElems.domElems.teamList.children().length > 2) {
            _basicFunctions.basicFunctions.switchingVisibility(_domElems.domElems.collectorAlertB, _domElems.domElems.result);
            var selectedTeam = $('#collector__select :selected').val();
            _basicFunctions.basicFunctions.switchingVisibility(_domElems.domElems.collector, _domElems.domElems.result);
            _basicFunctions.basicFunctions.choosingTournamentType(selectedTeam);
        } else {
            _domElems.domElems.collectorAlertB.show();
        }
    });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var globalVariables = exports.globalVariables = {
    dataCounter: 0
};

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
            console.log("LIGA");
            var numberOfTeams = teamList.length;
            var teamNamesList = [];

            for (var i = 0; i < numberOfTeams; i++) {
                        teamNamesList.push(teamList[i].firstChild.wholeText);
            }
            _basicFunctions.basicFunctions.shuffle(teamNamesList); // shuffling teams

            var robin = __webpack_require__(7); // call for algorythm
            var readyShedule = robin(numberOfTeams, teamNamesList); // using algorythm
            return readyShedule;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.cupGenerator = cupGenerator;
function cupGenerator() {
        console.log("CUP");
};

/***/ }),
/* 6 */
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
/* 7 */
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


/***/ })
/******/ ]);