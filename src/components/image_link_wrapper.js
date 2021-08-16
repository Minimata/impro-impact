/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { Parallax } from "react-scroll-parallax"
import { Box, Flex, Link, Text } from "rebass"

class ImageLinkWrapper extends React.Component {
    constructor(props) {
        super(props)

        this.numLinks = props.numberOfLinks ? props.numberOfLinks : 3
        this.name = props.name
        this.image = props.image
        this.link = props.link

        this.bgImageXOffset = props.bgImageXOffset
            ? props.bgImageXOffset
            : "0px"
        this.bgImageYOffset = props.bgImageYOffset
            ? props.bgImageYOffset
            : "0px"
    }

    render() {
        return (
            <>
                <Flex
                    alignItems="center"
                    ml="auto"
                    width={[
                        1,
                        1,
                        1,
                        1 / this.numLinks,
                        1 / this.numLinks,
                        1 / this.numLinks,
                    ]}
                >
                    <Box
                        ml="auto"
                        width={1}
                        pt={256}
                        sx={{
                            color: "background",
                            backgroundImage: "url(" + this.image + ")",
                            backgroundPosition:
                                "" +
                                this.bgImageXOffset +
                                " " +
                                this.bgImageYOffset,
                            backgroundSize: "cover",
                            cursor: "pointer",

                            transition: "transform 0.35s ease-in-out",
                            ":hover": {
                                transform: "scale(0.95, 0.95)",
                                zIndex: 999,
                            },
                        }}
                        onClick={() => window.open(this.link, "_blank")}
                    >
                        <Box
                            pt={5}
                            pb={4}
                            css={{
                                "@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)": {
                                    backdropFilter: "blur(2px)",
                                },
                                mask:
                                    "linear-gradient(transparent 1%, black, black, black, black, black)",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                            }}
                        >
                            <Flex
                                alignItems="center"
                                flexWrap="wrap"
                                ml="auto"
                                my={0}
                                width={1}
                            >
                                <Flex alignItems="center" width={1}>
                                    <Box mx="auto">
                                        <Parallax x={[10, -10]}>
                                            <Text
                                                width={1}
                                                sx={{ fontSize: 36 }}
                                            >
                                                {this.name}
                                            </Text>
                                        </Parallax>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </>
        )
    }
}

export default ImageLinkWrapper
