// features/support/world.js
function World() {
  this.greeting = 'hello'
}

module.exports = function() {
  this.World = World
}
