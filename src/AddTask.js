import React, { useState } from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import TaskForm from './TaskForm'
import axios from 'axios'
const AddTask = (props) => {
	const { addItem } = props
	const [isSaved, setIsSaved] = useState(false)

	const formSubmit = (task) => {
		axios
			.post('http://localhost:3033/api/tasks', task)
			.then((response) => {
				const result = response.data
				addItem(result)
				setIsSaved(true)
			}) //sucess
			.catch((err) => alert('error : ', err)) //not success
	}
	const toggleIsSaved = () => {
		setIsSaved(false)
	}
	return (
		<Container>
			<Typography variant='h4' color='secondary'>
				AddTask
			</Typography>
			<TaskForm
				formSubmit={formSubmit}
				isSaved={isSaved}
				toggleIsSaved={toggleIsSaved}
			/>
		</Container>
	)
}
export default AddTask
