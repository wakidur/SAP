function Hello(props) {
    return <div> Hello {  props.name } </div>
}


// Here's the same component but written in ES6;
const Hello = ({ name }) => <div> Hello { name } </div>

// Here's the same component, but written as a class component
class Hello extends Component {
    render() {
        return <div> Hello { this.props.name } </div>
    }
}

// 
/**
 * Functional components are more reusable
 * Let’s take a peek at two implementations of a custom checkbox.
 * 
 * 
 */

 // Functional Checkbox:
const Checkbox = ({checked, label, handleClick}) => (
    <div 
        className={checked ? 'Checkbox-container checked' : 'Checkbox-container'}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        data-label={label}
        >
            <p className="label" data-label={label}>{label}</p>
        </div>
);

// PropTypes
Checkbox.propTypes = {
    checked: propTypes.bool,
    label: propTypes.string.isRequired,
    handleClick: propTypes.func.isRequired
}

Checkbox.defaultProps = {
    checked: true
}


// Class Checkbox

render() {
    return(
        <div 
        className={checked ? 'a': 'b'}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        data-label={label}
        >
            <p className="label" data-label={label}> {label}</p>
        </div>
    )
}


// Class-Based Component
class Checkbox extends Component {
    state = {  }
    constructor() {
        super();
        this.state = {
            checked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            checked: !this.state.checked
        })
    }
    render() { 
        return ( <div 
            className={checked ? 'a': 'b'}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            data-label={label}
            >
                <p className="label" data-label={label}> {label}</p>
            </div> );
    }
}
 
export default Checkbox;