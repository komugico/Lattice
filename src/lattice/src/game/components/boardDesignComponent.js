import React, { Component } from 'react';

import * as C from '../constants/gameConstant';
import StoneDesign from './stoneDesignComponent';

class BoardDesign extends Component {
    constructor(props) {
        super(props);
    }

    tableSmallStone(eventEnable, cellWidth) {
        let trs = []
        for (let y_idx = 0; y_idx < C.NUM_LATTICE; y_idx++) {
            trs.push(this.trSmallStone(y_idx, eventEnable, cellWidth));
        }
        let style = {
            position: 'absolute',
            left: 0,
            top: 0
        }
        return (
            <table style={style}>
                <tbody>
                    {trs}
                </tbody>
            </table>
        );
    }

    trSmallStone(y, eventEnable, cellWidth) {
        let tds = []
        for (let x_idx = 0; x_idx < C.NUM_LATTICE; x_idx++) {
            tds.push(this.tdSmallStone(x_idx, y, eventEnable, cellWidth));
        }
        return (
            <tr>
                {tds}
            </tr>
        )
    }

    tdSmallStone(x, y, eventEnable, cellWidth) {
        let style = {
            width: cellWidth + 'px',
            height: cellWidth + 'px',
            border: 'none',
            textAlign: 'center',
            pointerEvents: eventEnable ? 'auto' : 'none'
        }
        return (
            <td
                id={this.idSmallStone(x, y)}
                onMouseEnter={() => this.handleMouseEnterSmallStone(x, y)}
                onMouseLeave={() => this.handleMouseLeaveSmallStone(x, y)}
                onClick={() => this.handleClickStone(x, y)}
                style={style}
            >
                <StoneDesign
                    boardSize={this.props.boardSize}
                    stone={this.props.board.lattice[y][x]}
                />
            </td>
        )
    }

    idSmallStone(x, y) {
        let id = "td-small-x" + x + "-y" + y;
        return id;
    }

    tableBigStone(eventEnable, cellWidth) {
        let trs = []
        for (let y_idx = 0; y_idx < (C.NUM_LATTICE - 1); y_idx++) {
            trs.push(this.trBigStone(y_idx, eventEnable, cellWidth));
        }
        let style = {
            position: 'absolute',
            left: cellWidth / 2,
            top: cellWidth / 2
        }
        return (
            <table style={style}>
                <tbody>
                    {trs}
                </tbody>
            </table>
        );
    }

    trBigStone(y, eventEnable, cellWidth) {
        let tds = []
        for (let x_idx = 0; x_idx < (C.NUM_LATTICE - 1); x_idx++) {
            tds.push(this.tdBigStone(x_idx, y, eventEnable, cellWidth));
        }
        return (
            <tr>
                {tds}
            </tr>
        )
    }

    tdBigStone(x, y, eventEnable, cellWidth) {
        let style = {
            width: cellWidth + 'px',
            height: cellWidth + 'px',
            border: 'solid 1px',
            textAlign: 'center',
            pointerEvents: eventEnable ? 'auto' : 'none'
        }
        return (
            <td
                id={this.idBigStone(x, y)}
                onMouseEnter={() => this.handleMouseEnterBigStone(x, y)}
                onMouseLeave={() => this.handleMouseLeaveBigStone(x, y)}
                onClick={() => this.handleClickStone(x, y)}
                style={style}
            >
            <StoneDesign
                boardSize={this.props.boardSize}
                stone={this.props.board.block[y][x]}
            />
            </td>
        )
    }

    idBigStone(x, y) {
        let id = "td-big-x" + x + "-y" + y;
        return id;
    }

    handleMouseEnterSmallStone(x, y) {
        let td = document.getElementById(this.idSmallStone(x, y));
        td.style.background = '#ff0000';
    }

    handleMouseLeaveSmallStone(x, y) {
        let td = document.getElementById(this.idSmallStone(x, y));
        td.style.background = '';
    }

    handleMouseEnterBigStone(x, y) {
        let td = document.getElementById(this.idBigStone(x, y));
        td.style.background = '#00ff00';
    }

    handleMouseLeaveBigStone(x, y) {
        let td = document.getElementById(this.idBigStone(x, y));
        td.style.background = '';
    }

    handleClickStone(x, y) {
        this.props.actionPutStone({ x: x, y: y });
    }

    render() {
        let cellWidth = Math.floor(this.props.boardSize / (C.NUM_LATTICE));

        if (this.props.grabbed & C.STONE_CHK_EXIST) {
            if (this.props.grabbed & C.STONE_CHK_BIG) {
                return (
                    <div style={{position: 'relative', paddingTop: '100%'}}>
                        {this.tableSmallStone(false, cellWidth)}
                        {this.tableBigStone(true, cellWidth)}
                    </div>
                )
            } else {
                return (
                    <div style={{position: 'relative', paddingTop: '100%'}}>
                        {this.tableBigStone(false, cellWidth)}
                        {this.tableSmallStone(true, cellWidth)}
                    </div>
                )
            }
        } else {
            return (
                <div style={{position: 'relative', paddingTop: '100%'}}>
                    {this.tableBigStone(false, cellWidth)}
                    {this.tableSmallStone(false, cellWidth)}
                </div>
            )
        }
    }
}

export default BoardDesign;