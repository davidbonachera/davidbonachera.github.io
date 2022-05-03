import * as React from "react"
import type {PageProps} from "gatsby"
import Intro from "../components/intro/Intro";
import Highlight from "../components/intro/Highlight";

const IndexRoute = ({path}: PageProps) => {
    return (
        <>
            <Intro />
        </>
    )
}
export default IndexRoute
