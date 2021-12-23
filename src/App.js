import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UrlsProvider } from './contexts/UrlsContext';
import Home from './Home';
import RedirectExternal from './components/RedirectExternal';

const App = () => {
	return (
		<BrowserRouter>
			<UrlsProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/api/:id" element={<RedirectExternal />} />
					<Route path="*" element={<h1>404</h1>} />
				</Routes>
			</UrlsProvider>
		</BrowserRouter>
	);
};

export default App;
