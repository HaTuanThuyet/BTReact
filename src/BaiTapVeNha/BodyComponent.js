import React, { Component } from 'react'

export default class BodyComponent extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron ">
                    <h1 >A warm welcome!</h1>
                    <p className="lead">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?.</p>
                   
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action</a>
                </div>

            </div>
        )
    }
}
