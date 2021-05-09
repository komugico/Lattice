import React, { Component } from 'react';

import { Row, Col, Button } from 'react-bootstrap';

import * as C from '../constants/gameConstant';
import StoneDesign from './stoneDesignComponent';

class StonePanel extends Component {
    constructor(props) {
        super(props);
    }

    handleClickGrabSmallStone() {
        if (this.props.player === C.PLAYER_1) {
            this.props.actionGrabStone(C.STONE_SMALL_WHITE);
        }
        else {
            this.props.actionGrabStone(C.STONE_SMALL_BLACK);
        }
    }

    handleClickGrabBigStone() {
        if (this.props.player === C.PLAYER_1) {
            this.props.actionGrabStone(C.STONE_BIG_WHITE);
        }
        else {
            this.props.actionGrabStone(C.STONE_BIG_BLACK);
        }
    }

    smallStones() {
        let stones = new Array();
        for (let i = 0; i < this.props.numSmall; i++) {
            if (this.props.player === C.PLAYER_1) {
                stones.push(
                    <StoneDesign
                        boardSize={this.props.boardSize}
                        stone={C.STONE_SMALL_WHITE}
                    />);
            }
            else {
                stones.push(
                    <StoneDesign
                        boardSize={this.props.boardSize}
                        stone={C.STONE_SMALL_BLACK}
                    />);
            }
        }
        return stones;
    }

    bigStones() {
        let stones = new Array();
        for (let i = 0; i < this.props.numBig; i++) {
            if (this.props.player === C.PLAYER_1) {
                stones.push(
                    <StoneDesign
                        boardSize={this.props.boardSize}
                        stone={C.STONE_BIG_WHITE}
                    />);
            }
            else {
                stones.push(
                    <StoneDesign
                        boardSize={this.props.boardSize}
                        stone={C.STONE_BIG_BLACK}
                    />);
            }
        }
        return stones;
    }

    render() {
        let smallStoneButtonVariant = "outline-primary";
        if (this.props.isMyTurn
            && (this.props.grabbed & C.STONE_CHK_EXIST)
            && !(this.props.grabbed & C.STONE_CHK_BIG)) {
                smallStoneButtonVariant = "primary"
        }
        let bigStoneButtonVariant = "outline-primary";
        if (this.props.isMyTurn
            && (this.props.grabbed & C.STONE_CHK_EXIST)
            && (this.props.grabbed & C.STONE_CHK_BIG)) {
                bigStoneButtonVariant = "primary"
        }

        return (
            <Row>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Button
                        variant={smallStoneButtonVariant}
                        size="sm"
                        onClick={() => this.handleClickGrabSmallStone()}
                        disabled={!this.props.isMyTurn || !this.props.numSmall}
                        block
                    >Grab<br />Small Stone</Button>
                    <br />
                    {this.smallStones()}
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Button
                        variant={bigStoneButtonVariant}
                        size="sm"
                        onClick={() => this.handleClickGrabBigStone()}
                        disabled={!this.props.isMyTurn || !this.props.numBig}
                        block
                    >Grab<br />Big Stone</Button>
                    <br />
                    {this.bigStones()}
                </Col>
            </Row>
        );
    }
}

export default StonePanel;