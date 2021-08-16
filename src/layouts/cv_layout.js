/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState, useRef } from "react"

import Title from "../components/title"

import { Hero, ScrollDownIndicator } from "react-landing-page"
import { Box, Flex, Text } from "rebass"
import { useColorMode } from "theme-ui"

import {
    lettersSpacingBreakpoints,
    paddingBreakpoints,
    stackedParallaxedYMargin,
    contentTitleFontSizeBreakpoints,
} from "../helpers/globals"

import { Waypoint } from "react-waypoint"

const CVLayout = props => {
    const setNavbarTransparent = () => {
        props.navbar.current.setTransparent()
    }
    const setNavbarOpaque = () => {
        props.navbar.current.setOpaque()
    }

    const contentRef = useRef(null)
    const [scrollToElementArray, setScrollToElementArray] = useState([() => {}])
    React.useEffect(() => {
        // props.navbar.current.setScienceChaptersVisible(Chapters)
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
                backgroundImage={props.image}
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
                    {props.title}
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
                    Crédit photo: Judith Marchal
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
                        <Box m={[3, 3, 4, 5, 5]}>
                            {props.content.map(paragraph => (
                                <Box
                                    width={1}
                                    px={[20, 20, 30, 40, 40, 50]}
                                    py={paddingBreakpoints}
                                    mx="auto"
                                    my={3}
                                    sx={{
                                        fontSize: contentTitleFontSizeBreakpoints,
                                    }}
                                >
                                    {paragraph}
                                </Box>
                            ))}
                        </Box>
                    </Flex>
                </Hero>
            </Box>

            <Waypoint onEnter={setNavbarOpaque} />
        </>
    )
}

export default CVLayout
