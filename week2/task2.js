const fs = require("fs");
const vi = require("date-fns/locale/vi/index");
const formatDistance = require('date-fns/formatDistance');

const readData = new Promise((resolve, reject) => {
    fs.readFile("./product.json", (err, data) => {
        if (err) {
            reject(err);
        }
        resolve(JSON.parse(data));
    })
})
readData.then(result => {result.forEach(elm => {
        const realDate = parseDate(elm.dateUpdated);
        elm["fromNow"] = formatDistance(realDate, new Date(), { locale: vi });
        console.log(`${elm.id} - ${elm.name} - ${formatNumWithCommas(elm.price)}VND - Cập nhật cách đây: ${elm.fromNow}`)
    })    
})

const parseDate = (date) => {
    return new Date(date);
}

const formatNumWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

