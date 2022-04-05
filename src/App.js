import './App.css';

import { Navbar } from './components';

import FrequencyRoute from './routes/FrequencyRoute';

function App() {
  return (
    <div>
      <Navbar />
      <FrequencyRoute />
    </div>
  );
}

export default App;
