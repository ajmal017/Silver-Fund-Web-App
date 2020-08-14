export function getDateToday() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  console.log("Today's Date: ", date);
  return date;
}
