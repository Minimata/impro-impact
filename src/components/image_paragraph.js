/** @jsx jsx */
import { jsx } from "theme-ui"

import { Hero } from "react-landing-page"
import { Parallax } from "react-scroll-parallax"
import { Box, Flex } from "rebass"

import {
    halfWidthBreakpoints,
    stackedParallaxedYMargin,
    paddingBreakpoints,
} from "../helpers/globals"

const ImageParagraph = props => (
    <Hero>
        <Flex alignItems="center" flexWrap="wrap" width={1}>
            <Flex alignItems="center" width={halfWidthBreakpoints}>
                <Box
                    p={paddingBreakpoints}
                    mx="auto"
                    my={stackedParallaxedYMargin}
                    width={1}
                >
                    <Parallax y={[0, 0]} height={"100%"}>
                        <Box
                            ml="auto"
                            width={1}
                            pt={256}
                            sx={{
                                color: "background",
                                backgroundImage: "url(" + props.image + ")",
                                backgroundPosition: "center center",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                            }}
                            height={"80vh"}
                        ></Box>
                    </Parallax>
                </Box>
            </Flex>
            <Flex alignItems="center" width={halfWidthBreakpoints}>
                <Box
                    p={paddingBreakpoints}
                    mx="auto"
                    mb="50px"
                    width={1}
                    sx={{ textAlign: "justify" }}
                >
                    <Parallax y={[0, 0]}>{props.children}</Parallax>
                </Box>
            </Flex>
        </Flex>
    </Hero>
)

export default ImageParagraph
