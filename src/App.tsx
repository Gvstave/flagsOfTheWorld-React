import Main from "./components/containers/main";
import Header from "./components/containers/header";
import Navigation from "./components/containers/navigation";
import './App.css'

function App() {

    return (
        <div className="App">
            <Header />
            <Navigation />
            <Main />
        </div>
    );
}

export default App;
