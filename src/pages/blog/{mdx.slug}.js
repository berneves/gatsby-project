import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const BlogPost = ({data, ...rest}) => {
  console.log(data)
  console.log(rest)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx (id: {eq: $id}) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
    body
    }
}`
export default BlogPost