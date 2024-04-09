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
    {
      id: 4,
      years: '2022-2023',
      name: 'Odd Jobz TGA',
      title: 'Administration and Handy Person',
      description:
        'I worked part-time/weekends as an administratorfor this company. My duties included liaising with customers, making appointments, notifying the owner of his appointments, giving quotes to customers, managing social media accounts and more. I also took some shifts to help with house moving, gardening, etc. (Any odd jobs that people needed done).',
    },
    {
      id: 5,
      years: '2023',
      name: 'Red Energy Australia',
      title: 'Customer Initialisation Specialist',
      description:
        'I was only in this role for about 2-3 months (Melbourne based) before needing to return home to NZ due to family illness. My role&apos;s function was to read a script to our customers to gain their explicit and informed consent for signing up with Red. When beginning the role, it involved learning a lot of new systems/applications that the company used, new processes, inductions, etc. The main focus and enjoyable part was the team culture and talking to awesome customers all day. It was a wonderful experience to speak with customers all day from a call centre as well as learn from such an amazing company.',
    },
  ])
}
