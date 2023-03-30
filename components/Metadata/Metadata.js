import Head from 'next/head';

export default function Metadata({ title }) {

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Website of Kaat Vermeire" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}