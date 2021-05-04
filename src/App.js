import "./App.css"
import React,{Component} from 'react';
import propTypes from "prop-types"
import {Getsdata} from './Profile/Profile component'


class App extends Component{
render (){
  function getdata () {
    alert("Hello From My Page...404 Not Found")
  }
  return (
    <div className="App">
        <Getsdata FullName=" I'm Akrimi Rabeh." 

        BIO="I can say that applying to create a Web Site has been 
        the best decision , I have ever made in my life.
        I love to learn new technologies and flex my creativity to create amazing things."
        
        profession="FullStack JS Junior developer." data={getdata}>
          <div style={{marginTop:30,marginLeft:25,display:'flex'}}><img src="akrimi.jpg"/></div>
            
        </Getsdata>
      
        
        


          
    </div>
  );
  }
}

Getsdata.prototype={
  FullName:propTypes.string.isRequired ,
  BIO:propTypes.string.isRequired ,
  profession:propTypes.string.isRequired ,

};
export default App;
