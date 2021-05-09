import React, { Component } from 'react';

import * as C from '../constants/gameConstant';

class StoneDesign extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let smallStoneSize = Math.floor(this.props.boardSize / (C.NUM_LATTICE)) * 0.25;
        let bigStoneSize = Math.floor(this.props.boardSize / (C.NUM_LATTICE)) * 0.5;

        if (this.props.stone & C.STONE_CHK_EXIST) {
            let src;
            if (this.props.stone & C.STONE_CHK_BLACK) {
                src = C.BLACK_IMG_PATH;
            }
            else {
                src = C.WHITE_IMG_PATH;
            }

            let style;
            if (this.props.stone & C.STONE_CHK_BIG) {
                style = {
                    height: bigStoneSize + 'px',
                    position: 'relative',
                    zIndex: 1
                }
            }
            else {
                style = {
                    height: smallStoneSize + 'px',
                    position: 'relative',
                    zIndex: 1
                }
            }
            return (
                <img src={src} style={style} />
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default StoneDesign;