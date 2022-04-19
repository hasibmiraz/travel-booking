import React from 'react';
import Carousel from './components/Carousel/Carousel';
import Destinations from './components/Destinations/Destinations';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Selects from './components/Selects/Selects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
    </div>
  );
}

export default App;
