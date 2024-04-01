import { History } from '../../models/workHistory'
import { useWorkHistory } from '../hooks/useWorkHistory'

export default function WorkHistory() {
  const { data } = useWorkHistory()

  return (
    <>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 ml-6">Work History</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data?.map((work: History) => (
            <div
              key={work.id}
              className="p-6 bg-white border border-gray-300 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <p className="text-lg font-semibold">Year: {work.years}</p>
              <p className="text-gray-600">Company: {work.name}</p>
              <p className="text-gray-600">Title: {work.title}</p>
              <p className="text-gray-600">Description: {work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
