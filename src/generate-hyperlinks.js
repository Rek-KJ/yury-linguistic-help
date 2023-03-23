const word_to_range_atergo = new Map();

/**
 *
 * @param {number} row - The row number of the cell reference. Row 1 is row number 0.
 * @param {number} column - The column number of the cell reference. A is column number 0.
 * @returns {string} Returns a cell reference as a string using A1 Notation
 *
 * @example
 *
 *   getA1Notation(2, 4) returns "E3"
 *   getA1Notation(2, 4) returns "E3"
 *
 */
const getA1Notation = (row, column) => {
  const a1Notation = [`${row + 1}`];
  const totalAlphabets = 'Z'.charCodeAt() - 'A'.charCodeAt() + 1;
  let block = column;
  while (block >= 0) {
    a1Notation.unshift(String.fromCharCode((block % totalAlphabets) + 'A'.charCodeAt()));
    block = Math.floor(block / totalAlphabets) - 1;
  }
  return a1Notation.join('');
};

//f. initiating a map of words in a sheet and their location (cell)
function init_map_atergo(sheet){
  const data1 = sheet.getRange("A:A").getValues();

  for(let i = 0; i < data1.length; i++) {
    var a1_notation = 'A'+`${i+1}`;
    word_to_range_atergo.set(String(data1[i][0]),a1_notation);
    if (i%1000 == 0){
      Logger.log(i + " / " + data1.length);
    }
  }
}

// f.generating links to a given cell
function getLink(range,main_id, sheet_id) {
  var link = "https://docs.google.com/spreadsheets/d/"+main_id+"/edit#gid="+sheet_id+"&range="+range;
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
  Logger.log("Generating links from " + inSheet + " to " + toSheet);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(inSheet);
  const data = sheet.getDataRange().getValues();
  const to_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(toSheet);

  const main_id = SpreadsheetApp.getActiveSpreadsheet().getId();
  const sheet_id = to_sheet.getSheetId();
  init_map_atergo(to_sheet);

  var time=0.0;
  var time_estimation=0.0;

  var links = data.map(row => {
    return getLink(word_to_range_atergo.get(row[0]),main_id,sheet_id)
    });
  var cell_contents = sheet.getRange(2,1,data.length).getValues();

  var hyperlink_commands = cell_contents.map((cellContent, i) => {
    return ['=hyperlink("'+links[i]+'";'+getRidOfChar34(cellContent[0])+')']
  })
  sheet.getRange(2,1,data.length).setValues(hyperlink_commands);
}