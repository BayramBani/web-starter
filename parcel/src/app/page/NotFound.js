import React, {Component} from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-1 text-center"> <b className="text-danger">404</b> Not Found</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
