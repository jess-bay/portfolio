import { EducationType } from '../../models/education'
import { useEducation } from '../hooks/useEducation'

export function Education() {
  const { data } = useEducation()

  return (
    <>
      <h3>Education</h3>
      <div>
        {data?.map((education: EducationType) => (
          <div key={education.id}>
            <p>Year: {education.year}</p>
            <p>Qualification: {education.qualification}</p>
            <p>Received From: {education.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}
