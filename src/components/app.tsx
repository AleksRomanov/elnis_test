import DataManager from './data-manager/data-manager';
import logo from './logo.svg';
import './App.css';
import FileExplorer from './FileExplorer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Table for SCADA</h1>
            </header>
            <div className="App-intro">
                <FileExplorer/>
            </div>
            <DataManager/>
        </div>
    );
}

export default App;
