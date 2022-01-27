import React, {useState} from 'react';

import './App.css';

const Title = ({title}) => <h1>{title}</h1>;

// Conditional rendering depending on the state of the app
const Display = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>No feedback given</div>
        )
    }
    return (
        <div>
            <Statistics feedbacks={props.feedbacks} />
        </div>
    )
};

const Statistics = ({feedbacks}) => {
    const goodScore = feedbacks[0].score;
    const neutralScore = feedbacks[1].score;
    const badScore = feedbacks[2].score;

    const totalFeedbacks = goodScore + neutralScore + badScore;
    const avgFeedbacks = (goodScore - badScore) / totalFeedbacks;
    const positiveFeedbacks = goodScore / totalFeedbacks;

    return (
        <div>
            <Title title={'statistics'} />

            <table>
                <thead>
                    <tr>
                        <th>Stat</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <ShowStat text={feedbacks[0].name} score={feedbacks[0].score} />
                    <ShowStat text={feedbacks[1].name} score={feedbacks[1].score} />
                    <ShowStat text={feedbacks[2].name} score={feedbacks[2].score} />
                    <ShowStat text={'all'} score={totalFeedbacks} />
                    <ShowStat text={'average'} score={avgFeedbacks} />
                    <ShowStat text={'positive'} score={positiveFeedbacks} />
                </tbody>

            </table>
        </div>
)}

const ShowStat = ({text, score}) => {
    return (
        <tr>
            <th>{text}</th>
            <th>{score}</th>
        </tr>
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

    const feedbacks = [
         {
            name: 'good',
            score: good
        },
        {
            name: 'neutral',
            score: neutral
        },
        {
            name: 'bad',
            score: bad
        },
    ]

  return (
      <div>
          <Title title={'give feedback'} />
          <div className="row">
              <Button handleClick={handleGoodClick} text='good' />
              <Button handleClick={handleNeutralClick} text='neutral' />
              <Button handleClick={handleBadClick} text='bad' />
          </div>

          <Display allClicks={allClicks} feedbacks={feedbacks}/>
      </div>
  )
}

export default App;
