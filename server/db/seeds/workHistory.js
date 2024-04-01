/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('workHistory').del()
  await knex('workHistory').insert([
    {
      id: 1,
      years: '2019-2021',
      name: 'Auckland Adventure Park',
      title: 'Ticket Sales and Ride Operator',
      description:
        'Focusing on customer service, I mainly spent time in reception, where I sold tickets at the kiosk and helped with customer queries. When I was not doing this, I would be working as a ride operator to ensure health and safety was the highest priority.',
    },
    {
      id: 2,
      years: '2021-2022',
      name: 'Legacy Nutrition and Fitness',
      title: 'Personal Trainer and Salesperson',
      description:
        'Here, I worked as a personal trainer in a studio, building relationships and helping clients to achieve their goals. When I was not doing this, I was helping the store to sell supplements in a customer-facing role.',
    },
    {
      id: 3,
      years: '2022-2023',
      name: 'Seeka Limited',
      title: 'Services and Support',
      description:
        'This was an administrative role. It included co-ordinating projects and activities, dispatching, working as part of a call centre and organisation. It also involved a lot of collaboration, communication, reporting to the assistant manager, rostering staff and assisting with payroll at a basic level. I also assisted with asset management of company cars and phones.',
    },
  ])
}
