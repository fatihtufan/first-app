import './App.css';
import User from './components/User';



function App() {
  return (
    <>
    <User name="Fatih" surname="Tufan" isLoggedIn={true} age={29}/>
    </>
  );
}

export default App;
