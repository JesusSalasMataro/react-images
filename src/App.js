import React from 'react';
import './App.css';
import Image from './image.js';

class App extends React.Component {
	
	constructor() {
		super();
		this.state = {
			urlImage: "",
			changeImage: false		
		};
		this.updateUrl = this.updateUrl.bind(this);
		this.updateImage = this.updateImage.bind(this);
	}
	
	updateUrl(event) {
		this.setState({
			urlImage: event.target.value
		});	
	}
	
	updateImage(event) {
		this.setState({
			changeImage: true
		});	
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.changeImage;
	}
	
	componentDidUpdate() {
		this.setState({
			changeImage: false
		});
	}
	
	render() {
   	return (
      	<div className="App">
      		<div className="container">
      			<h4>Some sample images to test with:</h4>      			
      			<p>
      				https://picsum.photos/200/300/?image=1074
      				<br/>
      				https://picsum.photos/200/300/?image=1067
      				<br/>
      				https://picsum.photos/200/300/?image=1051
      			</p>
      		</div>
      		<div className="container">
					<input type="text" className="txtUrlImage" placeholder="Url image..." onBlur={this.updateUrl} />
					<input type="button" value="Change" onClick={this.updateImage}/>
				</div>
				<div className="container">				
					<Image url={this.state.urlImage} />
				</div>
      	</div>
    	);
  	}
}

export default App;
