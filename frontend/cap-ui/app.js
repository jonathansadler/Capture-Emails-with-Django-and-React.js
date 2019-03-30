'use strict'

const e = React.createElement;
const useState = React.useState;

const CaptureEmailUI = (props) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        if (value === '' || value === undefined || value === null) {
            setError("Value is required")
            return
        }
        // send to backend!
        setValue('')
        setError('')
    }

    const handleChange = (event) => {
        setValue(event.target.value)
        setError('')
    }
    return <form onSubmit={handleSubmit}>
        <input 
            value={value}
            onChange={handleChange}
            type='email' 
            placeholder='your email' 
            required
             />
        {error && <p>{error}</p>}
        <button type='submit'>Save Email</button>
    </form>
}


// Find all DOM containers, and render our component into them.
var containers = document.querySelectorAll('.cap-ui')
containers.forEach(domContainer => {
    // Read the user ID from a data-* attribute.
    const userid = domContainer.dataset.userid
    // render the component into the DOM
    ReactDOM.render(
      e(CaptureEmailUI, { userid: userid}),
      domContainer
    )
});