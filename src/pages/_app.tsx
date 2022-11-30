import {NextIntlProvider} from "next-intl";
import {AppProps} from "next/app";
import Head from "next/head";
import "/src/styles/tailwind.css";

export default function App(props: AppProps) {
    const {Component, pageProps} = props;

    return (
        <>
            <Head>
                <title>next-atlassian-tailwind-pwa</title>

                <meta name="subject" content="REPLACE_ME"/>
                <meta name="description" content="REPLACE_ME"/>
                <meta name="author" content="REPLACE_ME"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="REPLACE_ME"/>
                <meta property="og:title" content="REPLACE_ME"/>
                <meta property="og:description" content="REPLACE_ME"/>
                <meta property="og:image" content="/assets/banner.png"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="REPLACE_ME"/>
                <meta property="twitter:title" content="REPLACE_ME"/>
                <meta property="twitter:description" content="REPLACE_ME"/>
                <meta property="twitter:image" content="/assets/banner.png"/>

                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <NextIntlProvider messages={pageProps.messages}>
                <Component {...pageProps} />
            </NextIntlProvider>
        </>
    );
}
