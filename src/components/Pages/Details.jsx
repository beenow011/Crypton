import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Toaster, toast } from "react-hot-toast";
import { Col, Row, Typography, Select, Spin, Flex } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import {
  useGetCryptoDetailsQuery,
  useGetCryptosQuery,
} from "../../services/cryptoApi";
import LineChart from "../LineChart";
import { useGetCryptoHistoryQuery } from "../../services/cryptoApi";

const { Title, Text } = Typography;
const { Option } = Select;
function Details() {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");

  const { data, isLoading } = useGetCryptoDetailsQuery(coinId);
  // console.log(timePeriod);
  const {
    data: coinHistory,
    error,
    isLoading: loaded,
  } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  if (error) {
    console.log(error);
  }

  if (isLoading || loaded)
    return (
      <Flex className="w-[100vw] h-[100vh]">
        <Spin size="large" className="m-auto" />
      </Flex>
    );
  const time = ["7d", "30d", "1y", "3y", "5y"];
  const cryptoDetails = data?.data?.coin;
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <>
      <h1
        level={2}
        className="md:bg-blue-200 p-4 flex z-0 mt-20 md:mt-0 text-3xl font-bold text-blue-600"
      >
        {cryptoDetails.name} ({cryptoDetails.symbol})
        <img
          src={cryptoDetails.iconUrl}
          alt="icon"
          width={30}
          className="mx-2 z-30"
        />
      </h1>
      <Col className="z-0">
        <div>
          <Toaster />
        </div>

        <Col className="z-0">
          <p className="px-4 py-2 font-bold ">
            {cryptoDetails.name} live price in US Dollar (USD). View value
            statistics, market cap and supply
          </p>
        </Col>
        <Select
          defaultValue="7d"
          className="px-4 "
          placeholder="Select time period"
          onChange={(value) => setTimePeriod(value)}
        >
          {time.map((t) => (
            <Option key={t}>{t}</Option>
          ))}
        </Select>

        <LineChart
          coinHistory={coinHistory}
          currentPrice={millify(cryptoDetails.price)}
          coinName={cryptoDetails.name}
          time={timePeriod}
        />

        <Col className="px-4 py-2 md:flex gap-10 justify-center ">
          <Col className="">
            <Col className="py-2">
              <h5 className="text-3xl text-blue-500">
                {cryptoDetails.name} value statistics
              </h5>

              {stats.map(({ icon, title, value }, i) => (
                <Col
                  className="border-2 flex justify-between bg-gradient-to-r from-cyan-500 to-blue-500 p-4 w-96 hover:bg-blue-500"
                  onClick={() => {
                    toast(`${title}: ${value}`);
                  }}
                  key={i}
                >
                  <Col className="">
                    <Text className="px-2">{icon}</Text>
                    <Text className="font-bold">{title}</Text>
                  </Col>
                  <Text className="font-bold">{value}</Text>
                </Col>
              ))}
            </Col>
          </Col>
          <Col>
            <Col className="py-2">
              <h5 className="text-3xl text-blue-500"> Other Stats</h5>

              {genericStats.map(({ icon, title, value }, i) => (
                <Col
                  className="border-2 flex justify-between  bg-gradient-to-r from-cyan-500 to-blue-500 p-4 w-96 hover:bg-blue-500"
                  onClick={() => {
                    toast(`${title}: ${value}`);
                  }}
                  key={i}
                >
                  <Col>
                    <Text className="px-2">{icon}</Text>
                    <Text className="font-bold">{title}</Text>
                  </Col>
                  <Text className="font-bold">{value}</Text>
                </Col>
              ))}
            </Col>
          </Col>
        </Col>
        <Col className="p-4">
          <Row className="flex flex-col">
            <Title level={3} className="coin-details-heading">
              What is {cryptoDetails.name}?
            </Title>

            {HTMLReactParser(cryptoDetails.description)}
          </Row>
          <Col className="py-5 bg-gradient-to-r from-blue-300 to-green-500 px-2 rounded-md my-3 md:flex">
            <Title level={3} className="coin-details-heading ">
              {cryptoDetails.name} Links
            </Title>
            {cryptoDetails.links?.map((link) => (
              <Row className="px-2 m-2" key={link.name}>
                <Title level={5} className="px-2 ">
                  {link.type}
                </Title>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-200 rounded-md p-2 hover:bg-green-200"
                >
                  {link.name}
                </a>
              </Row>
            ))}
          </Col>
        </Col>
      </Col>
    </>
  );
}

export default Details;
