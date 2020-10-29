function fun() {
    const newTxt = document.querySelector("#user-text").value;
    const vlres = document.querySelector("#valueResualt").innerHTML = newTxt;
    const lengthNewTxt = newTxt.length;

    document.querySelector("#user-text").value = '';
}