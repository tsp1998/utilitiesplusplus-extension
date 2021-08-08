const LOCAL_STORAGE_KEY = 'utilities-custom-functions';

async function onInit() {
  let customFunctionsMap = await getDataFromChromeStorage(LOCAL_STORAGE_KEY) || {}
  const functionNames = Object.keys(customFunctionsMap)
  if (functionNames.length) {
    functionNames.forEach(functionName => {
      try {
        eval(`(${customFunctionsMap[functionName]})`)()
      } catch (error) {
        console.log(`Error with Function ${functionName}`, error)
      }
    })
  }
}

async function getFunctionsListOfUtilities() {
  let customFunctionsMap = await getDataFromChromeStorage(LOCAL_STORAGE_KEY) || {}
  const functionNames = Object.keys(customFunctionsMap)
  if (functionNames.length) {
    functionNames.forEach((functionName, i) => {
      console.log(`${i}. ${functionName}`)
    })
  }
}

async function saveFunctionsToUtilities(...functions) {
  let customFunctionsMap = await getDataFromChromeStorage(LOCAL_STORAGE_KEY) || {}
  if (functions.length) {
    functions.forEach(fun => {
      if (typeof fun === 'function') {
        customFunctionsMap[fun.name] = fun.toString();
      }
    })
  }
  await setDataToChromeStorage(LOCAL_STORAGE_KEY, customFunctionsMap)
}

async function removeFunctiosFromUtilities(...functionNames) {
  let customFunctionsMap = await getDataFromChromeStorage(LOCAL_STORAGE_KEY) || {}
  if (functionNames.length) {
    functionNames.forEach(functionName => {
      if (typeof functionName === 'string' && customFunctionsMap[functionName]) {
        delete customFunctionsMap[functionName]
      }
    })
  }
  await setDataToChromeStorage(LOCAL_STORAGE_KEY, customFunctionsMap)
}

onInit();

window.custom = {
  getFunctionsListOfUtilities,
  saveFunctionsToUtilities,
  removeFunctiosFromUtilities
}