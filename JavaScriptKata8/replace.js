// Correct the mistakes of the character recognition software

function correct(string)
{
	let newString = string. replace(/[0]/g, "O");
  let str = newString. replace(/[5]/g, "S");
  let answer = str. replace(/[1]/g, "I");
  return answer
}
