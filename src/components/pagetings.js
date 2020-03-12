import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import "./pageting.css"




const Tings = () => {

	const test = useStaticQuery(graphql`
	query {
		allMarkdownRemark{
			edges {
				node {
					id
					frontmatter {
						name
						image
						url
						youtube
						twitter
					}
				}
			}
		}
	}
`)

console.log(test)

	return(
		<div className="card-outline">
			{test.allMarkdownRemark.edges.map((edge) => {
				return (
					<div className="gat">
						<h1>{ edge.node.frontmatter.name }</h1>
						<img alt="testing Dragon" src={ edge.node.frontmatter.image } />
						<Link to = { edge.node.frontmatter.url }>URL</Link>
						<Link to = { edge.node.frontmatter.youtube }>youtube</Link>
						<Link to = { edge.node.frontmatter.twitter }>Twitter</Link>
					</div>
					
				)
			})
			
			}

			
		</div>
	)
}

export default Tings