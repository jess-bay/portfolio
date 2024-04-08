import { Skill } from '../../models/skills'
import { useSkills } from '../hooks/useSkills'

export default function Skills() {
  const { data } = useSkills()

  return (
    <>
      <div className="mt-8" id="skills">
        <h3 className="text-2xl font-bold mb-4 ml-6">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {data?.map((skill: Skill) => (
            <div
              key={skill.id}
              className="px-4 ml-4 py-2 bg-gray-200 border border-gray-300 rounded-md shadow-m transition-colors duration-300 hover:bg-gray-300"
            >
              <ul className="list-none">
                <li className="text-gray-600">{skill.skill}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
