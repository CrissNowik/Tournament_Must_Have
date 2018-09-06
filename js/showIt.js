import { globalVariables } from "./globalVariables";
import { domElems } from "./domElems";

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
   
    showLadderRect: function (where, roundNumber, howMany, isLucky, luckyBefore, numberOfTeams) {
        let lastElemIsLucky = isLucky.length-1;
        let lastElemLuckyBefore = luckyBefore.length-1;
        let decision = isLucky[lastElemIsLucky].indexOf(" Lucky Team");
        let decisionBef = luckyBefore[lastElemLuckyBefore].indexOf(" Lucky Team");
        if (decisionBef !== -1 && decision !== -1) {
            if (numberOfTeams === 19 || numberOfTeams === 20) {
                for (let i = 0; i < howMany-2; i++) {                                          
                    where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                }
                where.append(`<li class="result__ladder_rectRaL${roundNumber}a"></li>`);
                where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                console.log(`${roundNumber}`,"showLadderRect + + a")
            } else {
                for (let i = 0; i < howMany-2; i++) {                                          
                    where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                }
                where.append(`<li class="result__ladder_rectRaL${roundNumber}"></li>`);
                where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                console.log(`${roundNumber}`,"showLadderRect + +")
            }
        } else if (decisionBef === -1 && decision === -1) {
            if (numberOfTeams === 13 || numberOfTeams === 14) {
                for (let i = 0; i < howMany; i++) {                                            
                    where.append(`<li class="result__ladder_rectR${roundNumber}a"></li>`);
                    }
                    console.log(`${roundNumber}`,"showLadderRect - - a")
            } else if (numberOfTeams === 25 || numberOfTeams === 26) {
                for (let i = 0; i < howMany; i++) {                                            
                    where.append(`<li class="result__ladder_rectR${roundNumber}d"></li>`);
                    }
                    console.log(`${roundNumber}`,"showLadderRect - - d")
            } else if (numberOfTeams === 27 || numberOfTeams === 28) {
                for (let i = 0; i < howMany; i++) {                                            
                    where.append(`<li class="result__ladder_rectR${roundNumber}e"></li>`);
                    }
                    console.log(`${roundNumber}`,"showLadderRect - - e")
            } else {
                for (let i = 0; i < howMany; i++) {                                            
                    where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                    }
                    console.log(`${roundNumber}`,"showLadderRect - -")
            }
           
        } else if (decisionBef !== -1 && decision === -1){
            if (numberOfTeams === 11 || numberOfTeams === 12) {
                for (let i = 0; i < howMany-2; i++) {
                    where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                }
                where.append(`<li class="result__ladder_rectRaL${roundNumber}a"></li>`);
                where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                console.log(`${roundNumber}`,"showLadderRect + - a")
            } else if (numberOfTeams === 17 || numberOfTeams === 18) {
                for (let i = 0; i < howMany-2; i++) {
                    where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                }
                where.append(`<li class="result__ladder_rectRaL${roundNumber}"></li>`);
                where.append(`<li class="result__ladder_rectR${roundNumber}a"></li>`);
                console.log(`${roundNumber}`,"showLadderRect + - a")
            } else if (numberOfTeams === 19 || numberOfTeams === 20){
                for (let i = 0; i < howMany-2; i++) {
                    where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                }
                where.append(`<li class="result__ladder_rectRaL${roundNumber}"></li>`);
                where.append(`<li class="result__ladder_rectR${roundNumber}b"></li>`);
                console.log(`${roundNumber}`,"showLadderRect + - b")
            } else if (numberOfTeams === 21 || numberOfTeams === 22){
                for (let i = 0; i < howMany-2; i++) {
                    where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                }
                where.append(`<li class="result__ladder_rectRaL${roundNumber}"></li>`);
                where.append(`<li class="result__ladder_rectR${roundNumber}c"></li>`);
                console.log(`${roundNumber}`,"showLadderRect + - b")
            } else if (numberOfTeams === 27 || numberOfTeams === 28){
                for (let i = 0; i < howMany-2; i++) {
                    where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                }
                where.append(`<li class="result__ladder_rectRaL${roundNumber}a"></li>`);
                where.append(`<li class="result__ladder_rectR${roundNumber}b"></li>`);
                console.log(`${roundNumber}`,"showLadderRect + - ab")
            } else {
                for (let i = 0; i < howMany-2; i++) {
                    where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                }
                where.append(`<li class="result__ladder_rectRaL${roundNumber}"></li>`);
                where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                console.log(`${roundNumber}`,"showLadderRect + -")
            }
            
        } else if (decisionBef === -1 && decision !== -1){
            if (numberOfTeams === 21 || numberOfTeams === 22) {
                for (let i = 0; i < howMany-2; i++) {                                             
                    where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                }
                where.append(`<li class="result__ladder_rectR${roundNumber}a"></li>`);
                where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                console.log(`${roundNumber}`,"showLadderRect - +")
            } else {
                for (let i = 0; i < howMany; i++) {                                             
                    where.append(`<li class="result__ladder_rectR${roundNumber}"></li>`);
                }
                console.log(`${roundNumber}`,"showLadderRect - +")
            }
        }
    },
    showChampRect: function (where, roundNumber, postfix) {
        where.append(`<li class="result__ladder_rect${roundNumber}${postfix}"></li>`);
    },
    showLinesR1: function(where, amount, round){
        for (let i = 0; i < amount; i++) {
            where.append(`<div class="result__ladder_lineR${round}"></div>`);
        }
    },
    drawLines: function(where, amount, decision, round, postfix, postfixL){
        if (decision !== -1) { 
            for (let i = 0; i < amount-1; i++) {
                where.append(`<div class="result__ladder_lineR${round}${postfix}"></div>`); 
            }                                                                      
            where.append(`<div class="result__ladder_luckyLine${round}${postfixL}"></div>`); 
            console.log("specka");
             
        } else {  
                for (let i = 0; i < amount; i++) {                                      
                    where.append(`<div class="result__ladder_lineR${round}${postfix}"></div>`);  
            } 
            console.log("zwykła");                                                                    
        }     
    },
    drawSpecLines: function(where, amount, decision, round, postfix1, postfix2, postfix3){
        if (decision !== -1) { 
            for (let i = 0; i < amount-1; i++) {
                where.append(`<div class="result__ladder_lineR${round}${postfix1}"></div>`); 
            }                                                                      
            where.append(`<div class="result__ladder_luckyLine${round}${postfix2}"></div>`);  
        } else {  
                for (let i = 0; i < amount-1; i++) {                                      
                    where.append(`<div class="result__ladder_lineR${round}${postfix1}"></div>`);  
            }  
            where.append(`<div class="result__ladder_lineR${round}${postfix3}"></div>`);                                    
        }
    },
    showLines: function(where, amount, round, isLucky, numberOfTeams) {
        let lastElemIsLucky = isLucky.length-1;
        let decision = isLucky[lastElemIsLucky].indexOf(" Lucky Team");  
        if (numberOfTeams < 7) {
            this.drawLines(where, amount, decision, round, "a", "a");                           // all ok                                 
        } 
        else if (numberOfTeams > 6 && numberOfTeams < 33) {
            if (numberOfTeams === 7 || numberOfTeams === 8) {                                   // all ok
                this.drawLines(where, amount, decision, round, "b", "a");
            } 
            else if (numberOfTeams === 9 || numberOfTeams === 10){                              // all ok 
                this.drawLines(where, amount, decision, round, "b", "a");
            }
            else if (numberOfTeams === 11 || numberOfTeams === 12) {                            // all ok
                this.drawLines(where, amount, decision, round, "b", "b");
                domElems.line_container4.find("div").css({"height": "478px"});
            } 
            else if (numberOfTeams === 13 || numberOfTeams === 14) {    
                this.drawSpecLines(where, amount, decision, round, "b", "b", "d");              // all ok 
            }
            else if (numberOfTeams === 15 || numberOfTeams === 16) {                            // all ok
                this.drawLines(where, amount, decision, round, "c", "b");
            }
            else if (numberOfTeams === 17 || numberOfTeams === 18) {                            // R1,2,3 ok
                this.drawLines(where, amount, decision, round, "c", "d");  
            }
            else if (numberOfTeams === 19 || numberOfTeams === 20) {                            // R1,2,3 ok
                this.drawLines(where, amount, decision, round, "c", "b");
            }
            else if (numberOfTeams === 21 || numberOfTeams === 22) {                             // R1,2,3 ok
                this.drawSpecLines(where, amount, decision, round, "c", "b", "d");
            }
            else if (numberOfTeams === 23 || numberOfTeams === 24) {                            // R1,2,3 ok 
                this.drawLines(where, amount, decision, round, "c", "b");
            }
            else if (numberOfTeams === 25 || numberOfTeams === 26) {                            // R1,2,3 ok 
                this.drawLines(where, amount, decision, round, "c", "d");
            }
            else if (numberOfTeams === 27 || numberOfTeams === 28) {                             // R1,2,3 ok 
                this.drawLines(where, amount, decision, round, "c", "b");
            }
            else if (numberOfTeams === 29 || numberOfTeams === 30) {                            // R1,2,3 ok
                this.drawSpecLines(where, amount, decision, round, "c", "b", "d");
            }   
            else if (numberOfTeams === 31 || numberOfTeams === 32) {
                this.drawLines(where, amount, decision, round, "c", "b");                        // R1,2,3 ok
            }

        }
        
        
    }
}