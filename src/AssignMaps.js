//f.assigning maps, might not be optimal
function AssignMaps() {
  const data = SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange("E:E").getValues();
  for(let i = 1; i<50 ;i++){ //data.length;i++){
    if (data[i]== "Барнаул"){
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('=IMAGE("https://raw.githubusercontent.com/Rek-KJ/yury-linguistic-help/main/data/maps/6b585-barnaul-altai-krai-.png";4;640;976)');
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').autoResizeRows(i+1, 1);}
    else if (data[i]== "Шенку́рск")
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('=IMAGE("https://raw.githubusercontent.com/Rek-KJ/yury-linguistic-help/main/data/maps/FZ66x-shenkursk-arkhangelsk-oblast-nbsp-.png")');
    else if (data[i]== "Старый Оскол")
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('=IMAGE("https://raw.githubusercontent.com/Rek-KJ/yury-linguistic-help/main/data/maps/J4FmU-stary-oskol-belgorod-oblast-nbsp-copy-.png")');
    else if (data[i]== "Ардатов")
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('=IMAGE("https://raw.githubusercontent.com/Rek-KJ/yury-linguistic-help/main/data/maps/Ku3ty-ardatov-republic-of-mordovia-.png")');
    else if (data[i]== "Северодвинск")
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('=IMAGE("https://raw.githubusercontent.com/Rek-KJ/yury-linguistic-help/main/data/maps/OgoTP-severodvinsk-arkhangelsk-oblast-nbsp-.png")');
    else if (data[i]== "Благове́щенск")
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('=IMAGE("https://raw.githubusercontent.com/Rek-KJ/yury-linguistic-help/main/data/maps/XJ7x8-blagoveshchensk-amur-oblast-.png")');  
    else if (data[i]== "Астрахань")
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('=IMAGE("https://raw.githubusercontent.com/Rek-KJ/yury-linguistic-help/main/data/maps/ae8PX-astrakhan-astrakhan-oblast-.png")');  
    else if (data[i]== "Каргополь")
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('=IMAGE("https://raw.githubusercontent.com/Rek-KJ/yury-linguistic-help/main/data/maps/cQDZl-kargopol-arkhangelsk-oblast-.png")');  
    else if (data[i]== "Арха́нгельск")
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('=IMAGE("https://raw.githubusercontent.com/Rek-KJ/yury-linguistic-help/main/data/maps/wnjNo-arkhangelsk-arkhangelsk-oblast-.png")');  
    else if (data[i]== "Белого́рск")
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('=IMAGE("https://raw.githubusercontent.com/Rek-KJ/yury-linguistic-help/main/data/maps/pS874-belogorsk-amur-oblast-.png")');  
    else if (data[i]== "Брянск")
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('=IMAGE("https://raw.githubusercontent.com/Rek-KJ/yury-linguistic-help/main/data/maps/pkfzc-bryansk-bryansk-oblast-.png")');  
    else if (data[i]== "Белгород")
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('=IMAGE("https://raw.githubusercontent.com/Rek-KJ/yury-linguistic-help/main/data/maps/uBGVq-belgorod-belgorod-oblast-.png")');  
      else if (data[i]== "Псков")
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('Псков'); 
      
    else
      SpreadsheetApp.openByUrl(url).getSheetByName('metadata').getRange(i+1,6).setValue('no image rn');
    
    }
}