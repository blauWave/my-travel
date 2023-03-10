import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import data from "./data";

function App() {
  //added line 
  const line = <hr className="card-line"/>
  
  const cards = data.map(cardData => {
    return(
      <>
      <Card data={cardData}/>
      {line}
      </>
    )
  })
  return (
    <div className='App'>
      <Navbar/>

      <section>
        {cards}
      </section>
      <Footer/>
    </div>
  );
}

export default App;
