const { solution } = require("../src");

// describe("Sample Test", () => {
//   it("Test string uppercase", () => {
//     const output = "foo".toUpperCase();
//     const expected = "FOO";
//     expect(output).toStrictEqual(expected);
//   });
// });

// function to check if number is a prime number
 
function solution(num){
  
 if (num < 1){
  console.log("This number is not a prime number");
}

else if (num === 1){
  console.log("1 is not a prime number");
}

else if (num > 1) {
for (var i=2; i<num; i++){
num % i === 0;
}
  console.log("This number is not a prime number");
}

else {
  console.log("This is a prime number");
}
}



describe("Test solutions", () => {
  it("Testcase 0", () => {
    const input = 2;
    const output = solution(input);
    expect(output).toStrictEqual(true);
  });

  it("Testcase 1", () => {
    const input = 24;
    const output = solution(input);
    expect(output).toStrictEqual(false);
  });

  it("Testcase 2", () => {
    const input = 37;
    const output = solution(input);
    expect(output).toStrictEqual(true);
  });

  it("Testcase 3", () => {
    const input = 73;
    const output = solution(input);
    expect(output).toStrictEqual(true);
  });

  it("Testcase 4", () => {
    const input = 56;
    const output = solution(input);
    expect(output).toStrictEqual(false);
  });

  it("Testcase 5", () => {
    const input = 97;
    const output = solution(input);
    expect(output).toStrictEqual(true);
  });
});
