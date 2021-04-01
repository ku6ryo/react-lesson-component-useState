import './App.css';
import { useState, } from 'react';

/**
 * このコンポーネントを編集します
 */
function App() {
  const [text, setText] = useState('hello')
  const onButtonClick = () => {
    setText('world')
  }
  return (
    <div className="app">
      <div>{text}</div>
      <button onClick={onButtonClick}>button</button>
    </div>
  );
}

export default App;
