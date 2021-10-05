import React, { Component } from 'react'
import FunctionComponent from '../Components/FunctionComponent'
import FunctionProduct from './FunctionProduct'
import Products from './Products'

export default class HomePage extends Component {
    productList = [
        { id: 1, name: "black car", price: 1000, img: "./Img/CarBasic/products/black-car.jpg" },
        { id: 2, name: "steel car", price: 1500, img: "./Img/CarBasic/products/steel-car.jpg" },
        { id: 3, name: "sliver car", price: 2000, img: "./Img/CarBasic/products/silver-car.jpg" },
        { id: 4, name: "red car", price: 2500, img: "./Img/CarBasic/products/red-car.jpg" }

    ]
    render() {
        return (
            <div className="container">
               <div className="row">
                   <div className="col-4">
                       {/* <Products nameCar="Black Car" price={1000}/>  */}
                       {/* <Products product={this.productList[0]}/>  */}
                       <FunctionProduct  product={this.productList[0]}/>  

                   </div>
                   <div className="col-4">
                       {/* <Products nameCar="Red Car" price={2000}/>  */}
                       {/* <Products product={this.productList[1]}/>  */}
                       <FunctionProduct  product={this.productList[1]}/>  


                   </div>
                   <div className="col-4">
                       {/* <Products nameCar="Silver Car" price={1500}/>  */}
                       {/* <Products product={this.productList[2]}/>  */}
                       <FunctionProduct  product={this.productList[2]}/>  


                   </div>
               </div>
            </div>
        )
    }
}
