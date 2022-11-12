import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { URLS } from "../../utils/constants";

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
];

const AppHeader: FC = () => {
  const { pathname } = useLocation();
  const selectedkey = pathname.split("/")[1];

  return (
    <Header className="header">
      <div className="wrapper">
        <h1>
          <Link to={URLS.home}>GWI CatLover</Link>
        </h1>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedkey]}
          style={{ minWidth: 0, flex: "auto" }}
          items={menuItems}
        />
      </div>
    </Header>
  );
};

export default AppHeader;
