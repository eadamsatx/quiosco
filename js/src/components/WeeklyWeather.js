import React from 'react';
import { withStyles } from '@material-ui/styles';
import DailyWeather from './DailyWeather'
import styled from 'styled-components'

const styleSheet = styled.div`
    justifyContent:"space-between",
    display: "flex",
    marginRight: 32
`

function WeeklyWeather(props){
  const classes = props.classes;
  const result = props.data
  let days
  result.shift()

  days = result.map(day=>
    <DailyWeather data={day} key={day.dt}/>
  )

  return(
    <ul className={classes.daily}>
      {days}
    </ul>
  )
}

export default withStyles(styleSheet)(WeeklyWeather);
