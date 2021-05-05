import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../modules/game/actions';

import {
    PLAYER_1,
    PLAYER_2
} from '../constants/gameConstant';

import UserPanel from '../components/userPanelComponent';
import BoardPanel from '../components/boardPanelComponent';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        console.dir(props)
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
                                player={PLAYER_1}
                                score={this.props.scores.player1}
                                stones={this.props.stones.player1}
                                isMyTurn={this.props.next === PLAYER_1}
                            />
                        </Col>
                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                            <BoardPanel
                                turn={this.props.turn}
                            />
                            <br />
                            <Button variant="outline-primary" onClick={this.props.progressTurn}>progress</Button>
                            <br />
                            <br />
                            <Button variant="outline-primary" onClick={this.props.resetState}>reset</Button>
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                            <UserPanel
                                playerName="Player 2"
                                player={PLAYER_2}
                                score={this.props.scores.player2}
                                stones={this.props.stones.player2}
                                isMyTurn={this.props.next === PLAYER_2}
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