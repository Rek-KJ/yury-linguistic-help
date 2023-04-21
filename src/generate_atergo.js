const aFronte = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('A Fronte');
const aTergo = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('A Tergo');


function operational_array () {
  var my_array = aFronte.getRange(2,1,aFronte.getLastRow()-1).getValues().map(row => 
  {
    return [...row[0]].reverse().join("")
  }
    );

  my_array.sort();
  my_array = my_array.map(row => {
    return [[...row].reverse().join("")];
  });
  aTergo.getRange(2,1,aFronte.getLastRow()-1).setValues(my_array)
}

// f. sorting afrondo and then activating copy_to_atergo
function generate_atergo () {
  Logger.log("Generating atergo...")
  const afrondo = SpreadsheetApp.openByUrl(url).getSheetByName('A Fronte');
  afrondo.getRange(2,1,afrondo.getLastRow()).sort(1);
  operational_array ();
  Logger.log("Atergo has been generated")
}