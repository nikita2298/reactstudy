import React from "react";
// const Greet = (props) => {
//   console.log(props);
const Greet = ({heroname,name}) => {
   return (
    <div>

       <div>
        <h1>
          hello {name} aka {heroname}
        </h1>
        {/* {props.children} */}
      </div>

      
      <h1> from greet</h1>
    </div>
  );
};

export default Greet;
