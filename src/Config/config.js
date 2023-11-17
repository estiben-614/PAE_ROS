const Config = {
    TURTLESIM_TOPIC: '/turtle1/cmd_vel',

    TURTLEBOT_TOPIC: '/cmd_vel',
    POSE_TURTLEBOT: '/odom',
    TYPE_MESSAGE_TURTLEBOT: 'nav_msgs/Odometry',

    TIEMPO_RECONEXION: 3000,

    ROSBRIDGE_SERVER_IP: "192.168.1.11",
    ROSBRIDGE_SERVER_PORT: "9090",
}   

export default Config