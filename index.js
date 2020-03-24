const start = Date.now();
let timeOffset = 0;

function makeDates(len) {
  for (let i = 0; i < len; i++) {
    timeOffset += 31000000000;
    console.log(new Date(start - timeOffset).getFullYear());
  }
}

makeDates(20);
