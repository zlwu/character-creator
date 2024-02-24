import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import PerspectionDecoration from './components/PerspectiveDecoration/PerspectionDecoration';

function App() {
  return (
    <>
      <PerspectionDecoration />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
