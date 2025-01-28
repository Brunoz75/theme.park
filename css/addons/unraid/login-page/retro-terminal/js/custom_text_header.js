
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>

  _        _  _____ ___ _   _    _      _   _ _   _ ____      _    ___ ____  
 | |      / \|_   _|_ _| \ | |  / \    | | | | \ | |  _ \    / \  |_ _|  _ \ 
 | |     / _ \ | |  | ||  \| | / _ \   | | | |  \| | |_) |  / _ \  | || | | |
 | |___ / ___ \| |  | || |\  |/ ___ \  | |_| | |\  |  _ <  / ___ \ | || |_| |
 |_____/_/   \_\_| |___|_| \_/_/   \_\  \___/|_| \_|_| \_\/_/   \_\___|____/ 
                                                                             

</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
