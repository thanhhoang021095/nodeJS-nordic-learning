const fs = require("fs");
const format = require("date-fns/format");
const XLSX = require("xlsx");

var result = [];
fs.readFile("./product.json", (err, data) => {
  if (err) {
    console.log("error:", err);
  }
  result = [...JSON.parse(data)];
  result.forEach((elm) => {
    const realDate = parseDate(elm.dateUpdated);
    elm["updated"] = format(realDate, "MM/dd/yyyy");
    delete elm["dateUpdated"];
  });
  console.log(result);
  // create 'worksheet' object from json
  const ws = XLSX.utils.json_to_sheet(result);
  ws["!cols"] = [
    { width: 20 },
    { width: 15 },
    { width: 20 },
    { width: 20 },
    { width: 20 },
  ];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "products.xlsx");

  const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
});

const parseDate = (date) => {
  return new Date(date);
};
