import { Skill } from '../../models/skills'
import { useSkills } from '../hooks/useSkills'

export default function Skills() {
  const { data } = useSkills()

  return (
    <>
      <h3>Skills</h3>
      <div>
        {data?.map((skill: Skill) => (
          <div key={skill.id}>
            <ul>
              <li>{skill.skill}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
