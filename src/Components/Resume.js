import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const profile = this.props.data.profile.map(function (profile) {
      return (
        <div key={profile.nama}>
          <div className="row item">
            <div className="three columns">
              <img src={`images/${profile.image}`} alt={profile.nama} className="profile-pic" />
            </div>
            <div className="nine columns main-col">
              <h3>{profile.nama}</h3>
              <p className="info">
                {profile.npm} <span>&bull;</span>
                <em className="date">{profile.lahir}</em>
              </p>
              <p>{profile.description}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row profile">
            <div className="three columns header-col">
              <h1>
                <span>Profile</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {profile}
            </div>
          </div>
        </Slide>

        


      </section>
    );
  }
}

export default Resume;
