import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'utils/store'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 5,
    textAlign: 'center',
  },
})

class Report extends Component {
  static propTypes = {
    'classes': PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { classes } = this.props

    return (
      <Fragment>
        directorios
      </Fragment>
    )
  }
}


export default connect(withStyles(styles)(Report))
