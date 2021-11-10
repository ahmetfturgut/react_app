import React, { Component } from 'react'
import Button from './Button';

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

    componentDidMount() { 
    }

    componentDidUpdate() { 
    }

    compo

    render() {
        return (
            <div>
                <h1>{this.props.params.headerName}</h1>
                <h1>{this.props.params.bodyName}</h1>
                <p>{this.state.count}</p>
                <Button color="black" backgroundColor="white" label="Arttır" func={this.arttirFunc}></Button>
                <Button color="white" backgroundColor="black" label="Azalt" func={this.azaltFunc}></Button>
            </div>
        )
    }
}
