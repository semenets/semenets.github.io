var TYPE = 'sun'
var select_country = document.getElementById('select_country')
var select_resort = document.getElementById('select_resort')
populateCountries('sun')

select_country.addEventListener('change', changeCountry)

function populateCountries(type) {
  var totalCountries = Object.keys(resorts[type]).length
  
  select_country.innerHTML = ''

  for(var i = 0; i < totalCountries; i++) {
    var opt = document.createElement('option');
    opt.value = Object.keys(resorts[type])[i];
    opt.innerHTML = Object.keys(resorts[type])[i];
    select_country.appendChild(opt);
  }

  populateResorts(type)
}

function populateResorts(type, resortPosition) {
  var position = resortPosition || 0
  var totalResorts = resorts[type][Object.keys(resorts[type])[position]].length

  select_resort.innerHTML = ''

  for(var i = 0; i < totalResorts; i++) {
    var opt = document.createElement('option');
    opt.value = resorts[type][Object.keys(resorts[type])[position]][i];
    opt.innerHTML = resorts[type][Object.keys(resorts[type])[position]][i];
    select_resort.appendChild(opt);
  }
}

function changeCountry(e) {
  var totalResorts = Object.keys(resorts[TYPE]).length
  var resortPosition = 0

  for (var i = 0; i < totalResorts; i++) {
    if (Object.keys(resorts[TYPE])[i] === e.target.value) resortPosition = i
  }

  populateResorts(TYPE, resortPosition)
}

// CHOOSE TIME OF YEAR

document.getElementById('button_winter').addEventListener('click', chooseWinter)
document.getElementById('button_summer').addEventListener('click', chooseSummer)
var radio_winter = document.getElementById('radio_winter')
var radio_summer = document.getElementById('radio_summer')


function chooseWinter(e) {
  e.preventDefault();
  document.getElementById('button_winter').setAttribute('active', 'true');
  document.getElementById('button_summer').setAttribute('active', '');

  radio_winter.checked = true
  radio_summer.checked = false

  TYPE = 'snow'
  populateCountries('snow')
}

function chooseSummer(e) {
  e.preventDefault();
  document.getElementById('button_summer').setAttribute('active', 'true');
  document.getElementById('button_winter').setAttribute('active', '');

  radio_winter.checked = false
  radio_summer.checked = true

  TYPE = 'sun'
  populateCountries('sun')
}


// CHOOSE DATE

document.getElementById('button_feb').addEventListener('click', chooseFeb)
document.getElementById('button_mar').addEventListener('click', chooseMar)
document.getElementById('button_apr').addEventListener('click', chooseApr)
var radio_feb = document.getElementById('radio_feb')
var radio_mar = document.getElementById('radio_mar')
var radio_apr = document.getElementById('radio_apr')

function chooseFeb(e) {
  e.preventDefault();
  document.getElementById('button_feb').setAttribute('active', 'true');
  document.getElementById('button_mar').setAttribute('active', '')
  document.getElementById('button_apr').setAttribute('active', '')

  radio_feb.checked = true
  radio_mar.checked = false
  radio_apr.checked = false
}

function chooseMar(e) {
  e.preventDefault();
  document.getElementById('button_feb').setAttribute('active', '');
  document.getElementById('button_mar').setAttribute('active', 'true')
  document.getElementById('button_apr').setAttribute('active', '')

  radio_feb.checked = false
  radio_mar.checked = true
  radio_apr.checked = false 
}

function chooseApr(e) {
  e.preventDefault();
  document.getElementById('button_feb').setAttribute('active', '');
  document.getElementById('button_mar').setAttribute('active', '')
  document.getElementById('button_apr').setAttribute('active', 'true')

  radio_feb.checked = false
  radio_mar.checked = false
  radio_apr.checked = true  
}


// CHOOSE PAIR

document.getElementById('button_couple').addEventListener('click', chooseCouple)
document.getElementById('button_family').addEventListener('click', chooseFamily)
document.getElementById('button_friends').addEventListener('click', chooseFriends)
var radio_couple = document.getElementById('radio_couple')
var radio_family = document.getElementById('radio_family')
var radio_friends = document.getElementById('radio_friends')

function chooseCouple(e) {
  e.preventDefault();
  document.getElementById('button_couple').setAttribute('active', 'true');
  document.getElementById('button_family').setAttribute('active', '')
  document.getElementById('button_friends').setAttribute('active', '')

  radio_couple.checked = true
  radio_family.checked = false
  radio_friends.checked = false
}

function chooseFamily(e) {
  e.preventDefault();
  document.getElementById('button_couple').setAttribute('active', '');
  document.getElementById('button_family').setAttribute('active', 'true')
  document.getElementById('button_friends').setAttribute('active', '')

  radio_couple.checked = false
  radio_family.checked = true
  radio_friends.checked = false
}

function chooseFriends(e) {
  e.preventDefault();
  document.getElementById('button_couple').setAttribute('active', '');
  document.getElementById('button_family').setAttribute('active', '')
  document.getElementById('button_friends').setAttribute('active', 'true')

  radio_couple.checked = false
  radio_family.checked = false
  radio_friends.checked = true
}

