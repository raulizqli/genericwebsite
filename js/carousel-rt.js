'use strict';

const e = React.createElement;

class CarouselRT extends React.Component {
  constructor(props) {
    super(props);
		this.carouselMap = [];
		this.carouselEmpty = (
			<div className="carousel-item active">
				<svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
					<rect width="100%" height="100%" fill="#777"></rect>
				</svg>
				<div className="container">
					<div className="carousel-caption text-start">
						<h1>Example headline.</h1>
						<p>Some representative placeholder content for the first slide of the carousel.</p>
						<p><a className="btn btn-lg btn-primary" href="#">Some Action</a></p>
					</div>
				</div>
			</div>);
  }

  render() {
		if ( this.carouselMap.length > 0 ) 
		{
			return this.emptyCarousel;
		}
    return this.carouselEmpty;
  }
}

const domContainer = document.querySelector('#carousel_container');
ReactDOM.render(e(CarouselRT), domContainer);