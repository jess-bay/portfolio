import { History } from '../../models/workHistory'
import { useWorkHistory } from '../hooks/useWorkHistory'

export default function WorkHistory() {
  const { data } = useWorkHistory()

  return (
    <>
      <div className="mt-8 mb-8 ">
        {/* backdrop-filter bg-white backdrop-blur-lg bg-opacity-50 */}
        <h3 className="text-2xl font-bold mb-4 ml-6 text-white text-center">
          Work History
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data?.map((work: History) => (
            <div
              key={work.id}
              className="p-6 mx-6 border border-white rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 bg-purple-700 backdrop-blur-lg bg-opacity-80"
            >
              <p className="text-lg font-semibold text-white">
                Year: {work.years}
              </p>
              <p className="text-white">Company: {work.name}</p>
              <p className="text-white">Title: {work.title}</p>
              <p className="text-white">Description: {work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
