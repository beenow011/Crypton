import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;

Chart.register(CategoryScale);
function LineChart({ coinHistory, currentPrice, coinName, time }) {
  // console.log(coinHistory.data);
  const coinPrice = [];
  const coinTimeStamp = [];

  const timeData = {
    "3h": 1,
    "24h": 1,
    "7d": 7,
    "30d": 30,
    "1y": 365,
    "3y": 365 * 3,
    "5y": 365 * 5,
  };
  // console.log(timeData[time]);
  function getDatesForLastMonth() {
    const today = new Date();
    const dates = [];

    for (let i = 0; i < timeData[time]; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dates.unshift(date.toISOString().slice(0, 10));
    }

    return dates;
  }

  const lastMonthDates = getDatesForLastMonth();
  // console.log(lastMonthDates);

  coinHistory?.data?.history.forEach((historyData) => {
    coinPrice.push(historyData.price);
    coinTimeStamp.push(new Date(historyData.timestamp).toLocaleDateString());
  });
  // console.log(coinPrice, coinTimeStamp);
  const data = {
    labels: lastMonthDates,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="p-5 w-screen md:w-[80vw] m-auto">
      <Row className="flex justify-between p-2">
        <h1 className="text-blue-600 text-3xl font-bold">
          {coinName} Price Chart
        </h1>
        <Col className="">
          {" "}
          <Title level={5}>{coinHistory?.data?.change} %</Title>
          <Title level={5}>
            current {coinName} price : ${currentPrice} %
          </Title>
        </Col>
      </Row>
      <Line data={data} className="w-screen md:w-full" />
    </div>
  );
}

export default LineChart;
