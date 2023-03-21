//f. giving complementary info from metadata while checkbox is checked
function onEdit(e) {
  var r = e.range;
  var cellValue = r.getValue();
  var year = '';
  if (e.range.columnStart == 2 && e.range.rowStart != 1 && r.getSheet().getName() == 'A Fronte') {
    if (cellValue == true) {
      var search=find(r.offset(0,-1).getValue(),'metadata').getA1Notation();
      var img = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("metadata").getRange(search).offset(0,5,1,1).getValue();
      r.offset(0,6,1,1).setValue('=IMAGE("'+img+'";4;640;976)');
      r.offset(0,7).setValue(".");
      r.offset(0,7).setFontColor('white');
      r.offset(0,7).setFontSize(400);
      const sheet = r.getSheet();
      sheet.autoResizeRows(r.rowStart, 1);
      var complInf = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("metadata").getRange(search).offset(0,1,1,4).getValues();
      r.offset(0,1,1,4).setValues(complInf);    
      r.offset(0,4,1,2).setValues(r.offset(0,3,1,2).getValues());
      year = r.offset(0,2,1,1).getValue();
      year = year.slice(year.length - 5, year.length - 1);
      r.offset(0,3,1,1).setValue(year);
      catalogue_of_timelines ();
      r.offset(0,3,1,1).setValue('=IMAGE("'+timelineMap.get(year)+'")');
    }
    else if (cellValue == false)
      r.offset(0,1,1,7).clearContent();
  }
}

//f.assigning timelines
const timelineMap = new Map();

const timeline_url = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("timeline_links");
const timelineLinks = timeline_url.getDataRange().getValues();
//const metadata = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("metadata");

function catalogue_of_timelines () {
  for(let i = 0; i < timelineLinks.length; i++){
    timelineMap.set(String(timelineLinks[i][0]),String(timelineLinks[i][1]));
  }
}