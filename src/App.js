import React from 'react'
import {theme} from './appConfig'
import { MuiThemeProvider } from '@material-ui/core'
import MainRouter from './MainRouter'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName()
const jss = create({...jssPreset(), insertionPoint: 'insertion-point-jss'})

const App = () => (
	<JssProvider jss={jss} generateClassName={generateClassName}>
		<MuiThemeProvider theme={theme}>
			<MainRouter/>
		</MuiThemeProvider>
	</JssProvider>
)

export default App