import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoApi";
const { Title } = Typography;
function Home() {
  const { data, isLoading, isError } = useGetCryptosQuery();
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
          >
            <Statistic
              title="Total currencies"
              value={cryptoStats.totalCoins}
            />
          </Col>
          <Col
            span={12}
            className="bg-green-400   p-2 border-black mx-1 md:mx-0 my-2 z-10 m-auto "
          >
            <Statistic
              title="Total Exchanges"
              value={cryptoStats.totalExchanges}
            />
          </Col>
          <Col
            span={12}
            className="bg-green-500   p-2 border-black mx-1 md:mx-0 my-2 z-10 m-auto "
          >
            <Statistic
              title="Total Market Cap"
              value={cryptoStats.totalMarketCap}
            />
          </Col>
          <Col
            span={12}
            className="bg-green-600   p-2 border-black mx-1 md:mx-0 my-2 z-10 m-auto "
          >
            <Statistic
              title="Total 24h Volume"
              value={cryptoStats.total24hVolume}
            />
          </Col>
          <Col
            span={12}
            className="bg-green-700   p-2 border-black mx-1 md:mx-0 my-2 z-10 m-auto "
          >
            <Statistic title="Total Markets" value={cryptoStats.totalMarkets} />
          </Col>
        </Row>
      ) : null}
    </>
  );
}

export default Home;
