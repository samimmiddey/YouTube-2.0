import '../styles/globals.css';
import Layout from '../src/components/Layout/Layout';
import NProgress from 'nprogress';
import { Router } from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/MUI/createEmotionCache';
import theme from '../src/MUI/theme';
import { ContextProvider } from '../src/context/ContextProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	Router.events.on('routeChangeStart', () => {
		NProgress.start();
	});

	Router.events.on('routeChangeComplete', () => {
		NProgress.done();
	});

	Router.events.on('routeChangeError', () => {
		NProgress.done();
	});

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<title>YouTube</title>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ContextProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ContextProvider>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default MyApp;

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
