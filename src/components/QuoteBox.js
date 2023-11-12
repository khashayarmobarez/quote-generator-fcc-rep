import React, { Component } from 'react';
import { useState } from 'react';
import styles from "./QuoteBox.module.css"

class QuoteBox extends Component {


    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            choosenQ: [],
            Quote:"Dedication makes dreams come true.",
            author:"kobe bryant",
        }
    }

    componentDidMount() {
        fetch('https://type.fit/api/quotes')
            .then(response => response.json())
            .then(response =>  this.setState({
                quotes: response,
                choosenQ: response[Math.floor(Math.random() * response.length)]
            }))
    }


    clickHandler = () => {
                this.setState({
                choosenQ: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)],
                Quote: this.state.choosenQ.text,
                author: this.state.choosenQ.author
            })
    }

    tweetHandler = () => {
        const {Quote,author} = this.state;
        window.open(`https://www.twitter.com/intent/tweet?text=${'"' + Quote+ '"  ' +author}`, "_blank");
    }

    render() {
        const {colorHandler, color} = this.props;
        return (
            <div id='quote-box' className={styles.quoteBox}>
                <div className={styles.container}>

                    
                        <h1 id='text' className={styles.theQuote} style={{color: color}}>"{this.state.Quote}</h1>
                        <p id='author' className={styles.author} style={{color: color}}>{this.state.author}</p>
                    
                    
                

                <div className={styles.buttonContainer}>
                    <button id='new-quote' className={styles.quoteButton} onClick={() => {colorHandler();this.clickHandler();}} style={{background: color}}>new quote</button>
                    <button id='tweet-quote' className={styles.tweetButton} onClick={this.tweetHandler} style={{background: color}}>
                      <i className="fa-brands fa-twitter"></i>   
                    </button>

                </div>
              </div>
             </div>
        );
    }
}

export default QuoteBox;