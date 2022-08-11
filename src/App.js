import './App.css';

import { Navbar, Toast } from './components';
import FrequencyRoute from './routes/FrequencyRoute';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <FrequencyRoute />
      <Toast />
    </div>
  );
}

export default App;
