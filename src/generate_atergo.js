const url = 'https://docs.google.com/spreadsheets/d/1enQL0xIPzRCOuRvc9aB-8KUOgookyz4rqzcQX9jzNyU/edit#gid=273599930';

// function copying the content and length of the 1st col starting with 2nd row from a given sheet
function getColumn(sheetName) {
  const sheet = SpreadsheetApp.openByUrl(url).getSheetByName(sheetName);
  const lastRow = sheet.getLastRow();
  const column = sheet.getRange(2,1,lastRow,1).getValues();
  return [column, lastRow];
}

// function reversing a string
function reverse(msg) {
  let msg2='';
  for(let i=msg.length-1;i>=0;i--){
    msg2=msg2+msg[i];
  }
  return msg2
}

// f. reversing a column of a sheet
function reverseColumn (sheetName, columnNumber, columnLength) {
  const ss = SpreadsheetApp.openByUrl(url);
  for(let j = 2; j <= columnLength; j++) {
    const cell = ss.getSheetByName(sheetName).getRange(j,columnNumber);
    const newcell = reverse(cell.getValue());
    cell.setValue(newcell);
  }
}

// f. copying content of a fronte to a tergo, and sorting it
function copy_to_atergo () {
  const column= getColumn('A Fronte');
  const atergo = SpreadsheetApp.openByUrl(url).getSheetByName('A Tergo');
  atergo.getRange(2,1,column[1],1).setValues(column[0]);
  reverseColumn('A Tergo',1,column[1]);
  atergo.getRange(2,1,column[1],1).sort(1);
  reverseColumn('A Tergo',1,column[1]);
}

// f. sorting atergo and then generating a tergo
function generate_atergo () {
  //dodac tu clear sheet?
  const afrondo = SpreadsheetApp.openByUrl(url).getSheetByName('A Fronte');
  afrondo.getRange(2,1,afrondo.getLastRow()).sort(1);
  copy_to_atergo ();
}