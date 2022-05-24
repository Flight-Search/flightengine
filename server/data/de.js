import fs from 'fs';
import Amadeus from 'amadeus';

const amadeus = new Amadeus({
  clientId: "",
  clientSecret: ""
});

// let response = await amadeus.airport.directDestinations.get({
//   departureAirportCode: 'PPN',
// });

// console.log(response);

try {
  const data = fs.readFileSync('./end.tsv', 'utf8');
  const lines = data.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let response = await amadeus.airport.directDestinations.get({
      departureAirportCode: line,
    });
    let data = response.data;
    if (data) {
      let writeStream = fs.createWriteStream('./de.csv', {
        'flags': 'a',
        'encoding': null,
      });
      data.forEach((res, idx) => {
        let srcDest = [];
        srcDest.push([line, res.iataCode]);
        writeStream.write(srcDest.join(',') + '\n', () => {
          console.log(srcDest, ' written to stream');
        });
      });
      writeStream.on('finish', () => {
        writeStream.close();
      });
    }
  }
} catch (err) {
  console.error(err);
}