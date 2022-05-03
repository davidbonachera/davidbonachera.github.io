import React from 'react';

// @ts-ignore
import photo from '../assets/images/davidbonachera.jpeg';
import Container from "../components/container/Container";

const fetchNFTs = async (): Promise<any> => {
    try {
        const result = await fetch(
            `https://api.rarible.org/v0.1/items/byOwner?owner=ETHEREUM:0xDb976a283440c919f12AF7681D7dCdF895812Bc4`,
        );
        if (result.status !== 200) {
            const error = await result.text();
            throw new Error(error);
        }

        return await result.json();
    } catch (error) {
        console.error('fetchAssets failed:', error);
        return [];
    }
};

export default () => {
    const [nfts, setNfts] = React.useState<any>(null);

    fetchNFTs().then(
        (res) => {
            setNfts(res)
        }
    )

    return (
        <>
            <Container>
                <div className="mt-4 px-6">
                    <h1 className={"text-3xl font-semibold"}>?.</h1>
                    <p className={"text-gray-500"}>Collecting NFTs over ETH & FLOW.</p>
                </div>
                <div className="px-6 relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-gray-400 text-xs">List</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                    {nfts?.items.map((nft: any) => {
                        return (
                            <a href={`https://opensea.io/assets/${nft.contract.split(":")[1]}/${nft.tokenId}`}
                               target={"_blank"} className={"m-3"}>
                                <img
                                    className={"filter shadow brightness-95 hover:brightness-105 hover:shadow-lg w-full object-cover rounded-lg hover:"}
                                    src={nft.meta.content[0].url} alt={nft.meta.name}/>
                                <h2 className={"mt-1 font-semibold"}>{nft.meta.name}</h2>
                            </a>
                        )
                    })}
                </div>
            </Container>
        </>
    );
};
