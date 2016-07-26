describe("isEven()", function() {

  it("isEven(50) should be true", function() {
    expect(isEven(50)).toEqual(true);
  });

  it("isEven(75) should be false ", function() {
    expect(isEven(75)).toEqual(false);
  });

   it("isEven(-1) should be false ", function() {
    expect(isEven(-1)).toEqual(false);
  });

});