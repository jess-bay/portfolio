import { useState } from 'react'
import { History } from '../../models/workHistory'
import { useWorkHistory } from '../hooks/useWorkHistory'

interface WorkHistoryProps {
  darkTheme: boolean
}

export default function WorkHistory({ darkTheme }: WorkHistoryProps) {
  const { data } = useWorkHistory()
  // const [darkTheme, setDarkTheme] = useState(false)

  return (
    // <>
    //   <div
    //     className={`mt-8 mb-8  ${darkTheme ? 'light-theme-bg' : 'dark-theme-bg'}`}
    //     id="workhistory"
    //   >
    //     <h3
    //       className={`text-2xl font-bold mb-4 ml-6 text-center ${darkTheme ? 'light-theme-text' : 'dark-theme-text'}`}
    //     >
    //       Work History
    //     </h3>
    //     <div
    //       className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${darkTheme ? 'light-theme-bg' : 'dark-theme-bg'}`}
    //     >
    //       {data?.map((work: History) => (
    //         <div
    //           key={work.id}
    //           className={`p-6 mx-6 border rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 backdrop-filter backdrop-blur-lg bg-opacity-50`}
    //           style={{
    //             backgroundColor: darkTheme
    //               ? 'rgba(128, 0, 128, 0.5)'
    //               : 'rgba(255, 255, 255, 0.5)',
    //             // color: darkTheme ? 'white' : 'black',
    //           }}
    //         >
    //           <p
    //             className={`text-lg font-semibold ${darkTheme ? 'text-white' : 'text-gray-800'}`}
    //           >
    //             Year: {work.years}
    //           </p>
    //           <p
    //             className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
    //           >
    //             Company: {work.name}
    //           </p>
    //           <p
    //             className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
    //           >
    //             Title: {work.title}
    //           </p>
    //           <p
    //             className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
    //           >
    //             Description: {work.description}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </>
    <>
      <div
        className={`mt-8 mb-8 ${darkTheme ? 'light-theme-bg' : 'dark-theme-bg'}`}
        id="workhistory"
      >
        <h3
          className={`text-2xl font-bold mb-4 ml-6 text-center ${darkTheme ? 'light-theme-text' : 'dark-theme-text'}`}
        >
          Work History
        </h3>
        <div className="grid grid-cols-1 gap-8">
          {data?.map((work: History) => (
            <div
              key={work.id}
              className={`p-6 mx-6 border rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
                darkTheme ? 'bg-purple-800' : 'bg-white'
              }`}
              style={{
                backgroundColor: darkTheme
                  ? 'rgba(128, 0, 128, 0.5)'
                  : 'rgba(255, 255, 255, 0.5)',
              }}
            >
              <p
                className={`text-lg font-semibold ${darkTheme ? 'text-white' : 'text-gray-800'}`}
              >
                Year: {work.years}
              </p>
              <p
                className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
              >
                Company: {work.name}
              </p>
              <p
                className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
              >
                Title: {work.title}
              </p>
              <p
                className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
              >
                Description: {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
