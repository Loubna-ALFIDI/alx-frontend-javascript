interface MajorCredits {
    credits: number;
    _majorBrand: void; // This is a brand
  }
  
  interface MinorCredits {
    credits: number;
    _minorBrand: void; // This is a brand
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    console.log("Summing major credits...");
    const result = { credits: subject1.credits + subject2.credits } as MajorCredits;
    console.log("Result:", result);
    return result;
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    console.log("Summing minor credits...");
    const result = { credits: subject1.credits + subject2.credits } as MinorCredits;
    console.log("Result:", result);
    return result;
  }
  
  // Example testing:
  const majorSubject1: MajorCredits = { credits: 10, _majorBrand: undefined };
  const majorSubject2: MajorCredits = { credits: 15, _majorBrand: undefined };
  const minorSubject1: MinorCredits = { credits: 5, _minorBrand: undefined };
  const minorSubject2: MinorCredits = { credits: 8, _minorBrand: undefined };
  
  console.log("Major Credits:");
  sumMajorCredits(majorSubject1, majorSubject2);
  
  console.log("\nMinor Credits:");
  sumMinorCredits(minorSubject1, minorSubject2);
