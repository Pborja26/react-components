import React from 'react';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button
        type='primary'
        label='aqui'
        loading={true}
      />
    </div>
  );
}

export default App;
