console.log("Linked With index.html")
function Login(){
    localStorage.setItem("User1", document.getElementById("User1").value);
    localStorage.setItem("User2", document.getElementById("User2").value);
    window.location="index2.html";
    
}