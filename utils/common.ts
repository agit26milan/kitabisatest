export const formatMoney = (value:number) => {
    if (value) {
      return 'Rp ' + value.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, '$1.')
    }
    return 'Rp ' + 0
  }

  export const handleParamUrl = (url:string, params:any) => {
    if (params) {
      let url2 = url
      Object.keys(params).map((key, index) => {
        if (params[key] && params[key] !== '') {
          url2 += `${index === 0 ? '?' : '&'}${key}=${params[key]}`
        }
      })
      return url2
    } else {
      return url
    }
  }