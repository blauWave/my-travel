import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import data from "./data";

function App() {
  const cards = data.map(cardData => {
    return(
      <Card data={cardData}/>
    )
  })

  

  return (
    <div className='App'>
      <Navbar/>

      <section className="cards-list">
        {cards}
      </section>
      <Footer/>
    </div>
  );
}

export default App;
