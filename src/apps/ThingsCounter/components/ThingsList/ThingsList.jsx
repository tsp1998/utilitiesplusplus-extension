import './ThingsList.css'

function ComponentName(props) {
  const { incrementThingCount, decrementThingCount, resetThingCount, deleteThing } = props
  return (
    <ul className="things-list">
      {
        props.things.map(thing => (
          <li className="thing-item" key={thing.id}>
            <button className="btn btn-warning" onClick={() => decrementThingCount(thing.id)}>-</button>
            <span className="thing-name">{thing.name} - {thing.count}</span>
            <button className="btn btn-success" onClick={() => incrementThingCount(thing.id)}>+</button>
            <button className="btn" onClick={() => resetThingCount(thing.id)}>Reset</button>
            <button className="btn btn-danger" onClick={() => deleteThing(thing.id)}>Delete</button>
          </li>
        ))
      }
    </ul>
  )
}

export default ComponentName