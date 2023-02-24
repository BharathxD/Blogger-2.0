import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutEnum } from "../../constants/layout.constants";
import classes from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(
    (state: { Session: { isLoggedIn: boolean } }) => state.Session.isLoggedIn
  );
  useEffect(() => {
    if (isLoggedIn === true) navigate("/posts");
  }, [isLoggedIn]);
  return (
    <main className={classes.home}>
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
