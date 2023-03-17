//f. giving complementary info from metadata while checkbox is checked
function onEdit(e) {
  var r = e.range;
  var cellValue = r.getValue();
  if (e.range.columnStart == 2 && e.range.rowStart != 1 && r.getSheet().getName() == 'A Fronte') {
    if (cellValue == true) {
      var search=find(r.offset(0,-1).getValue(),'metadata').getA1Notation();
      //var complInf = SpreadsheetApp.openByUrl(url).getSheetByName("metadata").getRange(search).offset(0,1,1,4).getValues();
      var complInf = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("metadata").getRange(search).offset(0,1,1,4).getValues();
      r.offset(0,1,1,4).setValues(complInf);
    }
    else if (cellValue == false)
      r.offset(0,1,1,4).clearContent();
}}//f. giving complementary info from metadata while checkbox is checked
function onEdit(e) {
  var r = e.range;
  var cellValue = r.getValue();
  if (e.range.columnStart == 2 && e.range.rowStart != 1 && r.getSheet().getName() == 'A Fronte') {
    if (cellValue == true) {
      var search=find(r.offset(0,-1).getValue(),'metadata').getA1Notation();
      var img = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("metadata").getRange(search).offset(0,5,1,1).getFormula();
      r.offset(0,5,1,1).setFormula(img);
      r.offset(0,6).setValue(".");
      r.offset(0,6).setFontColor('white');
      r.offset(0,6).setFontSize(180);
      const sheet = r.getSheet();
      sheet.autoResizeRows(r.rowStart, 1);
      var complInf = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("metadata").getRange(search).offset(0,1,1,4).getValues();
      r.offset(0,1,1,4).setValues(complInf);      
    }
    else if (cellValue == false)
      r.offset(0,1,1,6).clearContent();
}}