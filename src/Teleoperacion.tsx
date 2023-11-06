import React from "react";
import { Joystick } from "react-joystick-component";

const Teleoperacion = () => {
    const handleMove = () => {
        console.log('ola')
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
