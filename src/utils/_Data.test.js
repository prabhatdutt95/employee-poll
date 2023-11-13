import { _saveQuestion, _saveQuestionAnswer, _getUsers } from "./_DATA";

const mockUsers = {
  john_doe: {
    id: "john_doe",
    password: "password123",
    name: "John Doe",
    avatarURL: "/assets/images/avatar1.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
    },
    questions: ["8xf0y6ziyjabvozdd253nd"],
  },
};

// Mock the generateUID function which should be imported within your question module
jest.mock("./_DATA", () => {
  const originalModule = jest.requireActual("./_DATA");
  return {
    ...originalModule,
    generateUID: () => "mock-id",
    users: {
      sarahedo: {
        answers: {},
      },
    }, // adding mocked users object
    questions: {
      "8xf0y6ziyjabvozdd253nd": {
        optionOne: {
          votes: [],
        },
        optionTwo: {
          votes: [],
        },
      },
    }, // adding mocked questions object
    _getUsers: jest.fn(() => Promise.resolve({ ...mockUsers })),
  };
  // Replace with the actual path and mock implementation
});

describe("_saveQuestion", () => {
  it("saves a question correctly when passed valid data", async () => {
    // Define a mock question with valid data
    const mockQuestion = {
      optionOneText: "Option One",
      optionTwoText: "Option Two",
      author: "John Doe",
    };

    // Call the _saveQuestion function with the mock question
    const result = await _saveQuestion(mockQuestion);

    // Assert the result contains the correct structure and data
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("timestamp");
    expect(result).toHaveProperty("author", mockQuestion.author);
    expect(result).toHaveProperty("optionOne.votes", []);
    expect(result).toHaveProperty("optionOne.text", mockQuestion.optionOneText);
    expect(result).toHaveProperty("optionTwo.votes", []);
    expect(result).toHaveProperty("optionTwo.text", mockQuestion.optionTwoText);
  });

  it("returns an error when passed incorrect data", async () => {
    const questionData = {
      optionOneText: "", // Incorrect data: empty string
      optionTwoText: "Option Two",
      author: "John Doe",
    };

    await expect(_saveQuestion(questionData)).rejects.toMatch(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

// Mocking the global data structures
let users = {
  sarahedo: {
    answers: {},
  },
};
let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    optionOne: {
      votes: [],
    },
    optionTwo: {
      votes: [],
    },
  },
};

// New describe block for _saveQuestionAnswer
describe("_saveQuestionAnswer", () => {
  // Before each test, reset the mock data to initial state
  beforeEach(() => {
    users = {
      sarahedo: {
        answers: {},
      },
    };
    questions = {
      "8xf0y6ziyjabvozdd253nd": {
        optionOne: {
          votes: [],
        },
        optionTwo: {
          votes: [],
        },
      },
    };
  });

  it("correctly saves a question answer", async () => {
    // Define a mock answer with valid data
    const mockAnswer = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };

    // Assert that the promise resolves
    await expect(_saveQuestionAnswer(mockAnswer)).resolves.toBe(true);
  });

  it("rejects when provided with incomplete data", async () => {
    // Define incomplete input data for the test
    const incompleteAnswer = {
      authedUser: "sarahedo",
      qid: "", // Intentionally left blank to simulate an error
      answer: "optionOne",
    };

    // Assert that the promise rejects with the expected error message
    await expect(_saveQuestionAnswer(incompleteAnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});

describe("_getUsers", () => {
  it("returns a promise that resolves to the mock users object", async () => {
    // Act
    const usersPromise = _getUsers();

    // Assert
    await expect(usersPromise).resolves.toEqual(mockUsers);
  });
});
