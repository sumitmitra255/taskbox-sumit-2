import React, { useEffect, useState } from 'react'
import {
	Container,
	Button,
	Dialog,
	DialogTitle,
	DialogActions,
} from '@material-ui/core'
import { Alert, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import EditTask from './EditTask'

const TaskItem = (props) => {
	const { id, title, status, removeItem, editItem } = props
	const [toggle, setToggle] = useState(false)
	const [open, setOpen] = useState(false)

	const handleCloseAgree = () => {
		axios
			.delete(`http://localhost:3033/api/tasks/${id}`)
			.then((response) => {
				const result = response.data
				removeItem(result.id)
			})
			.catch((err) => {
				alert('Not Succesful', err)
			})
		setOpen(false)
	}
	const handleClose = () => {
		setOpen(false)
	}
	const handleCloseDisagree = () => {
		setOpen(false)
	}
	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleremove = () => {
		handleClickOpen()
	}
	const handleToggle = () => {
		setToggle(!toggle)
	}
	return (
		<Container>
			{toggle ? (
				<Table>
					<tbody>
						<tr>
							<td>
								<EditTask
									id={id}
									title={title}
									status={status}
									editItem={editItem}
									handleToggle={handleToggle}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<Button
									onClick={handleToggle}
									variant='contained'
									color='primary'>
									Cancel
								</Button>
							</td>
						</tr>
					</tbody>
				</Table>
			) : (
				<Table hover size='sm'>
					<thead>
						<tr>
							<th>Quote</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div style={{ width: '500px' }}>
									<Alert variant='danger'>{title}</Alert>
								</div>
							</td>
							<td>
								<Button
									onClick={handleToggle}
									variant='contained'
									color='primary'>
									Edit
								</Button>
							</td>
							<td>
								<Button
									onClick={handleremove}
									variant='contained'
									color='primary'>
									Remove
								</Button>
							</td>
						</tr>
					</tbody>
				</Table>
			)}
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle id='alert-dialog-title'>
					{'Are you sure you want to REMOVE the Task?'}
				</DialogTitle>
				<DialogActions>
					<Button
						onClick={handleCloseDisagree}
						variant='contained'
						color='primary'>
						Disagree
					</Button>
					<Button
						onClick={handleCloseAgree}
						variant='contained'
						color='primary'>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	)
}
export default TaskItem
