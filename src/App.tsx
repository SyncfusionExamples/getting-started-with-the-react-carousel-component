import React from 'react';
import './App.css';
import {CarouselComponent, CarouselItemsDirective, CarouselItemDirective} from '@syncfusion/ej2-react-navigations';
import {productDetails} from './data';
function App() {
  const slide1Template=()=>(
    <figure className='img-container'>
      <img src='https://ej2.syncfusion.com/react/demos/src/carousel/images/bridge.jpg'
        alt='bridge' style={{height: "100%", width: "100%"}} />
      <figcaption className='img-caption'>Golden Gate Bridge, San Francisco</figcaption>
    </figure>
  );
  const slide2Template=()=>(
	  <figure className="img-container">
		<img src="https://ej2.syncfusion.com/react/demos/src/carousel/images/trees.jpg" alt="spring_trees" style={{ height: "100%", width: "100% " }}/>
		<figcaption className="img-caption">Spring Flower Trees</figcaption>
	  </figure>
	);
  
  const slide3Template=()=>(
    <figure className="img-container">
      <img src="https://ej2.syncfusion.com/react/demos/src/carousel/images/waterfall.jpg" alt="waterfall" style={{ height: "100%", width: "100% " }}/>
      <figcaption className="img-caption">Oddadalen Waterfalls, Norway</figcaption>
    </figure>
  );
  const slide4Template=()=>(
    <figure className="img-container">
      <img src="https://ej2.syncfusion.com/react/demos/src/carousel/images/sea.jpg" alt="sea" style={{ height: "100%", width: "100% " }}/>
      <figcaption className="img-caption">Anse Source d'Argent, Seychelles</figcaption>
    </figure>
  );
  const slide5Template=()=>(
      <figure className="img-container">
      <img src="https://ej2.syncfusion.com/react/demos/src/carousel/images/rocks.jpeg" alt="rocks" style={{ height: "100%", width: "100% " }}/>
      <figcaption className="img-caption">Stonehenge, England</figcaption>
    </figure>
  );
  const productTemplate=(props:any)=>(
    <div>
      <img src={props.ImgPath} alt={props.Title} style={{height: "210px", width: "100%"}}/>
      <div className='card-body'>
        <h5 className='card-title'>{props.Title}</h5>
        <p className='card-text'>{props.Content}</p>
      </div>
    </div>
  );
  return (
    <div className="App">
      <div className='carousel-sample'>
        <CarouselComponent cssClass='default-carousel'
          buttonsVisibility="VisibleOnHover"
          showIndicators={false}>
          <CarouselItemsDirective>
            <CarouselItemDirective template={slide1Template}></CarouselItemDirective>
            <CarouselItemDirective template={slide2Template}></CarouselItemDirective>
            <CarouselItemDirective template={slide3Template}></CarouselItemDirective>
            <CarouselItemDirective template={slide4Template}></CarouselItemDirective>
            <CarouselItemDirective template={slide5Template}></CarouselItemDirective>
          </CarouselItemsDirective>
        </CarouselComponent>
      </div>
      <div className='carousel-sample2'>
        <CarouselComponent cssClass='db-carousel'
          dataSource={productDetails} buttonsVisibility="Hidden"
          itemTemplate={productTemplate}></CarouselComponent>
      </div>
    </div>

  );
}

export default App;
