export default function ScrollToSection(event: any) {
  event.preventDefault()
  const targetId = event.target.getAttribute('href').substring(1)
  const targetSection = document.getElementById(targetId)
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth',
    })
  }
}
