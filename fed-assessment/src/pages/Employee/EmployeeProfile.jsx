import React from "react";

const EmployeeProfile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card__wrapper col-4">
          <div className="card__header">
            <h2>COMPANY</h2>
          </div>

          <div className="card__main">
            <div className="card__img">
              <img src="/Ellipse.png" alt="img" />
              <hr className="line" />
            </div>
            <div className="card__name">
              <h3>John Doe</h3>
              <i>Tech Lead</i>
            </div>
            <div className="card__content ">
              <div className="row">
                <div className="col-6">ID No</div>
                <div className="col-6">38</div>
              </div>
              <div className="row">
                <div className="col-6">DOB</div>
                <div className="col-6">07/04/2001</div>
              </div>
              <div className="row">
                <div className="col-6">Blood gp</div>
                <div className="col-6">A+</div>
              </div>
              <div className="row">
                <div className="col-6">Email</div>
                <div className="col-6">adc@xyz.com</div>
              </div>
              <div className="row">
                <div className="col-6">Phone</div>
                <div className="col-6">9988776655</div>
              </div>
            </div>
          </div>
          <div className="card__footer">
            <p>A Company Pvt. Ltd.</p>
            <p>https://www.acompany.com</p>
          </div>
          <h4 className="text--vertical">Operations & Mgnt.Core Team</h4>
          <div className="rectangle"></div>

          <div className="bottom-rect">
            <div className="rectangle-bottom">
              {/* <div className="border-left"></div> */}
            </div>
            <div className="rectangle-bottom right"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="back__wrapper col-4">
          <div className="back__rectangle"></div>
          <div className="card__header">
            <h2>COMPANY</h2>
          </div>
          <div className="back__main row">
            <div className="col-6">
              <div className="home__section "></div>
              <div className="home__section "></div>
            </div>
            <div className="col-6">
              <div className="office__section"></div>
              <div className="support__section"></div>
            </div>
          </div>

          <div className="card__footer">
            <p>A Company Pvt. Ltd.</p>
            <p>https://www.acompany.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
