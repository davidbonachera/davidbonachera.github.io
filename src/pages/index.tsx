import * as React from "react"
import type {PageProps} from "gatsby"
import Intro from "../components/intro/Intro";
import Highlight from "../components/intro/Highlight";
import Seo from "../components/seo";

const IndexRoute = ({path}: PageProps) => {
    return (
        <>
            <Intro />
        </>
    )
}

export const Head = () => {
    return (
        <Seo/>
    )
}

export default IndexRoute
