const test = require('ava')
const pkg = require('../../package.json')
const { dependencies, devDependencies } = pkg

test('basic check', t => {
  t.true(true, 'ava works ok')
})

Object.keys(dependencies).forEach(dependency => {
  test(`${dependency} loads ok`, t => {
    const module = require(dependency)
    t.truthy(module)
  })
})

Object.keys(devDependencies).forEach(dependency => {
  test(`${dependency} loads ok`, t => {
    const module = require(dependency)
    t.truthy(module)
  })
})
