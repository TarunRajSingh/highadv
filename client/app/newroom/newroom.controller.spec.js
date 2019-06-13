'use strict';

describe('Component: NewroomComponent', function () {

  // load the controller's module
  beforeEach(module('roompapaApp'));

  var NewroomComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    NewroomComponent = $componentController('newroom', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
