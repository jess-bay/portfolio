import { History } from '../../models/workHistory'
import { useWorkHistory } from '../hooks/useWorkHistory'

interface WorkHistoryProps {
  darkTheme: boolean
}

export default function WorkHistory({ darkTheme }: WorkHistoryProps) {
  const { data } = useWorkHistory()
  // const [darkTheme, setDarkTheme] = useState(false)

  return (
    <>
      <div
        className={`mt-8 mb-8 ${darkTheme ? 'light-theme-bg' : 'dark-theme-bg'}`}
        id="workhistory"
      >
        <h3
          className={`text-2xl font-bold mb-4 ml-6 text-center ${darkTheme ? 'light-theme-text' : 'dark-theme-text'}`}
        >
          Work History
        </h3>
        <div className="grid grid-cols-1 gap-8">
          <div
            key="devacademy"
            className={`p-6 mx-6 border rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
              darkTheme ? 'bg-purple-800' : 'bg-white'
            }`}
            style={{
              backgroundColor: darkTheme
                ? 'rgba(128, 0, 128, 0.5)'
                : 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <p
              className={`text-lg font-semibold ${darkTheme ? 'text-white' : 'text-gray-800'}`}
            >
              2024
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Company: Dev Academy Aotearoa
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Title: Full Stack Developer (Student)
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Description: Throughout my time at Dev Academy, I have come to
              appreciate the idea of continued development and learning
              strategies. Some of the useful tools and languages I have learnt
              and practiced include: JavaScript, TypeScript, Git, React,
              Node.js, SQLite3 database creation and database management. I’ve
              also been introduced to basic authentication with Auth0, external
              API’s, front-end testing and back-end testing. A large focus of
              this course is also the development of soft-skills such as
              communication, receiving feedback, etc. And this is enforced with
              completing multiple group projects.
            </p>
          </div>
          <div
            key="redenergy"
            className={`p-6 mx-6 border rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
              darkTheme ? 'bg-purple-800' : 'bg-white'
            }`}
            style={{
              backgroundColor: darkTheme
                ? 'rgba(128, 0, 128, 0.5)'
                : 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <p
              className={`text-lg font-semibold ${darkTheme ? 'text-white' : 'text-gray-800'}`}
            >
              2023
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Company: Red Energy Australia (Melbourne based)
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Title: Customer Initialisation Specialist
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Description: I was only in this role for about 2-3 months
              (Melbourne based) before needing to return home to NZ due to
              family illness. My role&apos;s function was to read a script to
              our customers to gain their explicit and informed consent for
              signing up with Red. When beginning the role, it involved learning
              a lot of new systems/applications that the company used, new
              processes, inductions, etc. The main focus and enjoyable part was
              the team culture and talking to awesome customers all day. It was
              a wonderful experience to speak with customers all day from a call
              centre as well as learn from such an amazing company.
            </p>
          </div>
          <div
            key="oddjobz"
            className={`p-6 mx-6 border rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
              darkTheme ? 'bg-purple-800' : 'bg-white'
            }`}
            style={{
              backgroundColor: darkTheme
                ? 'rgba(128, 0, 128, 0.5)'
                : 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <p
              className={`text-lg font-semibold ${darkTheme ? 'text-white' : 'text-gray-800'}`}
            >
              2022-2023
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Company: Odd Jobz TGA
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Title: Administration and Handy Person
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Description: I worked part-time/weekends as an administratorfor
              this company. My duties included liaising with customers, making
              appointments, notifying the owner of his appointments, giving
              quotes to customers, managing social media accounts and more. I
              also took some shifts to help with house moving, gardening, etc.
              (Any odd jobs that people needed done).
            </p>
          </div>
          <div
            key="seeka"
            className={`p-6 mx-6 border rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
              darkTheme ? 'bg-purple-800' : 'bg-white'
            }`}
            style={{
              backgroundColor: darkTheme
                ? 'rgba(128, 0, 128, 0.5)'
                : 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <p
              className={`text-lg font-semibold ${darkTheme ? 'text-white' : 'text-gray-800'}`}
            >
              2022-2023
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Company: Seeka Limited
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Title: Administration Support
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Description: This was an administrative role. It included
              co-ordinating projects and activities, dispatching, working as
              part of a call centre and organisation. It also involved a lot of
              collaboration, communication, reporting to the assistant manager,
              rostering staff and assisting with payroll at a basic level. I
              also assisted with asset management of company cars and phones.
            </p>
          </div>
          <div
            key="legacy"
            className={`p-6 mx-6 border rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
              darkTheme ? 'bg-purple-800' : 'bg-white'
            }`}
            style={{
              backgroundColor: darkTheme
                ? 'rgba(128, 0, 128, 0.5)'
                : 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <p
              className={`text-lg font-semibold ${darkTheme ? 'text-white' : 'text-gray-800'}`}
            >
              2021-2022
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Company: Legacy Nutrition and Fitness
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Title: Personal Trainer and Salesperson
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Description: Here, I was self-employed and worked as a personal
              trainer in a studio, building relationships and helping my clients
              achieve their goals. When I wasn&apos;t doing this, I was helping
              the store to sell supplements in a customer-facing role. There was
              also a lot of picking and packing of orders Involved. I learnt a
              lot about social media marketing, in-person and online sales, as
              well as time management, basic payroll functions and more. Reason
              for leaving: company went solely online and subsequently closed.
            </p>
          </div>
          <div
            key="sap"
            className={`p-6 mx-6 border rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
              darkTheme ? 'bg-purple-800' : 'bg-white'
            }`}
            style={{
              backgroundColor: darkTheme
                ? 'rgba(128, 0, 128, 0.5)'
                : 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <p
              className={`text-lg font-semibold ${darkTheme ? 'text-white' : 'text-gray-800'}`}
            >
              2019-2021
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Company: Auckland Adventure Park
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Title: Ticket Sales and Ride Operator
            </p>
            <p
              className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
            >
              Description: Focusing on customer service, I mainly spent time in
              reception, where I sold tickets at the kiosk and helped with
              customer queries. When I was not doing this, I would be working as
              a ride operator to ensure health and safety was the highest
              priority.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
