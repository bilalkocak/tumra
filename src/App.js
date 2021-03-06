import Layout from "./components/Layout/Layout";
import Result from "./components/Result/Result";
import {useLocation} from "react-router-dom";
import './App.scss';

function App() {
    const location = useLocation();

    return (
        <div className="App">
            {
                location.pathname === '/result'
                    ? <Result/> : <Layout/>
            }
        </div>
    );
}

export default App;
