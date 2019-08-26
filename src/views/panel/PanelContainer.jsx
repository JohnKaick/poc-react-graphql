import React from 'react'
import PanelComponent from './PanelComponent'

class PanelContainer extends React.Component {

    state = {
        ...this.props.deliveries,
    }

    render() {
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
