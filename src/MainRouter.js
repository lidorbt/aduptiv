import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import SideBar from './Shared/SideBar/SideBar'
import { Grid, withStyles } from '@material-ui/core'
import IotAdminComponent from './IotAdmin/IotAdminComponent'
import HeatMapComponent from './HeatMap/HeatMapComponent'


const routes = [
	{
		path: 'IotAdmin',
		title: 'IOT Admin',
		icon: 'dashboard',
		component: IotAdminComponent,
	},
	{
		path: 'HeatMap',
		title: 'Heat Map',
		icon: 'map',
		component: HeatMapComponent,
	},
]

const MainRouter = (props) => {
	const {classes} = props
	return (<Fragment>
		<Router>
			<Grid container>
				<Grid item xs={2} className={classes.sideBar}>
					<SideBar routes={routes}/>
				</Grid>
				<Grid item xs={10} className={classes.content}>
					<Switch>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={`/${route.path}`}
								exact
								component={route.component}/>
						))}
						<Redirect to={`/${routes[0].path}`}/>
					</Switch>
				</Grid>
			</Grid>
		</Router>
	</Fragment>)}
  
MainRouter.propTypes = {
	classes: PropTypes.object
}

const styles = {
	sideBar : {
		backgroundColor: '#17003D',
		height: '100vh',
		fontColor: 'white'
	},
	content: {
		backgroundColor: '#f0eef7',
		height: '100vh '
	}
}

export default withStyles(styles)(MainRouter)