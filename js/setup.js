'use strict';
var COUNT_WIZARD = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var wizardElementsColor = document.querySelector('.setup-wizard');
var wizardCoatColor = wizardElementsColor.querySelector('.wizard-coat');
var wizardForm = document.querySelector('.setup-wizard-form');
var wizardCoatColorInput = wizardForm.elements['coat-color'];
var wizardEyesColor = wizardElementsColor.querySelector('.wizard-eyes');
var wizardEyesColorInput = wizardForm.elements['eyes-color'];
var fireballColor = document.querySelector('.setup-fireball-wrap');
var fireballInput = wizardForm.elements['fireball-color'];
var wizardNameInput = wizardForm.elements['username'];

var userDialog = document.querySelector('.setup');

document.querySelector('.setup-similar').classList.remove('hidden');


var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var createWizard = function (name, surname, coatColor, eyesColor) {
  var wizard = {
    name: getRandomElement(name) + ' ' + getRandomElement(surname),
    coatColor: getRandomElement(coatColor),
    eyesColor: getRandomElement(eyesColor)
  };

  return wizard;
};

var createWizardArray = function () {
  var wizards = [];
  for (var i = 0; i < COUNT_WIZARD; i++) {
    wizards.push(createWizard(NAMES, SURNAMES, COAT_COLOR, EYES_COLOR));
  }

  return wizards;
};

var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizards = function () {
  var wizards = createWizardArray();
  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < COUNT_WIZARD; i++) {

    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

renderWizards();

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && document.activeElement !== wizardNameInput) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var onWizardCoatClick = function () {
  var coatColor = getRandomElement(COAT_COLOR);
  wizardCoatColor.style.fill = coatColor;
  wizardCoatColorInput.value = coatColor;
};

wizardCoatColor.addEventListener('click', function () {
  onWizardCoatClick();
});

var onWizardEyesClick = function () {
  var eyesColor = getRandomElement(EYES_COLOR);
  wizardEyesColor.style.fill = eyesColor;
  wizardEyesColorInput.value = eyesColor;
};

wizardEyesColor.addEventListener('click', function () {
  onWizardEyesClick();
});

var onFireballClick = function () {
  var wizzardFireballColor = getRandomElement(FIREBALL_COLOR);
  fireballColor.style.backgroundColor = wizzardFireballColor;
  fireballInput.value = wizzardFireballColor;
};

fireballColor.addEventListener('click', function () {
  onFireballClick();
});
