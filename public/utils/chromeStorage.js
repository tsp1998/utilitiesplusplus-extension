function getDataFromChromeStorage(key) {
  return new Promise(resolve => {
    chrome.storage.local.get(key, result => {
      const data = result && result[key] ? JSON.parse(result[key]) : null
      resolve(data)
    })
  })
}

function setDataToChromeStorage(key, data) {
  return new Promise(resolve => {
    chrome.storage.local.set({ [key]: JSON.stringify(data) }, () => {
      console.log('Saved')
      resolve()
    })
  })
}