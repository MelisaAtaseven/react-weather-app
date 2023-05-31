import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import City from "./City";

function App() {
  const key= "11422dc9423474e4d70abaad18b4aeac";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  getApi();
  },[search])
  console.log(search);
  return (
  
    
    <div className="App">
      
    <div class="bg-sky-900  rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <h1 class=" pt-6 md:p-8 text-orange-200  text-3xl font-mono ">Weather React App</h1>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Placeholder"
        className=" shadow-xl my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "
      />
      
      {city && <City city={city} />}
      <br/>
    </div>
  </div>
    );
}

export default App;


