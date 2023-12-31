import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Spin, Flex } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useState } from "react";
import Crypto from "./Crypto";
import News from "./News";
import logo from "../../assets/logo2.png";
const { Title } = Typography;
function Home() {
  const [showCurrency, setShowCurrency] = useState(false);
  const [showCap, setShowCap] = useState(false);
  const [showMarket, setShowMarket] = useState(false);
  const [showEx, setShowEx] = useState(false);
  const [show24h, setShow24h] = useState(false);
  const { data, isLoading, isError } = useGetCryptosQuery(10);
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
        <div className="flex w-screen md:w-full bg-green-200  rounded-md shadow-lg overflow-hidden">
          <Row className="p-3  bg-green-200 w-max md:w-full rounded-md  overflow-hidden">
            <Col
              span={10}
              xs={24}
              sm={12}
              className="md:bg-green-300   p-2 border-black  mx-1  my-2 z-10 m-auto "
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
              span={10}
              xs={24}
              sm={12}
              className="md:bg-green-400   p-2 border-black  mx-1  my-2 z-10 m-auto "
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
              span={10}
              xs={24}
              sm={12}
              className="md:bg-green-500   p-2 border-black  mx-1  my-2 z-10 m-auto "
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
              span={10}
              xs={24}
              sm={12}
              className="md:bg-green-600   p-2 border-black  mx-1  my-2 z-10 m-auto "
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
              span={10}
              xs={24}
              sm={12}
              className="md:bg-green-700   p-2 border-black  mx-1  my-2 z-10 m-auto "
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

          <img
            src={logo}
            alt=""
            width={500}
            height={100}
            className="hidden lg:block mr-10"
          />
        </div>
      ) : null}
      <div className="my-4 w-screen md:w-full ">
        <Title level={2} className="p-2 text-wrap ">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Crypto simplified />
      </div>
      <div className="my-4  ">
        <Title level={2} className="p-2  ">
          Latest Crypto news
        </Title>
        <News simplified />
      </div>
    </>
  );
}

export default Home;
