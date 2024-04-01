import { History } from '../../models/workHistory'
import { useWorkHistory } from '../hooks/useWorkHistory'

export default function WorkHistory() {
  const { data } = useWorkHistory()

  return (
    <>
      <h3>Work History</h3>
      <div>
        {data?.map((work: History) => (
          <div key={work.id}>
            <p>Year: {work.years}</p>
            <p>Company: {work.name}</p>
            <p>Title: {work.title}</p>
            <p>Description: {work.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}
