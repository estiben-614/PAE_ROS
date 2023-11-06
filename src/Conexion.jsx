import { Alert } from "antd";
import { useEffect, useState } from "react";
import ROSLIB from "roslib";

const Conexion = ({ tipoRobot }) => {
  const [conexion, setConexion] = useState(false);

  useEffect(() => {
    const ros = new ROSLIB.Ros({
        url: "ws://localhost:9090",
      });
      console.log(ros)

      ros.on("connection", () => {
        setConexion(true);
        console.log("CONECTADO");
      });

      ros.on("close", () => {
        setConexion(false);
        console.log("DESCONECTADO");
        setTimeout(() => {
            ros.connect("ws://localhost:9090")
        },5000)
      });

      ros.on("error", (error) => {
        console.error("Error de conexión:", error);
        setConexion(false);
      });
  }, []);

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
