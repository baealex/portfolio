import App, { AppProps } from 'next/app';
import Head from 'next/head';

import TopNavitaion from '@components/top-navigation';

import '../styles/main.scss';

class Main extends App<AppProps> {
    constructor(props: AppProps) {
        super(props);
    }

    render() {
        const {Component, pageProps} = this.props;

        return (
            <>
                <Head>
                    <title>I'm BaeJino</title>
                    <meta name="theme-color" content="#474787"/>
                    <meta name="application-name" content="baejino"/>
                    <meta name="msapplication-TileColor" content="#474787"/>
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
                        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
                        crossOrigin="anonymous"
                    />
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="icon" href="/assets/images/logo.png"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mansalva&display=swap"/>
                </Head>

                <TopNavitaion/>

                <Component {...pageProps}/>
            </>
        )
    }
}

export default Main;