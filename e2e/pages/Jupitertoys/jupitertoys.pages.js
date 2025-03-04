const I = actor();

module.exports = {
  locators: {
    loginLink: '#nav-login',
    cartLinkSelector: '[data-test-id="shopping-cart"]',
    contactLink: '#nav-contact', 
    shopeLink: '#nav-shop',
    
  },

  goto() {
    I.amOnPage('https://jupiter.cloud.planittesting.com');
    I.refreshPage();
    I.waitForVisible(jupiterPage.locators.loginLink);
  },

  verifyProductPrices() {
    I.see('Price: $10.99', '.price-stuffed-frog');
    I.see('Price: $9.99', '.price-fluffy-bunny');
    I.see('Price: $14.99', '.price-valentine-bear');
  },

  verifySubtotals() {
    I.see('Subtotal: $21.98', '.subtotal-stuffed-frog');
    I.see('Subtotal: $49.95', '.subtotal-fluffy-bunny'); 
    I.see('Subtotal: $44.97', '.subtotal-valentine-bear');
  },

  verifyTotal() {
    I.see('Total: 116.9', '.total-price');
  }
};
