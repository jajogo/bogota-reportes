import React from 'react'
import Danos from './tipos/Danos'
import { Link } from 'react-router-dom'
const ReportList = ({projects1}) => {

    return (
        <div>
            {projects1 && projects1.map(project1 =>{
                return(
                    <Link to={'/reporte/' + project1.id} key={project1.id}>
                        <Danos project1={project1} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ReportList
