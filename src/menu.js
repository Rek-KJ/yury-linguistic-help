const url = 'https://docs.google.com/spreadsheets/d/1enQL0xIPzRCOuRvc9aB-8KUOgookyz4rqzcQX9jzNyU/edit#gid=273599930';

const ss = SpreadsheetApp.openByUrl(url);

//f. updating the dictionary and generating the hyperlinks
function refresh() {
  links_to_maps ();
  const metadataAA = ss.getSheetByName("metadata").getRange(2,1,ss.getSheetByName("metadata").getLastRow(),1).getValues();
  ss.getSheetByName("A Fronte").getRange(2,1,ss.getSheetByName("A Fronte").getLastRow(),7).clear();
  ss.getSheetByName("A Fronte").getRange("B:B").removeCheckboxes();
  ss.getSheetByName("A Fronte").getRange(2,1,ss.getSheetByName("metadata").getLastRow(),1).setValues(metadataAA);
  ss.getSheetByName("A Fronte").getRange(2,2,ss.getSheetByName("A Fronte").getLastRow()-1,1).insertCheckboxes();
  ss.getSheetByName("A Tergo").getRange(2,1,ss.getSheetByName("A Tergo").getLastRow(),1).clear();
  generate_atergo ();
  links_in_ss ('A Fronte','A Tergo');
  links_in_ss ('A Tergo','A Fronte');
}

//funtction adding new words from Add new words sheet
function add_new_words (){
  var new_words = ss.getSheetByName("Add new words").getRange(2,1,ss.getSheetByName("Add new words").getLastRow()-1,5).getValues();
  ss.getSheetByName("metadata").getRange(ss.getSheetByName("metadata").getLastRow()+1,1,ss.getSheetByName("Add new words").getLastRow()-1,5).setValues(new_words);
  ss.getSheetByName("Add new words").getRange(2,1,ss.getSheetByName("Add new words").getLastRow()-1,5).clear();
}

//f. creating a menu with refresh option
function addMenu() {
  var menu = SpreadsheetApp.getUi().createMenu('Dodatkowe');
  menu.addItem('Odśwież', 'refresh');
  menu.addItem('Dodaj nowe słowa', 'add_new_words');
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
    cityMap.set(cityLinks[i][0],cityLinks[i][1]);
  }
}

function links_to_maps () {
  var time=0.0;
  var time_estimation=0.0;

  catalogue_of_maps ();
  Logger.log("Creating hyperlinks in metadata")
  var metadata_map_links = metadata.getRange(1,5,metadata.getLastRow()).getValues().map(row => [cityMap.get(row[0])])
  metadata.getRange(1,6,metadata.getLastRow()).setValues(metadata_map_links);
} 
