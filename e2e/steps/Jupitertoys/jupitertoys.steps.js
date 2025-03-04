const { I, jupiterPage, contactPages } = inject();

Given('I navigate to Jupiter home page', () => {
  I.amOnPage('https://jupiter.cloud.planittesting.com');
  I.refreshPage();
  I.waitForVisible(jupiterPage.locators.loginLink);
});

When('I see page is ready', () => {
  I.see('Jupiter Toys', 'h1');
});

Then('I should see the jupiter toys logo', () => {
  // From "e2e\features\Jupiter\JupiterToys.feature" {"line":8,"column":9}
  I.see('Jupiter Toys', '.brand');
});

Then('I should see the login link', () => {
  // From "e2e\features\Jupiter\JupiterToys.feature" {"line":9,"column":9}
  I.seeElement(jupiterPage.locators.loginLink);
});

Then('I should see the contact link', () => {
  // From "e2e\features\Jupiter\JupiterToys.feature" {"line":10,"column":9}
  I.seeElement(jupiterPage.locators.contactLink);
});

Given('I navigate to the contact page', () => {
  I.click(jupiterPage.locators.contactLink);
  I.seeInCurrentUrl('/contact');
});

When('I click the submit button', () => {
  // From "e2e\features\Jupiter\JupiterToys.feature" {"line":27,"column":9}
  I.waitForVisible(contactPages.locators.forename);
  I.click('.btn-contact');
  //I.click(contactPages.locators.submitButton);
  I.wait(5);
});

Then('I should see error messages', () => {
  // From "e2e\features\Jupiter\JupiterToys.feature" {"line":19,"column":9}
  I.seeElement(contactPages.locators.forenameErr);
  I.seeElement(contactPages.locators.emailErr);
  I.seeElement(contactPages.locators.messageErr);
});

When('I populate mandatory fields', () => {
  // From "e2e\features\Jupiter\JupiterToys.feature" {"line":26,"column":9}
  I.fillField('#forename', 'Seham');
  I.fillField('#email', 'sehamsultana@jupitor.com');
  I.fillField('#message', 'Jupitor Toy Test');
});

Then('I should not see error messages', () => {
  // From "e2e\features\Jupiter\JupiterToys.feature" {"line":21,"column":9}
  I.dontSeeElement(contactPages.locators.forenameErr);
  I.dontSeeElement(contactPages.locators.emailErr);
  I.dontSeeElement(contactPages.locators.messageErr);
});

Then('I should see a successful submission message', () => {
  // From "e2e\features\Jupiter\JupiterToys.feature" {"line":28,"column":9}
  I.waitForElement(contactPages.locators.successAlert, 20);
  I.see('Thanks Seham, we appreciate your feedback.', '.alert-success');
});

Given('I navigate to Shop page', () => {
  // From "e2e\features\Jupiter\JupiterToys.feature" {"line":33,"column":9}
  I.click(jupiterPage.locators.shopeLink);
  I.wait(2);
});

Then('I buy {int} Stuffed Frog, 5 Fluffy Bunny, 3 Valentine Bear', p1 => {
  //Select 2 Stuffed Frog
  I.click('#product-2 .btn-success');
  I.click('#product-2 .btn-success');

  //Select 5 Fluffy Bunny
  I.click('#product-4 .btn-success');
  I.click('#product-4 .btn-success');
  I.click('#product-4 .btn-success');
  I.click('#product-4 .btn-success');
  I.click('#product-4 .btn-success');

  //Select 5 Valentine Bear
  I.click('#product-7 .btn-success');
  I.click('#product-7 .btn-success');
  I.click('#product-7 .btn-success');
});

Given('I navigate to the cart page', () => {
  // From "e2e\features\Jupiter\JupiterToys.feature" {"line":33,"column":9}
  //I.click(jupiterPage.locators.cartLinkSelector);
  I.click('#nav-cart');
  I.wait(5);
  I.seeInCurrentUrl('/cart');
});

Then('I should see the correct subtotal for each product', () => {
  // From "e2e\features\Jupiter\JupiterToys.feature" {"line":34,"column":9}
  // Verify the subtotal of the product
  I.waitForElement('.cart-items', 20);
  I.see('Stuffed Frog', '.cart-items .cart-item'); // Verify the product name and subtotal for Stuffed Frog (2 items, $10.99 * 2 = $21.98)
  I.see('$10.99', 'tr.ng-scope td:nth-child(2)');
  I.see('$21.98', 'tr.ng-scope td:nth-child(4)');

  I.see('Fluffy Bunny', '.cart-items .cart-item'); // Verify the product name and subtotal for Fluffy Bunny (2 items, $9.99 * 5 = $49.95)
  I.see('$9.99', 'tr.ng-scope td:nth-child(2)');
  I.see('$49.95', 'tr.ng-scope td:nth-child(4)');

  I.see('Valentine Bear', '.cart-items .cart-item'); // Verify the product name and subtotal for Valentine Bear (3 items, $14.99 * 3 = $44.97)
  I.see('$14.99', 'tr.ng-scope td:nth-child(2)');
  I.see('$44.97', 'tr.ng-scope td:nth-child(4)');
});

Then('I should see the correct price for each product', () => {
  // From "e2e\features\Jupiter\JupiterToys.feature" {"line":35,"column":9}
  I.see('Stuffed Frog', 'tr.ng-scope td.ng-binding');
  I.see('$10.99', 'tr.ng-scope td:nth-child(2)');
  I.see('Fluffy Bunny', 'tr.ng-scope td.ng-binding');
  I.see('$9.99', 'tr.ng-scope td:nth-child(2)');
  I.see('Valentine Bear', 'tr.ng-scope td.ng-binding');
  I.see('$14.99', 'tr.ng-scope td:nth-child(2)');
});

Then('I should see the total equals the sum of the subtotals', () => {
  // From "e2e\features\Jupiter\JupiterToys.feature" {"line":36,"column":9}
  let subtotalStuffedFrog = 21.98; // subtotal for Stuffed Frog
  let subtotalFluffyBunny = 49.95; // subtotal for Fluffy Bunny
  let subtotalValentineBear = 44.97; // subtotal for Valentine Bear

  let expectedTotal = Number(
    subtotalStuffedFrog + subtotalFluffyBunny + subtotalValentineBear,
  );
  I.see(`Total: ${expectedTotal}`, '.total.ng-binding'); /// Verify the total matches the sum of the subtotals
});

export {};
