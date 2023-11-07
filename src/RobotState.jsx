import { useContext, useEffect, useState } from "react";
import { RosContext } from "./Context/RosContext";
import ROSLIB from "roslib/src/RosLib";
import Config from "./Config/config";
import { Row, Typography } from "antd";
import * as Three from 'three';

const { Title, Text } = Typography;

const RobotState = () => {
  const { ros, conexion } = useContext(RosContext);
  const [posicion, setPosicion] = useState({});
  const [velocidades, setVelocidades] = useState({
    linear : {
        x:0,
        y:0
    },
    angular : {
        z:0,
    }
  })
  const [orientacion, setOrientacion] = useState({})
  
  //Suscriber de la posición y velocidad 
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

      setVelocidades( {
        linear: {
            x: message.twist.twist.linear.x.toFixed(2),
            y: message.twist.twist.linear.y.toFixed(2)
        },
        angular: {
            z: message.twist.twist.angular.z.toFixed(2)
        }

    })
    });
  };

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

      <Row>
        <Title level={5}>Velocidades</Title>
      </Row>
      <Row>
        <Text>Lineal : {velocidades.linear.x}</Text>
      </Row>
      <Row>
        <Text>Angular : {velocidades.angular.z}</Text>
      </Row>
    </>
  );
};

export default RobotState;
