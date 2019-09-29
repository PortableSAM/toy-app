import React from 'react';

class App extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	};
	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 6000);
	}
	//componentDidMount에서 Data fetch
	//API로 부터 data fetching리 완료되면 'We are ready?'대신 Movie를 render하고
	//map을 만들고 Movie를 render
	render() {
		const { isLoading } = this.state;
		return <div>{isLoading ? 'Loading...' : 'We are ready?'}</div>;
	}
}

export default App;
