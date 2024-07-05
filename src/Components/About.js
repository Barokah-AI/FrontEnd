import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const pic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const resumeDownload = this.props.data.resumedownload;

    const PicStyle = {
      maxWidth: "250px",
      height: "auto",
      borderRadius: "0" // Ubah border-radius menjadi 0
    };

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="pic"
                src={pic}
                alt="BarokahAI"
                style={PicStyle}
              />
            </div>
            <div className="nine columns main-col">
              <h2 className="text-center" style={{ fontSize: "2em" }}>About BarokahAI</h2>
              <p>{bio}</p>
              <div className="row">
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
