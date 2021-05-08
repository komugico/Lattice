import React, { Component } from 'react';

import * as C from '../constants/gameConstant';

class SmallStoneDesign extends Component {
    constructor(props) {
        super(props);
    }

    getImgTag(player) {
        console.log(player);
        if (player === C.PLAYER_1) {
            return (
                <img src={C.WHITE_IMG_PATH} style={{ height: "30px" }} />
            );
        }
        else {
            return (
                <img src={C.BLACK_IMG_PATH} style={{ height: "30px" }} />
            );
        }
    }

    render() {
        let imgTag = this.getImgTag(this.props.player);
        return (<div>{ imgTag }</div>);
    }
}

export default SmallStoneDesign;