import React from 'react'
import { Box, Typography, Divider } from '@material-ui/core'
import TasksContainer from './TasksContainer'
const App = (props) => {
	return (
		<Box>
			<Typography variant='h1' color='secondary'>
				TasksList
			</Typography>
			<Divider variant='middle' />
			<TasksContainer />
			<Divider variant='middle' />
		</Box>
	)
}

export default App
