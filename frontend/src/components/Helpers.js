import moment from "moment";
import { useImperativeHandle } from "react";

// export function getDateYesterday() {
//   const today = new Date();
//   const yesterday = new Date(today);

//   yesterday.setDate(yesterday.getDate() - 1);

//   var date =
//     yesterday.getFullYear() +
//     "-" +
//     ("0" + (yesterday.getMonth() + 1)).slice(-2) +
//     "-" +
//     ("0" + yesterday.getDate()).slice(-2);
//   return date;
// }

// export function getDateToday() {
//   const today = new Date();
//   var date =
//     today.getFullYear() +
//     "-" +
//     ("0" + (today.getMonth() + 1)).slice(-2) +
//     "-" +
//     ("0" + today.getDate()).slice(-2);
//   return date;
//}

/* 
Input: An integer (positive or negative) that represents how many days away a specific day is from today (ex: yesterday = -1)
Output: A "YYYY-MM-DD" date string (ex: "2020-01-01")
*/
export function getDateStr(daysAway) {
  const newDate = new Date();

  newDate.setDate(newDate.getDate() + daysAway);

  const newDateStr =
    newDate.getFullYear() +
    "-" +
    ("0" + (newDate.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + newDate.getDate()).slice(-2);
  return newDateStr;
}

function getDates(startDate, stopDate) {
  var dateArray = [];
  var currentDate = moment(startDate);
  var stopDate = moment(stopDate);
  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
    currentDate = moment(currentDate).add(1, "days");
  }
  return dateArray;
}

function getColor(value) {
  var colors = ["#FFFFFF", "#3F5F80", "#002E5D", "#000000"];
  var index = value % colors.length;
  return colors[index];
}

export function convertToPercentage(values) {
  const add_abs = (a, b) => Math.abs(a) + Math.abs(b);

  console.log("helper", values);
  if (values.length === 0) {
    return values;
  } else {
    const sum = values.reduce(add_abs);

    return values.map(function (x) {
      return (100 * (x / sum)).toFixed(2);
    });
  }
}

export function formatTimeSeries(tableData, startDate, StopDate) {
  var tickers = [];
  var labels = [];
  var datasets = [];
  var timeSeriesData = [];

  tickers = tableData.map(({ ticker }) => ticker);
  tickers = [...new Set(tickers)];
  labels = getDates(startDate, StopDate);

  var i;
  var j;
  for (i = 0; i < tickers.length; i++) {
    var asset = {};
    asset.label = tickers[i];
    asset.backgroundColor = getColor(i);
    asset.borderColor = getColor(i);
    asset.data = [];
    for (j = 0; j < labels.length; j++) {
      var value = tableData.filter(function (item) {
        return item.ticker === tickers[i] && item.date === labels[j];
      });
      if (value.length === 0) {
        asset.data.push(0);
      } else {
        asset.data.push(value[0].position_value);
      }
    }
    asset.fill = false;
    datasets.push(asset);
  }

  timeSeriesData.push(labels);
  timeSeriesData.push(datasets);

  return timeSeriesData;
}
