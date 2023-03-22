// function reversing a string
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
  var my_array=[];
  for(let i=1;i<aFronte.getLastRow();i++){
    my_array[i-1]= reverse(aFronte.getRange(i+1,1).getValue());
  }
  my_array.sort();
  for(let i=1;i<aFronte.getLastRow();i++){
    aTergo.getRange(i+1,1).setValue(reverse(my_array[i-1]));
  }
}

// f. sorting afrondo and then activating copy_to_atergo
function generate_atergo () {
  const afrondo = SpreadsheetApp.openByUrl(url).getSheetByName('A Fronte');
  afrondo.getRange(2,1,afrondo.getLastRow()).sort(1);
  operational_array ();
}