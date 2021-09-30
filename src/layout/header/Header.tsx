import { Layout } from "antd";
import { useHistory } from "react-router-dom";

//style
import "./Header.scss";

//assets
import Logo from "../../assets/images/Logo..svg";

const Header = () => {
  const history = useHistory();
  return (
    <Layout.Header className="header">
      <img
        src={Logo}
        alt="logo"
        className="header__logo"
        onClick={() => history.push(`/`)}
      />
    </Layout.Header>
  );
};

export default Header;
