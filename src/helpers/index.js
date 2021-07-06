export const enableMainScrollbar = () => {
  document.body.classList.remove('overflow-hidden')
  document.body.style.paddingRight = ''
}

export const disableMainScrollbar = () => {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth

  if (scrollbarWidth > 0) {
    document.body.classList.add('overflow-hidden')
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }
}
