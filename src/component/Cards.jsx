import React , {Component} from "react";


import Card from "./Card";
import styles from "./Cards.module.css";

import iphoneX from "../images/iphone-x.jpg";
import iphone12 from "../images/iphone-12.jpg";
import iphone13ProMaX from "../images/iPhone-13-Pro-Max.jpg";
import s22Ultra from "../images/s22-ultra.jpg";


class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={iphoneX} name="Iphone X" cost="500 $"/>
                <Card image={iphone12} name="Iphone 12" cost="800 $"/>
                <Card image={iphone13ProMaX} name="Iphone 13 Pro Max" cost="1200 $"/>
                <Card image={s22Ultra} name="S22 Ultra" cost="900 $"/>
            </div>
        );
    }
}
export default Cards;