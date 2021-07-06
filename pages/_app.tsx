import App, { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/main.scss';

import { Footer } from '@components/integrated';

class Main extends App<AppProps> {
    constructor(props: AppProps) {
        super(props);
    }

    render() {
        const {Component, pageProps} = this.props;

        return (
            <>
                <Head>
                    <title>배진오</title>
                    <meta name="theme-color" content="#474787"/>
                    <meta name="application-name" content="배진오"/>
                    <meta name="msapplication-TileColor" content="#474787"/>
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
                        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
                        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
                        crossOrigin="anonymous"
                    />
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="icon" href="/assets/images/logo.png"/>
                    <link rel="apple-touch-icon" href="/assets/images/logo.png" />
                </Head>

                <Component {...pageProps}/>

                <Footer/>
            </>
        )
    }
}

export default Main;