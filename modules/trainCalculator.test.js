const trainCalculate = require('./trainCalculator');

test('returns emissions for a train journey', () => {
  var emissions = "0.04 kg CO2e which is equivalent to 3 kettle boils! ";
  expect(trainCalculate(1000)).toBe(emissions);
});

test('returns emissions for a train journey', () => {
  var emissions = "4.11 kg CO2e which is equivalent to 274 kettle boils! ";
  expect(trainCalculate(100000)).toBe(emissions);
});
