import React, { Component } from 'react';

import { Card } from 'react-bootstrap';

class BoardPanel extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <Card.Header>
                    <b>Game Board</b> | Turn {this.props.turn}
                </Card.Header>
                <Card.Body>
                </Card.Body>
            </Card>
        );
    }
}

export default BoardPanel;