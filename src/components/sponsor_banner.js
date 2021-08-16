/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"

import Title from "./title"

import content from "../pages-content/représentations"

import { Flex, Box, Link as RebassLink, Text } from "rebass"
import {
    halfWidthBreakpoints,
    stackedParallaxedYMargin,
    paddingBreakpoints,
    iconWidthBreakpoints,
    lettersSpacingBreakpoints,
} from "../helpers/globals"
import { checkPropTypes } from "prop-types"

const SponsorBox = props => (
    <Flex
        alignItems="center"
        justifyContent="spaceEvenly"
        px={paddingBreakpoints}
        width={1}
    >
        <Box width={3 / 10}></Box>
        <Box width={4 / 10} p={10}>
            {props.text ? (
                props.text
            ) : (
                <Img fluid={props.image.childImageSharp.fluid}></Img>
            )}
        </Box>
        <Box width={3 / 10}></Box>
    </Flex>
)

const SponsorBanner = props => (
    <Flex
        alignItems="center"
        flexWrap="wrap"
        width={1}
        p="40px"
        sx={{ color: "background", bg: "accent", textAlign: "center" }}
    >
        <Box p={paddingBreakpoints} width={halfWidthBreakpoints}>
            <Title>{props.text ? props.text : "Avec le soutien de"}</Title>
        </Box>
        <Flex width={halfWidthBreakpoints} flexWrap="wrap">
            {props.sponsorText ? (
                <Box mx="120px" my="20px">
                    <SponsorBox text={props.sponsorText}></SponsorBox>
                </Box>
            ) : (
                ""
            )}
            {props.sponsorLogo1 ? (
                <SponsorBox image={props.sponsorLogo1}></SponsorBox>
            ) : (
                ""
            )}
            {props.sponsorLogo2 ? (
                <SponsorBox image={props.sponsorLogo2}></SponsorBox>
            ) : (
                ""
            )}
            {/* <Flex
                alignItems="center"
                justifyContent="spaceEvenly"
                px={paddingBreakpoints}
                width={1}
            >
                <Box width={3 / 10}></Box>
                <Box width={4 / 10}>
                    <Img fluid={props.sponsorLogo1.childImageSharp.fluid}></Img>
                </Box>
                <Box width={3 / 10}></Box>
            </Flex>
            <Flex
                alignItems="center"
                justifyContent="spaceEvenly"
                px={paddingBreakpoints}
                width={1}
            >
                <Box width={3 / 10}></Box>
                <Box width={4 / 10}>
                    <Img fluid={props.sponsorLogo2.childImageSharp.fluid}></Img>
                </Box>
                <Box width={3 / 10}></Box>
            </Flex> */}
        </Flex>
    </Flex>
)

export default SponsorBanner
