/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'NUmunch',
    position: 'Co-founder & CTO',
    url: 'https://numunch1-2.onrender.com/',
    startDate: '2024-4-08',
    summary: 'NUmunch is an online food ordering company. It helps student to order and get their food without having to wait in long queues for multiple hours. It is loved by many students.',
    highlights: [
      'Cuts the traditional way of ordering food at the university',
      'Easy to use app',
    ],
  },
  {
    name: 'CoEET',
    position: 'Learning Assistant',
    startDate: '2023-2-20',
    endDate: '2023-5-9',
    summary: 'CoEET is responsible for the planning, coordination, and execution of more than 60 Educational Technology projects at NU each semester, through its various desks. ',
    highlights: [
      'I helped in the development of ETIC Portal',
    ],
  },
];

export default work;
