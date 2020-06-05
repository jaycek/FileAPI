function showFiles(){
    let inputField = document.getElementById("input");
    let files = inputField.files;
    console.log(files);

    let filereader = new FileReader;
   
    filereader.onload=function(event){

        // let fileContent=filereader.result;
        // $("#preview").text(fileContent);
        let imageurl = event.target.result;
        console.log(imageurl);
        // $("#preview").attr("src",`${imageurl}`);
        $("#preview").css('backgroundImage',`url(${imageurl})`);
    }
    // filereader.readAsText(files[0]);
    filereader.readAsDataURL(files[0]);
}