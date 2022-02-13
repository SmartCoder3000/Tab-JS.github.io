var tabVal = 1
var text = "";
var key = prompt("Enter The Key")
var url = prompt("Now Enter A URL")

if (url === null){
  url = "google.com"
}


const tab = document.createElement('iframe');
  tab.style.display = "none";
  tab.style.zIndex = "1000";
	tab.style.position = "absolute";
  tab.src = "https://mikesproxy.herokuapp.com/main/" + url;
  tab.id = "url"
  tab.style.width = "100%"
  tab.style.height = "100%"
  tab.sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-cross-origin";

function main() {
  addEventListener('keydown', logKey);
  function logKey(e) {
    if (e.key.length === 1){
    text += e.key;if (text.slice((0-key.length)) === key){
      if (tabVal === 0){
        tabVal = 1
        passwdProxy.innerText = ""
        tab.style.display = "none";
      }
      else{
        tabVal = 0
        passwdProxy.innerText = key
        tab.style.display = "block";
      }
    }
  }
    }

  var passwdProxy = document.createElement("a")
  passwdProxy.style.color = "black;"

  tab.appendChild(passwdProxy)
  document.body.appendChild(tab)
  
;}
main()
