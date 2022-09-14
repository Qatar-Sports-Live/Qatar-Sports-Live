// !PROGRESS BAR & Back-TO-Top STARTS FROM HERE
const progressBar = document.getElementById("Progress-bar")
const BackTop = document.querySelector(".Back-to-top")
console.log(progressBar)
// percentage Calculation;
document.addEventListener("scroll", updateWidth)

// updateWidth function
function updateWidth(){
    // console.dir(document.documentElement)
    const {scrollTop, scrollHeight} = document.documentElement;
    const widthPercent = `${(scrollTop /(scrollHeight - window.innerHeight)) * 100}%`
    // console.log(widthPercent)
    progressBar.style.setProperty("--progress", widthPercent)

    // ? back-to-top button starts from here
    if(scrollTop > 1800){
        BackTop.classList.add("Show-Back-to-top")
    }else{
        BackTop.classList.remove("Show-Back-to-top")
    }
}
// !PROGRESS BAR & Back-TO-Top ENDS FROM HERE
