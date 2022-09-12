const progressBar = document.getElementById("Progress-bar")
console.log(progressBar)
// percentage Calculation;
document.addEventListener("scroll", updateWidth)

// !updateWidth function
function updateWidth(){
    // console.dir(document.documentElement)
    const {scrollTop, scrollHeight} = document.documentElement;
    const widthPercent = `${(scrollTop /(scrollHeight - window.innerHeight)) * 100}%`
    // console.log(widthPercent)
    progressBar.style.setProperty("--progress", widthPercent)
}
