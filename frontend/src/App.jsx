import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    axios
      .get(`${API}/api/test`)
      .then((res) => setMsg(res.data.message))
      .catch(() => setMsg("Connection failed"));
  }, []);

  return <h1>{msg}</h1>;
}

export default App;
