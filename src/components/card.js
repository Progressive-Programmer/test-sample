import React from "react";
import { Button, Card, Row, Typography } from "antd";
const { Title, Paragraph } = Typography;

const CustomCard = (props) => {
  // getting custom card details
  const { data } = props;
  return (
    <Card style={{ ...cardStyle, backgroundColor: data.bColor }}>
      {/* Header with Contenct setion  */}
      <Typography style={paragraphStyle}>
        <Title level={5} style={cardTextStyle}>
          {data.date}
        </Title>
        <Title level={2} style={cardTextStyle}>
          {data.title}
        </Title>
        <Paragraph style={cardTextStyle}>{data.text}</Paragraph>
      </Typography>
      {/* Bottom button section */}
      <Row>
        <Button ghost role={"textbox"}>Read More</Button>
      </Row>
    </Card>
  );
};

export default CustomCard;

const cardStyle = {
  alignment: "left",
  justify: "left",
};

const cardTextStyle = {
  color: "white",
  margin: 0,
  marginBottom: 5,
  maxHeight: "150px",
  overflow: "scroll",
};

const paragraphStyle = {
  textAlign: "left",
};
