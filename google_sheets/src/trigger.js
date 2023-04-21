
//f. generating an autorun of generate_atergo everyday at 3am
function trigger() {
  ScriptApp.newTrigger('generate_atergo')
      .timeBased()
      .everyDays(1)
      .atHour(3)
      .create();
}