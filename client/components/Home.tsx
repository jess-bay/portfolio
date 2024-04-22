interface HomeProps {
  darkTheme: boolean
}

export default function Home({ darkTheme }: HomeProps) {
  return (
    <div id="/" className="flex justify-center items-center h-screen">
      <h3
        className={`text-2xl font-bold mb-4 ml-6 mr-6 ${darkTheme ? 'dark-theme-text' : 'light-theme-text'} flex justify-center items-center h-screen`}
      ></h3>
    </div>
  )
}
