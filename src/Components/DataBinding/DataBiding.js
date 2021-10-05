import React, { Component } from 'react'

export default class DataBiding extends Component {
    // Thuộc Tính 
    age = 20;
    img = "https://imgur.com/e5Zxf5M.jpg";
    // Phương thức Phụ
    renderProduct = () => {
        let product = {
            name: "Product",
            Mota: "sản phẩm...",
            price: 100,
            imgProduct: "https://imgur.com/e5Zxf5M.jpg"
        }
        return <div className="card" style={{width:"18rem"}} >
            <img src={product.imgProduct} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                    {product.Mota}
                    <br/>
                    {product.price}

                    </p>
               
            </div>
        </div>

    }

    // Phương Thức  Chính
    render() {
        let name = "Nguyễn Thị Học Viên";
        return (
            <div className="container">
                <p>Tên học Viên :{name}</p>
                <p>Tuổi học Viên :{this.age}</p>
                <img className="w-25" src={this.img} alt="..." />
               {this.renderProduct()};

            </div>
        )
    }
}
