import Logo from "../../logo.jpeg";

const Jobs = () => {
  return (
    <div className="jobs">
      <div className="jobs__content">
        <div className="jobs__content-left"></div>
        <div className="jobs__content-middle">
          <div className="job__main">
            <h3>Recommended for you</h3>
            <p>Based on your profile and search history.</p>
            <div className="job">
              <img src={Logo} alt="cometchat" />
              <div className="job__description">
                <p>Senior Front-End Software Engineer</p>
                <p>United State</p>
              </div>
            </div>
            <div className="job">
              <img src={Logo} alt="cometchat" />
              <div className="job__description">
                <p>Senior Front-End Software Engineer</p>
                <p>United State</p>
              </div>
            </div>
            <div className="job">
              <img src={Logo} alt="cometchat" />
              <div className="job__description">
                <p>Senior Front-End Software Engineer</p>
                <p>United State</p>
              </div>
            </div>
            <div className="job">
              <img src={Logo} alt="cometchat" />
              <div className="job__description">
                <p>Senior Front-End Software Engineer</p>
                <p>United State</p>
              </div>
            </div>
            <div className="job">
              <img src={Logo} alt="cometchat" />
              <div className="job__description">
                <p>Senior Front-End Software Engineer</p>
                <p>United State</p>
              </div>
            </div>
          </div>
        </div>
        <div className="jobs__content-right"></div>
      </div>
    </div>
  );
};

export default Jobs;
