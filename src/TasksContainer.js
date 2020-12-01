import React, { useEffect, useState } from 'react'
import { Snackbar, Table } from '@material-ui/core'
import { Alert as MAlert } from '@material-ui/lab'
import axios from 'axios'
import TasksList from './TasksList'
import AddTask from './AddTask.js'
const TasksContainer = (props) => {
	const [tasks, setTasks] = useState([])
	const [snackbaropen, snackbarsetOpen] = useState(false) //snackbar state
	const handleClose = (event, reason) => {
		//snackbar close handling
		if (reason === 'clickaway') {
			return
		}
		snackbarsetOpen(false)
	}
	useEffect(() => {
		axios
			.get('http://localhost:3033/api/tasks')
			.then((response) => {
				setTasks(response.data)
				//console.log(response.data)
			})
			.catch((err) => {
				alert(err.message)
			})
	}, [])
	const addItem = (task) => {
		setTasks([...tasks, task])
		snackbarsetOpen(true)
	}
	const removeItem = (id) => {
		const result = tasks.filter((task) => {
			return task.id != id
		})
		setTasks(result)
		snackbarsetOpen(true)
	}
	const editItem = (task) => {
		console.log('task', task)
		const result = tasks.map((t) => {
			if (t.id === task.id) {
				return { ...t, ...task }
			} else {
				return { ...t }
			}
		})
		setTasks(result)
		snackbarsetOpen(true)
	}
	return (
		<>
			<Table>
				<tbody>
					<tr>
						<td>
							<div>
								<TasksList
									tasks={tasks}
									removeItem={removeItem}
									editItem={editItem}
								/>
							</div>
						</td>
						<td>
							<div style={{ width: '100%' }}>
								<AddTask addItem={addItem} />
							</div>
						</td>
					</tr>
				</tbody>
			</Table>
			<Snackbar
				open={snackbaropen}
				autoHideDuration={2000}
				onClose={handleClose}>
				<MAlert onClose={handleClose} severity='success'>
					success!
				</MAlert>
			</Snackbar>
		</>
	)
}

export default TasksContainer
