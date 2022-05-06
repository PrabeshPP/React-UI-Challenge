import classes from "./Body.module.css";
import {BsArrowUpRight} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";

const Body = () => {
  return (
    <div className={classes.container}>
      <div className={classes["box-h1"]}>
        <h1 className={classes.h11}>Accept Crypto Globally,</h1>
        <h1 className={classes.h22}>Be Limitless.</h1>
      </div>
      <div className={classes["box-p1"]}>
        <p>
          Enjoy borderless payments with MyCoin .Our Solution is user <span>friendly</span>
          <span>,fast</span> and <span>secure.</span>
        </p>
      </div>
    <dv className={classes.boxButton}>
        <div className={classes.button1}>
        {<BsArrowUpRight/>}
        <p>Get Started</p>
        </div>
        <div className={classes.button2}>
        {<BsArrowUpRight/>}
        <p>Contact Sales</p>
        </div>
    </dv>

    <div>
        <div>

        </div>
    </div>

    </div>
  );
};

export default Body;
