import React, { Component } from 'react'

export default class RenderWithArray extends Component {
    productList = [
        { id: 1, name: "black car", price: 1000, img: "./Img/CarBasic/products/black-car.jpg" },
        { id: 2, name: "steel car", price: 1500, img: "./Img/CarBasic/products/steel-car.jpg" },
        { id: 3, name: "sliver car", price: 2000, img: "./Img/CarBasic/products/silver-car.jpg" },
        { id: 4, name: "red car", price: 2500, img: "./Img/CarBasic/products/red-car.jpg" }

    ]
    renderTable = () => {
        // // Content (Chứa các tr)
        // let content =[];
        // // Duyệt Mảng (productList)
        // for(let i =0; i<this.productList.length;i++){

        //       let product = this.productList[i];
        //          // Lúc duyệt mảng tạo các đối tượng tr
        //       let objTR = <tr>
        //           <td>{product.id}</td>
        //           <td>{product.name}</td>
        //           <td>{product.price}</td>
        //           <td>
        //               <img className="w-25s" src={product.img} alt="" />
        //           </td>
        //       </tr>
        //       content.push(objTR);

        // }

        // // return content vào tbody
        // return content ;
       let content = this.productList.map((product, index) => {
            // trả về mảng mới , sẽ không dừng vòng lặp chỉ dừng khi duyệt hết mảng
            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <img className="w-25" src={product.img} alt="" />
                </td>
            </tr>
        });
        return content 
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Tạo UI bằng Code Js  */}
                        {this.renderTable()}
                        <tr></tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
