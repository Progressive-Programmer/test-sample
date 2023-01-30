import React from "react";
import { Button, Col, Input, Layout, Row, Space, Typography } from "antd";
import CustomCard from "../components/card";
const { Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

//  Sample data used in the displayed 3 cards
const columnData = [
  {
    bColor: "red",
    date: "28 Sept 2020",
    title: "Title 1",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
  {
    bColor: "blue",
    date: "29 Sept 2020",
    title: "Title 2",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
  {
    bColor: "green",
    date: "30 Sept 2020",
    title: "Title 3",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
  },
];
const Main = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout style={layoutStyle}>
        {/* ------------- Main content section ------------ */}
        <Content style={contentStyle}>
          {/* Hero section */}
          <Typography style={paragraphStyle}>
            <Title style={{ color: "#e23030" }}>Related Article</Title>
            <Paragraph>
              In the process of internal desktop applications development, many
              different design specs and implementations would be involved,
              which might cause designers and developers difficulties and
              duplication and reduce the efficiency of development. In the
              process of internal desktop applications development, many
              different design specs and implementations would be involved,
              which might cause designers and developers difficulties and
              duplication and reduce the efficiency of development.
            </Paragraph>
          </Typography>
          <Row></Row>
          <Row gutter={[24, 24]}>
            {/* mapping through all the cards */}
            {columnData.map((_col, i) => {
              return (
                <Col key={i} span={8} xs={24} xl={8}>
                  {/* Custom card with data */}
                  <CustomCard data={_col} />
                </Col>
              );
            })}
          </Row>
        </Content>
        {/* ------------------ Footer ----------------------- */}
        <Footer style={footerStyle}>
          <Row justify="end">
            <Col span={3}>
              <Button ghost danger role={"textbox"}>
                Read More
              </Button>
            </Col>
            <Col span={10}>
              <Input placeholder="Basic usage" />
            </Col>
          </Row>
        </Footer>
      </Layout>
    </Space>
  );
};

export default Main;

const footerStyle = {
  textAlign: "center",
  backgroundColor: "#e9e8e8",
};

const paragraphStyle = {
  textAlign: "left",
};

const layoutStyle = {
  padding: "30px",
  backgroundColor: "#e9e8e8",
};

const contentStyle = {
  minHeight: 120,
  width: "90%",
  lineHeight: "120px",
  color: "#fff",
};
