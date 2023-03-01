const url = 'https://docs.google.com/spreadsheets/d/1enQL0xIPzRCOuRvc9aB-8KUOgookyz4rqzcQX9jzNyU/edit#gid=273599930';

// f.generating links to a given cell
function getLink(range,sheetName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(sheetName);
  const link = "https://docs.google.com/spreadsheets/d/"+spreadsheet.getId()+"/edit#gid="+sheet.getSheetId()+"&range="+range.getA1Notation();
  return link;
}

// f. finding in the 21st column a cell with a given word
function find (word,inSheet) {
  const sheet = SpreadsheetApp.openByUrl(url).getSheetByName(inSheet);
  const data = sheet.getDataRange().getValues();
  for(let i = 0; i<data.length;i++){
    if(data[i] == word){ 
      var destiny = sheet.getRange(i+1,1);
      // Logger.log(destiny);
    }
  }
  return destiny;
}

// f. generating links for each cell in the first column
function links_in_ss (inSheet,toSheet) {
  const sheet = SpreadsheetApp.openByUrl(url).getSheetByName(inSheet);
  Logger.log(inSheet);
  const data = sheet.getDataRange().getValues();
  for(let k = 1; k<data.length;k++) {
    const range = find (data[k][0],toSheet);
    const link = getLink(range, toSheet);
    SpreadsheetApp.openByUrl(url).getSheetByName(inSheet).getRange(k+1,1).setValue('=hyperlink("'+link+'";"'+SpreadsheetApp.openByUrl(url).getSheetByName(inSheet).getRange(k+1,1).getValue()+'")');
  }
}

links_in_ss ('A Fronte','A Tergo');