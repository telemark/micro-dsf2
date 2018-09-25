const moreThanTenSecondsAgo = date => date && date < Date.now() - 10000

module.exports = () => {
  let lastRequestTime
  return {
    set: () => {
      lastRequestTime = Date.now()
    },
    get: () => moreThanTenSecondsAgo(lastRequestTime)
  }
}
