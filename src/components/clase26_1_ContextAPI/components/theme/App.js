import React from 'react';
import { ThemeProvider } from './components/clase26_1_ContextAPI/components/theme/ThemeContext';
import ThemeButton from './components/clase26_1_ContextAPI/components/theme/ThemeButton';

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Context API Example</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
