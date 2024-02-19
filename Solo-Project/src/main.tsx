//J Programming //
// MCX //

import React from "react";
import ReactDOM from "react-dom/client";
import TaskListApp from "./components/TaskListApp";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import SAApp from "./components/SAApp";

const DATA = [
  { id: "todo-0", name: "Eating", completed: false },
  { id: "todo-1", name: "Sleeping", completed: false },
  { id: "todo-2", name: "Breathing", completed: false },
  { id: "todo-3", name: "Toiletries", completed: false },
  { id: "todo-4", name: "Hunting", completed: false },
  { id: "todo-5", name: "Surviving", completed: false },
  { id: "todo-6", name: "Emergencies", completed: false },
  { id: "todo-7", name: "Mining", completed: false },
  { id: "todo-8", name: "Martian Procreating", completed: false },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
    {/* <TaskListApp tasks={DATA} /> Task List */}
    {/* <App />  Original MCX */}
     <SAApp />  {/* Page Rendering Example */}
    </ChakraProvider>
  </React.StrictMode>
);
