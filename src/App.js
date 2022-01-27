import React, {useState} from 'react';

import './App.css';

const Title = () => <h1>give feedback</h1>;

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
  const [bad, setBad] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [allClicks, setAll] = useState([]);

    const handleBadClick = () => {
      // Concat returns a new copy of the array with the item added to it
    setAll(allClicks.concat('B'));
    setBad(bad + 1);
    };

    const handleGoodClick = () => {
        setAll(allClicks.concat('G'));
        setGood(good + 1);
    };

    const handleNeutralClick = () => {
        // Concat returns a new copy of the array with the item added to it
        setAll(allClicks.concat('N'));
        setNeutral(neutral + 1);
    };

  return (
      <div>
          <Title />
          <div className="row">
              <Button handleClick={handleGoodClick} text='good' />
              <Button handleClick={handleNeutralClick} text='neutral' />
              <Button handleClick={handleBadClick} text='bad' />
          </div>
          <div>
              good {good}
          </div>
          <div>
              neutral {neutral}
          </div>
          <div>
              bad {bad}
          </div>
          <History allClicks={allClicks} />
      </div>
  )
}

export default App;
