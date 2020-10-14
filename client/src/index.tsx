import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

import App from './App/App';

import { GlobalStyle } from './index.styles';
import UserContextProvider from './contexts/user.context';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ThemeProvider theme={{ primaryBlue: '#1488cc' }}>
		<GlobalStyle />
		<ApolloProvider client={client}>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</ApolloProvider>
	</ThemeProvider>,
	document.getElementById('root')
);
