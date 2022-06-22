const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`
const setBodyRandomBackground = (color = getRandomColor()) => document.body.style.background = color

export const randomBgColorInit = (intervalTime = 5000) => {
  setBodyRandomBackground()
  window.setInterval(setBodyRandomBackground, intervalTime)
}
