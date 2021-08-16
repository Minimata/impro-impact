import React from "react"

import BaseLayout from "../layouts/base_layout"
import CVLayout from "../layouts/cv_layout"
import PropTypes from "prop-types"
import content from "../pages-content/lygiaAurelia"

import { useStaticQuery, graphql } from "gatsby"

export const defaultImage = graphql`
    fragment defaultImage on File {
        childImageSharp {
            fluid(maxWidth: 4096) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

const Index = () => {
    const data = useStaticQuery(graphql`
        query {
            background: file(
                relativePath: { eq: "genre/people/aurelygia.jpg" }
            ) {
                ...defaultImage
            }
        }
    `)
    return (
        <BaseLayout>
            <CVLayout
                image={data.background.childImageSharp.fluid.src}
                title={content.title}
                content={content.content}
            />
        </BaseLayout>
    )
}

Index.propTypes = {
    children: PropTypes.any,
}

export default Index
