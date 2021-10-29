var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		alert(this.responseText);
    }
  };
  xhttp.open("GET", "https://www.spotify.com/api/account-settings/v1/profile");
  xhttp.setRequestHeader("Content-Type","application/json");
  xhttp.setRequestHeader("X-Requested-With","XMLHttpRequest");
  xhttp.AllowCredentials=true;
  xhttp.send();
