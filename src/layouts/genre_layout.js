/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useRef } from "react"

import { useStaticQuery, graphql } from "gatsby"

import Title from "../components/title"
import Link from "../components/custom_link"
import content from "../pages-content/genre"
import TeamMember from "../components/team_member"
import InfoBanner from "../components/info_banner"
import SponsorBanner from "../components/sponsor_banner"

import { Hero, ScrollDownIndicator } from "react-landing-page"
import { Parallax } from "react-scroll-parallax"
import { Box, Flex, Text } from "rebass"
import { useColorMode } from "theme-ui"

import { contentTitleFontSizeBreakpoints } from "../helpers/globals"

import { Waypoint } from "react-waypoint"

export const defaultImage = graphql`
    fragment defaultImage on File {
        childImageSharp {
            fluid(maxWidth: 4096) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

const GenreLayout = props => {
    const data = useStaticQuery(graphql`
        query {
            landingImage: file(
                relativePath: { eq: "genre/backgrounds/genre.jpg" }
            ) {
                ...defaultImage
            }
            middleImage: file(
                relativePath: { eq: "genre/backgrounds/genre_poing.jpg" }
            ) {
                ...defaultImage
            }

            lygiaPavitt: file(
                relativePath: { eq: "genre/people/lygiaPavitt.JPG" }
            ) {
                ...defaultImage
            }
            aureliaPlaton: file(
                relativePath: { eq: "genre/people/aureliaPlaton.JPG" }
            ) {
                ...defaultImage
            }

            logoUnige: file(
                relativePath: { eq: "helvetia2050/sponsors/unige_logo.png" }
            ) {
                ...defaultImage
            }
            logoAcademie: file(
                relativePath: { eq: "helvetia2050/sponsors/academie_logo.png" }
            ) {
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

    const Chapters = props => <Box>genre</Box>

    const contentRef = useRef(null)
    const [scrollToElementArray, setScrollToElementArray] = useState([() => {}])
    React.useEffect(() => {
        // props.navbar.current.setGenreChaptersVisible(Chapters)
        setScrollToElementArray([
            () => window.scrollTo(0, contentRef.current.offsetTop),
        ])
    }, [])

    const [colorMode, setColorMode] = useColorMode()
    setColorMode("genre")

    return (
        <>
            <Waypoint
                onEnter={setNavbarTransparent}
                onLeave={setNavbarTransparent}
            />
            <Hero
                bg="rgba(255, 255, 255, 0.5)"
                backgroundImage={data.landingImage.childImageSharp.fluid.src}
                sx={{
                    backgroundRepeat: "repeat-y",
                }}
            >
                <Box my="auto"></Box>
                <Title
                    sx={{
                        textAlign: "center",
                        fontSize: [24, 30, 40, 56, 64, 80],
                        letterSpacing: lettersSpacingBreakpoints,
                    }}
                >
                    {content.landing.title}
                </Title>
                <Box my="auto"></Box>
                <Text
                    my="20px"
                    mr="20px"
                    ml="auto"
                    sx={{
                        textAlign: "center",
                        fontSize: [10],
                    }}
                >
                    <Link
                        href="https://www.freepik.com/vectors/school"
                        target="_blank"
                    >
                        School vector created by pch.vector - www.freepik.com
                    </Link>
                </Text>
                <ScrollDownIndicator
                    onClick={() => {
                        scrollToElementArray[0](contentRef)
                    }}
                />
            </Hero>

            <Waypoint onEnter={setNavbarTransparent} />
            <Box ref={contentRef}>
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
            </Box>

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
                    {content.hero_solution.title}
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

            {/* <Hero
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
                    {content.hero_orga.title}
                </Title>
            </Hero>

            <Waypoint onEnter={setNavbarTransparent} />

            <Box>
                <Hero sx={{ bg: "background" }}>
                    <Flex alignItems="center" flexWrap="wrap" width={1}>
                        <TeamMember
                            name={content.organisers.lygiaPavitt.title}
                            avatar={data.lygiaPavitt.childImageSharp.fluid.src}
                            content={content.organisers.lygiaPavitt.content}
                            numberOfPeople={2}
                            bgImageXOffset="-300px"
                        />
                        <TeamMember
                            name={content.organisers.aureliaPlaton.title}
                            avatar={
                                data.aureliaPlaton.childImageSharp.fluid.src
                            }
                            content={content.organisers.aureliaPlaton.content}
                            numberOfPeople={2}
                            bgImageXOffset="-400px"
                        />
                    </Flex>
                </Hero>
            </Box> */}
            {/* 
            <Waypoint onEnter={setNavbarTransparent} />

            <Hero
                bg="rgba(255, 255, 255, 0.5)"
                backgroundImage={data.landingImage.childImageSharp.fluid.src}
            >
                <Title
                    sx={{
                        textAlign: "center",
                        fontSize: [24, 30, 40, 56, 64, 80],
                        letterSpacing: lettersSpacingBreakpoints,
                    }}
                >
                    <Parallax x={[0, 0]}>{content.hero_atelier.title}</Parallax>
                </Title>

                <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                    width={0.5}
                >
                    <Parallax x={[0, 0]}>
                        <Box
                            m={paddingBreakpoints}
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            {content.hero_atelier.subtitle}
                        </Box>
                    </Parallax>
                    <Parallax x={[0, 0]}>
                        <Box m={paddingBreakpoints}>
                            {content.hero_atelier.content}
                        </Box>
                    </Parallax>
                </Flex>
            </Hero>

            <Waypoint onEnter={setNavbarTransparent} /> */}
            {/* 
            <SponsorBanner
                sponsorLogo1={data.logoUnige}
                sponsorLogo2={data.logoAcademie}
            /> */}
        </>
    )
}

export default GenreLayout
