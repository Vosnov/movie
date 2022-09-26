export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const colors = ['#FF5C5C', '#4D7BFF', '#7FFF5B', '#FFFF50', '#FF90FF']

export const getRandomColor = () => {
  const random = getRandomInt(0, colors.length - 1)
  return colors[random]
}