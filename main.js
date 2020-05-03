const App = (()=>{
    let currentColor;
    let selectedColor = null;
    const blocks = document.querySelectorAll(".block");
    const colors = document.querySelectorAll(".color");

    const setColor = (e) =>{
        e.target.style.backgroundColor = currentColor;
    }

    function selected(e){
        if(selectedColor === null){
            e.target.classList.toggle("selected")
            selectedColor = e.target
            currentColor = selectedColor.classList[1]
        }else{
            selectedColor.classList.toggle("selected")
            e.target.classList.toggle("selected")
            selectedColor = e.target
            currentColor = selectedColor.classList[1]
        }
    }

    const colorListener = (item) =>{
        item.addEventListener("click", selected)
    }

    const blockListner = (item) =>{
        item.addEventListener("click", setColor)
    }

    const listners = () =>{
        colors.forEach(colorListener);
        blocks.forEach(blockListner);
    }

    return{
        listen: listners
    }
})();

App.listen();
