import React from 'react';

// @ts-ignore
import photo from '../assets/images/davidbonachera.jpeg';
import {Stack} from '../components/stack/Stack';

import Dribbble from '../assets/svg/dribbble.svg';
import Twitter from '../assets/svg/twitter.svg';
import Github from '../assets/svg/github.svg';
import Instagram from '../assets/svg/instagram.svg';
import Linkedin from '../assets/svg/linkedin.svg';
import Stackoverflow from '../assets/svg/stackoverflow.svg';
import Container from "../components/container/Container";

export default () => {
    return (
        <>
            <Container>
                <div className="mt-4 px-6 pb-4 ">
                    <h1 className={"text-3xl font-semibold"}>?.</h1>
                    <p className={"text-gray-500"}>Sharing the little things I'm believing in.</p>
                </div>
                <div className="px-6 relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-gray-400 text-xs">List</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>
                <div className="py-4 relative overflow-x-auto sm:rounded-lg max-w-4xl">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <tbody>
                        <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                <a href="https://unbanked.com/" target="_blank" className="">Unbanked</a>
                            </th>
                            <td className="px-6 py-4">
                                April 2022
                            </td>
                            <td className="px-6 py-4">
                                $500
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    );
};
