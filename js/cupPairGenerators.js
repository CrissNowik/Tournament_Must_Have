import { globalVariables } from "./globalVariables";
import { basicFunctions } from "./basicFunctions";

let pairsReadyToShowR1, pairsReadyToShowR2, pairsReadyToShowR3, pairsReadyToShowR4, pairsReadyToShowR5;
pairsReadyToShowR1 = pairsReadyToShowR2 = pairsReadyToShowR3 = pairsReadyToShowR4 = pairsReadyToShowR5 = [];
let twoEmpty = [globalVariables.empty, globalVariables.empty];
let emptyAndLucky = [globalVariables.empty, globalVariables.lucky];

export let pairGenerators = {
            generatingPairsR1: function (teamNamesList, numberOfTeams) {
                pairsReadyToShowR1 = basicFunctions.pairing(teamNamesList, numberOfTeams);
            },
            generatingPairsR2: function (howMuchEmpty, lucky) {
                pairsReadyToShowR2 = [];
                if (lucky === true) {
                for (let i = 0; i < howMuchEmpty; i++) {
                    pairsReadyToShowR2.push(twoEmpty);
                }
                pairsReadyToShowR2.push(emptyAndLucky);
                } else {
                for (let i = 0; i < howMuchEmpty; i++) {
                    pairsReadyToShowR2.push(twoEmpty);
                }
                } 
            },
            generatingPairsR3: function (howMuchEmpty, lucky) {
                pairsReadyToShowR3 = [];
                if (lucky === true) {
                for (let i = 0; i < howMuchEmpty; i++) {
                    pairsReadyToShowR3.push(twoEmpty);
                }
                pairsReadyToShowR3.push(emptyAndLucky);
                } else {
                for (let i = 0; i < howMuchEmpty; i++) {
                    pairsReadyToShowR3.push(twoEmpty);
                } 
                }
            },
            generatingPairsR3R4: function (lucky) {
                if (lucky === true) {
                    pairsReadyToShowR3 = [twoEmpty, emptyAndLucky];
                    pairsReadyToShowR4 = twoEmpty;                    
                } else {
                    pairsReadyToShowR3 = [twoEmpty, twoEmpty];
                    pairsReadyToShowR4 = twoEmpty;
                }
            },
            generatingPairsR4R5: function (lucky) {
                if (lucky === true) {
                    pairsReadyToShowR4 = [twoEmpty, emptyAndLucky];
                    pairsReadyToShowR5 = twoEmpty;                    
                } else {
                    pairsReadyToShowR4 = [twoEmpty, twoEmpty];
                    pairsReadyToShowR5 = twoEmpty;
                }
            }
}




