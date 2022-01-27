import React, {useState} from 'react';

import './App.css';

// Conditional rendering depending on the state of the app
const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>The app is used by pressing the buttons</div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
};

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
      // Concat returns a new copy of the array with the item added to it
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  };

    const handleRightClick = () => {
        setAll(allClicks.concat('R'));
        setRight(right + 1);
    };

  return (
      <div>
        {left}
            <Button handleClick={handleLeftClick} text='left' />
            <Button handleClick={handleRightClick} text='right' />
        {right}
          <History allClicks={allClicks} />
      </div>
  )
}

export default App;
