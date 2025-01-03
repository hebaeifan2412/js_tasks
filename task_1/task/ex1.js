function fOver(){
    document.getElementById('mydiv').innerHTML="can i help you ";
}
function fOut(){
    document.getElementById('mydiv').innerHTML="Hello world";
}
//exercise 3
function TextStyles() {
    const mydiv = document.getElementById("mydiv");
    
    // Get selected font family and size
    const fontFamily = document.getElementById("font_family").value;
    const fontSize = document.getElementById("font_size").value;

    // Get the checked states of the checkboxes
    const italic = document.getElementById("font_italic").checked;
    const bold = document.getElementById("font_bold").checked;
    const underline = document.getElementById("font_underline").checked;

    // Set styles dynamically
    mydiv.style.fontFamily = fontFamily;
    mydiv.style.fontSize = fontSize;
    mydiv.style.fontStyle = italic ? 'italic' : 'normal';
    mydiv.style.fontWeight = bold ? 'bold' : 'normal';
    mydiv.style.textDecoration = underline ? 'underline' : 'none';}
    //exercise 4
    

