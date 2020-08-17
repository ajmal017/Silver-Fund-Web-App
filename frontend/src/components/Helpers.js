export function getDateToday() {
  // var today = new Date();
  // // Make string the right format, with leading zeroes if necessary.
  // var date =
  //   today.getFullYear() +
  //   "-" +
  //   ("0" + (today.getMonth() + 1)).slice(-2) +
  //   "-" +
  //   ("0" + today.getDate()).slice(-2);
  // return date;
  return new Date().toISOString().substring(0, 10);
}
