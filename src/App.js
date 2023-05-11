import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <div className="body-content"> */}
      <Content />
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;
