const programsContainer = document.querySelector('.program .content');
const speakersContainer = document.querySelector(
  '.speakers .content',
);

const programs = [
  {
    name: 'Lecture',
    icon: './images/programs/lecture.svg',
    summary:
      'Listen to speakers from various countries about the messages of sharing and opening.',
  },
  {
    name: 'CC Exhibition',
    icon: './images/programs/exhibition.svg',
    summary:
      'Appreciate various creations applying CC license of artists, organized from Art Center Nabi',
  },
  {
    name: 'Forum',
    icon: './images/programs/forum.svg',
    summary:
      'Have the time to share your thoughts and opinions with experts for each topic.',
  },
  {
    name: 'Workshop',
    icon: './images/programs/workshop.svg',
    summary:
      'Try creating your own work using open source license rather than just watching at it.',
  },
  {
    name: 'CC Ignite',
    icon: './images/programs/ignite.svg',
    summary:
      'get opportunities to network with CC affiliates around the world, also after the summit.',
  },
];

const programsMarkup = programs
  .map(
    (program) => `
    <div class='card'>
        <img src='${program.icon}' alt='${program.name}' />
        <h5 class='title'>${program.name}</h5>
        <p class="summary">${program.summary}</p>
    </div>
`,
  )
  .join('');

programsContainer.insertAdjacentHTML('beforeend', programsMarkup);

const speakers = [
  {
    name: 'Yochai Benkler',
    position:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    summary:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    name: 'SohYeong Noh',
    position:
      'Director of Art Centre Nabi and a board member of CC Korea',
    summary:
      'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Lila tretikov',
    position: 'Executive Director of the Wikimedia Foundation',
    summary:
      'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    name: 'Kilnam Chon',
    position: '',
    summary:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    name: 'Julia Leda',
    position: 'President of Young Pirates of Europe',
    summary:
      'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    name: 'Ryan Merkley',
    position:
      'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    summary:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

const speakersMarkup = speakers.map(
  (speaker, index) => `
    <div class="card">
        <div class="image">
            <img
            src="./images/speakers/speaker-${index + 1}.svg"
            alt="${speaker.name}"
            />
        </div>
        <div class="speaker-info">
            <h5 class="name">${speaker.name}</h5>
            <p class="position">${speaker.position}</p>
            <p class="summary">${speaker.summary}</p>
        </div>
    </div>
`,
);

speakersContainer.insertAdjacentHTML('beforeend', speakersMarkup);
