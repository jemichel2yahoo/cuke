// features/step_definitions/my_step_definitions.js

module.exports = function () {
  this.Given(/^I am on the Cucumber.js GitHub repository$/, function (callback) {
    // Express the regexp above with the code you wish you had.
    // `this` is set to a World instance.
    callback();
  });

  this.When(/^I go to the README file$/, function (callback) {
    // Express the regexp above with the code you wish you had. Call callback() at the end
    // of the step, or callback(null, 'pending') if the step is not yet implemented:

    //callback(null, 'pending');
    callback();
  });

  this.Then(/^I should see "(.*)" as the page title$/, function (title, callback) {
    // matching groups are passed as parameters to the step definition

    callback();
  });
};
