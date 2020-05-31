import Head from "next/head";
import Link from "next/Link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hello, I'm Nate and this is my first experience with NextJS. I'm choosing to
                    learn a new technology to build a resume because I love to learn.
                </p>
                <p>
                    (This setup uses Next.JS for a blog style presentation that I find interesting
                    and am looking forward to integrating a backend and GraphQl to access blog
                    posts. End goal is to incorporate this as a feature on a portfolio site.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href="/posts/[id]" as={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className="ultiStyles.lightText">
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
