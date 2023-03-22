const word_to_range_atergo = new Map();

//f. initiating a map of words in a sheet and their location (cell)
function init_map_atergo(sheet){
  const data1 = sheet.getRange("A:A").getValues();
  word_to_range_atergo.set("abc",2);
  for(let i = 0; i < data1.length; i++) {
    word_to_range_atergo.set(String(data1[i][0]),String(sheet.getRange(i+1,1).getA1Notation()));
    //Logger.log([...word_to_range_atergo.entries()]);
  }
}

// f.generating links to a given cell
function getLink(range,sheetName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(sheetName);
  var link = "https://docs.google.com/spreadsheets/d/"+spreadsheet.getId()+"/edit#gid="+sheet.getSheetId()+"&range="+range;
  return link;
}

// f. returning a cell location of a given word in the 1st column
function find (word,inSheet) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(inSheet); //openByUrl(url).getSheetByName(inSheet);
  const data = sheet.getRange("A:A").getValues();
  for(let i = 0; i<data.length;i++){
    if(data[i] == word){ 
      var destiny = sheet.getRange(i+1,1);
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
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(inSheet);
  const data = sheet.getDataRange().getValues();
  const to_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(toSheet);
  init_map_atergo(to_sheet);
  //var time=0.0;
  //var time_estimation=0.0;
  for(let k = 1; k<data.length;k++) {
    const range = word_to_range_atergo.get(data[k][0]);
    //Logger.log(range+ ", "+k);
    const link = getLink(range, toSheet);
    //time_estimation= (new Date().getMilliseconds()-time) > 0 ? ((new Date().getMilliseconds()-time)/60000)*(data.length-k) : ((new Date().getMilliseconds()+1000-time)/60000)*(data.length-k);
    //time=new Date().getMilliseconds();
    //Logger.log(k+ ", "+link+ ", "+time_estimation+ " min");
    let cellContent = sheet.getRange(k+1,1).getValue();
    sheet.getRange(k+1,1).setValue('=hyperlink("'+link+'";'+getRidOfChar34(cellContent)+')');
  }
}