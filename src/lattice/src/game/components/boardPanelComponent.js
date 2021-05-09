import React, { Component } from 'react';

import { Row, Col, Card } from 'react-bootstrap';

import BoardDesign from './boardDesignComponent';

class BoardPanel extends Component {
    constructor(props) {
        super(props);

        window.addEventListener('resize', () => this.handleUpdateBoardSize());
    }

    componentDidMount() {
        this.handleUpdateBoardSize();
    }

    handleUpdateBoardSize() {
        let boardSize = document.getElementById('board-parent').clientWidth * 0.9;
        this.props.actionUpdateBoardSize(boardSize);
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <b>Game Board</b> | Turn {this.props.turn}
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                        <Col id='board-parent' xl={8} lg={8} md={8} sm={8} xs={8}>
                            <BoardDesign
                                board={this.props.board}
                                boardSize={this.props.boardSize}
                                grabbed={this.props.grabbed}
                                actionPutStone={this.props.actionPutStone}
                                actionUpdateScore={this.props.actionUpdateScore}
                            />
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}></Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default BoardPanel;