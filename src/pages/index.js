import * as React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import {title} from "../components/my-components.module.css"


  const TestProp = (props) => {
    return (
      <div>
        <h1 className = {title}>{props.name}</h1>
        <h2>{props.age}</h2>
      </div>
    )
  }

  const IndexPage = () => {
      return (
        <main>
          {/* <title>Home Page</title>
          <h1>Welcome to my Gatsby site!</h1>
          <TestProp name= "Be" age = "13"></TestProp>
          <Link to = "/about"> Link </Link>
          <p>I'm making this by following the Gatsby Tutorial.</p>  */}
          <Layout pageTitle="Bernardo learning Gatsby">
            <p>Testing this children thing</p>
            <p>Teste son</p>
          </Layout>
          <TestProp name= "Be"></TestProp>
        </main>
      )
    }
export default IndexPage
