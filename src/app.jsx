import 'typeface-roboto/index.css'
import 'fonts/material-icons.woff2'
import 'css/style.scss'
import ReactDOM from 'react-dom'
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { blue, red } from '@material-ui/core/colors'
import { Help, Home, Process } from 'views'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Provider } from 'utils/store'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
})

const Routers = () => (
  <Router>
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider>
          <Route exact path="/" component={Home} />
          <Route path="/help" component={Help} />
          <Route path="/process" component={Process} />
        </Provider>
      </MuiThemeProvider>
    </Fragment>
  </Router>
)

ReactDOM.render(<Routers />, document.getElementById('app'))
