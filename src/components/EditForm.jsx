import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

import { ACTIONS } from "../reducer/actions"
import Button from '@mui/material/Button';
function EditForm({handleFinishEdit, dispatch, todoId, oldValue, darkMode}) {
    const [newValue, setNewValue] = useState("")

    const handleSubmitEdit = (e) => {
        e.preventDefault()
        dispatch({type: ACTIONS.EDIT_TODO, payload: {newValue, id: todoId}})
        handleFinishEdit()
    }

    return ( 
        <div className="editform">
            <div className={darkMode ? "editform__form darkmode" : "editform__form"}>
                <h3 className="editform__title">Change the content of your task</h3>
                <FontAwesomeIcon className="editform__xmark" icon={faXmark} onClick={handleFinishEdit}/>

                <form onSubmit={handleSubmitEdit}>
                    <div className={darkMode ? "editform__input darkmode" : "editform__input"}>
                        <label htmlFor="task">Type new value: </label>
                        <input type="text" name="task" value={newValue} onChange={e => setNewValue(e.target.value)} required/>
                    </div>

                    <div className="editform__oldvalue">Old value: <strong>{oldValue}</strong></div>

                    <Button type="submit" variant="contained" size="large" style={{ width: '80%', bottom: '10%', height: '40px', left: '10%', position: 'absolute' }}>Edit Task</Button>
                </form>
            </div>
        </div>
    );
}

export default EditForm;