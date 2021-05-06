import React from "react"

import BaseLayout from "../layouts/base_layout"
import TrashquizLayout from "../layouts/trashquiz_layout"
import PropTypes from "prop-types"

const Index = () => (
    <BaseLayout>
        <TrashquizLayout />
    </BaseLayout>
)

Index.propTypes = {
    children: PropTypes.any,
}

export default Index
