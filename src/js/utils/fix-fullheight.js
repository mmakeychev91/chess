import { throttle } from './throttle'

export const fixFullHeight = () => {
  const getFullHeight = () => {
    let vh = window.innerHeight
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  let fixHeight = throttle(getFullHeight)

  fixHeight()

  window.addEventListener('resize', fixHeight)
}
