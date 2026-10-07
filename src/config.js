// Site-wide settings. Edit freely.
export const SITE = {
  name: 'BMIT Solapur',
  fullName: 'Brahmdevdada Mane Institute of Technology',
  est: 2006,
  official: 'https://www.bmitsolapur.org/',
  cseOfficial: 'https://www.bmitsolapur.org/computer_science_and_engineering',
  phone: '02172 283842',
  phoneHref: 'tel:02172283842',
  emails: ['info@bmitsolapur.org', 'bmit@bmssp.org'],
  address: 'Solapur–Mangalwedha–Kolhapur State Highway, Belati, Tal. North Solapur, Dist. Solapur, Maharashtra 413002',
  heroVideo: '', // e.g. '/media/campus.mp4' (put the file in /public/media)
  showSampleTags: true, // shows a small "Sample" tag on placeholder content; set false when real data is in
}

export const NAV = [
  ['About', '/about'], ['Academics', '/academics'], ['Departments', '/departments'],
  ['Admissions', '/admissions'], ['Campus Life', '/campus-life'], ['Placements', '/placements'],
  ['Research', '/research'], ['Achievements', '/achievements'], ['Notices', '/notices'], ['Contact', '/contact'],
]

// REAL PHOTOS — put files in /public/images and reference them like '/images/campus.jpg'.
// Empty = drawn artwork fallback. Keys are shared by every place that uses that scene.
export const IMAGES = {
  campus: '', lab: '', lab2: '', code: '', network: '', people: '',
  library: '', auditorium: '', sports: '', hostel: '',
  avatar1: '', avatar2: '', avatar3: '', avatar4: '',
}
