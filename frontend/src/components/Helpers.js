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

export function convertToPrecentage(values) {
  const add = (a, b) => a + b;

  console.log("helper", values)

  const sum = values.reduce(add);

  return values.map(function (x) {
    return (100 * (x / sum)).toFixed(2);
  });
}
