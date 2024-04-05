import { EducationType } from '../../models/education'
import { useEducation } from '../hooks/useEducation'

export function Education() {
  const { data } = useEducation()

  return (
    <>
      <div className="mt-8 bg-cover bg-center bg-opacity-50">
        <h3 className="text-2xl font-bold mb-4 ml-6">Education</h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {data?.map((education: EducationType) => (
            <div
              key={education.id}
              className="mb-4 ml-6 border border-gray-300 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <p className="test-lg font-semibold">Year: {education.year}</p>
              <p className="text-gray-600">
                Qualification: {education.qualification}
              </p>
              <p className="text-gray-600">Received From: {education.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
