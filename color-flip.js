
// Scripts

const change = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#000";
    document.getElementById('clr1').style.color = "#" + randomColor;
    document.getElementById('clr2').style.color = "#" + randomColor;
    document.getElementById('clr3').style.color = "#" + randomColor;
    document.getElementById('clr4').style.color = "#" + randomColor;
    document.getElementById('clr5').style.color = "#" + randomColor;
    document.getElementById('clr6').style.color = "#" + randomColor;
    document.getElementById('clr7').style.color = "#" + randomColor;




    // console.log(randomColor)
}

change()