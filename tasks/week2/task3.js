const fs = require("fs");
const format = require("date-fns/format");
const XLSX = require("xlsx");

const readData = new Promise((resolve, reject) => {
  fs.readFile("./product.json", (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(JSON.parse(data));
  })
})
readData.then(result => {
  result.forEach((elm) => {
    const realDate = parseDate(elm.dateUpdated);
    elm["updated"] = format(realDate, "MM/dd/yyyy");
    delete elm["dateUpdated"];
  })

  // Create worksheet
  const ws = XLSX.utils.json_to_sheet(result);
  // Create workbook
  const wb = XLSX.utils.book_new();
  const wb_name = "products.xlsx";
  XLSX.utils.book_append_sheet(wb, ws, wb_name);
  // Create File
  XLSX.writeFile(wb, wb_name );
})

const parseDate = (date) => {
  return new Date(date);
};
