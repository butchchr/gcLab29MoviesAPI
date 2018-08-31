function loadData() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:60053/api/Movies", true);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      api.Movies.forEach(element => {
        console.log(element);
        var node = document.createElement("li");
        node.innerText = element;
        document.getElementById("movies").appendChild(node);
      });
    }
  };

  xhttp.send();
}
