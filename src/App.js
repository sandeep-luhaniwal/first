import './App.css';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import PropsData from './components/PropsData';

function App() {
  return (
    <>
      <PropsData background="bg-orange-600" style={"text-red-600"} name='Sandeep' age={24} />
      <Contact />
      <PropsData background="bg-green-600" name='Alisha' age={22} />
      <NavBar />
    </>
  );
}

export default App;
