import { useEffect, useState } from "react";
// import "./App.css";
import Card from "./Card";
import styles from "./App.module.css"
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        let response = await fetch("https://restcountries.com/v3.1/all");
        let jsonRes = await response.json();
        console.log(jsonRes, "jsonRes");
        setCountries(jsonRes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCountries();
  }, []);
  return (
    <>
      <div className={styles.countries}>
        {countries.map((country, index) => {
          return (
            <Card
              key={index}
              imgLink={country.flags.png}
              imgName={country.name.common}
            ></Card>
          );
        })}
      </div>
    </>
  );
}

export default App;
