// Built-in content. Used (1) as fallback when Firestore is empty/unconfigured and
// (2) as the seed for `npm run seed`. Each collection item has an `order` field.
// sample:true items show a small "Sample" tag until you replace them.

export const DEPARTMENTS = [
  { id: 'cse', n: 'Computer Science & Engineering', s: 'CSE', scene: 'code', p: 'B.E.', d: 'Established in 2006. Algorithms, systems, software and applied computing, taught with seminars, workshops and guest lectures.' },
  { id: 'ai-ds', n: 'Artificial Intelligence & Data Science', s: 'AI & DS', scene: 'network', p: 'B.Tech / B.E.', d: 'Machine learning, data engineering and intelligent systems for modern industry.' },
  { id: 'entc', n: 'Electronics & Telecommunication', s: 'E&TC', scene: 'lab2', p: 'B.E. · M.E. (Digital Electronics)', d: 'Communication systems, embedded electronics, signal processing and VLSI foundations.' },
  { id: 'mechanical', n: 'Mechanical Engineering', s: 'Mechanical', scene: 'lab', p: 'B.E. · M.E.', d: 'Design, thermal science, manufacturing and automation.' },
  { id: 'electrical', n: 'Electrical Engineering', s: 'Electrical', scene: 'campus', p: 'B.E.', d: 'Power systems, machines, control and renewable energy.' },
  { id: 'mba', n: 'Business Administration (MBA)', s: 'MBA', scene: 'people', p: 'MBA', d: 'Management education for leadership in business and technology organisations.' },
  { id: 'gse', n: 'General Science & Engineering', s: 'GSE', scene: 'lab', p: 'First-year core', d: 'Mathematics, physics, chemistry and communication skills that anchor every engineering branch.' },
]

// Add photoURL (e.g. a Firebase Storage URL) to show a real photograph.
export const FACULTY = [
  { id: 's-kirte', order: 1, n: 'Prof. Sandesh Kirte', r: 'Head of Department · CSE', q: 'CSE', x: '18+ Years', email: 'sandesh_kirte@bmssp.org', scene: 'avatar1' },
  { id: 's-g-kulkarni', order: 2, n: 'Prof. S. G. Kulkarni', r: 'Associate Professor & Vice Principal', q: 'ME CSE', x: '27+ Years', scene: 'avatar2' },
  { id: 'u-s-dodmise', order: 3, n: 'Prof. U. S. Dodmise', r: 'Assistant Professor', q: 'BE, ME (CSE), Ph.D. (pursuing)', x: '17+ Years', scene: 'avatar3' },
  { id: 's-g-gaikawad', order: 4, n: 'Prof. Suraj G. Gaikawad', r: 'Assistant Professor', q: 'ME CSE', x: '10 Years', scene: 'avatar4' },
  { id: 'k-r-khairate', order: 5, n: 'Prof. Kanchan R. Khairate', r: 'Assistant Professor', q: 'M.Tech CSE', x: '2 Years', scene: 'avatar1' },
  { id: 'v-m-ghogare', order: 6, n: 'Prof. Vaishnavi M. Ghogare', r: 'Assistant Professor', q: 'B.Tech CSE', x: '1 Year', email: 'vaishnavig@bmssp.org', scene: 'avatar3' },
]

// shape: rect | circ | flower | bars | chev   (text wordmarks — swap for licensed logo images via logoURL)
export const RECRUITERS = [
  { id: 'tcs', order: 1, name: 'TCS', color: '#1b3a8a', shape: 'rect' },
  { id: 'wipro', order: 2, name: 'Wipro', color: '#6c2a86', shape: 'flower' },
  { id: 'ibm', order: 3, name: 'IBM', color: '#1f70c1', shape: 'bars' },
  { id: 'infosys', order: 4, name: 'Infosys', color: '#007cc3', shape: 'circ' },
  { id: 'xoriant', order: 5, name: 'Xoriant', color: '#e4572e', shape: 'chev' },
]

// Put the real document URL in `url` (Firebase Storage link or official site page).
export const NOTICES = [
  { id: 'cal-2024-25', order: 1, kind: 'Academic', title: 'Academic Calendar 2024–25', desc: 'Term dates, examinations and holidays for the academic year.', url: 'https://www.bmitsolapur.org/' },
  { id: 'cal-2023-24', order: 2, kind: 'Academic', title: 'Academic Calendar 2023–24', desc: 'Archived calendar for the previous academic year.', url: 'https://www.bmitsolapur.org/' },
  { id: 'admissions', order: 3, kind: 'Admissions', title: 'Admissions Information', desc: 'Eligibility, CAP counselling and admission procedure.', url: 'https://www.bmitsolapur.org/' },
  { id: 'fees', order: 4, kind: 'Fees', title: 'Online Fees Payment', desc: 'Pay institute fees through the official online portal.', url: 'https://www.bmitsolapur.org/' },
]

export const EVENTS = [
  { id: 'workshops', order: 1, title: 'Workshops', desc: 'Hands-on sessions on tools, technologies and skills.' },
  { id: 'hackathons', order: 2, title: 'Hackathons', desc: 'Time-boxed team builds that turn ideas into prototypes.' },
  { id: 'seminars', order: 3, title: 'Seminars', desc: 'Talks and paper discussions by experts and students.' },
  { id: 'fdps', order: 4, title: 'FDPs', desc: 'Faculty development programmes for teaching and research.' },
  { id: 'competitions', order: 5, title: 'Competitions', desc: 'Technical, cultural and sports contests.' },
]

export const ACHIEVEMENTS = [
  { id: 'a1', order: 1, group: 'students', year: '2017–18', title: 'Rajesh Gundeli · TE CSE', desc: 'Swimming — 3rd Prize, University level (Solapur University).' },
  { id: 'a2', order: 2, group: 'students', year: '', title: 'Hackathon Finalists', desc: 'Student team shortlisted at an inter-college hackathon.', sample: true },
  { id: 'a3', order: 3, group: 'students', year: '', title: 'Coding Contest Rank', desc: 'Top ranks in online coding contests.', sample: true },
  { id: 'a4', order: 4, group: 'faculty', year: '', title: 'Publications', desc: 'Journal and conference papers.', sample: true },
  { id: 'a5', order: 5, group: 'faculty', year: '', title: 'Certifications', desc: 'NPTEL and industry courses.', sample: true },
  { id: 'a6', order: 6, group: 'faculty', year: '', title: 'Invited Talks', desc: 'Resource persons at other institutes.', sample: true },
  { id: 'a7', order: 7, group: 'events', year: '', title: 'Technical Fest', desc: 'Department-level fest.', sample: true },
  { id: 'a8', order: 8, group: 'events', year: '', title: 'Industry Workshop', desc: 'Hands-on workshops.', sample: true },
  { id: 'a9', order: 9, group: 'events', year: '', title: 'Alumni Meet', desc: 'Alumni mentoring.', sample: true },
]

export const PROJECTS = [
  { id: 'p1', order: 1, title: 'Smart Attendance System', tags: ['AI / ML', 'Python'], desc: 'Face-recognition based attendance with automated reports.', year: 'Final Year', scene: 'code', sample: true },
  { id: 'p2', order: 2, title: 'Campus Energy Monitor', tags: ['IoT', 'Embedded'], desc: 'Sensor network tracking power use across labs.', year: 'Third Year', scene: 'network', sample: true },
  { id: 'p3', order: 3, title: 'Placement Portal', tags: ['Web', 'Node.js'], desc: 'Recruiter drives, applications and results in one place.', year: 'Final Year', scene: 'lab', sample: true },
  { id: 'p4', order: 4, title: 'Campus Connect App', tags: ['Mobile', 'Flutter'], desc: 'Timetables, notices and event registration.', year: 'Second Year', scene: 'people', sample: true },
]

// Single documents in the `site` collection.
export const SITE_DOCS = {
  placements: { companies: 150, placements: 100, highestCTC: 10 },          // as supplied by BMIT — confirm
  glance: { students: 1000, faculty: 80, departments: 7 },                  // students/faculty are SAMPLE values
}
