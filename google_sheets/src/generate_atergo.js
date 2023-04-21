// // function reversing a string
function reverse(msg) {
  let msg2='';
  for(let i=msg.length-1;i>=0;i--){
    msg2=msg2+msg[i];
  }
  return msg2
}

const aFronte = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('A Fronte');
const aTergo = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('A Tergo');


function operational_array () {
  var my_array = aFronte.getRange(2,1,aFronte.getLastRow()-1).getValues()
  my_array.sort((a,b) => {
    var ar = [...a[0]].reverse().join("")
    var br = [...b[0]].reverse().join("")
    return ar.localeCompare(br); 
  });

  aTergo.getRange(2,1,aFronte.getLastRow()-1).setValues(my_array)
  return "nothing"
}

// f. sorting afrondo and then activating copy_to_atergo
function generate_atergo () {
  Logger.log("Generating atergo...")
  const afrondo = SpreadsheetApp.openByUrl(url).getSheetByName('A Fronte');
  var y = afrondo.getRange(2,1,afrondo.getLastRow()).sort(1);
  var x = operational_array ();
  Logger.log("SORTED - Atergo has been generated")
  return;
}