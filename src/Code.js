//https://www.bpwebs.com/pull-data-from-google-sheets-to-html-table/

function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}
 
//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData(){
  // var spreadSheetId = "1tMODRuz4T5MYVOGtdLV5j5EqX1MKoz4F_RySpr0YLdE"; //CHANGE
  // var dataRange     = "Data!A2:F"; //CHANGE
 
  // var range   = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);

  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('A Fronte');
  let data = sheet.getDataRange().getValues();

  return data;
}
 
//INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}