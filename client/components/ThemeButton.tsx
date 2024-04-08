import React from 'react'

interface ThemeButton {
  darkTheme: boolean
  changeTheme: () => void
}

const ThemeButton: React.FC<ThemeButton> = ({ darkTheme, changeTheme }) => {
  return (
    <div>
      <button className="theme-button" onClick={changeTheme}>
        {darkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
    </div>
  )
}

export default ThemeButton
