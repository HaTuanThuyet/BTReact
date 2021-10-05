import React, { Component } from 'react'

export default class HandleEvent extends Component {
    // Phương Thức (met)
  testHanldeEvent = () => {
      alert("Click rồi nè má");
  }
  showInfo = (name) => {
    alert(`Hello ${name}`);

  }
  
  
    render() {
        let fullName = "Nguyễn Thị Học Viên";
        return (
            <div className="container py-5">
            <button className="btn btn-warning" onClick={this.testHanldeEvent}>Click me</button> 
            <button className="btn btn-warning ml-5" onClick={()=>{
                this.showInfo(fullName);
            }}>Show InFo</button> 

            </div>
        )
    }
}
