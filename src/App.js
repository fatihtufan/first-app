import './App.css';

const name = "Fatih";
const surname = "Tufan";
const isLoggedIn = false;

function App() {
  return (
    <>
      <h1>
        {isLoggedIn ? `Benim Adım:${name}, Soyadım:${surname}` : `giriş yapmadınız.`}</h1> 

    </>
  );
}

export default App;
