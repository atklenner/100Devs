function comp1(timeA, timeB) {
  let [daysToTimeA, daysToTimeB] = daysToTime(timeA, timeB);
  const timeAString = timeA.toDateString();
  const timeBString = timeB.toDateString();
  if (daysToTimeA * 2 <= daysToTimeB)
    return `If you thought ${timeAString} was a long wait, wait until you see how long it is until ${timeBString}.`;
  if (daysToTimeA < daysToTimeB)
    return `Don't worry, ${timeBString} isn't too much farther away than ${timeAString} in the scheme of things.`;
  if (daysToTimeA === daysToTimeB)
    return `They're the same number of days away!`;
  return `You know ${timeAString} is closer, right?`;
}

function comp2(timeA, timeB) {
  let [daysToTimeA, daysToTimeB] = daysToTime(timeA, timeB);
  const timeAString = timeA.toDateString();
  const timeBString = timeB.toDateString();
  if (daysToTimeA < daysToTimeB) {
    const howMuchBiggerIsTimeB = Math.floor(daysToTimeB / daysToTimeA);
    return `Looks like ${timeBString} is ${howMuchBiggerIsTimeB} times farther away than ${timeAString}.`;
  }
  if (daysToTimeA > daysToTimeB) {
    const howMuchBiggerIsTimeA = Math.floor(daysToTimeA / daysToTimeB);
    return `Looks like ${timeAString} is ${howMuchBiggerIsTimeA} times farther away than ${timeBString}.`;
  }
  return `Same exact date there, mate.`;
}

function tot(timeA, timeB) {
  let [daysToTimeA, daysToTimeB] = daysToTime(timeA, timeB);
  const timeAString = timeA.toDateString();
  const timeBString = timeB.toDateString();
  const daysBetweenAB = daysToTimeB - daysToTimeA;
  return `You have ${daysToTimeA} days left until ${timeAString}, and ${daysToTimeB} days left until ${timeBString}. There are ${daysBetweenAB} days between them.`;
}

function daysToTime(timeA, timeB) {
  const currentTime = new Date();
  const daysToTimeA = Math.ceil(
    Math.abs(currentTime.getTime() - timeA.getTime()) / (1000 * 60 * 60 * 24)
  );
  const daysToTimeB = Math.ceil(
    Math.abs(currentTime.getTime() - timeB.getTime()) / (1000 * 60 * 60 * 24)
  );
  return [daysToTimeA, daysToTimeB];
}

// feel free to plug these example dates into your functions
const dateA = new Date(2022, 09, 26);
const dateB = new Date(2022, 11, 25);
