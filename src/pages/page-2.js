// import React from "react"
// import { Link } from "gatsby"
// import { graphql } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import picto from "../images/gatsby-icon.png"

// export default function SecondPage({
// 	data,
// }) {
// 	const { markdownRemark } = data // data.markdownRemark holds your post data
// 	const { frontmatter, html } = markdownRemark
// 	return (
// 		<Layout>
// 		<SEO title="Page two" />
// 		<h1>Hi, welcome to the fun page</h1>
// 		<p>Welcome to page 2</p>
// 		<div className="card-body">
// 			<img src={ picto } className="pic"/>

// 			<div className="card-text">
// 				<h4 styles={{ display: "block" }}>{ frontmatter.title }</h4>
// 				<h5>{ frontmatter.date }</h5>
// 				dangerouslySetInnerHTML={{ __html: html }}
// 			</div>
// 		</div>
	
// 		<Link to="/">Go back to the homepage</Link>
// 	  </Layout>
// 	)
// }


// export const test = graphql`
//   query($path: String!) {
//     allMarkdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `
