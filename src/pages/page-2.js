import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import picto from "../images/gatsby-icon.png"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi, welcome to the fun page</h1>
    <p>Welcome to page 2</p>
	<div className="card-body">
		<img src={ picto } className="pic"/>
		<div className="card-text">
			<h4 styles={{ display: "block" }}>Testing zone</h4>
			<h5>ANother testing zone</h5>
		</div>
	</div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
