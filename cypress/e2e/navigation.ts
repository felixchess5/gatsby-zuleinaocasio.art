/// <reference types="../support/index" />

describe('navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('link to projects works', () => {
    cy.getByText(/projects/i)
      .click({ force: true })
      .waitForRouteChange()
      .getByText(/color/i)
      .assertRoute('/projects')
  })
  it('link to instagram works', () => {
    cy.getByText(/instagram/i)
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/instagram')
  })
  it('link to about works', () => {
    cy.getByText(/about/i)
      .click({ force: true })
      .waitForRouteChange()
      .getByText(/Hi. I'm LekoArts!/i)
      .assertRoute('/about')
  })
  it('link to home works', () => {
    cy.getByText(/about/i)
      .click({ force: true })
      .waitForRouteChange()
      .getByText(/Hi. I'm LekoArts!/i)
      .assertRoute('/about')
      .getByLabelText(/LekoArts, Back to home/i)
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/')
  })
})
