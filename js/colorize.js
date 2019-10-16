'use strict';
(function () {
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizardElementsColor = document.querySelector('.setup-wizard');
  var wizardCoatColor = wizardElementsColor.querySelector('.wizard-coat');
  var wizardCoatColorInput = document.querySelector('input[name=coat-color]');
  var wizardEyesColor = wizardElementsColor.querySelector('.wizard-eyes');
  var wizardEyesColorInput = document.querySelector('input[name=eyes-color]');
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var fireballInput = document.querySelector('input[name=fireball-color]');


  var onWizardCoatClick = function () {
    var coatColor = window.setup.getRandomElement(COAT_COLOR);
    wizardCoatColor.style.fill = coatColor;
    wizardCoatColorInput.value = coatColor;
  };

  wizardCoatColor.addEventListener('click', function () {
    onWizardCoatClick();
  });

  var onWizardEyesClick = function () {
    var eyesColor = window.setup.getRandomElement(EYES_COLOR);
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
