// Brief description of how I spend my time
// Contact details
// Why I have decided to work as a web developer

interface AboutProps {
  darkTheme: boolean
}
export default function AboutMe({ darkTheme }: AboutProps) {
  return (
    <div id="aboutme" className="flex justify-center items-center h-screen">
      <h3
        className={`text-2xl font-bold mb-4 ml-6 mr-6 ${darkTheme ? 'dark-theme-text' : 'light-theme-text'} flex justify-center items-center h-screen`}
      >
        About Me
      </h3>
      <p></p>
    </div>
  )
}
