import { Alert } from "antd";
import { useContext } from "react";
import { RosContext } from "./Context/RosContext";

const Conexion = ({ tipoRobot }) => {
  const { conexion } = useContext(RosContext)
  return conexion ? (
    <Alert
      message={`${tipoRobot} conectado`}
      type="success"
      style={{ width: "100%", textAlign: "center" }}
    />
  ) : (
    <Alert
      message={`${tipoRobot} desconectado`}
      type="error"
      style={{ width: "100%", textAlign: "center" }}
    />
  );
};

export default Conexion;
