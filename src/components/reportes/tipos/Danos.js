import React from 'react'

const Danos = ({project1}) => {
    return (
        <div className="section_exp1">
            <div className="top">
                <h3>{project1.selection}</h3>
            </div>
            <div className="row">
                <div className="mid">
                    <div className="row mid1" style={{ marginBottom: 20 + 'px' }}>
                        <div className="mid1_1 col-md-4 col-sm-12">
                            <img src={project1.image} alt="" />
                        </div>
                        <div className="mid1_2 col-md-8 col-sm-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>{project1.title}</h3>
                                    <p>{project1.author}</p>
                                </div>
                                <div className="col-md-12 letras">
                                    <blockquote>{project1.content}</blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Danos