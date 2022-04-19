import React from 'react';
import Destinations from './components/Destinations/Destinations';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
    </div>
  );
}

export default App;
