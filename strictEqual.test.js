let strictEquals = (a, b) => {
 if (Object.is(a,b)) {
   return true
 }
 if (Object.is(Number.isNaN(a)) && Object.is(Number.isNaN(b))) {
   return false;
 }
 if (Object.is(a) && (Object.is(b))) {
   return true;
 }
}


describe("Given a strictEquals function", () =>{
  describe("When it receives parameter a = 1 and b = 1", () => {
    test("Then it should return true",() => {

      const a = 1;
      const b = 1;
      const expectedResult = true;
      const textResult = strictEquals(a, b);
      expect(expectedResult).toBe(expectedResult)
    })
  })
})

describe ("Given a strictEquals function", () => {
  describe ("When it receives parameter a that is NaN and b that is NaN", () => {
    test("Then it should return false", () => {

      const a = NaN;
      const b = NaN; 
      const expectedResult = false;
      const textResult = strictEquals(a, b);
      expect(expectedResult).toBe(expectedResult)
    })
  })
})


describe ("Given a strictEquals function", () => {
  describe ("When it receives parameter a that is 0 and b that is -0", () => {
    test("Then it should return true", () => {

      const a = 0;
      const b = -0; 
      const expectedResult = true;
      const textResult = strictEquals(a, b);
      expect(expectedResult).toBe(expectedResult)
    })
  })
})

describe ("Given a strictEquals function", () => {
  describe ("When it receives parameter a that is 0 and b that is -0", () => {
    test("Then it should return true", () => {

      const a = -0;
      const b = 0; 
      const expectedResult = true;
      const textResult = strictEquals(a, b);
      expect(expectedResult).toBe(expectedResult)
    })
  })
})

describe ("Given a strictEquals function", () => {
  describe ("When it receives parameter a that is 1 and b that is '1", () => {
    test("Then it should return false", () => {

      const a = 1;
      const b = '1'; 
      const expectedResult = false;
      const textResult = strictEquals(a, b);
      expect(expectedResult).toBe(expectedResult)
    })
  })
})

describe ("Given a strictEquals function", () => {
  describe ("When it receives parameter a that true and b that is false", () => {
    test("Then it should return false", () => {

      const a = true;
      const b = false; 
      const expectedResult = false;
      const textResult = strictEquals(a, b);
      expect(expectedResult).toBe(expectedResult)
    })
  })
})

describe ("Given a strictEquals function", () => {
  describe ("When it receives parameter a that false and b that is false", () => {
    test("Then it should return true", () => {

      const a = false;
      const b = false; 
      const expectedResult = true;
      const textResult = strictEquals(a, b);
      expect(expectedResult).toBe(expectedResult)
    })
  })
})

describe ("Given a strictEquals function", () => {
  describe ("When it receives parameter a that is Water and b that is oil", () => {
    test("Then it should return false", () => {

      const a = 'Water';
      const b = 'oil'; 
      const expectedResult = false;
      const textResult = strictEquals(a, b);
      expect(expectedResult).toBe(expectedResult)
    })
  })
})


test("both parameters are  not equal", () => {
      const a = [ 1, 2, 3, 4 ];
      const b = [1, 2, 3, 5]; 
      const expectedResult = false;
      const textResult = strictEquals(a, b);
  expect(expectedResult).toEqual(expectedResult)
})


test("both parameters are equal", () => {
  const a = [ 1, 2, 3, 4 ];
  const b = [1, 2, 3, 4]; 
  const expectedResult = true;
  const textResult = strictEquals(a, b);
expect(expectedResult).toEqual(expectedResult)
})

test("parameters are both undefined", () => {
  const a = '';
  const b = '';
  const expectedResult = true;
  const textResult = strictEquals(a, b);
expect(expectedResult).toBe(expectedResult)
})

