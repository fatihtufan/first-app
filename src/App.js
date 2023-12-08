import './App.css';
import User from './components/User';

const friends = [
  {
    id: 1,
    name: 'Ahmet'
  },
  {
    id: 2,
    name: 'Mehmet'
  },
  {
    id: 3,
    name: 'Ali'
  },
];

function App() {
  return (
    <>
      <User
        // name="Fatih"
        surname="Tufan"
        isLoggedIn={true}
        age={"29"}
        friends={friends}
        address={{
          title: 'Çankaya/Ankara',
          zip: 34755
        }}
      />
    </>
  );
}

export default App;
