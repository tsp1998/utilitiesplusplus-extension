import { Component } from 'react'

import './LinksOpenerPage.css'

export class LinksOpenerPage extends Component {

  state = {
    linksHistory: [],
    link: '',
    linksPrefixes: [],
    linkPrefix: '',
    linksPrefixPreference: {
      enabled: false,
      currentPrefix: ''
    }
  }

  componentDidMount = () => {
    const newState = { linksHistory: [], linksPrefixes: [], linksPrefixPreference: {} }
    Object.keys(newState).forEach(key => {
      try {
        const dataFromLocalStorageForKey = localStorage.getItem(`${key}Data`)
        newState[key] = dataFromLocalStorageForKey ? JSON.parse(dataFromLocalStorageForKey) : []
      } catch (error) { }
    })

    this.setState({ ...newState })
  }

  handleChange = e => {
    const { target: { name, value, type, nodeName } } = e || {}

    switch (nodeName) {
      case 'INPUT': {
        switch (type) {
          case 'checkbox':
            const { linksPrefixPreference } = this.state
            this.setState({
              ...this.state, linksPrefixPreference: {
                ...linksPrefixPreference,
                enabled: !linksPrefixPreference.enabled
              }
            })
            break;
          case 'text':
            this.setState({ [name]: value })
            break;
        }
      } break;
      case 'SELECT': {
        this.setState({ [name]: value })
      } break;
    }
  }

  handleLinkSubmit = e => {
    e.preventDefault()

    const { linksHistory, link, linksPrefixPreference, linkPrefix } = this.state
    if (!link) { return }
    // let updatedLink = linksPrefixPreference.enabled ? `${linkPrefix}${link}` : link
    let updatedLink = true ? `${linkPrefix}${link}` : link
    updatedLink = updatedLink.indexOf('http') > -1 ? updatedLink : `https://${updatedLink}`
    this.setState({ linksHistory: [...linksHistory, updatedLink] }, () => {
      localStorage.setItem('linksHistoryData', JSON.stringify(this.state.linksHistory))
    })

    window.open(updatedLink, '_blank')
  }

  handlePrefixSubmit = e => {
    e.preventDefault()

    const { linkPrefix, linksPrefixes } = this.state
    const updatedLinkPrefix = linkPrefix.indexOf('http') > -1 ? linkPrefix : `https://${linkPrefix}`
    this.setState({ linksPrefixes: [...linksPrefixes, updatedLinkPrefix] }, () => {
      localStorage.setItem('linksPrefixesData', JSON.stringify(this.state.linksPrefixes))
    })
  }

  handleLinkClick = e => {
    e.preventDefault()
    window.open(e.target.href, '_blank')
  }

  render() {
    const {
      link, linkPrefix, linksHistory, linksPrefixes, linksPrefixPreference: {
        enabled: linkPrefixEnabled
      }
    } = this.state

    return (
      <div className="links-opener-page container">
        <div className="prefix-container">
          <div className="form-control">
            <input
              type="checkbox"
              name="linkPrefixEnabled"
              enabled={linkPrefixEnabled ? 'enabled' : ''}
              onChange={this.handleChange}
            />
          </div>
          <select name="linkPrefix" onChange={this.handleChange}>
            <option value="">Select Prefix</option>
            {
              linksPrefixes.map((linkPrefix, i) => (
                <option key={i} value={linkPrefix}>{linkPrefix}</option>
              ))
            }
          </select>

          <form name="link-prefix-form" onSubmit={this.handlePrefixSubmit}>
            <input
              type="text"
              className="link-prefix"
              name="linkPrefix"
              value={linkPrefix}
              onChange={this.handleChange}
            />
            <button>Add Prefix</button>
          </form>
        </div>

        <form name="link-form" onSubmit={this.handleLinkSubmit}>
          <input
            type="text"
            className="link"
            name="link"
            value={link}
            onChange={this.handleChange}
          />
          <button>Open</button>
          <button type="reset" onClick={() => this.setState({ link: '' })}>clear</button>
        </form>

        <div className="links-history">
          {
            linksHistory.map((link, i) => (
              <a key={i} href={link} className="link" onClick={this.handleLinkClick}>{link}</a>
            ))
          }
        </div>
      </div>
    )
  }
}

export default LinksOpenerPage