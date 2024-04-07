import React from 'react';
import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
// import Landingpage from './pages/landingpage';
// import Topbar from './components/topbar';
// import Navbar from './components/navbar';
// import Hero from './components/hero';
// import Homegallery from './components/homegallery';
// import FeaturesSection from './components/features';
// import Gallery from './components/gallery';
// import Footer from './components/footer';
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        {/* <Topbar />
        <Navbar />
        <Hero />
        <Homegallery />
        <FeaturesSection />
        <Gallery />
        <Footer /> */}
        {/* <Landingpage /> */}
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
