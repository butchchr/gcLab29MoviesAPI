function loadMovies() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:60053/api/Movies", true);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      data.forEach(element => {
        console.log(element);
        var node = document.createElement("li");
        node.innerText =
          "Title: " + element.Name + "\n" + " Category: " + element.Category;
        document.getElementById("movies").appendChild(node);
      });
    }
  };

  xhttp.send();
}

function loadDrama() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:60053/api/Movies", true);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      data.forEach(element => {
        console.log(element);
        var node = document.createElement("ul");
        if (element.Category == "Drama")
          node.innerText =
            "Title: " + element.Name + "\n" + " Category: " + element.Category;
        document.getElementById("movies").appendChild(node);
      });
    }
  };

  xhttp.send();
}

function loadAction() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:60053/api/Movies", true);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      data.forEach(element => {
        console.log(element);
        var node = document.createElement("ul");
        if (element.Category == "Action")
          node.innerText =
            "Title: " + element.Name + "\n" + " Category: " + element.Category;
        document.getElementById("movies").appendChild(node);
      });
    }
  };

  xhttp.send();
}

function loadSports() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:60053/api/Movies", true);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      data.forEach(element => {
        console.log(element);
        var node = document.createElement("ul");
        if (element.Category == "Sports")
          node.innerText =
            "Title: " + element.Name + "\n" + " Category: " + element.Category;
        document.getElementById("movies").appendChild(node);
      });
    }
  };

  xhttp.send();
}

function loadComedy() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:60053/api/Movies", true);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      data.forEach(element => {
        console.log(element);
        var node = document.createElement("ul");
        if (element.Category == "Comedy")
          node.innerText =
            "Title: " + element.Name + "\n" + " Category: " + element.Category;
        document.getElementById("movies").appendChild(node);
      });
    }
  };

  xhttp.send();
}

function loadBad() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:60053/api/Movies", true);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      data.forEach(element => {
        console.log(element);
        var node = document.createElement("ul");
        if (element.Category == "Bad")
          node.innerText =
            "Title: " + element.Name + "\n" + " Category: " + element.Category;
        document.getElementById("movies").appendChild(node);
      });
    }
  };

  xhttp.send();
}
