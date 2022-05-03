import React from 'react';

// @ts-ignore
import photo from '../assets/images/davidbonachera.jpeg';
import Container from "../components/container/Container";

// tslint:disable no-default-export
export default () => {

    return (
        <>
            <Container>
                <div className={"py-12"}>
                    <img src={photo} alt="David's photo" className={"mx-auto"}
                         style={{height: 164, width: 164, borderRadius: 656 / 2, objectFit: 'cover'}}/>
                </div>
                <div className={"max-w-xl mx-auto"}>
                    <h2 className={"text-xl font-light tracking-wide"}>
                        With a mixed background made of computer science and design, I'm crafting products for the Internet.
                        <br/> <br/>
                        I work as a Software Engineer at Lazada, business unit of Alibaba Group based in
                        Shenzhen,
                        China.
                        <br/> <br/>
                        Previously, I did some entrepreneurial projects where I practice user-centered product design and
                        also
                        co-founded a logistics startup.
                    </h2>
                </div>
            </Container>
        </>
    );
};
