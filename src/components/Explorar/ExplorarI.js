import React, { Component } from 'react'
import { noticias,titles } from './data_explorar.json'

class ExplorarI extends Component {
    constructor(){
        super();
        this.state = {
            noticias
        }
    }
    render(){
        const noticias = this.state.noticias.map((key,i) =>{
            if (i % 2 === 0) {
                return false;
              } else {
                return (
                    <div className="top ">
                        <h3> {key.title} </h3>
                    </div>
                )
              }
        })
        return (
            <div className="section_exp1">
                
                <div className="row">
                    <div className="mid">
                        <div className="row mid1" style={{ marginBottom: 20 + 'px' }}>
                            <div className="mid1_1 col-md-4 col-sm-12">
                                <img src="img/transmi.PNG" alt="" />
                            </div>
                            <div className="mid1_2 col-md-8 col-sm-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3>Puerta Dañada</h3>
                                        <p>por: Juan Perez Pepitoño</p>
                                    </div>
                                    <div className="col-md-12 letras">
                                        <blockquote>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Blanditiis pariatur reiciendis distinctio laudantium
                                            corporis beatae molestiae nihil molestias fugiat quae harum
                                            saepe animi maxime nostrum deserunt vero, dolorem facere
                                            qui, dicta odit quam consequatur doloribus accusantium?
                                            Quaerat mollitia animi suscipit odit officiis voluptatem,
                                            minima quasi, corrupti fugit placeat nobis harum iste
                                            impedit, illo commodi! Alias sit itaque quisquam at ea.
                                            Laborum qui possimus quam, ut facilis quibusdam sequi
                                            debitis modi perspiciatis aliquam reiciendis sunt temporibus
                                            sapiente, itaque vero voluptatem dolorum sed rem velit
                                            dolorem porro. Ullam commodi accusamus soluta rerum hic id
                                            eligendi error ea sequi voluptatibus, ipsam deserunt, vitae
                                            nulla, voluptatem voluptatum facere nostrum. Iste natus
                                            alias aut voluptatum eligendi rerum temporibus laboriosam
                                            architecto ut porro molestias voluptatem voluptatibus ea
                                            delectus maxime, eaque accusantium. Nam hic asperiores quod
                                            quisquam vitae voluptates nisi deleniti ut repudiandae
                                            obcaecati consequatur facilis eveniet eos, nulla magni, in
                                            minima! Iure corrupti consequatur delectus ex!
                  </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mid1" style={{ marginBottom: 20 + 'px' }}>
                            <div className="mid1_1 col-md-4 col-sm-12">
                                <img src="img/transmi.PNG" alt="" />
                            </div>
                            <div className="mid1_2 col-md-8 col-sm-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3>Puerta Dañada</h3>
                                        <p>por: Juan Perez Pepitoño</p>
                                    </div>
                                    <div className="col-md-12 letras">
                                        <blockquote>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Blanditiis pariatur reiciendis distinctio laudantium
                                            corporis beatae molestiae nihil molestias fugiat quae harum
                                            saepe animi maxime nostrum deserunt vero, dolorem facere
                                            qui, dicta odit quam consequatur doloribus accusantium?
                                            Quaerat mollitia animi suscipit odit officiis voluptatem,
                                            minima quasi, corrupti fugit placeat nobis harum iste
                                            impedit, illo commodi! Alias sit itaque quisquam at ea.
                                            Laborum qui possimus quam, ut facilis quibusdam sequi
                                            debitis modi perspiciatis aliquam reiciendis sunt temporibus
                                            sapiente, itaque vero voluptatem dolorum sed rem velit
                                            dolorem porro. Ullam commodi accusamus soluta rerum hic id
                                            eligendi error ea sequi voluptatibus, ipsam deserunt, vitae
                                            nulla, voluptatem voluptatum facere nostrum. Iste natus
                                            alias aut voluptatum eligendi rerum temporibus laboriosam
                                            architecto ut porro molestias voluptatem voluptatibus ea
                                            delectus maxime, eaque accusantium. Nam hic asperiores quod
                                            quisquam vitae voluptates nisi deleniti ut repudiandae
                                            obcaecati consequatur facilis eveniet eos, nulla magni, in
                                            minima! Iure corrupti consequatur delectus ex!
                  </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExplorarI
