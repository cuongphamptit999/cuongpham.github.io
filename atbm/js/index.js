var fileInput = document.querySelector('#myFile');
var fileName = document.querySelector('#fileName');
var inputReset = document.querySelector("#inputReset");

fileInput.addEventListener('change', function () {
    if(fileInput.files.length > 0){
        $('.css-name-file').css("display","flex");

        fileName.innerText = fileInput.files[0].name;
        console.log(fileInput.files.length);

        $('#btnSubmit').css("display","inline-block");
        $('.custom-input-file').css("display","none");
    }
  
});

function deleteFile(){
    document.getElementById("myFile").value = "";
    console.log(fileInput.files.length);
    $('.css-name-file').css("display","none");

    $('#btnSubmit').css("display","none");
    $('.custom-input-file').css("display","inline-block");
}
