import React from "react";
import  ReactDOM from "react-dom/client"
const App=()=>{
    return(<div>
        <h1 className="text-3xl font-bold underline">
      Hello tailwindcss
    </h1>
    </div>)
}
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)