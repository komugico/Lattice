import React, { Component } from 'react';

import { Row, Col, Button } from 'react-bootstrap';

import SmallStoneDesign from './smallStoneDesignComponent';
import BigStoneDesign from './bigStoneDesignComponent';

class StonePanel extends Component {
    constructor(props) {
        super(props);
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

        return (
            <Row>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Button variant="outline-primary" size="sm" block>Grab<br />Small Stone</Button>
                    <br />
                    {smallImgs}
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                    <Button variant="outline-primary" size="sm" block>Grab<br />Big Stone</Button>
                    <br />
                    {bigImgs}
                </Col>
            </Row>
        );
    }
}

export default StonePanel;