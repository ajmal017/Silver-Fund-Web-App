export function getDateToday() {
  var today = new Date();
  // Make string the right format, with leading zeroes if necessary.
  var date =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);
  return date;
}

export function convertToPercentage(values) {
  const add_abs = (a, b) => Math.abs(a) + Math.abs(b);

  console.log("helper", values)
  if(values.length === 0) {return values}
  else {  
    const sum = values.reduce(add_abs);

    return values.map(function (x) {
      return (100 * (x / sum)).toFixed(2);
    });
  }
}
