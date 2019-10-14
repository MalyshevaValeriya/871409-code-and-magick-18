'use strict';
(function () {
  var COUNT_WIZARD = 4;
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var userDialog = document.querySelector('.setup');
  window.colorize = {
    COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green']
  };

  window.setup = {
    getRandomElement: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  };

  var createWizard = function (name, surname, coatColor, eyesColor) {
    var wizard = {
      name: window.setup.getRandomElement(name) + ' ' + window.setup.getRandomElement(surname),
      coatColor: window.setup.getRandomElement(coatColor),
      eyesColor: window.setup.getRandomElement(eyesColor)
    };

    return wizard;
  };

  var createWizardArray = function () {
    var wizards = [];
    for (var i = 0; i < COUNT_WIZARD; i++) {
      wizards.push(createWizard(NAMES, SURNAMES, window.colorize.COAT_COLOR, window.colorize.EYES_COLOR));
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
})();
