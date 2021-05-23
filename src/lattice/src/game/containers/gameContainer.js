import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

import * as actions from '../modules/game/actions';
import * as C from '../constants/gameConstant';
import UserPanel from '../components/userPanelComponent';
import BoardPanel from '../components/boardPanelComponent';
import ResetButton from '../components/resetButtonComponent';

class GameContainer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Lattice</Navbar.Brand>
                </Navbar>
                <br />
                <Container fluid>
                    <Row>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                            <UserPanel
                                playerName="Player 1"
                                player={C.PLAYER_1}
                                boardSize={this.props.boardSize}
                                score={this.props.scores.player1}
                                stones={this.props.stones.player1}
                                isMyTurn={this.props.next === C.PLAYER_1}
                                grabbed={this.props.grabbed}
                                actionGrabStone={this.props.grabStone}
                            />
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                            <BoardPanel
                                turn={this.props.turn}
                                board={this.props.board}
                                boardSize={this.props.boardSize}
                                grabbed={this.props.grabbed}
                                actionPutStone={this.props.putStone}
                                actionUpdateBoardSize={this.props.updateBoardSize}
                                actionUpdateScore={this.props.updateScore}
                            />
                            <ResetButton
                                actionResetState={this.props.resetState}
                                actionUpdateBoardSize={this.props.updateBoardSize}
                            />
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                            <UserPanel
                                playerName="Player 2"
                                player={C.PLAYER_2}
                                boardSize={this.props.boardSize}
                                score={this.props.scores.player2}
                                stones={this.props.stones.player2}
                                isMyTurn={this.props.next === C.PLAYER_2}
                                grabbed={this.props.grabbed}
                                actionGrabStone={this.props.grabStone}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(GameContainer);