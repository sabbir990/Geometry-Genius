const paralellogramBtn = document.getElementById('parallelogram-btn');
const paralellogramBase = document.getElementById('paralellogram-base');
const paralellogramHeight = document.getElementById('paralellogram-length');
const paralellogramArea = document.getElementById('area-paralellogram')

paralellogramBtn.addEventListener('click', function(){
    const paralellogramBaseValue = parseFloat(paralellogramBase.value);
    const paralellogramHeightValue = parseFloat(paralellogramHeight.value);

    const paralellogramCalculation = paralellogramBaseValue * paralellogramHeightValue;

    paralellogramArea.innerText = paralellogramCalculation;
})
