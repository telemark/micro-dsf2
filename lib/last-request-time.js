const moreThanAMinuteAgo = date => date && date < Date.now() - 60000

module.exports = () => {
  let lastRequestTime
  return {
    set: () => {
      lastRequestTime = Date.now()
    },
    get: () => moreThanAMinuteAgo(lastRequestTime)
  }
}
