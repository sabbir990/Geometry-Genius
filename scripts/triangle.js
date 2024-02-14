const triangleBtn = document.getElementById('triangle-btn');
const triangleBase = document.getElementById('triangle-base');
const triangleHeight = document.getElementById("triangle-height");
const areaTriangle = document.getElementById('area-triangle')

triangleBtn.addEventListener('click', function(){
    const triangleBaseValue = parseFloat(triangleBase.value);
    const triangleHeightValue = parseFloat(triangleHeight.value);

    const calculationTriangle = 0.5 * triangleBaseValue * triangleHeightValue;

    areaTriangle.innerText = calculationTriangle;
})