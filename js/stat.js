'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_PADDING = 55;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var LABEL_GAP = 80;
var VICTORY_TEXT = 'Ура вы победили!';
var RESULT_TEXT = 'Список результатов:';
var maxHeight = CLOUD_HEIGHT - TEXT_HEIGHT - LABEL_GAP - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText(text, x, y);
};

var renderColor = function (names) {
  return names === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240,' + Math.round(Math.random() * 100) + '%, 50%)';
}

var renderColumn = function (ctx, names, times, maxTime, i) {
  var barHeight = maxHeight * times / maxTime;
  var x = CLOUD_X + CLOUD_PADDING + (BAR_GAP + BAR_WIDTH) * i;

  renderText(ctx, names, x, CLOUD_Y + CLOUD_HEIGHT - GAP);
  renderText(ctx, Math.round(times), x, CLOUD_Y + LABEL_GAP - GAP + (maxHeight - barHeight));

  ctx.fillStyle = renderColor(names);
  ctx.fillRect(x, CLOUD_Y + LABEL_GAP + (maxHeight - barHeight), BAR_WIDTH, barHeight);
}

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, VICTORY_TEXT, CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT + GAP);
  renderText(ctx, RESULT_TEXT, CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT * 2 + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    console.log(i);
    renderColumn(ctx, names[i], times[i], maxTime, i)
  }
};
