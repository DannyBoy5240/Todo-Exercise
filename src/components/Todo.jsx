import React, { useReducer, useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faListCheck, faCheckCircle} from "@fortawesome/free-solid-svg-icons";

import { reducer } from "../reducer/reducer";
import { ACTIONS } from "../reducer/actions"
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import CompletedTasks from "./CompletedTasks";
import Fab from '@mui/material/Fab';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import '../styles/main.scss';
import taskIcon from '../assets/task-icon.png';
import MetricsView from './MetricsView';
function Todo() {

  const [state, dispatch] = useReducer(reducer, {
    activeTasks: JSON.parse(localStorage.getItem("todos"))?.activeTasks || [],
    completedTasks:
      JSON.parse(localStorage.getItem("todos"))?.completedTasks || [],
  });

  const [darkMode, setDarkMode] = useState(false);
  const [metricsView, setMetricsView] = useState(0);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if(darkMode){
      document.body.classList.add("darkmode");
    }
    else {
      document.body.classList.remove("darkmode");
    }
  }, [darkMode]);

  const undo = (e) => {
    e.preventDefault()
    dispatch({type: ACTIONS.UNDO_TODO})
  }

  const redo = (e) => {
    e.preventDefault()
    dispatch({type: ACTIONS.REDO_TODO})
  }

  const metricsview = (e) => {
    e.preventDefault()
    setMetricsView(1);
  }

  const handleCancelMetricsView = () => {
    setMetricsView(0);
  }

  return (
    <>
    <div className={darkMode ? "todo darkmode" : 'todo'} data-testid="todo-component">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
            <label className="toggle">
                <FontAwesomeIcon icon={faLightbulb} className="toggle__icon"/>
                <input className="toggle-checkbox" type="checkbox" onChange={changeMode} data-testid="toggle-switch"/>
                <div className="toggle-switch"></div>
                <FontAwesomeIcon icon={faMoon} className="toggle__icon"/>
            </label>
        </div>
        <div style={{ display: 'flex', justifyContent: 'right' }}>
        <Fab size="small" color="primary" aria-label="add" style={{ zIndex: '0', margin: '5px' }} onClick={e => metricsview(e)}>
            M
          </Fab>
          <Fab size="small" color="primary" aria-label="add" style={{ zIndex: '0', margin: '5px' }} onClick={e => undo(e)}>
            <UndoIcon />
          </Fab>
          <Fab size="small" color="primary" aria-label="add" style={{ zIndex: '0', margin: '5px' }} onClick={e => redo(e)}>
            <RedoIcon />
          </Fab>
        </div>
      </div>
      <h1 className="todo__title"><img src={taskIcon} alt="task icon" className="todo__icon"/> React Todo App</h1>
      <AddTask dispatch={dispatch} darkMode={darkMode}/>
      <div className={darkMode ? "line darkmode" : 'line'}></div>
      <h3 className="tasklist__title"><FontAwesomeIcon icon={faListCheck} /> List of your tasks:</h3>
      <div className="tasklist__container">
        <TaskList todos={state.activeTasks} dispatch={dispatch} darkMode={darkMode}/>
      </div>
      {metricsView ?  <MetricsView handleCancelMetricsView={handleCancelMetricsView} darkMode={darkMode} completed={state.completedTasks} open={state.activeTasks}/> : null }
      {state.completedTasks.length >= 1 ? <h3 className="completedtask__title"><FontAwesomeIcon icon={faCheckCircle} style={{color: 'green'}}/> Completed tasks:</h3> : null}
      <div className="completedtask__container">
        <ol>
          <CompletedTasks todos={state.completedTasks}/>
        </ol>
      </div>
    </div>
    </>
  );
};

export default Todo;
