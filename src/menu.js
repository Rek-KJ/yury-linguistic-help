const url = 'https://docs.google.com/spreadsheets/d/1enQL0xIPzRCOuRvc9aB-8KUOgookyz4rqzcQX9jzNyU/edit#gid=273599930';

//f. updating the dictionary and generating the hyperlinks
function refresh() {

  
  links_to_maps ();
  const ss = SpreadsheetApp.openByUrl(url);
  const metadataAA = ss.getSheetByName("metadata").getRange(2,1,ss.getSheetByName("metadata").getLastRow(),1).getValues();
  ss.getSheetByName("A Fronte").getRange(2,1,ss.getSheetByName("A Fronte").getLastRow(),7).clear();
  ss.getSheetByName("A Fronte").getRange(2,1,ss.getSheetByName("metadata").getLastRow(),1).setValues(metadataAA);
  ss.getSheetByName("A Fronte").getRange(2,2,ss.getSheetByName("A Fronte").getLastRow()-2,1).insertCheckboxes();
  ss.getSheetByName("A Tergo").getRange(2,1,ss.getSheetByName("A Tergo").getLastRow(),1).clear();
  generate_atergo ();
  links_in_ss ('A Fronte','A Tergo');
  links_in_ss ('A Tergo','A Fronte');
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

//f.assigning maps, might not be optimal
const cityMap = new Map();

const city_url = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("city_links");
const cityLinks = city_url.getDataRange().getValues();
const metadata = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("metadata");

function catalogue_of_maps () {
  for(let i = 0; i<cityLinks.length;i++){
    Logger.log(cityLinks[i][0]+ ", "+String(cityLinks[i][1]));
    cityMap.set(cityLinks[i][0],cityLinks[i][1]);
    Logger.log(cityMap);
  }
}

function links_to_maps () {
  catalogue_of_maps ();
  for(let i = 1; i < metadata.getLastRow(); i++) {
    metadata.getRange(i,6).setValue(cityMap.get(metadata.getRange(i,5).getValue()));
  }
} 