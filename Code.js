function doGet(e) {
  try {
    SpreadsheetApp.create("test");
  } catch (err) {
    // TODO (developer) - Handle exception
    Logger.log('Failed with error %s', err.message);
  }
  var params = JSON.stringify(e);
  return HtmlService.createHtmlOutput(params);
}
 
function doPost(e) {
  var params = JSON.stringify(e);
  return HtmlService.createHtmlOutput(params);
}