import { Component } from 'react'
import { connect } from 'react-redux'

import ThingsList from '../../components/ThingsList/ThingsList'
import ThingAdder from '../../components/ThingAdder/ThingAdder'

import {
  saveThing,
  deleteThing,
  decrementThingCount,
  incrementThingCount,
  resetThingCount
} from '../../redux/things/thingsActions'

export class IndexPage extends Component {

  state = {

  }

  addThing = thing => {
    if (thing) {
      this.props.saveThing(thing)
    }
  }

  incrementThingCount = thingId => this.props.incrementThingCount(thingId)
  decrementThingCount = thingId => this.props.decrementThingCount(thingId)
  resetThingCount = thingId => this.props.resetThingCount(thingId)
  deleteThing = thingId => this.props.deleteThing(thingId)

  render() {
    return (
      <div className="index-page container">
        <h1>Things Counter App</h1>
        <ThingAdder addThing={this.addThing} />
        <ThingsList
          things={this.props.things}
          incrementThingCount={this.incrementThingCount}
          decrementThingCount={this.decrementThingCount}
          resetThingCount={this.resetThingCount}
          deleteThing={this.deleteThing}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { thingsApp: { things } } = state
  localStorage.setItem('ThingsCounterAppData', JSON.stringify({ things }))
  return { things }
}

const mapDispatchToProps = {
  saveThing,
  deleteThing,
  incrementThingCount,
  decrementThingCount,
  resetThingCount
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)