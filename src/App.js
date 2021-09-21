import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

/* 
function Countries() {

  // state declaration 
  const [country, setCountry] = useState()

  // useEffect declaration 
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountry(data))
  }, [])
  return (
    <div>
      <h1>Lets go for world trip</h1>
      <h4>Countries Avaiable: {country.length}</h4>
      {
        country.map(state => <Country name={state.name} capital={state.capital}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>capital: {props.capital}</p>
    </div>
  )
} */
export default App;
