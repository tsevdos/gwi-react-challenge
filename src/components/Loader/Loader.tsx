import { FC } from "react";
import { Spin } from "antd";
import styles from "./styles.module.css";

const Loader: FC = () => (
  <div className={styles.loader}>
    <Spin size="large" />
  </div>
);

export default Loader;
