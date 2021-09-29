import React from "react";

import { Layout } from "antd";
import { useHistory } from "react-router-dom";
const { Header, Footer, Content } = Layout;

const WithLayout = (props: React.ReactNode) => {
  const history = useHistory();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "orange" }}>
        <span onClick={() => history.push(`/`)}>Header</span>
      </Header>
      <Content>{props}</Content>
      <Footer style={{ backgroundColor: "orange" }}>Footer</Footer>
    </Layout>
  );
};

export default WithLayout;
