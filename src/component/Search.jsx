import React, { Component } from 'react';

import styles from "./Search.module.css";

export class Search extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>What Do You Want?</p>
        <input placeholder='Search ...'/>
      </div>
    )
  }
}

export default Search