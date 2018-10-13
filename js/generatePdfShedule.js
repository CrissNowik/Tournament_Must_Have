export function generatePdfShedule (element) {    
    //TO DO 
    // - problem z numeracją i rozwaleniem na stronie całego terminarza

        html2canvas(element).then(function(canvas){         
            var imgData = canvas.toDataURL('image/png');         
            var doc = new jsPDF(); 
            doc.setFontSize(8);
            doc.text(10,10, 'Created by Tournament Must Have tool by CrissNowik')
            doc.addImage(imgData, 'PNG', 10, 15);
            doc.save('Game_Plan.pdf');
        });    
    
}