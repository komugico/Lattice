import React, { Component } from 'react';

import { Row, Col, Button } from 'react-bootstrap';

import * as C from '../constants/gameConstant';
import SmallStoneDesign from './smallStoneDesignComponent';
import BigStoneDesign from './bigStoneDesignComponent';

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

    getSmallImgs(num, player) {
        let smallImgs = new Array();
        for (let i = 0; i < num; i++) {
            smallImgs.push(
                <SmallStoneDesign player={player} />
            );
        }
        return smallImgs;
    }

    getBigImgs(num, player) {
        let bigImgs = new Array();
        for (let i = 0; i < num; i++) {
            bigImgs.push(
                <BigStoneDesign player={player} />
            );
        }
        return bigImgs;
    }


    render() {
        let smallImgs = this.getSmallImgs(this.props.numSmall, this.props.player);
        let bigImgs = this.getBigImgs(this.props.numBig, this.props.player);
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
                        disabled={!this.props.isMyTurn}
                        block
                    >Grab<br />Small Stone</Button>
                    <br />
                    {smallImgs}
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Button
                        variant={bigStoneButtonVariant}
                        size="sm"
                        onClick={() => this.handleClickGrabBigStone()}
                        disabled={!this.props.isMyTurn}
                        block
                    >Grab<br />Big Stone</Button>
                    <br />
                    {bigImgs}
                </Col>
            </Row>
        );
    }
}

export default StonePanel;