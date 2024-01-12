import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.'

const App = () => {
  return (
    <div className="bg-light custom-bg">
      <div className="container-fluid custom-bg p-4">
        <div className="row">
          <div className="col-lg-6 left">
            <div className="top">
              <h1 className="title">Shubx</h1>
              <h1 className="hello">Hello !</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, accusamus.</p>
              <button className="btn btn-primary">Verify Your Email Address</button>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, accusamus?</p>
              <h2>regards</h2>
              <h3>Lorem ipsum dolor sit.</h3>
            </div>
          </div>
          <div className="col-lg-6 right">
            <img src="./bg.jpg" alt="Background Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

