import React, { Component } from 'react';

import * as C from '../constants/gameConstant';

class BoardDesign extends Component {
    constructor(props) {
        super(props);

        this.width = 0;
        this.cellWidth = 0;
        this.state = {
            style1: {
                position: 'relative',
                paddingTop: '100%',
                visibility: 'hidden'
            }
        }
        window.addEventListener(
            'resize',
            () => this.resize()
        );
        setTimeout(
            () => this.resize(),
            10
        )
        setTimeout(
            () => this.visible(),
            20
        )
    }

    tableSmallStone(eventEnable) {
        let trs = []
        for (let y_idx = 0; y_idx < C.NUM_LATTICE; y_idx++) {
            trs.push(this.trSmallStone(y_idx, eventEnable));
        }
        let style = {
            position: 'absolute',
            left: 0,
            top: 0,
            border: 'none'
        }
        return (
            <table style={style}>
                <tbody>
                    {trs}
                </tbody>
            </table>
        );
    }

    trSmallStone(y, eventEnable) {
        let tds = []
        for (let x_idx = 0; x_idx < C.NUM_LATTICE; x_idx++) {
            tds.push(this.tdSmallStone(x_idx, y, eventEnable));
        }
        return (
            <tr>
                {tds}
            </tr>
        )
    }

    tdSmallStone(x, y, eventEnable) {
        let style = {
            width: this.cellWidth + 'px',
            height: this.cellWidth + 'px',
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
            {this.props.board.lattice[y][x]}
            </td>
        )
    }

    idSmallStone(x, y) {
        let id = "td-small-x" + x + "-y" + y;
        return id;
    }

    tableBigStone(eventEnable) {
        let trs = []
        for (let y_idx = 0; y_idx < (C.NUM_LATTICE - 1); y_idx++) {
            trs.push(this.trBigStone(y_idx, eventEnable));
        }
        let style = {
            position: 'absolute',
            left: this.cellWidth / 2,
            top: this.cellWidth / 2,
            border: 'none'
        }
        return (
            <table style={style}>
                <tbody>
                    {trs}
                </tbody>
            </table>
        );
    }

    trBigStone(y, eventEnable) {
        let tds = []
        for (let x_idx = 0; x_idx < (C.NUM_LATTICE - 1); x_idx++) {
            tds.push(this.tdBigStone(x_idx, y, eventEnable));
        }
        return (
            <tr>
                {tds}
            </tr>
        )
    }

    tdBigStone(x, y, eventEnable) {
        let style = {
            width: this.cellWidth + 'px',
            height: this.cellWidth + 'px',
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
            {this.props.board.block[y][x]}
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
        this.props.actionPutStone({
            x: x,
            y: y
        });
    }

    resize() {
        if (document.getElementById('board-parent')) {
            this.width = document.getElementById('board-parent').clientWidth * 0.9;
            this.cellWidth = Math.floor(this.width / (C.NUM_LATTICE));
        }
    }

    visible() {
        this.setState({
            style1: {
                position: 'relative',
                paddingTop: '100%',
                visibility: 'visible'
            }
        })
    }

    render() {
        if (this.props.grabbed & C.STONE_CHK_EXIST) {
            if (this.props.grabbed & C.STONE_CHK_BIG) {
                return (
                    <div style={this.state.style1}>
                        {this.tableSmallStone(false)}
                        {this.tableBigStone(true)}
                    </div>
                )
            } else {
                return (
                    <div style={this.state.style1}>
                        {this.tableBigStone(false)}
                        {this.tableSmallStone(true)}
                    </div>
                )
            }
        } else {
            return (
                <div style={this.state.style1}>
                    {this.tableBigStone(false)}
                    {this.tableSmallStone(false)}
                </div>
            )
        }
    }
}

export default BoardDesign;