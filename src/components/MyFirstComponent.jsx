import React from "react";
import PropTypes from "prop-types";

const MyFirstComponent = () => {
    const arr=[{name:'task1',priority:'1'},{name:'task2', priority:'2'}]
    
  return (
   
    <div className="card bg-danger mx-auto mt-5" style={{display:"flex",
textAlign:"center",justifyContent:"center",alignItems:"center",width:"50%",height:"50%",minHeight:300,border:"1px solid gray",color:"black",}}>
    <h1 className="text-warning">MyLogin</h1>
    <input type="text" className="text-success mb-3 w-50 rounded-2" placeholder="Name" />
    <input type="text" className="text-success w-50 rounded-2" placeholder="Priority"/>
    <button className="bg-warning mt-5 rounded-3 w-25 py-3" >Submit</button>
   
    
    {arr.map((element)=>(
        
        <div>
            {element.name} {element.priority}
        </div>
    
    ))}
</div>

)};

MyFirstComponent.propTypes = {};

export default MyFirstComponent;
