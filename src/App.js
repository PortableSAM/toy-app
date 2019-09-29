import React from 'react';
import axios from 'axios';

class App extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	};
	/* async를 써야 await를 사용 할 수 있음. */
	getMovies = async () => {
		const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
	};
	componentDidMount() {
		this.getMovies();
	}
	render() {
		const { isLoading } = this.state;
		return <div>{isLoading ? 'Loading...' : 'We are ready?'}</div>;
	}
}

export default App;
