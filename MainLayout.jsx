import { useState } from 'react';
import { Layout, Menu, Row, Typography, theme } from 'antd';
import Turtlebot from './src/Turtlebot';
const { Header, Content, Footer, Sider } = Layout;

const { Title } = Typography;

const routes = [
  'Trutlebot 3',
  // 'Turtlesim'
]


const Fv2 = () => (
  <div></div>
)
// eslint-disable-next-line react/prop-types
const MainLayout = () => {

  const [activeItem, setActiveItem] = useState(routes[0])
  // const navigate = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
  <>
    <Layout style={ {
      width : '100%',
      height: '100vh',
      padding: 0,
      margin: 0,
    }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['2']}
          items={routes.map(
            (route) => ({
              key: route,
              label: route,
            }),
          )}
          onClick={({ key }) => setActiveItem(key)}
          
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Row justify="center">
            <Title level={2}>PAE : ROS + REACT </Title>
          </Row>
          </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            { (activeItem === routes[0]) && <Turtlebot />}
            { (activeItem === routes[1]) && <Fv2 />}

          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          PAE ©2023 Created by Estiben Fernández Echeverri
        </Footer>
      </Layout>
    </Layout>

    </>
  );
};
export default MainLayout;
