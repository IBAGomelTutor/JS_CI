describe("min()", function() {

  it("min(0, 10) should return 0", function() {
    expect(min(0,10)).toEqual(0);
  });

  it("min(0, -10) should return -10 ", function() {
    expect(min(0, -10)).toEqual(-10);
  });

});