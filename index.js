function switch_css()
{
    var el1 = document.getElementById("style1");
    var el2 = document.getElementById("style2");
    
    if (el1.disabled) {
        el2.disabled = "disabled";
        el1.disabled = undefined;
    } else {
        el1.disabled = "disabled";
        el2.disabled = undefined;
    }
}