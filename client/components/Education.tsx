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
            {data?.map((education: EducationType) => (
              <div
                key={education.id}
                className={`mb-4 ml-6 mr-6 border border-gray-300 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
                  darkTheme ? 'bg-purple-800' : 'bg-white'
                }`}
                style={{
                  backgroundColor: darkTheme
                    ? 'rgba(128, 0, 128, 0.5)'
                    : 'rgba(255, 255, 255, 0.5)',
                }}
              >
                <p className="test-lg font-semibold">Year: {education.year}</p>
                <p
                  className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
                >
                  Qualification: {education.qualification}
                </p>
                <p
                  className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
                >
                  Received From: {education.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
