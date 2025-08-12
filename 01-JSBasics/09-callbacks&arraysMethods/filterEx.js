function validUserNames(usernames) {
  return usernames.filter((names) => names.length < 10);
}

const userNames = [
  "mark",
  "staceysmom1978",
  "q29832128238983",
  "carrie98",
  "MoanaFan",
];

console.log(validUserNames(userNames));
