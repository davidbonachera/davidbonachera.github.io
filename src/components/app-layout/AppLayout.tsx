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
            <Helmet {...helmet}>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
            </Helmet>

            <div className={"flex flex-col h-screen justify-between"}>
                <Header/>

                <div className="mb-auto">
                    {children}
                </div>

                <Footer
                    logo={<Logo/>}
                    social={[
                        {icon: <Dribbble/>, to: 'https://dribbble.com/davidbonachera'},
                        {icon: <Twitter/>, to: 'https://twitter.com/CarreTriangle'},
                        {icon: <Github/>, to: 'https://github.com/davidbonachera'},
                        {icon: <Stackoverflow/>, to: 'https://stackoverflow.com/users/3737990/davidbonachera'},
                        {icon: <Instagram/>, to: 'https://www.instagram.com/carretriangle/'},
                        {icon: <Linkedin/>, to: 'https://www.linkedin.com/in/davidbonachera/'},
                    ]}
                />
            </div>
        </>
    )
}
