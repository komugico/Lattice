import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../modules/game/actions'

class GameContainer extends Component {
    constructor(props) {
        super(props);
        console.dir(props)
    }
    
    render() {
        return (
            <div>
                <p>lattice[0][0] is {this.props.board.lattice[0][0]}</p>
                <p>block[0][0] is {this.props.board.block[0][0]}</p>
                <p>stones.player1.small is {this.props.stones.player1.small}</p>
                <p>stones.player1.big is {this.props.stones.player1.big}</p>
                <p>scores.player1 is {this.props.scores.player1}</p>
                <p>Turn is {this.props.turn}</p>
                <p>Next Player is {this.props.next}</p>
                <p>Grabbed is {this.props.grabbed}</p>
                <button onClick={this.props.progressTurn}>progress</button>
                <button onClick={this.props.resetState}>reset</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(GameContainer);