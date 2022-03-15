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
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {mdx} from "../components/my-components.module.css"

const BlogPage = ({data}) => {
  return (
    <div>
        <Layout pageTitle="My Blog Posts">
        <p>My cool posts will go in here</p>
            {
              data.allMdx.nodes.map((node) => (
                <article key = {node.id}>
                  <p>{node.frontmatter.title}</p>
                  <p>Olá</p>
                  <p>{node.frontmatter.date}</p>
                  <p>body below</p>
                  <div className = {mdx}>
                    <MDXRenderer>{node.body}</MDXRenderer>
                  </div>
                </article>
              ))
            }
        </Layout>
    </div>  
  )
}

export const query = graphql`
query MyQuery {
  allMdx (sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      body
    }
  }
}`
export default BlogPage