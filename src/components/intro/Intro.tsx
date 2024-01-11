import React, {ReactNode} from 'react';
import Container from "../container/Container";
import Row from "../row/Row";
import Highlight from "./Highlight";

const Intro = () => (
    <Container>
        <div className={"py-32 max-w-4xl"}>
            <h1 className={"text-3xl font-light"}>👋 I'm David, product engineer with a design mindset.</h1>
            <p className={"mt-4 text-2xl font-light text-gray-500"}>
                Creative, curious & meticulous, I like to craft useful products. <br/>
                <Highlight>#engineer</Highlight>, <Highlight>#network</Highlight>, <Highlight>#data</Highlight>, <Highlight>#fullstack</Highlight>, <Highlight>#web</Highlight></p>
        </div>
    </Container>
);

export default Intro;
