import React, {ReactNode} from 'react';

import Logo from '../../assets/svg/dinosaur.svg';
import Dribbble from '../../assets/svg/dribbble.svg';
import Twitter from '../../assets/svg/twitter.svg';
import Github from '../../assets/svg/github.svg';
import Instagram from '../../assets/svg/instagram.svg';
import Linkedin from '../../assets/svg/linkedin.svg';
import Stackoverflow from '../../assets/svg/stackoverflow.svg';

import {helmet} from '../../utils/helmet';
import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';
import {Helmet} from "react-helmet";

interface AppLayoutProps {
    children: ReactNode;
}


// tslint:disable no-default-export
export default ({children}: AppLayoutProps) => {

    return (
        <>
            <div className={"flex flex-col h-screen justify-between mx-auto max-w-2xl lg:max-w-5xl"}>
                <Header/>

                <div className="mb-auto">
                    {children}
                </div>

                <Footer
                    social={[
                        {title: "twitter", to: 'https://twitter.com/CarreTriangle'},
                        {title: "github", to: 'https://github.com/davidbonachera\''},
                        {title: "linkedin", to: 'https://www.linkedin.com/in/davidbonachera'},
                        {title: "stackoverflow", to: 'https://stackoverflow.com/users/3737990/davidbonachera'},
                    ]}
                />
            </div>
        </>
    )
}
