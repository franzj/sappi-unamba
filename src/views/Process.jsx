import React, {Component} from 'react'
import {DirsInput, StartAnalysis, ProgressAnalysis, Report} from 'containers'
import {
  Fade,
  Grid,
  Step,
  Stepper,
  StepLabel
} from '@material-ui/core'


class Process extends Component {
  constructor (props) {
    super(props)

    this.state = {
      'activeStep': 0,
      'steps': [
        'Seleccionar directorios',
        'Listo para iniciar análisis',
        'Analizando archivos',
        'Reporte de análisis'
      ]
    }

    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  handleNext () {
    this.setState((prevState) => ({'activeStep': prevState.activeStep + 1}))
  }

  handleBack () {
    this.setState((prevState) => ({'activeStep': prevState.activeStep - 1}))
  }

  getStepProcess () {
    const {activeStep} = this.state

    if (activeStep === 0) {
      return <DirsInput/>
    } else if (activeStep === 1) {
      return <StartAnalysis/>
    } else if (activeStep === 2) {
      return <ProgressAnalysis/>
    }

    return <Report/>
  }

  render () {
    const {activeStep, steps} = this.state

    return (
      <Fade in={true}>
        <Grid container spacing={24} direction="column">
          <Grid item>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item>
            {this.getStepProcess()}
          </Grid>
        </Grid>
      </Fade>
    )
  }
}


export default Process
