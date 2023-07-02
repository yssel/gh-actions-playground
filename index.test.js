const { helloWorld, tellDate } = require("./index");
describe("tell date", () => {
  test("greets you", () => {
    console.log = jest.fn();
    helloWorld();
    expect(console.log).toHaveBeenCalledWith(
      "Hello world from the github actions demo package!"
    );
  });
});

describe("tell date", () => {
  beforeEach(() => {
    const mockedDate = new Date(2023, 6, 4);

    jest.useFakeTimers("modern");
    jest.setSystemTime(mockedDate);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("tells the day correctly", () => {
    console.log = jest.fn();
    tellDate();
    expect(console.log).toHaveBeenCalledWith("It's Tuesday, innit!");
  });
});
