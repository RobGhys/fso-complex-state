import React, {useState} from 'react';

import './App.css';

const App = () => {
  const [clicks, setClicks] = useState({
      left: 0,
      right: 0
  });

    // Create a copy of clicks, and modify the left click by adding 1 to its previous value
  const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1});

  const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1});


  return (
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>
          left
        </button>
        <button onClick={handleRightClick}>
          right
        </button>
        {clicks.right}
      </div>
  )
}

export default App;
