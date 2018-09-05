import { Badge, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import PropTypes from 'prop-types';

class LegendItem extends Component {
    constructor(props) {
        super(props);
    }

    getColorClass(color) {
        let colorClass = styles[color];
        return colorClass ? colorClass : styles.red;
    }

    render() {
        const {text, color, style ,classes} = this.props;                
        console.log(style);
        return (
        <div style={style}>
            <div 
                style={styles.ItemContainer}>
                <Badge 
                    classes={{badge: classes[color] ? classes[color] : classes.red}}/>
                <Typography 
                    style={styles.TypographyStyle}
                    variant="subheading">
                    {text}
                </Typography>
            </div>
        </div>
        );
    }
}

const styles = {
    ItemContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 11px', // Size of badge width
    },
    TypographyStyle: {
        marginLeft: '15px'
    }
}

const badgeStyle = {
    height: '17px',
    width: '25px',
    top: '-9px',
    borderRadius: '25%',
    marginRight: '10px'
};

const componentStyle = {    
    purple: {
        ...badgeStyle,
        backgroundColor: '#c800ff'
    },
    green: {
        ...badgeStyle,
        backgroundColor: '#00c97d'
    },
    red: {
        ...badgeStyle,
        backgroundColor: '#e84f4f'
    }
}

LegendItem.propTypes = {
    color: PropTypes.text,
    text: PropTypes.text
}

export default withStyles(componentStyle)(LegendItem);