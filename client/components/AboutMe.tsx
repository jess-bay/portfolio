interface AboutProps {
  darkTheme: boolean
}
export default function AboutMe({ darkTheme }: AboutProps) {
  return (
    <>
      <div
        id="about"
        className={`p-6 mb-4 ml-6 mr-6 border border-gray-300 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105 ${
          darkTheme ? 'bg-purple-800' : 'bg-white'
        }`}
        style={{
          backgroundColor: darkTheme
            ? 'rgba(128, 0, 128, 0.5)'
            : 'rgba(255, 255, 255, 0.5)',
        }}
      >
        <h3
          className={`text-2xl font-bold mb-4 ${darkTheme ? 'dark-theme-text' : 'light-theme-text'} text-center`}
        >
          About Me
        </h3>
        <p className="text-center mx-6 my-2">
          Hello, I&apos;m Jess, a recently qualified Full Stack Web Developer
          fueled by a passion for crafting digital experiences and learning
          while I do it. My journey into the world of web development began last
          year, when I had a brief intro to it and decided to roll with it due
          to pure enjoyment.
        </p>
        <br />
        <p className="text-center mx-6 my-2">
          What I really like about web development and have grown to appreciate
          each day, is how hands-on it is, and how much problem-solving is
          required.
        </p>
        <br />
        <p className="text-center mx-6 my-2">
          Outside of coding, I enjoy spending time with my loved ones - pets
          included! As a former personal trainer, I&apos;m dedicated to a
          balanced lifestyle.
        </p>
        <br />
        <p className="text-center mx-6 my-2">
          In my academic years, I excelled through the years and finished my
          last year of high school with scholar award for achieving more than
          90%.
        </p>
        <br />
        <p className="text-center mx-6 my-2">
          I believe continuous growth, open-mindedness, and collaboration are
          very important and that is what I will be bringing to the table as I
          kick-start my career.
        </p>
        <br />
        <p className="text-center mx-6 my-2">
          Please delve into the digital realm that is my portfolio to have a
          look at what I have achieved, where I have worked, what my skills are,
          and please feel free to use the light-dark theme button to adjust to
          your preference.
        </p>
      </div>
    </>
  )
}
