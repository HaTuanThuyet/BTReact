import React, { Component } from 'react'

export default class ChangeFontSize extends Component {
    // constructor (){
    //     super()
    //     this.state = new
    // }
    /**
     * + Xây Dựng UI( Tạo Component, html(JSX), Css)
     * +Xác định dữ liệu cần thay đỗi thì đưa vào state và kiểu dữ liệu của nó
     * + Xây dựng phương thức (xác định phương thức sẽ chứa setState )
     */
    state ={
        fs:16 

    }
    render() {
        return (
            <div className="container py-5">
                <p style={{fontSize:`${this.state.fs}px`}} className="bg-dark text-white">Lorem Ispum dolor sit met</p>
                <button type="button" className="btn btn-success mr-3" onClick={() => {
                this.setState({
                    fs:this.state.fs + 2 
                })
                }}>+</button>
                <button type="button" className="btn btn-danger" onClick={() => {
                    this.setState({
                        fs:this.state.fs - 2 

                    })
                }}>-</button>

            </div>
        )
    }
}

