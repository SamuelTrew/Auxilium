import React from 'react';
import "../../static/fonts/fonts.css";
import image from "../images/OpenDyslexic.jpg";
import imperial from "../images/imperial.png";
import Layout from "../components/layout";

const Dyslexia = () => {
   return (
      <Layout>
         <div className="container">
            <div className="container__row ">
               <div className="container__col-sm-6 pad font">
                  <br/><br/>
                  This is the type of font most of you are used to viewing. <br/>
                  It's probably pretty familiar as well. <br/>
                  Not just that, it's probably pretty simple to read... For you that is. <br/>
               </div>
               <div className="container__col-sm-6 pad"/>
            </div>

            <br/><br/>

            <div className="container__row">
               <div className="container__col-sm-6 pad"/>
               <div className="container__col-sm-6 pad dys-font">
                  Dyslexic people don't find it as easy. <br/>
                  <img src={image} alt="Dyslexia" style={{height: 200}}/>
                  Their ability to use the web to its full extent is limited. <br/>
               </div>
            </div>

            <br/><br/>
            <div>
               Text Area to try out the difference:
            </div>
            <div>
               <textarea name="message" rows="10" cols="col-sm-12">
                  The cat was playing in the garden.
               </textarea>
            </div>

            <img src={imperial} alt="imperial"/>
         </div>
      </Layout>
   );
};

export default Dyslexia;