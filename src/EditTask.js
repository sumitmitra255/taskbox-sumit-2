import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@material-ui/core'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'
import axios from 'axios'
const EditTask = (props) => {
	const { id, title, status, editItem, handleToggle } = props
	const formSubmit = (task) => {
		//console.log('task', task)
		axios
			.put(`http://localhost:3033/api/tasks/${task.id}`, task)
			.then((response) => {
				const result = response.data
				//console.log('result', result)
				editItem(result)
				handleToggle()
			})
		// .catch((err) => {
		// 	alert(err.message)
		// })
	}
	return (
		<Container>
			<Typography variant='h5' color='secondary'>
				Edit Task
			</Typography>
			<TaskForm id={id} title={title} status={status} formSubmit={formSubmit} />
		</Container>
	)
}
export default EditTask
