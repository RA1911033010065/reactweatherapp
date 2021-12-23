
const api ={
  key:"572bcaf1f873c2e9709e18e742cd9049",
  base:"https://api.openweathermap.org/data/2.5/"
}
function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
   <div className="app-warm">
     <main>
       <div className="search-box">
    <input
    type = "text"
    className="search-bar"
    placeholder="City Name...."
    
    />
   </div></main>
   
   </div>
  );
}

export default App;
