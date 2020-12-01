import React from 'react'
import { Container, Typography } from '@material-ui/core'
import TaskItem from './TaskItem'
const TasksList = (props) => {
	const { tasks, removeItem, editItem } = props
	//console.log('tasks', tasks)
	return (
		<Container>
			<br />
			{tasks.length === 0 ? (
				<Typography variant='h5' color='secondary'>
					No Tasks Found
				</Typography>
			) : (
				<Container>
					<Typography variant='h5' color='secondary'>
						No of My tasks - {tasks.length}
					</Typography>
					<br />
					{tasks.map((task, i) => {
						return (
							<Container key={task.id}>
								<TaskItem
									key={task.id}
									{...task}
									removeItem={removeItem}
									editItem={editItem}
								/>
							</Container>
						)
					})}
				</Container>
			)}
		</Container>
	)
}

export default TasksList
