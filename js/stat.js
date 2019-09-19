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
var maxHeight = CLOUD_HEIGHT - TEXT_HEIGHT - LABEL_GAP - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect (x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

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
  renderCloud (ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud (ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText ('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT + GAP);
  ctx.fillText ('Список результатов:', CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT * 2 + GAP);

  var maxTime = getMaxElement (times);

  for (var i = 0; i < names.length; i++) {
    console.log(i);
    var barHeight = maxHeight * times[i] / maxTime;

    ctx.fillStyle = 'black';
    ctx.fillText (names[i], CLOUD_X + CLOUD_PADDING + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillText (Math.round(times[i]), CLOUD_X + CLOUD_PADDING + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + LABEL_GAP - GAP + (maxHeight - barHeight));


    names[i] == 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'hsl(240,' + Math.round(Math.random()*100)+ '%, 50%)';
    ctx.fillRect (CLOUD_X + CLOUD_PADDING + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + LABEL_GAP + (maxHeight - barHeight), BAR_WIDTH, barHeight);
  }
};
