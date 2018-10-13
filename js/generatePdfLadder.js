export function generatePdfLadder(element) {
    //TO DO 
    // - skalowanie proporcjonalne do ilości zespołów 

    console.log("element ", element);
    
      
        html2canvas(element).then(function(canvas){         
            var imgData = canvas.toDataURL('image/png');         
            var doc = new jsPDF(); 
            doc.setFontSize(8);
            doc.text(10,10, 'Created by Tournament Must Have tool by CrissNowik')
            doc.addImage(imgData, 'PNG', -20, 15);
            doc.save('Game_Ladder.pdf');
        });    
}

// doc.addImage(imgData, 'PNG', -20, 15);          - 3-4
// doc.addImage(imgData, 'PNG', 10, 15, 200, 100); - 5-6