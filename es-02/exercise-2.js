function canPlay() {
  const personName = 'Paul';

  if (true) {
    personName = 'George'; //  personName è ora una variabile di sola lettura!
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();