
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Landingpage from './pages/landingpage';
// import Topbar from './components/topbar';
// import Navbar from './components/navbar';
// import Hero from './components/hero';
// import Homegallery from './components/homegallery';
// import FeaturesSection from './components/features';
// import Gallery from './components/gallery';
// import Footer from './components/footer';
const client = new ApolloClient({
  uri: '/graphql',
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
        <Landingpage />
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;