/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import Title from "../components/title"
import { lettersSpacingBreakpoints } from "../helpers/globals"
import { TeamMemberModal } from "../components/modal"

import { Box, Flex, Text } from "rebass"
import { Parallax } from "react-scroll-parallax"

const youtube_iframe_test = (
    <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/B8aTytVs75I?controls=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
)
const youtube_iframe_phone_test = (
    <iframe
        width="375"
        height="315"
        src="https://www.youtube-nocookie.com/embed/B8aTytVs75I?controls=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
)

class VideoWrapper extends React.Component {
    constructor(props) {
        super(props)

        this.numVids = props.numberOfVideos ? props.numberOfVideos : 3
        this.video = props.video ? props.video : youtube_iframe_test
        this.videoPhone = props.videoPhone
            ? props.videoPhone
            : youtube_iframe_phone_test
    }

    render() {
        return (
            <>
                <Flex
                    alignItems="center"
                    ml="auto"
                    width={[
                        0,
                        0,
                        0,
                        1 / this.numVids,
                        1 / this.numVids,
                        1 / this.numVids,
                    ]}
                >
                    <Box
                        mx="auto"
                        my="0"
                        p="0"
                        display={[
                            "none",
                            "none",
                            "none",
                            "block",
                            "block",
                            "block",
                        ]}
                    >
                        {this.video}
                    </Box>
                </Flex>
                <Flex alignItems="center" ml="auto" width={[1, 1, 1, 0, 0, 0]}>
                    <Box
                        mx="auto"
                        my="0"
                        p="0"
                        display={[
                            "block",
                            "block",
                            "block",
                            "none",
                            "none",
                            "none",
                        ]}
                    >
                        {this.videoPhone}
                    </Box>
                </Flex>
            </>
        )
    }
}

export default VideoWrapper
