import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import {graphqltitle} from '../components/my-components.module.css'

const CompTest = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
                }
            }
        }`
    )
    console.log(data)
    return (
        <div> 
            <title> {data.site.siteMetadata.title} </title>
            <h1 className={graphqltitle}>
                {data.site.siteMetadata.title}
            </h1>
        </div>
    )
}

export default CompTest