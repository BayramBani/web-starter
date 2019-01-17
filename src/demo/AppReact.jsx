import React from "react";
import ReactDOM from "react-dom";

const AppReact = () => {
   return (
      <div>
         <p><b className="text-primary">React</b> here!</p>
      </div>
   );
};
export default AppReact;

ReactDOM.render(<AppReact/>, document.getElementById("react"));
