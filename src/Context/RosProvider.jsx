import { useEffect, useState } from "react";
import { RosContext } from "./RosContext";
import ROSLIB from "roslib";
import Config from "../Config/config";

const RosProvider = ({ children }) => {
  const [conexion, setConexion] = useState(false);
  const [conexionROS, setConexionROS] = useState(false);

  useEffect(() => {
    const ros = new ROSLIB.Ros({
      url: "ws://localhost:9090",
    });
    console.log(ros);
    setConexionROS(ros)

    ros.on("connection", () => {
      setConexion(true);
      console.log("CONECTADO");
    });

    ros.on("close", () => {
      setConexion(false);
      console.log("DESCONECTADO");
      setTimeout(() => {
        ros.connect("ws://localhost:9090");
      }, Config.TIEMPO_RECONEXION);
    });

    ros.on("error", (error) => {
      console.error("Error de conexión:", error);
      setConexion(false);
    });
  }, []);

  return (
    <RosContext.Provider value={{ ros: conexionROS, conexion }}>
      {children}
    </RosContext.Provider>
  );
};

export default RosProvider;
