import React, { useState } from 'react';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import Input from './components/Input/Input';

function App() {
  const [caret, setCaret] = useState<boolean>(false);
  return (
    <div className="App" style={{ width: "100vw", height: "100vh"}}>
      <Button type='close' />
      <Button type='delete' />
    </div>
  );
}

export default App;
