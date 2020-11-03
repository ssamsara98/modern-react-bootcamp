import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class CoinContainer extends Component {
	static defaultProps = {
		coins: [
			{
				side: 'heads',
				imgSrc:
					'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg',
			},
			{
				side: 'tails',
				imgSrc:
					'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=1fa0ce4fdc75fbc96381ef845a3db4bc679ae0c5-1604397117-0-AaOEJECibF1rncmCJogu_Gpi8IGDruKQh0GulF71F0djy_VZbzbgWDty2ve-SHqbqFfEA2aCl-EYPySlHs4_HdoOdcdhKk_2CW9T6fprRwUsZBpjvlbJ1u3oQu17L5V3h5SYkws7VoKdzBijHh_HGnyT2AZ85Jy2tZQC3AFnVXKmZe6kpTAfr0cSB_ZurSPGtoOideokjbDYeV65QknG_rvbX5kc6XJ-v2oUPsn6xzDlHgWk-cnAZbyMwGMui9CKxfDqW1n8ATbpRNplWOY5f1VpeeNouUNlWTB5rpbq3Ja0SnPml0kXNc09WgiXRmYlmg',
			},
		],
	};
	constructor(props) {
		super(props);
		this.state = {
			currCoin: null,
			nFlips: 0,
			nHeads: 0,
			nTails: 0,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	flipCoin() {
		const newCoin = choice(this.props.coins);
		this.setState((st) => {
			return {
				currCoin: newCoin,
				nFlips: st.nFlips + 1,
				nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
				nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0),
			};
		});
	}
	handleClick(e) {
		this.flipCoin();
	}
	render() {
		return (
			<div className="CoinContainer">
				<h2>Let's Flip A Coin!</h2>
				{this.state.currCoin && <Coin info={this.state.currCoin} />}
				<button onClick={this.handleClick}>Flip Me!</button>
				<p>
					Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and{' '}
					{this.state.nTails} tails.
				</p>
			</div>
		);
	}
}

export default CoinContainer;
