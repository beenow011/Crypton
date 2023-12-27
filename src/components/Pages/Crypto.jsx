import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Flex, Spin } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useState } from "react";
import { useEffect } from "react";
const { Search } = Input;
function Crypto({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isLoading } = useGetCryptosQuery(count);
  const [crypto, setCrypto] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setCrypto(cryptoList?.data?.coins);
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCrypto(filteredData);
  }, [cryptoList, searchTerm]);
  // console.log(crypto);
  if (isLoading)
    return (
      <Flex className="w-[100vw] h-[100vh]">
        <Spin size="large" className="m-auto" />
      </Flex>
    );
  return (
    <>
      <div className="">
        {!simplified && (
          <Input
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 md:w-96 p-2 m-3  "
          />
        )}
      </div>
      <Row gutter={[32, 32]}>
        {crypto?.map((currency) => (
          <Col
            xs={20}
            sm={12}
            lg={6}
            key={currency.uuid}
            className="m-auto md:m-0 "
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}.${currency.name}`}
                extra={<img width={30} height={30} src={currency.iconUrl} />}
                hoverable
                className="z-10"
              >
                <p className="text-green-600">
                  Price: ${millify(currency.price)}
                </p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
        {simplified && (
          <Col hoverable xs={20} sm={12} lg={6} className="m-auto md:m-0">
            <Link to="/cryptocurrencies">
              <Card hoverable className="">
                <div className="flex">
                  {" "}
                  <p className="mr-3">Show more</p> <ArrowRightOutlined />
                </div>
              </Card>
            </Link>
          </Col>
        )}
      </Row>
    </>
  );
}

export default Crypto;
