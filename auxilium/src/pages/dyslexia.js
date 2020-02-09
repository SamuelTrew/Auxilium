import React from 'react';
import "../../static/fonts/fonts.css";
import image from "../images/OpenDyslexic.jpg";
import Layout from "../components/layout";

const Dyslexia = () => {
   return (
      <div className="container">
         <div className="container__row">
            <div className="container__col-sm-6 pad">
               This is the type of font most of you are used to viewing. <br/>
               It's probably pretty familiar as well. <br/>
               Not just that, it's probably pretty simple to read... For you that is. <br/>
            </div>

            <div className="container__col-sm-6 pad dys_bod">
               You see, dyslexic people tend to have issues with reading blocks of text. <br/>
               This can impair their ability to do a wide variety of things that you might
               take for granted each day. <br/>
               Which can include the ability to read text well and interpret/learn from this text. <br/>
            </div>
         </div>

         <img src={image} alt="Dyslexia"/>
      </div>
   );
};

export default Dyslexia;