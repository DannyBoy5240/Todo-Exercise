import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { ACTIONS } from "../reducer/actions"

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
function AddTask({dispatch, darkMode}){
    const [createTask, setCreateTask] = useState(false)
    const [value, setValue] = useState("")
    const [priority, setPriority] = useState('')
    const [category, setCategory] = useState('')
    const [added, setAdded] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: {value: value, priority: priority, category: category}})
        setValue("")
        setCreateTask(false)
        setAdded(true)

        setTimeout(() => {
            setAdded(false)
        }, 3000)
    }

    return(
        <>
            <Fab variant="extended" size="small" color="primary" style={{ zIndex: '0', margin: '5px' }} onClick={() => setCreateTask(true)}>
                <AddIcon sx={{ mr: 1 }} />
                Add Task
            </Fab>
            {createTask ? 
                <div className="addtask">
                    <div className= {darkMode ? "addtask__form darkmode":"addtask__form"}>
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ flexGrow: 1, marginTop: '30px'}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="h3" gutterBottom>Fill in the details</Typography>
                                    </Grid>
                                    <Grid container display={'flex'} alignItems={'center'} justifyContent={'center'} style={{ marginTop: '10px' }}>
                                        <Grid item xs={6}>
                                            <Typography variant="h6" gutterBottom marginRight={'10px'}>Type your task:</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField  style={{ marginRight: '20px' }} id="standard-basic" label="Name" value={value}  className= {darkMode ? "addtask__textfield darkmode":"addtask__textfield"} onChange={e => setValue(e.target.value)} required/>
                                        </Grid>
                                    </Grid>
                                    <Grid container display={'flex'} alignItems={'center'} justifyContent={'center'} style={{ marginTop: '10px' }}>
                                        <Grid item xs={6}>
                                            <Typography variant="h6" gutterBottom marginRight={'10px'}>Choose Category:</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControl style={{ width: '100%' }} fullWidth className={darkMode ? "addtask__select darkmode" : "addtask__select"}>
                                                <InputLabel id="demo-simple-select-label" className= {darkMode ? "addtask__label darkmode":"addtask__label"}>Category</InputLabel>
                                                <Select
                                                    value={category}
                                                    label="Category"
                                                    onChange={e => setCategory(e.target.value)}
                                                    className= {darkMode ? "addtask__select darkmode":"addtask__select"}
                                                    required
                                                >
                                                    <MenuItem value={'Work'}>Work</MenuItem>
                                                    <MenuItem value={'Personal'}>Personal</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid container display={'flex'} alignItems={'center'} justifyContent={'center'} style={{ marginTop: '10px' }}>
                                        <Grid item xs={6}>
                                            <Typography variant="h6" gutterBottom marginRight={'10px'}>Choose priority:</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControl style={{ width: '100%' }}  className={darkMode ? "addtask__select darkmode" : "addtask__select"}>
                                                <InputLabel id="demo-simple-select-label" className= {darkMode ? "addtask__label darkmode":"addtask__label"}>Priority</InputLabel>
                                                <Select
                                                    value={priority}
                                                    label="Priority"
                                                    onChange={e => setPriority(e.target.value)}
                                                    className= {darkMode ? "addtask__select darkmode":"addtask__select"}
                                                    required
                                                >
                                                    <MenuItem value={'low'}>Low</MenuItem>
                                                    <MenuItem value={'medium'}>Medium</MenuItem>
                                                    <MenuItem value={'high'}>High</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} display={'flex'} alignItems={'center'} justifyContent={'center'} style={{ marginTop: '20px' }}>
                                        <Button type="submit" variant="contained">Create Task</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </form>
                    </div>
                </div> 
            : null}

            {added ?<div className="addtask__confirm">Task added successfully</div>: null}
            

        </>
    )
}
export default AddTask