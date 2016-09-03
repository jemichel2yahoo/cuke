// features/step_definitions/my_step_definitions.js

module.exports = function() {
  this.Given('I am on the Cucumber.js GitHub repository', () => {
  })

  this.When('I go to the README file', () => {
  })

  this.Then('I should see "$title" as the page title', (title) => {
    console.log(title)
  })
}
