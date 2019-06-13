'use strict';

describe('Component: PanelComponent', function () {

  // load the controller's module
  beforeEach(module('roompapaApp'));

  var PanelComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PanelComponent = $componentController('panel', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
