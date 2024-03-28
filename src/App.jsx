import { useEffect, useState } from "react";
// import "./App.css";
import Card from "./Card";
import styles from "./App.module.css";
function App() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
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
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{ paddingBottom: "10px"}}>
          <input
            type="text"
            placeholder="Search for countries.."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className={styles.countries}>
          {searchText === "" ? (
            <>
              {countries.map((country, index) => {
                return (
                  <Card
                    key={index}
                    imgLink={country.flags.png}
                    imgName={country.name.common}
                  ></Card>
                );
              })}
            </>
          ) : (
            <>
              {countries
                .filter((country) => {
                  if (country.name.common.toLowerCase().includes(searchText.toLowerCase())) {
                    return true;
                  } else {
                    return false;
                  }
                })
                .map((country, index) => {
                  return (
                    <Card
                      key={index}
                      imgLink={country.flags.png}
                      imgName={country.name.common}
                    ></Card>
                  );
                })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
