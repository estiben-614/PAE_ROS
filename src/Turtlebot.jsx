import Conexion from "./Conexion";
import { Row, Typography } from "antd";
import Teleoperacion from "./Teleoperacion";

const { Title } = Typography;
const Turtlebot = () => {
  return (
    <>
      <Row justify="center">
        <Title level={2}>ROBOT CONTROL PAGE</Title>
      </Row>
      <Row>
        <Conexion tipoRobot={"Turtlebot 3"} />
        <Teleoperacion />
      </Row>
      <div></div>
    </>
  );
};

export default Turtlebot;
