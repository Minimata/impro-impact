/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useRef } from "react"

import { useStaticQuery, graphql } from "gatsby"

import Title from "../components/title"
import content from "../pages-content/trashquiz"
import Link from "../components/custom_link"
import InfoBanner from "../components/info_banner"
import SponsorBanner from "../components/sponsor_banner"
import VideoWrapper from "../components/video_wrapper"
import TeamMember from "../components/team_member"

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

const TrashquizLayout = props => {
    const data = useStaticQuery(graphql`
        query {
            landingImage: file(
                relativePath: { eq: "trashquiz/backgrounds/landing.jpg" }
            ) {
                ...defaultImage
            }
            middleImage: file(
                relativePath: { eq: "trashquiz/backgrounds/hero1.jpg" }
            ) {
                ...defaultImage
            }
            logoSwippe: file(
                relativePath: { eq: "trashquiz/sponsors/asl_logo.png" }
            ) {
                ...defaultImage
            }
            logoASL: file(
                relativePath: { eq: "trashquiz/sponsors/swippe_logo.png" }
            ) {
                ...defaultImage
            }
            logoTrashQuiz: file(
                relativePath: { eq: "trashquiz/trash_quiz_logo.png" }
            ) {
                ...defaultImage
            }

            lygia: file(relativePath: { eq: "trashquiz/people/lygia.JPG" }) {
                ...defaultImage
            }
            damian: file(relativePath: { eq: "trashquiz/people/damian.JPG" }) {
                ...defaultImage
            }
            deborah: file(
                relativePath: { eq: "trashquiz/people/deborah.JPG" }
            ) {
                ...defaultImage
            }
            romain: file(relativePath: { eq: "trashquiz/people/romain.JPG" }) {
                ...defaultImage
            }
            mathieu: file(
                relativePath: { eq: "trashquiz/people/mathieu.JPG" }
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

    const trashquizvideo = (
        <iframe
            width="1280"
            height="720"
            src="https://www.youtube-nocookie.com/embed/Rk0AiQmJAdM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
        ></iframe>
    )
    const trashquizvideoPhone = (
        <iframe
            width="300"
            height="169"
            src="https://www.youtube-nocookie.com/embed/Rk0AiQmJAdM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
        ></iframe>
    )

    const quiz1Video = (
        <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/fVAVFT09hqw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
        ></iframe>
    )
    const quiz1VideoPhone = (
        <iframe
            width="300"
            height="169"
            src="https://www.youtube-nocookie.com/embed/fVAVFT09hqw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
        ></iframe>
    )

    const quiz2Video = (
        <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/1525kRJkBaw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
        ></iframe>
    )
    const quiz2VideoPhone = (
        <iframe
            width="300"
            height="169"
            src="https://www.youtube-nocookie.com/embed/1525kRJkBaw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
        ></iframe>
    )

    const quiz3Video = (
        <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/mx5rGZ0kWlc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
        ></iframe>
    )
    const quiz3VideoPhone = (
        <iframe
            width="300"
            height="169"
            src="https://www.youtube-nocookie.com/embed/mx5rGZ0kWlc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowfullscreen
        ></iframe>
    )

    const Chapters = props => <Box>science</Box>

    const contentRef = useRef(null)
    const [scrollToElementArray, setScrollToElementArray] = useState([() => {}])
    React.useEffect(() => {
        // props.navbar.current.setScienceChaptersVisible(Chapters)
        setScrollToElementArray([
            () => window.scrollTo(0, contentRef.current.offsetTop),
        ])
    }, [])

    const [colorMode, setColorMode] = useColorMode()
    setColorMode("trashquiz")

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
                <Box
                    p={paddingBreakpoints}
                    mx="auto"
                    my={stackedParallaxedYMargin}
                    width={1}
                >
                    <Box
                        ml="auto"
                        width={1}
                        pt={256}
                        sx={{
                            color: "background",
                            backgroundImage:
                                "url(" +
                                data.logoTrashQuiz.childImageSharp.fluid.src +
                                ")",
                            backgroundPosition: "center center",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                        }}
                        height={"80vh"}
                    ></Box>
                </Box>
                <Box my="auto"></Box>
                <ScrollDownIndicator
                    onClick={() => {
                        scrollToElementArray[0](contentRef)
                    }}
                />
            </Hero>

            <Waypoint onEnter={setNavbarTransparent} />

            <Box>
                <Hero id="media">
                    <Flex alignItems="center" flexWrap="wrap" width={1}>
                        <VideoWrapper
                            video={trashquizvideo}
                            videoPhone={trashquizvideoPhone}
                            numberOfVideos={1}
                        />
                    </Flex>
                </Hero>
            </Box>

            <Waypoint onEnter={setNavbarOpaque} />

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
                                    <Title width={1} bg="background">
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
                    Média
                </Title>
            </Hero>
            <Waypoint onEnter={setNavbarTransparent} />

            <Box>
                <Hero id="media">
                    <Flex alignItems="center" flexWrap="wrap" width={1}>
                        <VideoWrapper
                            video={quiz1Video}
                            videoPhone={quiz1VideoPhone}
                            numberOfVideos={2}
                        />
                        <VideoWrapper
                            video={quiz2Video}
                            videoPhone={quiz2VideoPhone}
                            numberOfVideos={2}
                        />
                    </Flex>
                    <Flex alignItems="center" flexWrap="wrap" width={1}>
                        <VideoWrapper
                            video={quiz3Video}
                            videoPhone={quiz3VideoPhone}
                            numberOfVideos={1}
                        />
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
                    Equipe
                </Title>
            </Hero>
            <Waypoint onEnter={setNavbarTransparent} />

            <Box>
                <Hero sx={{ bg: "background" }}>
                    <Flex alignItems="center" flexWrap="wrap" width={1}>
                        <TeamMember
                            name={content.people.deborah.title}
                            avatar={data.deborah.childImageSharp.fluid.src}
                            content={content.people.deborah.content}
                        />
                        <TeamMember
                            name={content.people.romain.title}
                            avatar={data.romain.childImageSharp.fluid.src}
                            content={content.people.romain.content}
                        />
                        <TeamMember
                            name={content.people.damian.title}
                            avatar={data.damian.childImageSharp.fluid.src}
                            content={content.people.damian.content}
                        />
                    </Flex>
                    <Flex alignItems="center" flexWrap="wrap" width={1}>
                        <TeamMember
                            name={content.people.lygia.title}
                            avatar={data.lygia.childImageSharp.fluid.src}
                            content={content.people.lygia.content}
                            numberOfPeople={2}
                        />
                        <TeamMember
                            name={content.people.mathieu.title}
                            avatar={data.mathieu.childImageSharp.fluid.src}
                            content={content.people.mathieu.content}
                            numberOfPeople={2}
                        />
                    </Flex>
                </Hero>
            </Box>
            <Waypoint onEnter={setNavbarOpaque} />

            <InfoBanner></InfoBanner>

            <SponsorBanner
                sponsorLogo1={data.logoASL}
                sponsorLogo2={data.logoSwippe}
            ></SponsorBanner>
        </>
    )
}

export default TrashquizLayout
