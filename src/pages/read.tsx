import * as React from "react"
import { Link, graphql } from "gatsby"

// @ts-ignore
import Container from "../components/container/Container";
import Seo from "../components/seo";

export default ({data, location}: any) => {
    const posts = data.allMarkdownRemark.nodes

    return (
        <>
            <Container>
                <div className="mt-4 px-6 pb-4">
                    <h1 className={"text-3xl font-semibold"}>?.</h1>
                    <p className={"text-gray-500"}>Sharing the little things I'm believing in.</p>
                </div>
                <ol style={{listStyle: `none`}}>
                    {posts.map((post: {
                        frontmatter: {
                            title: any;
                            date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                            description: any;
                        };
                        fields: { slug: React.Key | null | undefined; };
                        excerpt: any;
                    }) => {
                        const title = post.frontmatter.title || post.fields.slug

                        return (
                            <li key={post.fields.slug}>
                                <article
                                    className="p-4"
                                    itemScope
                                    itemType="http://schema.org/Article"
                                >
                                    <header>
                                        <h2 className={'text-lg font-bold'}>
                                            <Link to={post.fields.slug} itemProp="url">
                                                <span itemProp="headline">{title}</span>
                                            </Link>
                                        </h2>
                                        <small className={"text-gray-500 text-xs"}>{post.frontmatter.date}</small>
                                    </header>
                                    {/*<section>*/}
                                    {/*    <p*/}
                                    {/*        dangerouslySetInnerHTML={{*/}
                                    {/*            __html: post.frontmatter.description || post.excerpt,*/}
                                    {/*        }}*/}
                                    {/*        itemProp="description"*/}
                                    {/*    />*/}
                                    {/*</section>*/}
                                </article>
                            </li>
                        )
                    })}
                </ol>
            </Container>
        </>
    );
};

export const Head = () => {
    return (
        <Seo title="Read" description="A list of things I wrote."/>
    )
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
