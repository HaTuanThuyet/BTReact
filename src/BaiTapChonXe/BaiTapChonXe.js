import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state={
        imgCar:"./Img/CarBasic/products/black-car.jpg"
    }
    renderImg = (color) => {
        // Gán Giá Trị Mới Cho State,render Lại UI
        this.setState({
            imgCar: `./Img/CarBasic/products/${color}-car.jpg`
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-8">
                   <img className="img-fluid my-3" src={this.state.imgCar} alt="" />

                    </div>
                    <div className="col-4 ">
                        <div className="row my-3">
                            <div className="col-4">
                                <button className="btn btn-dark text-white" onClick={
                                    () => {
                                        this.renderImg("black")
                                    }
                                }>Black</button>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4">
                                <button className="btn btn-secondary" onClick={
                                    () => {
                                        this.renderImg("steel")
                                    }
                                }>Steal</button>
                            </div>
                        </div> 
                         <div className="row mb-3">
                            <div className="col-4">
                                <button className="btn btn-light" onClick={
                                    () => {
                                        this.renderImg("silver") 
                                    }
                                }>Sliver</button>
                            </div>
                        </div> 
                         <div className="row mb-3">
                            <div className="col-4">
                                <button className="btn btn-danger" onClick={
                                    () => {
                                        this.renderImg("red")
                                    }
                                }>Red</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
