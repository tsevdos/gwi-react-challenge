import { FC, ReactNode } from "react";
import { Layout } from "antd";
import { Header } from "../";
import styles from "./styles.module.css";

const { Content } = Layout;

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => (
  <Layout>
    <Header />
    <Layout className={styles.content}>
      <Content className={styles.innerContent}>
        {children}
        <footer className={styles.footer}>Made with ❤️ in Athens, Greece.</footer>
      </Content>
    </Layout>
  </Layout>
);

export default AppLayout;
