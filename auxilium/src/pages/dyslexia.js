import React from 'react';
import "../../static/fonts/fonts.css";
import image from "../images/OpenDyslexic.jpg";
import imperial from "../images/imperial.png";
import Layout from "../components/layout";

export default class Dyslexia extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         dys_text: "Hello there, General Kenobi"
      };

      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({dys_text: event.target.value})
   }

   render() {
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
                     <img src={image} alt="Dyslexia" style={{height: 200}}/><br/>
                     Their ability to use the web to its full extent is limited. <br/>
                  </div>
               </div>

               <br/><br/>
               <h2 className="text-align-center">
                  Text Area to try out the difference:
               </h2>

               <div className="text-align-center">
               <textarea
                  name="message" rows="2" cols="60"
                  placeholder="Enter test text here"
                  onChange={this.handleChange}
               />
               </div>

               <div className="container__row text-align-center">
                  <div className="container__col-sm-6">
                     {this.state.dys_text}
                  </div>

                  <div className="container__col-sm-6 dys-font">
                     {this.state.dys_text}
                  </div>
               </div>

               <br/><br/><br/>

               <h2>
                  Here we have a more real example of a web page in action with OpenDyslexic
               </h2>

               <img src={imperial} alt="imperial"/>
            </div>
         </Layout>
      );
   }
};
