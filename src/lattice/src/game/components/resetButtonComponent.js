import React, { Component } from 'react';

import { Card, Button } from 'react-bootstrap';

import StonePanel from './stonePanelComponent';

class ResetButton extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.actionResetState()
        this.handleUpdateBoardSize()
    }

    handleUpdateBoardSize() {
        let boardSize = document.getElementById('board-parent').clientWidth * 0.9;
        this.props.actionUpdateBoardSize(boardSize);
    }

    render() {
        return (
            <Button onClick={() => this.handleClick()}>リセット</Button>
        )
    }
}

export default ResetButton