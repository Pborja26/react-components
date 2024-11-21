import React from 'react';
import Button from './components/Button/Button';
import Container from './components/Container/Container';

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh"}}>
      <Container
        backgroundcolor="blue"
        height={100}
        width={100}
        border='dotted'
        // borderwidth={}
        // borderradius={[]}
      >
        <Button />
        <Button />
      </Container>
    </div>
  );
}

export default App;
