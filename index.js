const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    let unit = document.getElementById("unit").value
    const meter = (Number(unit) * 3.281).toFixed(3)
    const feet = (Number(unit) / 3.281).toFixed(3)
    const liter = (Number(unit) * 0.264).toFixed(3)
    const gallon = (Number(unit) / 0.264).toFixed(3)
    const kilos = (Number(unit) * 2.204).toFixed(3)
    const pound = (Number(unit) / 2.204).toFixed(3)
    const lengthTxt = document.getElementById("length-text")
    const volumeTxt = document.getElementById("volume-text")
    const massTxt = document.getElementById("mass-text")
    
    lengthTxt.textContent = `${unit} meters = ${meter} feet | ${unit} feet = ${feet} meters`
    volumeTxt.textContent = `${unit} liters = ${liter} gallons | ${unit} gallons = ${gallon} liters`
    massTxt.textContent = `${unit} kilos = ${kilos} pounds | ${unit} pounds = ${pound} kilos`
})


