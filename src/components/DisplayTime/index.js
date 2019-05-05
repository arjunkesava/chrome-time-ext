import React from 'react';

export default class DisplayTime extends React.Component {

    state = {
        hours: Math.floor(this.props.timeDiff / 3600) % 24,
        minutes: Math.floor(this.props.timeDiff / 60) % 60,
        seconds: this.props.timeDiff % 60,
        microSeconds: 999
    }

    componentDidMount () {
        setInterval(() => this.tickSeconds(), 1000);
        setInterval(() => this.tickMicroSeconds(), 0);
    }

    tickMicroSeconds = () => {
        if (this.state.microSeconds > 0) {
            this.setState(state => ({
                microSeconds: state.microSeconds - 1
            }))
        } else {
            this.setState({
                microSeconds: 999
            })
        }
    }

    tickSeconds = () => {
        if (this.state.seconds < 59) {
            this.setState(state => ({
                seconds: state.seconds - 1
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
                minutes: state.minutes - 1,
                seconds: state.seconds - 1
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
                minutes: state.minutes - 1,
                seconds: state.seconds - 1,
                hours: state.hours - 1,
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
        
        return (
            <h1 className='time-count'>
                {hours}:{minutes}:{seconds}:{microSeconds}
            </h1>   
        )
    }
}
