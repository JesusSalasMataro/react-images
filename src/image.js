import React from 'react';

class Image extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			urlImage: this.props.url		
		};
	}
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			urlImage: nextProps.url
		});	
	}
	
	render() {
		return (
			<img src={this.state.urlImage} alt="" />
		);	
	}
}

export default Image;