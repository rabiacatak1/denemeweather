import React, {Component} from 'react';

class StateExample extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0,
            marka:'Zara',
            kategori: 'Ceket',
            renk: 'Mor',
            cinsiyet: 'Kadın',

        }

    }

    handleIncrement =()=>{
        this.setState({count:this.state.count + 1})
    }
    changeColor=()=>{
        this.setState({renk: 'Mavi'});
    }

    render() {
        const count = this.state.count;
        return (
            <div>
                <h1>
                   Marka: {this.state.marka}
                </h1>
                <h2>
                    Kategori: {this.state.kategori}
                </h2>
                <p>
                    Renk : {this.state.renk}
                </p>
                <p>
                    Cinsiyet: {this.state.cinsiyet}
                </p>
                <button onClick={this.changeColor}>Change Color</button>count
                <p>Count : {count}</p>
                <button onClick={this.handleIncrement}>+1 Counter</button>
            </div>

        );
    }
}

export default StateExample;