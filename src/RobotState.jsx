import React, { useContext, useEffect, useState } from "react";
import { RosContext } from "./Context/RosContext";
import ROSLIB from "roslib/src/RosLib";
import Config from "./Config/config";
import { Row, Typography } from "antd";
import * as Three from 'three';

const { Title, Text } = Typography;

const RobotState = () => {
  const { ros, conexion } = useContext(RosContext);
  const [posicion, setPosicion] = useState({});
  const [velocidades, setVelocidades] = useState({})
  const [orientacion, setOrientacion] = useState({})
  const getPosicion = () => {
    const pose_suscriber = new ROSLIB.Topic({
      ros: ros,
      name: Config.POSE_TURTLEBOT,
      messageType: Config.TYPE_MESSAGE_TURTLEBOT,
    });

    pose_suscriber.subscribe((message) => {
      setPosicion({
        x: message.pose.pose.position.x.toFixed(2),
        y: message.pose.pose.position.y.toFixed(2),
      });
      setOrientacion( {
        orientacion: getOrientacion(message.pose.pose.orientation).toFixed(0)
      })
    });
  };
  useEffect(() => {
    console.log(orientacion)
  },[orientacion])
  const getOrientacion = (orientation) => {
    const quaternion = new Three.Quaternion(
        orientation.x,
        orientation.y,
        orientation.z,
        orientation.w,
    )
    const RPY = new Three.Euler().setFromQuaternion(quaternion)
    return RPY["_z"] * (180 / Math.PI)
}
  useEffect(() => {
    if (conexion) {
      getPosicion();
    }
  }, [conexion]);

  return (
    <>
      <Row>
        <Title level={5}>Posición</Title>
      </Row>
      <Row>
        <Text>x : {posicion.x}</Text>
      </Row>
      <Row>
        <Text>y : {posicion.y}</Text>
      </Row>

      <Row>
        <Text>Orientación : {orientacion.orientacion} </Text>
      </Row>
    </>
  );
};

export default RobotState;
