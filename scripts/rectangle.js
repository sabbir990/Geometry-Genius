const rectangleBtn = document.getElementById('rectangle-btn');
const rectangleBase = document.getElementById('rectangle-base');
const rectangleLength = document.getElementById('rectangle-length')
const areaRectangle = document.getElementById('area-rectangle')

rectangleBtn.addEventListener('click', function(){
    const rectangleBaseValue = parseFloat(rectangleBase.value);
    const rectangleLengthValue = parseFloat(rectangleLength.value);

    const rectangleCalculation = rectangleBaseValue * rectangleLengthValue;
    areaRectangle.innerText = rectangleCalculation;
})