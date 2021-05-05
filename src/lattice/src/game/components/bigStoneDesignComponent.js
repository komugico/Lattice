import React, { Component } from 'react';

import {
    PLAYER_1,
    PLAYER_2,
    WHITE_IMG_PATH,
    BLACK_IMG_PATH
} from '../constants/gameConstant';

class BigStoneDesign extends Component {
    constructor(props) {
        super(props);
    }

    getImgTag(player) {
        if (player === PLAYER_1) {
            return (
                <img src={WHITE_IMG_PATH} style={{ height: "60px" }} />
            );
        }
        else {
            return (
                <img src={BLACK_IMG_PATH} style={{ height: "60px" }} />
            );
        }
    }

    render() {
        let imgTag = this.getImgTag(this.props.player);
        return (<div>{ imgTag }</div>);
    }
}

export default BigStoneDesign;