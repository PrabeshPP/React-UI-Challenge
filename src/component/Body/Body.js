import classes from "./Body.module.css";
import {BsArrowUpRight,BsArrowRight,BsArrowUp} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";
import {FaBitcoin} from "react-icons/fa";
import {IoMdAdd} from "react-icons/io";


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
    <div className={classes.boxButton}>
        <div className={classes.button1}>
        {<BsArrowUpRight/>}
        <p>Get Started</p>
        </div>
        <div className={classes.button2}>
        {<BsArrowUpRight/>}
        <p>Contact Sales</p>
        </div>
    </div>

    <div className={classes.footerBox11}>
    
    <div className={classes["box-comment"]}>
        <div className={classes.box111}>
        {<CgProfile className={classes.person}/>}
        <div className={classes.comment}>
            <h3>Prabesh Bista</h3>
            <p><span>"</span>one of the best services I have experiece.<span>"</span></p>
        </div>
        </div>
       
            {<BsArrowRight className={classes.arrowRight}/>}
        
    </div>
    <div className={classes["box-comment"]}>
        <div className={classes.box222}>
        {<FaBitcoin className={classes.bitcoin}/>}
        <div className={classes.btc}>
            <p>BTC/USDT</p>
            <p>$36049.80</p>
        </div>
        <div className={classes.verticalLine}/>
        <div className={classes.change}>
            <div className={classes.change11}>
            <BsArrowUp/>
            <span>20.22%</span></div>
            <div className={classes.change11}>
            <IoMdAdd/>
            <span>$3000.69</span></div>
            
        </div>

        
        </div>
       
            {<BsArrowRight className={classes.arrowRight}/>}
        
    </div>
    
    </div>

    
   


    </div>
  );
};

export default Body;
