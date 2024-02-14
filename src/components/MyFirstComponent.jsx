import React from "react";
import PropTypes from "prop-types";

const MyFirstComponent = () => {
  const arr = [
    { name: "task1", priority: "1" },
    { name: "task2", priority: "2" },
  ];

  return (
 
      <div
        className="card mx-auto bg-input mt-3 "
        style={{
          display:"flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "30%",
          height: "30%",
          minHeight: 300,
          border: "1px solid gray",
          color: "black",
        }}
      >
        <h1 className="text-warning">MyLogin</h1>
        <input
          type="text"
          className=" mb-3 py-2 w-75 rounded-2"
          placeholder="Name"
        />
        <input
          type="text"
          className=" w-75 py-2 rounded-2"
          placeholder="Priority"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          className="mt-5 w-75 rounded-2"
          placeholder="typing..."
        ></textarea>

        <button className=" mt-3 rounded-3 w-25 py-2 sub-hover">Submit</button>

        {arr.map((element) => (
          <div>
            {element.name} {element.priority}
          </div>
        ))}
      </div>   
    
  );
};

MyFirstComponent.propTypes = {};

export default MyFirstComponent;
