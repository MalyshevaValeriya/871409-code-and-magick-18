'use strict';
(function () {
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardElementsColor = document.querySelector('.setup-wizard');
  var wizardCoatColor = wizardElementsColor.querySelector('.wizard-coat');
  var wizardCoatColorInput = document.querySelector('input[name=coat-color]');
  var wizardEyesColor = wizardElementsColor.querySelector('.wizard-eyes');
  var wizardEyesColorInput = document.querySelector('input[name=eyes-color]');
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var fireballInput = document.querySelector('input[name=fireball-color]');


  var onWizardCoatClick = function () {
    var coatColor = window.setup.getRandomElement(window.colorize.COAT_COLOR);
    wizardCoatColor.style.fill = coatColor;
    wizardCoatColorInput.value = coatColor;
  };

  wizardCoatColor.addEventListener('click', function () {
    onWizardCoatClick();
  });

  var onWizardEyesClick = function () {
    var eyesColor = window.setup.getRandomElement(window.colorize.EYES_COLOR);
    wizardEyesColor.style.fill = eyesColor;
    wizardEyesColorInput.value = eyesColor;
  };

  wizardEyesColor.addEventListener('click', function () {
    onWizardEyesClick();
  });

  var onFireballClick = function () {
    var wizzardFireballColor = window.setup.getRandomElement(FIREBALL_COLOR);
    fireballColor.style.backgroundColor = wizzardFireballColor;
    fireballInput.value = wizzardFireballColor;
  };

  fireballColor.addEventListener('click', function () {
    onFireballClick();
  });

})();
