import React, { Component } from 'react'
import  { Card, Typography, Icon, Badge } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LegendItem from '../LegendItem/LegendItem.js'
import {Map, TileLayer} from 'react-leaflet'


class HeatMapComponent extends Component {
	state = {
		gender: ''
	  };
	
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div>
			<Card style={styles.HeatMapCard}>		
				<div style={styles.cardHeaderContainer}>
					<section style={styles.headerTextContainer}>
						<Typography 
							variant="title" 
							noWrap
							gutterBottom>
							Total traffic heatmap
						</Typography>

						<Icon style={styles.MapIcon}>
							{"map"}
						</Icon>		
						<section style={styles.legendContainer}>
							<LegendItem 
								style={styles.LegendItem}
								text={"High"}
								color={"purple"}/>
							<LegendItem 
								style={styles.LegendItem}
								text={"Mid"}
								color={"green"}/>				
							<LegendItem 
								style={styles.LegendItem}
								text={"Low"} 
								color={"red"}/>			
						</section>
					</section>

					{/* A Select control will be developed in the future, is used as is for POC*/}
						<FormControl style={styles.FormControlStyle}>
							<InputLabel htmlFor="gender-simple">Gender</InputLabel>
							<Select
								value={this.state.gender}
								onChange={this.handleChange}
								inputProps={{
								name: 'gender',
								id: 'gender-simple',
								}}
							>
								<MenuItem value="">
								<em>None</em>
								</MenuItem>
								<MenuItem value={'male'}>Male</MenuItem>
								<MenuItem value={'female'}>Female</MenuItem>
							</Select>						
						</FormControl>										
				</div>	

				<Map center={[32.0853,34.7818]} zoom={9} style={styles.MapContainerStyle}>			
					<TileLayer
					attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</Map>					
			</Card>


</div>
		);
	}
}

const styles = {
	cardHeaderContainer: {
		display:"flex", 
		alignItems: "center",
	},
	headerTextContainer: {
		minWidth: '90%',
		display: 'flex',
		alignItems: "center"
	},
	legendContainer: {
		display: 'flex',
		alignItems: "center",
		marginLeft: '5%'
	},
	HeatMapCard: {		
		padding: '30px',
		margin: '20px 30px',
		marginTop: 'calc(100px + 2%)'
	},
	MapIcon: {
		marginLeft: '4%',
		fontSize: '2em',
		opacity: '0.9'
	},
	LegendItem: {
		marginRight: '70%'
	},
	FormControlStyle: {
		minWidth: 160,
		align: 'left'
	},
	MapContainerStyle: {
		margin: '2vh 2vh',
		minHeight: '300px',
		height: '70vh'
	}
};

export default HeatMapComponent