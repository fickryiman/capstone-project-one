const speakersList = [
  {
    name: 'Fickry Bil Iman',
    image: 'images/speakers/fickry-bil-iman.jpg',
    occupation: 'Director of Art Centre Nabi and a board member of CC Indonesia',
    details: 'As the main venue for new media art production in Indonesia, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Christensen Fisher',
    image: 'images/speakers/1.png',
    occupation: 'Culpa veniam ut excepteur aliqua exercitation',
    details: 'Incididunt mollit cupidatat proident nisi non. Sunt ad consequat eu non esse excepteur. Veniam quis Lorem ea labore ullamco veniam nisi do sunt. Nisi irure sit qui culpa sint reprehenderit ullamco.',
  },
  {
    name: 'Larson Richard',
    image: 'images/speakers/2.png',
    occupation: 'Labore tempor consectetur velit. Ipsum Lorem non mollit aliquip.',
    details: 'Dolor cillum excepteuo dolor incididunt occaecat adipisicing consectetur in. Ullamco ullamco commodo nulla eiusmod. et id adipisicing laboris minim anim esse fugiat et culpa exercitation..',
  },
  {
    name: 'Ester Clements',
    image: 'images/speakers/3.png',
    occupation: 'Incididunt mollit empor ex non eiusmod magna exercitation proident nisi non.',
    details: 'As the main venue for new media art production in Indonesia, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Zaina Harris',
    image: 'images/speakers/4.png',
    occupation: 'Sed ut natus error sit voluptatem accusantium doloremque laudantium',
    details: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    name: 'Alex Moyer',
    image: 'images/speakers/5.png',
    occupation: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis',
    details: 'As the main venue for new media art production in Indonesia, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Wendy Palmer',
    image: 'images/speakers/6.png',
    occupation: 'Temporibus autem quibusdam et aut officiis debitis aut rerum.',
    details: 'Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    name: 'Darius Harrison',
    image: 'images/speakers/7.png',
    occupation: 'Temporibus autem quibusdam et aut officiis debitis aut rerum.',
    details: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',

  },
];

const speakersContainer = document.querySelector('.speakers-flex');
const moreSpeaker = document.querySelector('.more-speaker');

function loadSpeakerCard(speaker) {
  const card = `
  <div class="speakers">
    <div class="speaker">
      <img src="images/png/black-white3.png" class="speaker-image-bw" alt="speaker-bw" srcset="">
      <img src="${speaker.image}" class="speaker-image" alt="speaker-image" srcset="">
      <div class="speaker-desc">
        <p class="speaker-name">${speaker.name}</p>
        <p class="speaker-occupation">${speaker.occupation}</p>
        <hr class="speaker-hr">
        <p class="speaker-details">${speaker.details}</p>
      </div>
    </div>
  </div>
  `;

  speakersContainer.innerHTML += card;
}

moreSpeaker.addEventListener('click', () => {
  while (speakersContainer.hasChildNodes()) {
    speakersContainer.removeChild(speakersContainer.firstChild);
  }

  speakersList.forEach((speaker) => {
    loadSpeakerCard(speaker);
  });
});

function loadSpeakerInformation() {
  while (speakersContainer.hasChildNodes()) {
    speakersContainer.removeChild(speakersContainer.firstChild);
  }

  let counting = 0;
  speakersList.forEach((speaker) => {
    if (window.screen.width < 768) {
      if (counting < 2) {
        loadSpeakerCard(speaker);
        counting += 1;
      }
    } else {
      loadSpeakerCard(speaker);
    }
  });
}

window.onresize = function () {
  loadSpeakerInformation();
};

window.onload = function () {
  loadSpeakerInformation();
};
