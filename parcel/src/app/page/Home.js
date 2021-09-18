import React from 'react'
const img = require('./../../assets/img/parcel.webp');
//const img = require('./../../assets/img/react.webp');

class Home extends React.Component {
   render() {
      return (
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-12">
              <h1 className="display-1 text-center">Home</h1>
            </div>
            <div className="col-sm-12 text-center">
              <img src={img} alt="parcel"/>
            </div>
          </div>
        </div>
      )
   }
}

export default Home;
