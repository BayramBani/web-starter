import React from "react";
import ReactDOM from "react-dom";

const ReactApp = () => {
  return (
    <div>
      <h1 className="display-4 text-center"><b className="text-primary">React</b> here!</h1>
    </div>
  );
};
ReactDOM.render(<ReactApp/>, document.getElementById("app"));
export default ReactApp;
