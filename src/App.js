import './App.css';
import Form from './components/ejercicio21_1/Form';
import MyLabel from './components/ejercicio21_1/label/Label';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Clock from './components/clase 22_4/Clock';

function App() {
  return (
    <div className="App">
      <Header/>
      <MyLabel tag="h1" text="Formulario de registro"/>
      <Form/>
      <Clock ciudad="Madrid"/>
      <Footer/>
    </div>
  );
}

export default App;
