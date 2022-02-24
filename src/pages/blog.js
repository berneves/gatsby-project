/* import * as React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
            query MyQuery {
            allFile {
              nodes {
                name
              }
            }
          }`
        )
  return (
    <div>
        <Layout pageTitle="My Blog Posts">
        <p>My cool posts will go in here</p>
        </Layout>
        <ul>
            {
                data.allFile.nodes.map(build =>
                    <li key = {build.name}>{build.name}</li>
                    )
            }
        </ul>
    </div>  
  )
}
export default BlogPage */

import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({data}) => {
  return (
    <div>
        <Layout pageTitle="My Blog Posts">
        <p>My cool posts will go in here</p>
        </Layout>
        <ul>
            {
                data.allFile.nodes.map(build =>
                    <li key = {build.name}>{build.name}</li>
                    )
            }
        </ul>
    </div>  
  )
}

export const query = graphql`
query MyQuery {
allFile {
  nodes {
    name
  }
}
}`
export default BlogPage