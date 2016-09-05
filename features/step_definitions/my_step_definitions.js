// features/step_definitions/my_step_definitions.js

module.exports = function() {
  this.Given('I am on the Cucumber.js GitHub repository', function() {
  })

  this.When('I go to the README file', function() {
  })

  this.Then('I should see "$title" as the page title', function(title) {
    console.log(`${this.greeting}: ${title}`)
  })
}
