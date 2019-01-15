// A module of complicated logic that is tricky to test

const doComplicatedTask = (input) => {
  // Lots of magical business logic that would take a while to write tests for.
  const output = { output: `complicated task output for input ${input}` };
  return output;
};

const doAnotherComplicatedTask = (input) => {
  // Lots of magical business logic that would take a while to write tests for.
  const output = { output: `another complicated task output for input ${input}` };
  return output;
};

module.exports = {
  doComplicatedTask,
  doAnotherComplicatedTask,
};
