//const url = 'https://docs.google.com/spreadsheets/d/1NAhJflgwX2BGhJG39Wg9vOhwB_85kaJPt5pWzHY5bmA/edit#gid=1193677007';

// f.generating links to a given cell
function getLink(range,sheetName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(sheetName);
  const link = "https://docs.google.com/spreadsheets/d/"+spreadsheet.getId()+"/edit#gid="+sheet.getSheetId()+"&range="+range.getA1Notation();
  return link;
}

// f. finding in the 21st column a cell with a given word
function find (word,inSheet) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(inSheet); //openByUrl(url).getSheetByName(inSheet);
  const data = sheet.getRange("A:A").getValues();
  for(let i = 0; i<data.length;i++){
    if(data[i] == word){ 
      var destiny = sheet.getRange(i+1,1);
      //Logger.log(destiny);
    }
  }
  return destiny;
}

//f. avoiding problems with "" in string
function getRidOfChar34(msgIn) {
  let msgOut='';
  for(let i=0;i<=msgIn.length-1;i++) {
    if (msgIn[i]=='"') {
      msgOut=msgOut+'"; CHAR(34); "';
    }
    else {
      msgOut+=msgIn[i];
    }
  }
  return 'CONCATENATE("'+msgOut+'")';
}

// f. generating links for each cell in the first column
function links_in_ss (inSheet,toSheet) {
  const sheet = SpreadsheetApp.openByUrl(url).getSheetByName(inSheet);
  const data = sheet.getDataRange().getValues();
  for(let k = 1; k<data.length;k++) {
    const range = find (data[k][0],toSheet);
    const link = getLink(range, toSheet);
    // Logger.log(link);
    let cellContent = sheet.getRange(k+1,1).getValue();
    sheet.getRange(k+1,1).setValue('=hyperlink("'+link+'";'+getRidOfChar34(cellContent)+')');
  }
}