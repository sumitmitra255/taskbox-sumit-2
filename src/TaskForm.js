import React, { useEffect, useState } from 'react'
import { Container, Button, TextField, Checkbox, Chip } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid'
import { Table, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
const TaskForm = (props) => {
	const {
		formSubmit,
		isSaved,
		toggleIsSaved,
		id: slno,
		title: tasktitle,
		status: taskstatus,
	} = props
	const [id, setId] = useState(slno ? slno : uuidv4())
	const [title, setTitle] = useState(tasktitle ? tasktitle : '')
	const [status, setStatus] = useState(taskstatus ? taskstatus : false)

	const handletitlechange = (e) => {
		setTitle(e.target.value)
	}
	const handlestatuschange = (e) => {
		setStatus(e.target.checked)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = { id: id, title: title, status: status }
		formSubmit(formData)
		//console.log('formData', formData)
	}
	useEffect(() => {
		if (isSaved) {
			setTitle('')
			setStatus(false)
			setId(uuidv4())
			toggleIsSaved()
		}
	}, [isSaved])
	return (
		<form onSubmit={handleSubmit}>
			<Table hover>
				<tbody>
					<tr>
						<td>
							<Alert variant='secondary'>
								<TextField
									id='Title'
									label='Title'
									variant='outlined'
									multiline
									value={title}
									onChange={handletitlechange}
								/>
								<Checkbox
									color='primary'
									checked={status}
									onChange={handlestatuschange}
									inputProps={{ 'aria-label': 'primary checkbox' }}
								/>
								<Chip
									label='Mark Completed'
									color='primary'
									variant='outlined'
								/>
							</Alert>
						</td>
						<td>
							<Button variant='contained' color='primary' type='submit'>
								save
							</Button>
						</td>
					</tr>
				</tbody>
			</Table>
		</form>
	)
}

export default TaskForm
