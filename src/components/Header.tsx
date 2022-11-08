import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const menuItems = [
  {
    key: "cats",
    label: <Link to="/cats">Cats</Link>,
  },
  // {
  //   key: "stats",
  //   label: <Link to="/stats">Stats</Link>,
  // },
];

const AppHeader: FC = () => {
  const { pathname } = useLocation();
  const selectedkey = pathname.replace(/\//g, "");
  // console.log(selectedkey);

  return (
    <Header className="header">
      <div className="wrapper">
        <h1>
          <Link to="/">GWI CatLover</Link>
        </h1>
        <Menu
          theme="dark"
          mode="horizontal"
          // selectedKeys={[selectedkey]}
          style={{ minWidth: 0, flex: "auto" }}
          items={menuItems}
        />
      </div>
    </Header>
  );
};

export default AppHeader;
