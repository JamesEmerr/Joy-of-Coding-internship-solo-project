import React, {useState} from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './SAApp.css'
import About from "./SAAbout.jsx";
import Home from "./SAHome.jsx";
import TodoList from "./SATodoList.jsx";
import Sidebar from "./SASidebar.jsx";

function SAApp() {
    const [showAbout, setShowAbout] = useState(true)
    const [showHome, setShowHome] = useState(false)
    const [showTodoList, setShowTodoList] = useState(false)


    return (
        <div>

            <Sidebar
                setShowAbout={setShowAbout}
                setShowHome={setShowHome}
                setShowTodoList={setShowTodoList}
            />

            {  showAbout && <About/>  }

          <Home showHome={showHome} setShowHome={setShowHome} setShowAbout={setShowAbout} />

            {showTodoList && <TodoList/>}

        </div>
    )
}

export default SAApp