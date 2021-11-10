import React, { Component } from 'react'

export default class ButtonClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
            //   eklenecekSiraNo: null,
        };

        // this.getCustomStore = this.getCustomStore.bind(this);
    }
    arttirFunc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    azaltFunc = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    componentDidMount(){
        console.log("componentDidMount çalıştı")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate çalıştı")
    }

    compo

    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <p>{this.state.count}</p>
                <button onClick={this.arttirFunc}>Arttır</button>
                <button onClick={this.azaltFunc}>Azalt</button>
            </div>
        )
    }
}
