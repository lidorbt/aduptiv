/* global require */
import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import { NavLink, withRouter } from 'react-router-dom'
import {List, ListItem, ListItemIcon, ListItemText, Icon} from '@material-ui/core'

class SideBar extends Component {
	constructor(props) {
		super(props)
	}
  
	isCurrentRoute(pathname){
		return this.props.location.pathname === `/${pathname}`
	}

	render() {
		const { classes, routes } = this.props
		return (
			<Fragment>
				<div className={classes.logoContainer}>
					<img src={require('../../Assets/aduptiv.jpg')} className={classes.logo}/>
				</div>
				<List>
					{routes.map((route, index) => (
						<Fragment key={index}>
							<NavLink to={`/${route.path}`} className={classes.navLink}>
								<ListItem selected={this.isCurrentRoute(route.path)} button classes={{button: classes.listItem, selected: classes.listItemSelected}}>
									<ListItemIcon 
										classes={{root: this.isCurrentRoute(route.path)? classes.listItemIconSelected : classes.listItemIcon}}>{/*TODO:this condition should be replaced */}
										<Icon >{route.icon}</Icon>
									</ListItemIcon>
									<ListItemText inset primary={route.title} classes={{primary: classes.listItemText}}/>
								</ListItem>
							</NavLink>
						</Fragment>
					))}
				</List>
			</Fragment>)
	}
}

SideBar.propTypes = {
	classes: PropTypes.object,
	routes: PropTypes.array.isRequired,
	location: PropTypes.object
}

const styles = {
	navLink: {
		textDecoration: 'none',
	},
	listItem : {},
	listItemText : {
		color: '#fff',
	},
	listItemSelected: {
		color: '#71feca',
		backgroundColor: '#1c004b',
		boxShadow:'10px 0px 0px 0px #71feca inset'
	},
	listItemIcon: {
		color: '#fff'
	},
	listItemIconSelected: {
		color: '#71feca'
	},
	logo: {
		height: '10vh',
		minHeight: '80px',
		padding: '10px 0px',
		margin: 'auto'
	},
	logoContainer: {
		display: 'flex',
		backgroundColor: 'white',
		alignItems: 'center',
		width: '100%'
	}
}

export default withStyles(styles)(withRouter(SideBar))
