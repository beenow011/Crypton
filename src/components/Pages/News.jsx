import React, { useEffect } from "react";
import { Select, Typography, Row, Col, Avatar, Card, Flex, Spin } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useGetNewsQuery } from "../../services/cryptoNewsApi";
import moment from "moment";
import { Link } from "react-router-dom";
const { Text, Title } = Typography;
const { Option } = Select;
function News({ simplified }) {
  const count = simplified ? 7 : 30;
  const { data, error, isLoading } = useGetNewsQuery(10);
  const cryptoNews = data?.data.slice(0, count);
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  if (isLoading)
    return (
      <Flex className="w-[100vw] h-[100vh]">
        <Spin size="large" className="m-auto" />
      </Flex>
    );

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.map((news, i) => (
        <Col xs={20} sm={12} lg={6} key={i}>
          <Card hoverable className="">
            <a href={news.url} target="_blank" rel="noreffer">
              <div className="flex">
                <Title level={4}>{news.title}</Title>
                <img
                  src={news.thumbnail || demoImage}
                  alt="news"
                  className="max-h-[200px] max-w-[200px]"
                />
              </div>
              <p className="py-3">
                {news.description > 100
                  ? `${news.description.subString(0, 100)}....`
                  : news.description}
              </p>
              <div className="">
                {" "}
                <Text>{moment(news.createdAt).startOf("ss").fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
      {simplified && (
        <Col hoverable xs={20} sm={12} lg={6} className="m-auto md:m-0">
          <Link to="/news">
            <Card hoverable className="">
              <div className="flex">
                <p className="mr-3">Show more</p> <ArrowRightOutlined />
              </div>
            </Card>
          </Link>
        </Col>
      )}
    </Row>
  );
}

export default News;
