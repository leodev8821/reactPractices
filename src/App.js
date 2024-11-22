import './App.css';
import Form from './components/ejercicio21_1/Form';
import MyLabel from './components/ejercicio21_1/label/Label';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MyLabel tag="h1" text="Formulario de registro"/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
