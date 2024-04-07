import React from 'react'

interface ThemeButton {
  lightTheme: boolean
  changeTheme: () => void
}

const ThemeButton: React.FC<ThemeButton> = ({ lightTheme, changeTheme }) => {
  return (
    <div>
      <button onClick={changeTheme}>
        {lightTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
    </div>
  )
}

export default ThemeButton
