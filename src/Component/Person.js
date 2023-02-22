import React, { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "laabidi nadhem",
        bio: "A web developer student with a passion for exploring different fields.",
        imgSrc: 
          "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/330924133_762722348197351_8726454822726822412_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BZmfKAH8lxMAX-uQZuh&_nc_ht=scontent.ftun1-2.fna&oh=00_AfAUmwCIe8XhDepxreBDI61y2LUHVSlX2j16kwIsNpZ3kw&oe=63F9D92F",
        profession: "web developer",
      },
      show: false,
      timeIntervalId: 0,
      timePass:0,
    };
  }
  componentDidMount(){
    const intervlId = setInterval(() =>{
        this.setState({ timePass: this.state.timePass + 1 });
    }, 1000);
    this.setState({ timeIntervalId : intervlId });
    console.log('componentDidMount')
    }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    console.log('componentWillUnmount')
  }; 
  changeProfile = () => {
    this.setState({ show: !this.state.show });
    console.log(this.state.show);
  };
  render() {
    return (
      <div>
        <button onClick={this.changeProfile}>Toggle Profile</button>
        {this.state.show && (
          <div>
            <img  src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
            <p>Time elapsed since mounting: {this.state.timeIntervalId} seconds</p>

          </div>
        )}

      </div>
    );
  }

}