import React, {useState} from 'react';

import './App.css';

const Title = ({title}) => <h1>{title}</h1>;

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

const ShowStat = ({text, score}) => {
    return (
        <div>
            {text} {score}
        </div>
    )
}

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

    const totalFeedbacks = good + neutral + bad;
  return (
      <div>
          <Title title={'give feedback'} />
          <div className="row">
              <Button handleClick={handleGoodClick} text='good' />
              <Button handleClick={handleNeutralClick} text='neutral' />
              <Button handleClick={handleBadClick} text='bad' />
          </div>
          <Title title={'statistics'} />
          <ShowStat text={'good'} score={good} />
          <ShowStat text={'neutral'} score={neutral} />
          <ShowStat text={'bad'} score={bad} />
          <ShowStat text={'all'} score={totalFeedbacks} />
          <ShowStat text={'average'} score={(good - bad) / totalFeedbacks} />
          <ShowStat text={'positive'} score={good / totalFeedbacks} />

      </div>
  )
}

export default App;
