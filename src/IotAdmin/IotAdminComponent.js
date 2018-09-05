import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, Paper, Grid, Card, Typography, Button } from '@material-ui/core'
import IotTableComponent from './components/IotTableComponent'

const arr = [1, 2, 3]

const IotAdminComponent = (props) => {
	const { classes } = props
	return (<div>
		<Grid container>
			<Grid item xs={10}/>
			<Grid item xs={2}>
				<Button variant={'outlined'} className={classes.addDeviceButton}>{'Add new device'}</Button>
			</Grid>
		</Grid>
		<Paper className={classes.iotAdminPanel}>
			<Grid container spacing={8} justify={'space-around'} alignItems={'center'}>
				<Grid item xs={1}/>
				<Grid item xs={2}>
					<Typography variant={'headline'}>IOT Admin</Typography>
				</Grid>
				<Grid item xs={5}/>
				{arr.map((x, index) => (<Grid item xs={1} key={index}>
					<Card className={classes.notActiveCard}>
						<Typography variant={'body2'}>Not Active</Typography>
						<Typography variant={'headline'}>24</Typography>
					</Card>
				</Grid>))}
				<Grid item xs={1}/>
			</Grid>
			<IotTableComponent className={classes.iotTable} />
		</Paper>
	</div>
	)
}

IotAdminComponent.propTypes = {
	classes: PropTypes.object,
}

const style = {
	notActiveCard: {
		textAlign: 'center'
	},
	iotAdminPanel: {
		margin: 20
	},
	addDeviceButton: {
		/* right: 20, */
		marginTop: 20,
		
	},
	iotTable: {
		margin: 10
	}
}

export default withStyles(style)(IotAdminComponent)