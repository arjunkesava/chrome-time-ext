import React from 'react';

export default class DisplayTime extends React.Component {

    state = {
        hours: 20,
        minutes: 59,
        seconds: 55,
        microSeconds: 0,
        todayDate: new Date()
    }

    componentDidMount () {
        setInterval(() => this.tickSeconds(), 1000);
    }

    tickSeconds = () => {
        if (this.state.seconds < 59) {
            this.setState(state => ({
                seconds: state.seconds + 1
            }))
        } else {
            this.setState({
                seconds: 0
            })
            this.tickMinutes()
        }
    }

    tickMinutes = () => {
        if (this.state.minutes < 59) {
            this.setState(state => ({
                minutes: state.minutes + 1,
                seconds: state.seconds + 1
            }))
        } else {
            this.setState({
                minutes: 0
            })
            this.tickHours()
        }
    }

    tickHours = () => {
        if (this.state.hours < 23) {
            this.setState(state => ({
                minutes: state.minutes + 1,
                seconds: state.seconds + 1,
                hours: state.hours + 1,
            }))
        } else {
            this.setState({
                hours: 0,
            })
        }
    }

    padTime = (time) => {
        // Note, time is a "number", we convert to string to find length
        if (time.toString().length < 2) {
            return `0${time}`
        }
        return time
    }

    render () {
        let {
            hours,
            minutes,
            seconds,
            microSeconds
        } = this.state
        
        hours = this.padTime(hours)
        minutes = this.padTime(minutes)
        seconds = this.padTime(seconds)
        microSeconds = this.padTime(microSeconds)

        return (
            <h1 className='time-count'>
                {hours}:{minutes}:{seconds}:{microSeconds}
            </h1>   
        )
    }
}
