import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

interface PageLayoutProps {
  children: React.Component;
}

const PageLayout = ({ children }: any) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key={0}>{`nav 1`}</Menu.Item>
          <Menu.Item key={1}>{`nav 1`}</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '90px' }}>{children}</Content>
    </Layout>
  );
};

export default PageLayout;
