// import { Skill } from '../../models/skills'
// import { useSkills } from '../hooks/useSkills'

interface SkillProps {
  darkTheme: boolean
}

export default function Skills({ darkTheme }: SkillProps) {
  // const { data } = useSkills()

  return (
    <>
      <div className="mt-8 " id="skills">
        <h3
          className={`text-2xl font-bold mb-4 ml-6 mr-6 ${darkTheme ? 'dark-theme-text' : 'light-theme-text'} flex justify-center items-center h-screen`}
        >
          Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          <div
            key="JavaScript"
            className="px-4 ml-4 py-2 bg-gray-200 border border-gray-300 rounded-md shadow-m transition-colors duration-300 hover:bg-gray-300"
          >
            <ul className="list-none">
              <li className="text-gray-600">JavaScript</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">TypeScript</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">Git</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">React</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">Node.js</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">Tailwind</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">CSS</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">HTML</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">SQLite3</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">Visual Studio Code</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">Receiving Feedback</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">Teamwork and collaboration</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">Reliability</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">Listening</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">Attention to Detail</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">Time Management</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">Kanban / Agile Processes</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">Planning and Organisation</li>
            </ul>
            <ul className="list-none">
              <li className="text-gray-600">Touch Type approx. 80wpm</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
