import ErorPage from '../ErorPage/ErorPage';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MyError from '../MyError/MyError';
import './App.css';

function App() {
  return (
    <div className="App">  
        
        <ErrorBoundary>
            <MyError />
        </ErrorBoundary>
        
    </div>
  );
}

export default App;
