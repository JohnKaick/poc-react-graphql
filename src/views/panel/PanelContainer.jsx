import React from 'react'
import PanelComponent from './PanelComponent'

class PanelContainer extends React.Component {

    state = {
        ...this.props.deliveries,
    }

    onChange = (e, m) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    render() {
        console.log({...this.props.deliveries})
        return (
            <PanelComponent
                {...this.props}
                {...this.state}
                deliveries={this.props.deliveries}
                onChange={this.onChange}
                onChangeDate={this.onChangeDate}
            />
        )
    }
}

export default PanelContainer
