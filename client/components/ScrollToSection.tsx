const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault()
  const targetId = (event.target as HTMLAnchorElement)
    .getAttribute('href')
    ?.substring(1)
  if (!targetId) return
  const targetSection = document.getElementById(targetId)
  const navHeight = document.getElementById('nav')?.offsetHeight ?? 0
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - navHeight,
      behavior: 'smooth',
    })
  }
}
export default scrollToSection
