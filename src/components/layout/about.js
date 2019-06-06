import React, { Component } from 'react'
import { ParallaxProvider, Parallax } from 'react-skrollr'

class about extends React.Component {
    render() {
        return(
        <ParallaxProvider>
            <section className="box-section3 sect_1" data-_hw="top:0%;" data-_hw2="top:0%" data-_hw3="top:-100%">
                <img src={require('../../img/scroll/Hola.png')} data-_hw="bottom:-100%;" data-_hw2="bottom:0%;" className="img1"/>
                <img src={require('../../img/scroll/sobre volador.png')} data-_hw="bottom:-100%;" data-_hw2-20p="bottom:0%;" className="img1"/>
            </section>

            <section className="box-section3 sect_2" data-_hw2="top:100%;" data-_hw3="top:0%" data-_hw4="top:0%" data-_hw5="top:-100%">
                <img src={require('../../img/scroll/nube.png')} data-_hw2="bottom:-100%;" data-_hw3="bottom:0%;" className="nubes"/>
                <img src={require('../../img/scroll/transmi volador.png')} data-_hw2-5="bottom:-100%;" data-_hw3-5="bottom:0%;" className="img1"/>
                <img src={require('../../img/scroll/Por eso queremos.png')} data-_hw2-15p="bottom:-100%;" data-_hw3-15p="bottom:0%;" className="img1"/>
            </section>

            <section className="box-section3 sect_3" data-_hw4="top:100%;" data-_hw5="top:0%" data-_hw6="top:0%" data-_hw7="top:-100%">
                <img src={require('../../img/scroll/nube.png')} data-_hw4="bottom:-100%;" data-_hw5="bottom:0%;" className="nubes"/>
                <img src={require('../../img/scroll/Globo.png')} data-_hw4-5="bottom:-100%;" data-_hw5-5="bottom:0%;" className="img1" />
                <img src={require('../../img/scroll/Globo estrella.png')} data-_hw4-15p="bottom:-100%;" data-_hw5-15p="bottom:0%;" className="img1"/>
            </section>
        
            <section className="box-section3 sect_4" data-_hw6="top:100%;" data-_hw7="top:0%" data-_hw8="top:0%" data-_hw9="top:0%">
                <img src={require('../../img/scroll/Sol contamos con tigo.png')} data-_hw6="bottom:-100%;" data-_hw8="bottom:0%;" className="nubes"/>
                <a to="/" className="volver_home" data-_hw8="top:100%;" data-_hw9="top:40%;">Volver Al Home</a>
            </section>

        </ParallaxProvider>
        )
    }
}

export default about