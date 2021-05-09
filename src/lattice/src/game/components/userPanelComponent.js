import React, { Component } from 'react';

import { Card, Button } from 'react-bootstrap';

import StonePanel from './stonePanelComponent';

class UserPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card border={this.props.isMyTurn && "success"}>
                <Card.Header>
                    <b>{this.props.playerName}</b>
                    <i>{this.props.isMyTurn && " It's your turn."}</i>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Score</Card.Title>
                    {this.props.score} Victory Points
                    <hr />
                    <Card.Title>Operations</Card.Title>
                    <Button
                        variant="outline-danger"
                        disabled={!this.props.isMyTurn}
                    >Surrender</Button>
                    <hr />
                    <Card.Title>Stones</Card.Title>
                    <StonePanel
                        isMyTurn={this.props.isMyTurn}
                        numSmall={this.props.stones.small}
                        numBig={this.props.stones.big}
                        boardSize={this.props.boardSize}
                        player={this.props.player}
                        actionGrabStone={this.props.actionGrabStone}
                        grabbed={this.props.grabbed}
                    />
                </Card.Body>
            </Card>
        );
    }
}

export default UserPanel;