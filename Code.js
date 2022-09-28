const COLUMNS = {
  containerNumber: { address: "A", text: "No. Kontainer" },
  status: { address: "B", text: "Status" },
  depoIn: { address: "C", text: "Depo In" },
  depoOut: { address: "D", text: "Depo Out" },
  wareHouseIn: { address: "E", text: "WH In" },
  wareHouseOut: { address: "F", text: "WH Out" },
  penitipanTruckingIn: { address: "G", text: "Penitipan In (Trucking)" },
  penitipanTruckingOut: { address: "H", text: "Penitipan Out (Trucking)" },
  penitipanRepoIn: { address: "I", text: "Penitipan In (Repo)" },
  penitipanRepoOut: { address: "J", text: "Penitipan Out (Repo)" },
  portIn: { address: "K", text: "Port In" },
  portOut: { address: "L", text: "Port Out" },
};

function doGet(e) {
  try {
    const number = "VEJK10058802 / 221785548";
    // const ss = SpreadsheetApp.create(`Shipper Monitoring - ${number}`);
    // ss.getSheetByName("Sheet1").setName(number);
    const ss = SpreadsheetApp.openById(
      "14hPc82Cvi-cL-T9FuoU8Ybv1LiNfIyyRHr7dIo5Uu_Y"
    ).getSheetByName(number);

    Object.keys(COLUMNS).map((x) => {
      ss.getRange(COLUMNS[x].address + "" + 1).setValue(COLUMNS[x].text);
    });

    ss.getRange("A1:L1")
      .setBackground("#b2ebf2")
      .setFontFamily("Proxima Nova")
      .setFontWeight("bold");

    ss.setColumnWidths(1, 6, 130);
    ss.setColumnWidths(6, 4, 200);
  } catch (err) {
    Logger.log("Failed with error %s", err.message);
  }
  var params = JSON.stringify(e);
  return HtmlService.createHtmlOutput(params);
}

// function doPost(e) {
//   var params = JSON.stringify(e);
//   return HtmlService.createHtmlOutput(params);
// }
