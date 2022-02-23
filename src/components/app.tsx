import DataManager from './data-manager/data-manager';
// import logo from './logo.svg';
import './App.css';
import FileExplorer from './FileExplorer';

function App() {
    return (
        <div className="App">
            <h1 className="App-title">Table for SCADA</h1>
            <div className="App-intro">
                <FileExplorer/>
            </div>
        </div>
    );
}

export default App;
