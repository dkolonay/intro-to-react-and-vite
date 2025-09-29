import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const NAMES = ["Dan Kolonay", "Denia Casimiro", "Vitaliy Dmukhovskyy"]
    const [nameIndex, setNameIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setNameIndex((prevIndex) => (prevIndex + 1) %3)
        }, 2000)
        return ()=>{clearInterval(interval)}
    }, [])

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Hello from out team!</h1>

            <div className="card">
                <h2>Our names are:</h2>
                <button onClick={() => setNameIndex((prevIndex) => (prevIndex + 1) %3)}>
                    {NAMES[nameIndex]}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
