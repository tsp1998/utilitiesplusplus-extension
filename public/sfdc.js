function getLabelNameForSelectOptionsOnChange() {
  const select = document.querySelector('#p8');
  if (select) {
    select.onchange = () => {
      const currentOptionValue = select.value;
      const currentOption = Array.from(select.options).find(o => o.value === currentOptionValue)

      if (currentOption) {
        console.log(`currentOption`, currentOption)
        let text = currentOption.textContent
        console.log(`text`, text)
        text = text.replace('c:', '')
        let result = text.replace(/([A-Z])/g, " $1");
        let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        finalResult = finalResult.replace('L W C', 'LWC')
        finalResult = finalResult.replace('V F', 'VF')
        finalResult = finalResult.replace('_', '')
        if (finalResult.indexOf('[')) {
          finalResult = finalResult.split(' [')[0];
        }
        console.log(`finalResult`, finalResult)
        console.log(finalResult)
      }
    }
  }
}

function removeAllLWCOptions() {
  const select = document.querySelector('#p8');
  if (select && select.options && select.options.length) {
    Array.from(select.options).forEach(option => {
      if (option.textContent.indexOf('LWC') > -1) {
        select.removeChild(option);
      }
    })
  }
}