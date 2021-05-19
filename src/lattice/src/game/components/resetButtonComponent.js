import React, { Component } from 'react';

import { Card, Button } from 'react-bootstrap';

import StonePanel from './stonePanelComponent';

class ResetButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button>リセット</Button>
        )
    }
}

export default ResetButton