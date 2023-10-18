import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
import SideBar from "../../molecules/sidebar/SideBar";
import CustomHeader from "../../molecules/header/Header";

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Layout hasSider={true}>
        <SideBar />
        <Layout style={{ height: "100vh" }}>
          <CustomHeader />
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </>
  );
};
//className="customContainer"
export default LayoutContainer;
