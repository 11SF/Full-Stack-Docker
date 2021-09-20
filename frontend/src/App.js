import "./App.css";
import { useEffect,useState } from "react";
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState("");
  const fetchApi = async () => {
    const url = 'http://' + window.location.hostname + '/api/getmessage';
    let res = await axios.get(url);
    // console.log(res.data.data);
    setMsg(res.data.data);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return <div className="App">
    <h1>{msg}</h1>
  </div>;
}

export default App;
