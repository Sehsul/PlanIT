const I = actor();

module.exports = {
  locators: {
    forename: '#forename',
    surname: '#surname',
    email: '#email',
    telephone: '#telephone',
    message: '#message',
    //submitButton: '.btn-contact btn btn-primary',
    forenameErr: '#forename-err',
    emailErr: '#email-err',
    messageErr: '#message-err',
    successAlert: '.alert-success',
  },

  async fillContactForm(forename, surname, email, telephone, message) {
    I.fillField(this.locators.forename, forename);
    I.fillField(this.locators.surname, surname);
    I.fillField(this.locators.email, email);
    I.fillField(this.locators.telephone, telephone);
    I.fillField(this.locators.message, message);
  },

  async submitContactForm() {
    I.click(this.locators.submitButton);
  },

  async verifyErrorMessages() {
    I.see('Forename is required');
    I.see('Email is required');
    I.see('Message is required');
  },

  async verifyNoErrorMessages() {
    I.dontSee('Forename is required');
    I.dontSee('Email is required');
    I.dontSee('Message is required');
  },

  async verifySuccessfulSubmission() {
    I.see('Thanks for getting in touch');
  },
};
