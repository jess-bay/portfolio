import { EducationType } from '../../models/education'
import { useEducation } from '../hooks/useEducation'

interface EducationProps {
  darkTheme: boolean
}

export function Education({ darkTheme }: EducationProps) {
  const { data } = useEducation()

  return (
    <>
      <div id="education">
        <div
          className={`mt-8 ${darkTheme ? 'dark-theme-bg' : 'light-theme-bg'}`}
        >
          <h3
            className={`text-2xl font-bold mb-4 ml-6 mr-6 ${darkTheme ? 'dark-theme-text' : 'light-theme-text'} flex justify-center items-center h-screen`}
          >
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
            <div
              key="dev"
              className={`p-6 mb-4 ml-6 mr-6 border border-gray-300 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
                darkTheme ? 'bg-purple-800' : 'bg-white'
              }`}
              style={{
                backgroundColor: darkTheme
                  ? 'rgba(128, 0, 128, 0.5)'
                  : 'rgba(255, 255, 255, 0.5)',
                // padding: '10px',
              }}
            >
              <p className="test-lg font-semibold">
                Level 6 Applied Software Development
              </p>
              <p
                className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
              >
                Year: 2024
              </p>
              <p
                className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
              >
                Received From: Enspiral Dev Academy
              </p>
            </div>
            <div
              key="pm"
              className={`p-6 mb-4 ml-6 mr-6 border border-gray-300 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
                darkTheme ? 'bg-purple-800' : 'bg-white'
              }`}
              style={{
                backgroundColor: darkTheme
                  ? 'rgba(128, 0, 128, 0.5)'
                  : 'rgba(255, 255, 255, 0.5)',
                // padding: '10px',
              }}
            >
              <p className="test-lg font-semibold">
                PRINCE2 Foundation Course for Project Management
              </p>
              <p
                className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
              >
                Year: 2023
              </p>
              <p
                className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
              >
                Received From: Project Laneways
              </p>
            </div>
            <div
              key="max"
              className={`p-6 mb-4 ml-6 mr-6 border border-gray-300 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
                darkTheme ? 'bg-purple-800' : 'bg-white'
              }`}
              style={{
                backgroundColor: darkTheme
                  ? 'rgba(128, 0, 128, 0.5)'
                  : 'rgba(255, 255, 255, 0.5)',
                // padding: '10px',
              }}
            >
              <p className="test-lg font-semibold">
                Certificate III and Certificate IV in Fitness
              </p>
              <p
                className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
              >
                Year: 2021-2022
              </p>
              <p
                className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
              >
                Received From: MAX International College For Fitness
                Professionals
              </p>
            </div>
            <div
              key="hs"
              className={`p-6 mb-4 ml-6 mr-6 border border-gray-300 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
                darkTheme ? 'bg-purple-800' : 'bg-white'
              }`}
              style={{
                backgroundColor: darkTheme
                  ? 'rgba(128, 0, 128, 0.5)'
                  : 'rgba(255, 255, 255, 0.5)',
                // padding: '10px',
              }}
            >
              <p className="test-lg font-semibold">Level 3 NCEA</p>
              <p
                className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
              >
                Year: 2019
              </p>
              <p
                className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
              >
                Received From: High School
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
