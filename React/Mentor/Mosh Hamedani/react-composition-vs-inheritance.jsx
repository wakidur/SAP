import React, { Component } from 'react'

export default class Heading  extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
            </div>
        )
    }
}

Heading.propTypes  ={
    message: PropTypes.string,
}

Heading.defaultProps  = {
    message: "Heading one"
}

// Container Component Screen one
import React, { Component } from 'react'

export default class ScreenOne  extends Component {
    render() {
        return (
            <div>
                {/* It passes a custom message as a prop to the Heading component as shown */}
                <Heading message={'Custom Heading for Screen One'}/>
            </div>
        )
    }
}
// Container Component Screen Two
import React, { Component } from 'react'

export default class ScreenTwo  extends Component {
    render() {
        return (
            <div>
                {/* It passes a custom message as a prop to the Heading component as shown */}
                {/* component can be called by another container component.  */}
                {/* And when calling a component, you can pass to it some props.  */}
                <Heading message={'Custom Heading for Screen Two'}/>
            </div>
        )
    }
}

/**
 * What did we just demonstrate?
 */