const checkVotingEligibility = (age) =>
  age >= 18 ? "Eligible to vote" : "Not eligible to vote";

console.log(checkVotingEligibility(20));
console.log(checkVotingEligibility(10));