import React, { Component } from "react";
import "./Components.css";
import store from "../images/store.jpg";
import busy from "../images/busy.jpg";
import corona from "..//images/corona.jpg"
import { Link } from 'react-router-dom';

//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll"


 export default class Homepage extends Component {


  render() {
    return (
      <div id="all">
        <div className="first">
          <div className="titleinfo">
            {/* <div className = "text-left"> */}
               <h1 className="text-left">
              {" "}
              Lineups suck. Know how busy close-by supermarkets are with live
              help from other customers.{" "}
               </h1>
               {/* <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link> */}
            {/* </div> */}
             <img src={store} className="pic-right" alt="store" />
          </div>
        </div>

        <div className="second">
          <div className="viewinfo">
            <img src={busy} className="pic-left" alt="busy" />
            <h1 className="text-right">
              {" "}
              Don't get caught in this! See         
              <Link to="/busyness"> <b><u>LIVE</u></b></Link>  updates from people
              just like you: customers.{" "}
            </h1>
          </div>
        </div>

        <div className = "third">
          <div className = "thirdbodyleft" >
            <h2 className = "workstext"> How it works</h2>
            <p className = "longtext1"> <br></br><br></br>Lynz is an intuitive tool that helps you to shop more effectively. It works by collecting 
              the busyness of stores from real-live people. This is then displayed to you, so that you can make an
              informative decision about when to go to the store. After you have visited the store, you can 
              <Link to="/submit" className = "link2"> <u>submit</u></Link>  updates about
              the busyness level that
              you saw. This way, everyone can help everyone! 
            </p> 
          </div>
          <div className = "thirdbodyright">
         
            <h2 className = "coronatext"> How we are helping the COVID-19 Pandemic</h2>
            <p className = "longtext2"> <br></br>Lynz is not only meant for the convenience of shoppers.
            Lynz was made to help stop the COVID-19 Pandemic, by informing the public of the optimal times to
              visit the store. This would decrease crowds and community spread. Lynz helps people to social distance 
              as much as possible, so we can all be happy and healthy. 
            </p>
            <img id = "coronapic2"
              alt=""
              src= {corona}
              width="100px"
              height="110px"
              className="d-inline-block align-top"
              />
          </div>
        {/* <Element name="test1" className="element" >
           <p>hi</p>
        </Element> */}
        </div>
    
        <div className = "footer">
            <div className = "bodyleft">
              <p className = "footertext1">Created by Adam Lam, Matthew Jiao, Nicholas Tao</p>
            </div>

            <div className = "bodyright" >
              <p className = "footertext2"> &copy;  Lynz 2020 </p>
            </div>
        </div>
      </div>
    );
  }
}
//  default Homepage