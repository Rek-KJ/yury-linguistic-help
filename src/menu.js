const url = 'https://docs.google.com/spreadsheets/d/1enQL0xIPzRCOuRvc9aB-8KUOgookyz4rqzcQX9jzNyU/edit#gid=273599930';

//f. updating the dictionary and generating the hyperlinks
function refresh() {
  const ss = SpreadsheetApp.openByUrl(url);
  const metadataAA = ss.getSheetByName("metadata").getRange(2,1,ss.getSheetByName("metadata").getLastRow(),1).getValues();
  ss.getSheetByName("A Fronte").getRange(2,1,ss.getSheetByName("A Fronte").getLastRow(),3).clear();
  ss.getSheetByName("A Fronte").getRange(2,1,ss.getSheetByName("metadata").getLastRow(),1).setValues(metadataAA);
  ss.getSheetByName("A Fronte").getRange(2,2,ss.getSheetByName("A Fronte").getLastRow()-1,1).insertCheckboxes();
  generate_atergo ();
  links_in_ss ('A Fronte','A Tergo');
}

//f. creating a menu with refresh option
function addMenu() {
  var menu = SpreadsheetApp.getUi().createMenu('Dodatkowe');
  menu.addItem('Odśwież', 'refresh');
  menu.addToUi();
}

function onOpen(e) {
  addMenu();
}