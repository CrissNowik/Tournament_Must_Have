import {globalVariables} from "./globalVariables";

const TWOEMPTY = [globalVariables.empty, globalVariables.empty];
const EMPTYANDLUCKY = [globalVariables.empty, globalVariables.lucky];

export let cupPairGenerators = {
    generatingPairsR2: function (howMuchEmpty, lucky) {
        let pairsReadyToShowR2 = [];
        if (howMuchEmpty === 1 && lucky === false) {
            pairsReadyToShowR2 = TWOEMPTY;
        } else {
            if (lucky === true) {
                for (let i = 0; i < howMuchEmpty; i++) {
                    pairsReadyToShowR2.push(TWOEMPTY);
                }
                pairsReadyToShowR2.push(EMPTYANDLUCKY);
            } else {
                for (let i = 0; i < howMuchEmpty; i++) {
                    pairsReadyToShowR2.push(TWOEMPTY);
                }
            }
        }
        return pairsReadyToShowR2;
    },
    generatingPairsR3: function (howMuchEmpty, lucky) {
        let pairsReadyToShowR3 = [];
        if (howMuchEmpty === 1 && lucky === false) {
            pairsReadyToShowR3 = TWOEMPTY;
        } else {
            if (lucky === true) {
                for (let i = 0; i < howMuchEmpty; i++) {
                    pairsReadyToShowR3.push(TWOEMPTY);
                }
                pairsReadyToShowR3.push(EMPTYANDLUCKY);
            } else {
                for (let i = 0; i < howMuchEmpty; i++) {
                    pairsReadyToShowR3.push(TWOEMPTY);
                } 
            }
        }
        return pairsReadyToShowR3;
    },
    generatingPairsPuRound: function (lucky) {
        let pairsReadyToShowOneBeforeLastRound = [];
        if (lucky === true) {
            pairsReadyToShowOneBeforeLastRound = [TWOEMPTY, EMPTYANDLUCKY];                  
        } else {
            pairsReadyToShowOneBeforeLastRound = [TWOEMPTY, TWOEMPTY];
        }
        return pairsReadyToShowOneBeforeLastRound;
    },
    generatingPairsLastRound: function () {
        let pairsReadyToShowLastRound = [];
        pairsReadyToShowLastRound = TWOEMPTY;
        return pairsReadyToShowLastRound;
    }
}