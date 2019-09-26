import { getGreeting } from '../support/app.po';

describe('show-movies', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to show-movies!');
  });
});
