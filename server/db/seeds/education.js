/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('education').del()
  await knex('education').insert([
    { id: 1, year: '2019', name: 'High School', qualification: 'Level 3 NCEA' },
    {
      id: 2,
      year: '2020-2021',
      name: 'MAX International College For Fitness Professionals',
      qualification: 'Certificate III and Certificate IV in Fitness',
    },
    {
      id: 3,
      year: '2023',
      name: 'Project Laneways',
      qualification: 'PRINCE2 Foundation Course for Project Management',
    },
    {
      id: 4,
      year: '2024',
      name: 'Enspiral Dev Academy',
      qualification: 'Level 6 Applied Software Development',
    },
  ])
}
