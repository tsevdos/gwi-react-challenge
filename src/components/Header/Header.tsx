import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { URLS } from "../../utils/constants";
import styles from "./styles.module.css";

const { Header } = Layout;

const menuItems = [
  {
    key: "cats",
    label: <Link to={URLS.cats}>Cats</Link>,
  },
  {
    key: "breeds",
    label: <Link to={URLS.breeds}>Breeds</Link>,
  },
  {
    key: "favourites",
    label: <Link to={URLS.favourites}>Favourites</Link>,
  },
];

const AppHeader: FC = () => {
  const { pathname } = useLocation();
  const selectedkey = pathname.split("/")[1];

  return (
    <Header className={styles.header}>
      <div className={styles.wrapper}>
        <h1>
          <Link to={URLS.home}>GWI CatLover</Link>
        </h1>
        <Menu theme="dark" mode="horizontal" selectedKeys={[selectedkey]} items={menuItems} className={styles.menu} />
      </div>
    </Header>
  );
};

export default AppHeader;
