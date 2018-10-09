export function generatePdfShedule (readyShedule) {    
    // TO DO
    // - skalowanie terminarza w zależności od ilości zespołów (max 3 rundy przy 32 teamach)
    // 
    // 
    // - uzależnienie tworzenia kolumn od ilości meczy - ifowanie
    // 
    // - przechodzenie na następną stronę w razie dużej ilości meczy 
    // - polskie znaki w pdf

    console.log("readyShedule", readyShedule);
    let final = [];
    let gameCounter = 0;
    for (let i = 0; i < readyShedule.length; i++) {
        let roundCounter = 1 + i;
        final.push(" ");
        final.push("Round " + roundCounter);
        for (let j = 0; j < readyShedule[i].length; j++) {
            let newPair = readyShedule[i][j];
            gameCounter += 1;
            let pairOnScreen = gameCounter + ". " + newPair.join(" ___ - ___ ");
            final.push(pairOnScreen);              
        }
    }
    console.log("final ", final);
        var doc = new jsPDF(); 
        doc.setFontSize(8);
        doc.text(10, 10, 'Created by Tournament Must Have tool by CrissNowik');
        doc.setFontSize(11);
        doc.text(final, 10, 20);
        doc.text(final, 110, 20);
        doc.addPage()
        
        doc.save('Game_Plan.pdf');
}