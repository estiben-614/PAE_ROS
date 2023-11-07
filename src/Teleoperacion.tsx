import React, { useContext } from "react";
import { Joystick } from "react-joystick-component";
import ROSLIB from "roslib";
import { RosContext } from "./Context/RosContext";
import Config from "./Config/config";

const Teleoperacion = () => {
  const { ros } = useContext(RosContext);

  const handleMove = (event) => {
    const cmd_vel = new ROSLIB.Topic({
      ros,
      name: Config.TURTLEBOT_TOPIC,
      messageType: "geometry_msgs/Twist",
    });

    const twist = new ROSLIB.Message({
      linear: {
        x: event.y/2,
        y: 0,
        z: 0,
      },
      angular: {
        x: 0,
        y: 0,
        z: -event.x/2,
      },
    });
    // console.log(twist);
    cmd_vel.publish(twist);
  };
  const handleStop = () => {
    const cmd_vel = new ROSLIB.Topic({
      ros,
      name: Config.TURTLEBOT_TOPIC,
      messageType: "geometry_msgs/Twist",
    });

    const twist = new ROSLIB.Message({
      linear: {
        x: 0,
        y: 0,
        z: 0,
      },
      angular: {
        x: 0,
        y: 0,
        z: 0,
      },
    });
    // console.log(twist);
    cmd_vel.publish(twist);
  };

  return (
    <>
      <div>
        <Joystick
          size={100}
          baseColor="#EEEEEE"
          stickColor="#BBBBBB"
          move={handleMove}
          stop={handleStop}
        />
      </div>
    </>
  );
};

export default Teleoperacion;
