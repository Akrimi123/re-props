import React from 'react';

export  const Getsdata = (props) =>{
    return (
        <div className="hello">
            <div>
                <h1 style={{color:`red`,textAlign:'center'}}>Hello!{props.FullName}</h1>
                <div style={{textAlign:'center',}}><button onClick={props.data}>Rabeh</button></div>
                
                <div>{props.children}</div>
                
            </div>
                <div>
                    <p style={{color:'whitesmoke',fontSize:30,fontStyle:'oblique',letterSpacing:2,textAlign:'center',marginLeft:300,marginTop:-300,paddingLeft:35,paddingRight:50}}>I'm developper Full Stack js , {props.BIO}</p>
                
                </div>
                    <div>
                        <p style={{color:'whitesmoke',fontSize:25,fontStyle:'oblique',marginLeft:400,marginBottom:250, letterSpacing:2}}> I am {props.profession}</p>
                    </div>
        </div>
    );
    
}

 



