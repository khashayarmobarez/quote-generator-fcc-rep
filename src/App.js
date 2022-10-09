import React, { Component } from 'react';

import QuoteBox from "./components/QuoteBox";
import styles from "./app.module.css"
import { colorsCode } from './components/ColorData';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Color: "",
    }
  }

  colors = colorsCode;

  componentDidMount() {
    this.setState({
      Color: this.colors[Math.floor(Math.random() * this.colors.length)]
    })
  }

  colorHandler = (colors) => {
    this.setState({
      Color: this.colors[Math.floor(Math.random() * this.colors.length)]
    }) 
  }

  

  render() {
    const { Color } = this.state;
    return (
      <div className={styles.app} style={{background: Color}}>
  
          <QuoteBox colorHandler={this.colorHandler} color={Color} />
          
      </div>
    );
  }
}

export default App;
