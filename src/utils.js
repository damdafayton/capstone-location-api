export const flagSvgLink = (countryISO) => `https://flagcdn.com/${countryISO.toLowerCase()}.svg`;

export function bgSelector(i, horizontal = false) {
  const LIGHT = 'bg-light';
  const DARK = 'bg-dark';
  let selected;
  selected = (i % 2 === 0) ? 'bg-light' : 'bg-dark';
  if (horizontal) {
    return selected;
  }
  const spotToSwitch = (i - 2) % 4;

  if (spotToSwitch === 0) {
    selected = DARK;
  } else if (spotToSwitch === 1) {
    selected = LIGHT;
  }
  return selected;
}

export function sectionBgSelector(length) {
  let className = 'bg-light';
  for (let i = 0; i < length; i += 1) {
    if (i % 2 === 0) {
      className = className === 'bg-dark' ? 'bg-light' : 'bg-dark';
    }
  }
  return className;
}
