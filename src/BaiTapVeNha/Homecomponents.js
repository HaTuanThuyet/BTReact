import React, { Component } from 'react'
import BodyComponent from './BodyComponent'
import CardComponent from './CardComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'

export default class Homecomponents extends Component {
    render() {
        return (
            <div >

                <HeaderComponent />

                <div className=" container py-5">
                    <BodyComponent />
                    <div className=" row ">

                        <CardComponent /> <CardComponent /> <CardComponent /><CardComponent />

                    </div>

                </div>
                <div>
                  <FooterComponent/>
                </div>

            </div>
        )


    }
}





