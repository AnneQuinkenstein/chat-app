import React from 'react';
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Contact online name="Tracy Lambert" avatar="https://randomuser.me/api/portraits/women/62.jpg" />
      <Contact name="Joshua Jensen" avatar="https://randomuser.me/api/portraits/men/63.jpg" />
      <Contact online name="Tim Schmidt" avatar="https://randomuser.me/api/portraits/men/16.jpg" />
    </div>
  );
}

export default App;
