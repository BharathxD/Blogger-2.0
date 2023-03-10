import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutEnum } from "../../constants/layout.constants";
import classes from "./Home.module.css";
import giyuu from "../../assets/giyuu.jpg";
import BG from "../../components/UI/BG";
interface Props {
  isLoggedIn: boolean;
}

const Home: React.FC<Props> = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn === true) navigate("/posts");
  }, [isLoggedIn]);
  return (
    <main className={classes.home}>
      <BG picture={giyuu} />
      <div className={classes["header-container"]}>
        <div className={classes.header}>
          <span>{LayoutEnum.PLATFORM_TITLE}</span>
        </div>
        <div className={classes["header-actions"]}>
          <Link to="/login" className={classes.button}>
            Login
          </Link>
          <Link to="/register" className={classes.button}>
            Register
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
