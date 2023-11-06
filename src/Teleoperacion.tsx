import React, { useContext } from "react";
import { Joystick } from "react-joystick-component";
import ROSLIB from "roslib";
import { RosContext } from "./Context/RosContext";

const Teleoperacion = () => {
  const {ros} = useContext(RosContext)
  console.log(ros)
    const handleMove = () => {
      const cmd_vel = new ROSLIB.Topic({
      })
    }
    const handleStop = () => {
        console.log('fin')
    }


  return (
    <div>
      <Joystick
        size={100}
        baseColor="#EEEEEE"
        stickColor="#BBBBBB"
        move={handleMove}
        stop={handleStop}
      />
    </div>
  );
};

export default Teleoperacion;
