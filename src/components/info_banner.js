/** @jsx jsx */
import { jsx } from "theme-ui"

import Title from "../components/title"
import React from "react"

import content from "../pages-content/représentations"

import { Flex, Box, Link as RebassLink, Text } from "rebass"
import {
    halfWidthBreakpoints,
    stackedParallaxedYMargin,
    paddingBreakpoints,
    iconWidthBreakpoints,
    lettersSpacingBreakpoints,
} from "../helpers/globals"

const singleDate = (date, place) => (
    <>
        <Box px={paddingBreakpoints} width={1}>
            <Text>{date}</Text>
        </Box>
        <Box px={paddingBreakpoints} pb="10px" width={1}>
            <Text>{place}</Text>
        </Box>
    </>
)

const InfoBanner = () => (
    <Flex
        alignItems="center"
        flexWrap="wrap"
        width={1}
        p="40px"
        sx={{ color: "background", bg: "accent", textAlign: "center" }}
    >
        <Flex width={halfWidthBreakpoints} flexWrap="wrap" alignItems="center">
            <Box px={paddingBreakpoints} width={1}>
                <Title sx={{ my: "10px" }}>Prochaines représentations</Title>
            </Box>
            <Box px={paddingBreakpoints} width={1}>
                <Title sx={{ my: "10px" }}>{content.spectacle}</Title>
            </Box>
        </Flex>
        <Flex width={halfWidthBreakpoints} flexWrap="wrap">
            {content.representations.map(repres =>
                singleDate(repres.date, repres.place)
            )}
        </Flex>
    </Flex>
)

export default InfoBanner
