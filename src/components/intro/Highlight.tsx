import React, {ReactNode} from 'react';

interface HighlightProps {
    children: ReactNode;
}

const Highlight = ({children}: HighlightProps): any => {
    return (children as string)?.split(' ').map((word, index, words) => (
        <span className={"relative"} key={word}>
            <span className={"relative z-10"}>{word}</span>
            <span className={'absolute inset-x-0 bottom-0  bg-sky-400 h-4 w-full z-0 opacity-30'}></span>
        </span>
    ));
};

export default Highlight;
