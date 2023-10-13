import { BrowserRouter, Link, Route, redirect, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
