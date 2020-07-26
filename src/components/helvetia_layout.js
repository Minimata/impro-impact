/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Title from "../components/title"
import content from "../pages-content/helvetia"

import { Hero, ScrollDownIndicator } from "react-landing-page"
import { Parallax } from "react-scroll-parallax"
import { Box, Flex, Text } from "rebass"
import Scroll from "react-scroll-to-element"
import { useColorMode } from "theme-ui"

import { Waypoint } from "react-waypoint"

import {
    halfWidthBreakpoints,
    stackedParallaxedYMargin,
    paddingBreakpoints,
    iconWidthBreakpoints,
    lettersSpacingBreakpoints,
    contentTitleFontSizeBreakpoints,
} from "../helpers/globals"

export const defaultImage = graphql`
    fragment defaultImage on File {
        childImageSharp {
            fluid(maxWidth: 4096) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

const HelvetiaLayout = props => {
    const data = useStaticQuery(graphql`
        query {
            landingImage: file(relativePath: { eq: "26.jpg" }) {
                ...defaultImage
            }
            middleImage: file(relativePath: { eq: "404.jpg" }) {
                ...defaultImage
            }
        }
    `)
    const halfWidthBreakpoints = [1, 1, 1 / 2, 1 / 2, 1 / 2, 1 / 2]
    const stackedParallaxedYMargin = [5, 5, 2, 2, 2, 2]
    const paddingBreakpoints = [2, 2, 3, 4, 4, 5]
    const iconWidthBreakpoints = [
        "2em",
        "2.1em",
        "2.2em",
        "2.3em",
        "2.4em",
        "2.5em",
    ]
    const lettersSpacingBreakpoints = [
        "0.18em",
        "0.19em",
        "0.20em",
        "0.21em",
        "0.22em",
        "0.23em",
    ]

    const setNavbarTransparent = () => {
        props.navbar.current.setTransparent()
    }
    const setNavbarBlur = () => {
        props.navbar.current.setBlur()
    }
    const setNavbarOpaque = () => {
        props.navbar.current.setOpaque()
    }

    const [colorMode, setColorMode] = useColorMode()
    setColorMode("helvetia")

    const TitleLetter = props => (
        <Parallax y={props.parallax}>
            <Box width={iconWidthBreakpoints} m={paddingBreakpoints}>
                <Title
                    {...props}
                    css={{
                        "@keyframes slightRotation": {
                            from: {
                                transform: "rotate(" + props.rotate[0] + "deg)",
                            },
                            to: {
                                transform: "rotate(" + props.rotate[1] + "deg)",
                            },
                        },

                        animationName: "slightRotation",
                        animationDuration: "" + props.duration + "s",
                        animationTimingFunction: "ease-in-out",
                        animationDirection: "alternate",
                        animationIterationCount: "infinite",
                    }}
                >
                    {props.children}
                </Title>
            </Box>
        </Parallax>
    )

    return (
        <>
            <Waypoint
                onEnter={setNavbarTransparent}
                onLeave={setNavbarTransparent}
            />
            <Hero
                bg="rgba(255, 255, 255, 0.6)"
                backgroundImage={data.landingImage.childImageSharp.fluid.src}
            >
                <Title
                    sx={{
                        marginTop: "-280px",
                        textAlign: "center",
                        fontSize: [24, 30, 40, 56, 64, 80],
                        letterSpacing: lettersSpacingBreakpoints,
                    }}
                >
                    HELVETIA
                </Title>

                <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                    width={0.5}
                >
                    <TitleLetter
                        parallax={[0, 15]}
                        rotate={[-7, 7]}
                        duration={6}
                    >
                        2
                    </TitleLetter>
                    <TitleLetter
                        parallax={[0, 33]}
                        rotate={[-7, 7]}
                        duration={4}
                    >
                        0
                    </TitleLetter>
                    <TitleLetter
                        parallax={[0, 51]}
                        rotate={[-7, 7]}
                        duration={7}
                    >
                        5
                    </TitleLetter>
                    <TitleLetter
                        parallax={[0, 81]}
                        rotate={[-7, 7]}
                        duration={5}
                    >
                        0
                    </TitleLetter>
                </Flex>
                <Scroll type="id" element="content">
                    <ScrollDownIndicator />
                </Scroll>
            </Hero>

            <Waypoint onEnter={setNavbarTransparent} />

            <Hero id="content">
                <Flex alignItems="center" flexWrap="wrap" width={1}>
                    <Flex alignItems="center" width={halfWidthBreakpoints}>
                        <Box
                            p={paddingBreakpoints}
                            mx="auto"
                            my={stackedParallaxedYMargin}
                        >
                            <Parallax y={[30, -30]}>
                                <Title width={1}>
                                    {content.paragraph1.title}
                                </Title>
                            </Parallax>
                        </Box>
                    </Flex>
                    <Flex alignItems="center" width={halfWidthBreakpoints}>
                        <Box
                            p={paddingBreakpoints}
                            mx="auto"
                            width={1}
                            sx={{ textAlign: "justify" }}
                        >
                            <Parallax y={[-30, 30]}>
                                {content.paragraph1.content}
                            </Parallax>
                        </Box>
                    </Flex>
                </Flex>
            </Hero>

            <Waypoint onEnter={setNavbarOpaque} />

            <Hero
                bg="rgba(255, 255, 255, 0.5)"
                backgroundImage={data.middleImage.childImageSharp.fluid.src}
            >
                <Title
                    sx={{
                        textAlign: "center",
                        fontSize: [24, 30, 40, 56, 64, 80],
                        letterSpacing: lettersSpacingBreakpoints,
                    }}
                >
                    {content.hero1.title}
                </Title>
            </Hero>

            <Waypoint onEnter={setNavbarTransparent} />

            <Hero>
                <Flex alignItems="center" flexWrap="wrap" width={1}>
                    <Flex alignItems="center" width={halfWidthBreakpoints}>
                        <Box
                            p={paddingBreakpoints}
                            mx="auto"
                            width={1}
                            sx={{ textAlign: "justify" }}
                        >
                            <Parallax y={[-30, 30]}>
                                {content.paragraph2.content}
                            </Parallax>
                        </Box>
                    </Flex>
                    <Flex alignItems="center" width={halfWidthBreakpoints}>
                        <Box
                            p={paddingBreakpoints}
                            mx="auto"
                            my={stackedParallaxedYMargin}
                            sx={{
                                fontSize: contentTitleFontSizeBreakpoints,
                            }}
                        >
                            <Parallax y={[30, -30]}>
                                <Title width={1}>
                                    {content.paragraph2.title}
                                </Title>
                            </Parallax>
                        </Box>
                    </Flex>
                </Flex>
            </Hero>

            <Waypoint onEnter={setNavbarOpaque} />
        </>
    )
}

export default HelvetiaLayout
