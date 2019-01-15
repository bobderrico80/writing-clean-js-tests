const ageRanges = [
  { minAge: 0, maxAge: 0, ageName: 'baby' },
  { minAge: 1, maxAge: 3, ageName: 'toddler' },
  { minAge: 4, maxAge: 9, ageName: 'kid' },
  { minAge: 10, maxAge: 12, ageName: 'tween' },
  { minAge: 13, maxAge: 17, ageName: 'teen' },
  { minAge: 18, maxAge: 20, ageName: 'young adult' },
  { minAge: 21, maxAge: 64, ageName: 'adult' },
  { minAge: 65, maxAge: Infinity, ageName: 'senior citizen' },
];

const getAgeRangeName = (age) => {
  for (let index = 0; index < ageRanges.length; index += 1) {
    const ageRange = ageRanges[index];
    if (age >= ageRange.minAge && age <= ageRange.maxAge) {
      return ageRange.ageName;
    }
  }

  return 'senior citizen';
};

module.exports = getAgeRangeName;
