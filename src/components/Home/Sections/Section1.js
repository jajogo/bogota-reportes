import React from 'react'
import slide1 from '../../../img/Slider1.jpg'
import slide2 from '../../../img/Slider2.jpg'
import slide3 from '../../../img/Slider3.jpg'
import slide4 from '../../../img/Slider4.jpg'

function Section1() {
    return (
        <div className="section1">
        <div className="container-fluid">
            <div id="transmi" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#transmi" data-slide-to="0" className="active"></li>
                    <li data-target="#transmi" data-slide-to="1"></li>
                    <li data-target="#transmi" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={slide1} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slide2} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slide3} alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slide4} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#transmi" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#transmi" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Section1
