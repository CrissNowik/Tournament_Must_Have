export function generatePdfLadder(element, numberOfCompetitors) {
    if (numberOfCompetitors < 17) {
        html2canvas(element).then(function (canvas) {
            var imgData = canvas.toDataURL('image/png');
            var doc = new jsPDF();
            doc.setFontSize(8);
            doc.text(10, 10, 'Created by Tournament Must Have tool by CrissNowik')
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
        alert("We advise you to print this ladder on A3 paper format - it will look much better than resized to A4.");
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