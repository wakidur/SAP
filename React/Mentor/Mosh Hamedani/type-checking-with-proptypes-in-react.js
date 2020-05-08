import React, {
    Component
} from 'react'
import PropTypes from 'prop-types'

export default class TypeCheckingWithProptypesInReact extends Component {
    // static object inside the class.
    static propTypes = {
        optionalStateName: PropTypes.string,
        requiredOnChange: PropTypes.func.isRequired,
        optionalCity: PropTypes.instanceOf(City)
    }

    render() {
        return ( <div></div>)
    }
}

// Alternate PropType Example

import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Person  extends Component {
    render() {
        const pizzaPreference = (this.props.likesPizza) ? 'does' : 'does not';
        return (
            <div>
               <h1> {this.props.name} is {this.props.age} years old and {pizzaPreference}</h1>
            </div>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    likesPizza: PropTypes.bool.isRequired
}

// Error Handling with DefaultProps

import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Car  extends Component {
    static defaultProps = {
        company: "Ford"
     };
     static propTypes = {
        company: PropTypes.string
     };
    render() {
        return (
            <div>
                My car is made by {this.props.company}
            </div>
        )
    }
}
