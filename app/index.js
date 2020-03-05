var data = [
  {
    name: 'Haiti',
    currency: 'HTG',
    continent: 'America',
    cities: [
      { name: 'Port-au-Prince' },
      { name: 'Carrefour' },
      { name: 'Cap-Haïtien' },
      { name: 'Jacmel' },
      { name: 'Cayes' },
      { name: 'Jérémie' },
    ]
  },
  {
    name: 'USA',
    currency: '$',
    continent: 'America',
    cities: [
      { name: 'Los Angeles' },
      { name: 'New York' },
      { name: 'Miami' },
      { name: 'Boston' },
    ]
  },
  {
    name: 'France',
    currency: '€',
    continent: 'Europe',
    cities: [
      { name: 'Paris' },
      { name: 'Lyon' },
      { name: 'Marseille' },
      { name: 'Bordeaux' },
    ]
  },
  {
    name: 'Spain',
    currency: '€',
    continent: 'Europe',
    cities: [
      { name: 'Madrid' },
      { name: 'Barcelona' },
      { name: 'Seville' },
      { name: 'Valancia' },
    ]
  },
];

var total = 8;

function start() {
  console.time('process');

  console.log('%cApp has started', 'color: green; font-size: 20px; font-weight: bold');

  // display countries
  displayCountries(data);

  // Check errors
  checkErrorsAndWarnings();

  console.timeEnd('process');
}

function displayCountries(countries) {
  for (var i = 0; i < countries.length; i++) {
    console.log('country', countries[i]);

    document.write('<ul>');
    document.write('<strong>' + countries[i].name + '</strong>');

    displayCities(countries[i]);
    document.write('</ul>');
  }
}

function displayCity(cities) {
  console.table(cities);
  for (var i = 0; i < citie.length; i++) {
    document.write('<li>' + cities[i].name + '</li>');
  }
}

function checkErrorsAndWarnings() {
  // check UTF error
  // Jérémie length should equal to 7 if UTF 8 characters is set
  if (data[0].cities[5].name.length !== 7) {
    console.warn('International (UTF-8/UTF-16) encoding charset not set. Please set meta tag to UTF-8 Charset: <meta charset="utf-8"/>');
  }

  if (total !== 10) {
    console.error('Error! Change the total back to 10');
  }
}


// launch app
start();