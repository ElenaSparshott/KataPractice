function DNAStrand(dna){

  let newDNA = "";
    for (let x of dna) {
      if(x === "A"){
        newDNA += 'T';
      }else if(x === "T"){
        newDNA += 'A';
      }else if(x === "C"){
        newDNA += 'G';
      }else
        newDNA += 'C';
    }
  return newDNA
}
