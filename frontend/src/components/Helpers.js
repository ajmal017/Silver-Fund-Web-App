import moment from "moment";
// import { useImperativeHandle } from "react";

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

export function addThousandsComma(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function makeMoneyFormat(value) {
  return "$" + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getDates(startDate, endDate) {
  var dateArray = [];
  var currentDate = moment(startDate);
  var stopDate = moment(endDate);
  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
    currentDate = moment(currentDate).add(1, "days");
  }
  return dateArray;
}

function getColor(value) {
  // const hBase = Math.random();
  //const newH = Math.floor(hBase * 360);
  // const newL = Math.floor(Math.random() * 16) + 75;
  // let r, g, b;
  // let h = hBase;
  // let l = 1;
  // let s = newL * 0.01;
  // const rd = (a) => {
  //   return Math.floor(Math.max(Math.min(a * 256, 255), 0));
  // };
  // const hueToRGB = (m, n, o) => {
  //   if (o < 0) o += 1;
  //   if (o > 1) o -= 1;
  //   if (o < 1 / 6) return m + (n - m) * 6 * o;
  //   if (o < 1 / 2) return n;
  //   if (o < 2 / 3) return m + (n - m) * (2 / 3 - o) * 6;
  //   return m;
  // };
  // const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  // const p = 2 * l - q;

  // r = hueToRGB(p, q, h + 1 / 3);
  // g = hueToRGB(p, q, h);
  // b = hueToRGB(p, q, h - 1 / 3);

  var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return color;
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

export function formatTimeSeries(apiData, startDate, stopDate) {
  var tickers = [];
  var labels = [];
  var datasets = [];
  var timeSeriesData = [];

  tickers = apiData.map(({ ticker }) => ticker);
  tickers = [...new Set(tickers)];
  labels = getDates(startDate, stopDate);

  var i;
  var j;
  for (i = 0; i < tickers.length; i++) {
    let color = getColor(i);
    var asset = {};
    asset.label = tickers[i];
    asset.backgroundColor = color;
    asset.borderColor = color;
    asset.data = [];
    for (j = 0; j < labels.length; j++) {
      var value = apiData.filter(function (item) {
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
