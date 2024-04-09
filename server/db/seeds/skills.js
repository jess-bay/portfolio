/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('skills').del()
  await knex('skills').insert([
    { id: 1, skill: 'JavaScript' },
    { id: 2, skill: 'TypeScript' },
    { id: 3, skill: 'Git' },
    { id: 4, skill: 'React' },
    { id: 5, skill: 'Node.js' },
    { id: 6, skill: 'Tailwind' },
    { id: 7, skill: 'CSS' },
    { id: 8, skill: 'HTML' },
    { id: 9, skill: 'SQLite3' },
    { id: 10, skill: 'Visual Studio Code' },
    { id: 11, skill: 'Receiving Feedback' },
    { id: 12, skill: 'Teamwork and collaboration' },
    { id: 13, skill: 'Reliability' },
    { id: 14, skill: 'Listening' },
    { id: 15, skill: 'Communication' },
    { id: 16, skill: 'Attention to Detail' },
    { id: 17, skill: 'Time Management' },
    { id: 18, skill: 'Kanban Processes' },
    { id: 19, skill: 'Planning and Organisation' },
    { id: 20, skill: 'Touch Type approx. 80wpm' },
  ])
}
