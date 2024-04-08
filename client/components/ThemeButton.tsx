import React from 'react'

interface ThemeButton {
  darkTheme: boolean
  changeTheme: () => void
}

const ThemeButton: React.FC<ThemeButton> = ({ darkTheme, changeTheme }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className={` rounded-lg px-4 py-2 transition-colors duration-300  focus:outline-none`}
        style={{
          backgroundColor: darkTheme ? 'pink' : 'rgba(128, 0, 128)',
          color: darkTheme ? 'black' : 'white',
        }}
        onClick={changeTheme}
      >
        {darkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
    </div>
  )
}

export default ThemeButton
