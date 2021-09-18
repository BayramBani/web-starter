import React from 'react'
import Img from './../../../assets/img/webpack.webp'

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <h1 className="display-1 text-center">Home</h1>
          </div>
          <div className="col-12 mt-5 text-center">
            <b>webpack</b>
            <img src={Img} alt="webpack"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
