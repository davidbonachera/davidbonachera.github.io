import React, {ReactNode} from 'react';

import Container from '../container/Container';

interface Social {
    icon?: ReactNode;
    to: string;
    title: string;
}

interface FooterProps {
    logo?: ReactNode;
    social: Social[];
}

export const Footer = ({logo, social}: FooterProps) => {
    return (<div className={"mt-4"}>
        <Container>
            <div className={"footer flex flex-row justify-between"}>
                <a href="http://davidbonachera.fr" target="_blank" rel="noopener noreferrer">
                    © {new Date().getFullYear()}
                </a>

                <ul className={"inline-flex"}>
                    {social.map((item) => (
                        <li key={item.to} className={"px-2"}>
                            <a href={item.to} target="_blank" rel="noopener noreferrer">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    </div>)
}
