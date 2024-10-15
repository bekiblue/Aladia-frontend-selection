describe('The registration of the user', () => {
  it('should show an error message with invalid email', () => {
    cy.visit('/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy="input-field"]').clear('be');
    cy.get('[data-cy="input-field"]').type('bereket@gmail');
    cy.get('[data-cy=input-error-message]').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('should remove the error messaage with a valid email', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('[data-cy="input-field"]').clear('b');
    cy.get('[data-cy="input-field"]').type('bereket@gmail.com');
    cy.get('[data-cy=input-error-message]').should('not.exist');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('should show a loading spinner in loading state', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('[data-cy="input-field"]').clear('b');
    cy.get('[data-cy="input-field"]').type('bereket@gmail.com');
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy=loading-spinner').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('should show the registration template to user', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('[data-cy="input-field"]').clear('b');
    cy.get('[data-cy="input-field"]').type('bereket@gmal.com');
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy=registration').should('be.visible');
    
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('should show the verification template after successful registration', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('[data-cy="input-field"]').clear('be');
    cy.get('[data-cy="input-field"]').type('bereket@gmail.com');
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy="name-field"] > [data-cy="input-field"]').clear('b');
    cy.get('[data-cy="name-field"] > [data-cy="input-field"]').type('Bereket');
    cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').clear('A');
    cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').type('Asnake');
    cy.get('[data-cy="email-field"] > [data-cy="input-field"]').clear('be');
    cy.get('[data-cy="email-field"] > [data-cy="input-field"]').type('bereket@gmail.com');
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('B');
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('Beki1234');
    cy.get('[data-cy="comfirm-password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').click();
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('Beki1234@');
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('Beki1234@');
    cy.get('[data-cy="comfirm-password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('B');
    cy.get('[data-cy="comfirm-password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('Beki1234@');
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy=loading-spinner').should('be.visible');
    cy.get('[data-cy=registration').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('should show the home page template after successful verification', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('[data-cy="input-field"]').clear('b');
    cy.get('[data-cy="input-field"]').type('bereket@gmail.com');
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy="name-field"] > [data-cy="input-field"]').click();
    cy.get('[data-cy="name-field"] > [data-cy="input-field"]').clear('B');
    cy.get('[data-cy="name-field"] > [data-cy="input-field"]').type('Bereket');
    cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').clear('T');
    cy.get('[data-cy="surname-field"] > [data-cy="input-field"]').type('Tsegaye');
    cy.get('[data-cy="email-field"] > [data-cy="input-field"]').clear('b');
    cy.get('[data-cy="email-field"] > [data-cy="input-field"]').type('bereket@gmail.com');
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('B');
    cy.get('[data-cy="password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('Beki@1234');
    cy.get('[data-cy="comfirm-password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').clear('B');
    cy.get('[data-cy="comfirm-password-field"] > .mb-1 > [data-cy="input-container"] > [data-cy="input-field"]').type('Beki@1234');
    cy.get('[data-cy="btn"]').click();
    cy.get('[data-cy=otp-input]').eq(0).click();
    cy.get('[data-cy=otp-input]').eq(0).type('0');
    cy.get('[data-cy=otp-input]').eq(1).click();
    cy.get('[data-cy=otp-input]').eq(1).type('0');
    cy.get('[data-cy=otp-input]').eq(2).click();
    cy.get('[data-cy=otp-input]').eq(2).type('0');
    cy.get('[data-cy=otp-input]').eq(3).click();
    cy.get('[data-cy=otp-input]').eq(3).type('0');
    cy.get('[data-cy=otp-input]').eq(4).click();
    cy.get('[data-cy=otp-input]').eq(4).type('0');
    cy.get('[data-cy=otp-input]').eq(5).click();
    cy.get('[data-cy=otp-input]').eq(5).type('0');
    cy.get('[data-cy="btn"]').click();
    /* ==== End Cypress Studio ==== */
  });
})