interface ProjectProps {
  darkTheme: boolean
}
export default function Projects({ darkTheme }: ProjectProps) {
  return (
    <div
      id="projects"
      className={`mt-8 mb-8 ${darkTheme ? 'light-theme-bg' : 'dark-theme-bg'}`}
    >
      <h3
        className={`text-2xl font-bold mb-4 ml-6 mr-6 ${darkTheme ? 'dark-theme-text' : 'light-theme-text'} flex justify-center items-center h-screen`}
      >
        Projects
      </h3>
      <div className="grid grid-cols-1 gap-8">
        <div
          key="aim-trainer"
          className={`p-6 mb-4 ml-6 mr-6 border border-gray-300 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
            darkTheme ? 'bg-purple-800' : 'bg-white'
          }`}
          style={{
            backgroundColor: darkTheme
              ? 'rgba(128, 0, 128, 0.5)'
              : 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <p className="test-lg font-semibold">Aim Trainer</p>
          <br />
          <p
            className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
          >
            Aim Trainer was the final group project completed at Dev Academy in
            April 2024. A group of 6 came together from across NZ and worked
            solely online to deliver a game that serves one main goal: to help
            gamers improve their mouse handling.
          </p>
          <p
            className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
          >
            It became a bonus that this game is suitable for anyone of all ages
            looking to improve their mouse handling skills, too!
          </p>
          <a
            href="https://aim-trainer.pushed.nz/"
            target="_blank"
            rel="noreferrer"
            className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
          >
            <br />
            Click here to view Aim Trainer!
          </a>
        </div>
      </div>
    </div>
  )
}

// <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
//             {data?.map((education: EducationType) => (
//               <div
//                 key={education.id}
//                 className={`p-6 mb-4 ml-6 mr-6 border border-gray-300 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
//                   darkTheme ? 'bg-purple-800' : 'bg-white'
//                 }`}
//                 style={{
//                   backgroundColor: darkTheme
//                     ? 'rgba(128, 0, 128, 0.5)'
//                     : 'rgba(255, 255, 255, 0.5)',
//                   // padding: '10px',
//                 }}
//               >
//                 <p className="test-lg font-semibold">
//                   {education.qualification}
//                 </p>
//                 <p
//                   className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
//                 >
//                   Year: {education.year}
//                 </p>
//                 <p
//                   className={`text-gray-600 ${darkTheme ? 'text-white' : 'text-gray-400'}`}
//                 >
//                   Received From: {education.name}
//                 </p>
//               </div>
