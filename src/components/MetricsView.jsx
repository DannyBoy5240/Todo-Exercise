import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

import { ACTIONS } from "../reducer/actions"
import Button from '@mui/material/Button';
function MetricsView({handleCancelMetricsView, dispatch, darkMode, open, completed}) {
    const [newValue, setNewValue] = useState("")

    const handleSubmitEdit = (e) => {
        e.preventDefault()
        dispatch({type: ACTIONS.EDIT_TODO, payload: {newValue, id: todoId}})
        handleCancelMetricsView()
    }
    const duration = completed.reduce((acc, value) => acc + (value.endDate - value.id), 0) / completed.length / 1000;
    return ( 
        <div className="editform">
            <div className={darkMode ? "editform__form darkmode" : "editform__form"}>
                <FontAwesomeIcon className="editform__xmark" icon={faXmark} onClick={handleCancelMetricsView}/>
                <h1 style={{ marginTop: '50px' }}>Metrics View</h1>
                <h2 style={{ marginTop: '50px' }}>Completed Task</h2>
                <p style={{ fontSize: '30px' }}>{completed.length}</p>
                <h2 style={{ marginTop: '50px' }}>Duration</h2>
                <p style={{ fontSize: '30px' }}>{duration.toFixed(2)}s</p>
                <h2 style={{ marginTop: '50px' }}>Open Task</h2>
                <p style={{ fontSize: '30px' }}>{open.length}</p>
            </div>
        </div>
    );
}

export default MetricsView;