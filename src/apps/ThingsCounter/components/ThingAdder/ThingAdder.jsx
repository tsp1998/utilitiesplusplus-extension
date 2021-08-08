import { useState } from 'react'

const ThingAdder = props => {
  const [thing, setThing] = useState('')

  const handleChange = e => {
    const { type, value } = e.target
    if (value) {
      setThing(value)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (thing) {
      props.addThing({ name: thing })
      setThing('')
    }
  }

  return (
    <form className="thing-adder" onSubmit={handleSubmit}>
      <input type="text" name="thing" id="thing" onChange={handleChange} value={thing} />
      <button type="submit">Add Thing</button>
    </form>
  )
}

export default ThingAdder