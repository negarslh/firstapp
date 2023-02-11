import React, { Component } from 'react';

import styles from "./Search.module.css";

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      text : "",
    }
  }

  changeHandler = e => {
    this.setState({
      text : e.target.value
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <p>What Do You Want?</p>
        <div>
          <input type="text" value={this.state.text} onChange={this.changeHandler} placeholder='Search ...'/>
          <br />
          <br />
          <span className={this.state.text ? styles.active : ""}>{this.state.text}</span>
        </div>
      </div>
    )
  }
}

export default Search