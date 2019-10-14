'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var wizardForm = document.querySelector('.setup-wizard-form');
  var wizardNameInput = wizardForm.elements['username'];
  var dialogHandler = setup.querySelector('.upload');

  document.querySelector('.setup-similar').classList.remove('hidden');
  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  wizardNameInput.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, evt.stopPropagation());
  });

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    setup.style.top = '';
    setup.style.left = '';
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var coordsTop = setup.offsetTop - shift.y;
      var coordsLeft = setup.offsetLeft - shift.x;

      if (coordsTop < setup.offsetParent.offsetTop) {
        coordsTop = setup.offsetParent.offsetTop;
      }

      if (coordsTop > setup.offsetParent.offsetHeight) {
        coordsTop = setup.offsetParent.offsetHeight;
      }

      if (coordsLeft < setup.offsetParent.offsetLeft + setup.offsetWidth / 2) {
        coordsLeft = setup.offsetParent.offsetLeft + setup.offsetWidth / 2;
      }

      if (coordsLeft > setup.offsetParent.offsetWidth - setup.offsetWidth / 2) {
        coordsLeft = setup.offsetParent.offsetWidth - setup.offsetWidth / 2;
      }

      setup.style.top = coordsTop + 'px';
      setup.style.left = coordsLeft + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evtClick) {
          evtClick.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
