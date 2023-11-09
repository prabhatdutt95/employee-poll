import { useEffect } from 'react';
import './App.css';

// Action handler
import { handleInitialData } from './actions/shared';

const App = (props) =>  {
  const handleInitData = () => {
    props.dispatch(handleInitialData)
  }
  useEffect(() => {
    handleInitData();
  }, [])
  
  return (
    <div>Sample</div>
  );
}

export default App;
