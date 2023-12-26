import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Flex, Spin } from "antd";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useState } from "react";
import { useEffect } from "react";
const { Search } = Input;
function Crypto({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isLoading } = useGetCryptosQuery(count);
  if (isLoading)
    return (
      <Flex className="w-[100vw] h-[100vh]">
        <Spin size="large" className="m-auto" />
      </Flex>
    );
  const [crypto, setCrypto] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCrypto(filteredData);
  }, [crypto, searchTerm]);
  // console.log(crypto);
  return (
    <>
      <div>
        {!simplified && (
          <Input
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-96 p-2 m-3"
          />
        )}
      </div>
      <Row gutter={[32, 32]}>
        {crypto?.map((currency) => (
          <Col xs={24} sm={12} lg={6} key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}.${currency.name}`}
                extra={<img width={30} height={30} src={currency.iconUrl} />}
                hoverable
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
          <Col hoverable xs={24} sm={12} lg={6}>
            {" "}
            <Link to="/cryptocurrencies">
              <p>Show more</p>
            </Link>
          </Col>
        )}
      </Row>
    </>
  );
}

export default Crypto;
