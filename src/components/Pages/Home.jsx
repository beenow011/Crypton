import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Spin, Flex } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useState } from "react";
const { Title } = Typography;
function Home() {
  const [showCurrency, setShowCurrency] = useState(false);
  const [showCap, setShowCap] = useState(false);
  const [showMarket, setShowMarket] = useState(false);
  const [showEx, setShowEx] = useState(false);
  const [show24h, setShow24h] = useState(false);
  const { data, isLoading, isError } = useGetCryptosQuery();
  if (isLoading)
    return (
      <Flex className="w-[100vw] h-[100vh]">
        <Spin size="large" className="m-auto" />
      </Flex>
    );
  const cryptoStats = data ? data.data.stats : null;
  // console.log(cryptoStats);
  return (
    <>
      <Title level={2} className="p-3">
        Global Crypto Stats
      </Title>
      {cryptoStats ? (
        <Row className="p-3  bg-green-200 w-max md:w-full rounded-md shadow-lg">
          <Col
            span={12}
            className="bg-green-300   p-2 border-black mx-1 md:mx-0 my-2 z-10 m-auto "
            onMouseEnter={() => setShowCurrency((prev) => !prev)}
            onMouseLeave={() => setShowCurrency((prev) => !prev)}
          >
            <Statistic
              title="Total currencies"
              value={
                showCurrency
                  ? cryptoStats.totalCoins
                  : millify(cryptoStats.totalCoins)
              }
            />
          </Col>
          <Col
            span={12}
            className="bg-green-400   p-2 border-black mx-1 md:mx-0 my-2 z-10 m-auto "
            onMouseEnter={() => setShowEx((prev) => !prev)}
            onMouseLeave={() => setShowEx((prev) => !prev)}
          >
            <Statistic
              title="Total Exchanges"
              value={
                showEx
                  ? cryptoStats.totalExchanges
                  : millify(cryptoStats.totalExchanges)
              }
            />
          </Col>
          <Col
            span={12}
            className="bg-green-500   p-2 border-black mx-1 md:mx-0 my-2 z-10 m-auto "
            onMouseEnter={() => setShowCap((prev) => !prev)}
            onMouseLeave={() => setShowCap((prev) => !prev)}
          >
            <Statistic
              title="Total Market Cap"
              value={
                showCap
                  ? cryptoStats.totalMarketCap
                  : millify(cryptoStats.totalMarketCap)
              }
            />
          </Col>
          <Col
            span={12}
            className="bg-green-600   p-2 border-black mx-1 md:mx-0 my-2 z-10 m-auto "
            onMouseEnter={() => setShow24h((prev) => !prev)}
            onMouseLeave={() => setShow24h((prev) => !prev)}
          >
            <Statistic
              title="Total 24h Volume"
              value={
                show24h
                  ? cryptoStats.total24hVolume
                  : millify(cryptoStats.total24hVolume)
              }
            />
          </Col>
          <Col
            span={12}
            className="bg-green-700   p-2 border-black mx-1 md:mx-0 my-2 z-10 m-auto "
            onMouseEnter={() => setShowMarket((prev) => !prev)}
            onMouseLeave={() => setShowMarket((prev) => !prev)}
          >
            <Statistic
              title="Total Markets"
              value={
                showMarket
                  ? cryptoStats.totalMarkets
                  : millify(cryptoStats.totalMarkets)
              }
            />
          </Col>
        </Row>
      ) : null}
    </>
  );
}

export default Home;
