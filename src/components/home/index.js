import { h, Component } from 'preact';
import style from './style';

import axios from 'axios';
import marked from 'marked';
import Markup from 'preact-markup';

export default class Home extends Component {
	constructor() {
		super();

		this.state = {
			markup: '<p>Loading…</p>'
		};
	}

	componentDidMount() {
		axios.get('/assets/basic-sample.md').then(
			({ data }) => this.setState({ 
				markup: marked(data) 
			})
		);
	}

	render(props, { markup }) {
		return (
			<div class={style.home}>
				<Markup markup={markup} type="html"/>
			</div>
		);
	}
}
