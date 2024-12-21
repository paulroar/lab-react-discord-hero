import "./App.css";
import Navbar from "./assets/Components/Navbar/Navbar";
import Hero from "./assets/Components/Hero/Hero";
import NavDiscord from "./assets/Components/Navbar/discord-logo-white.png";
import NavMenu from "./assets/Components/Navbar/menu-icon.png";
import Background from "./assets/Components/Hero/discord-background.png";

function App() {
  return (
    <div className="App">
      <Navbar discordUrl={NavDiscord} menuUrl={NavMenu} />
      <div className="BarImage">
        <Hero url={Background} />
      </div>
    </div>
  );
}

export default App;
