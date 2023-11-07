import Conexion from "./Conexion";
import { Col, Row, Typography } from "antd";
import Teleoperacion from "./Teleoperacion";
import RobotState from "./RobotState";

const { Title } = Typography;
const Turtlebot = () => {
  return (
    <>
      <Row justify="center">
        <Title level={2}>ROBOT CONTROL PAGE</Title>
      </Row>

      <Row>
        <Conexion tipoRobot={"Turtlebot 3"} />
      </Row>

      <Row>
        <Col span={8}>
          <Teleoperacion />
          <RobotState />

        </Col>
      </Row>
      <div></div>
    </>
  );
};

export default Turtlebot;
