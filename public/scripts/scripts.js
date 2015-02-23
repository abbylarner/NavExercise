var url = "/api/nav.json"; 
var xmlhttp = new XMLHttpRequest(); 
xmlhttp.open("GET", url,true);

xmlhttp.onreadystatechange=function() {
	if (xmlhttp.readyState==4) {
	 	var navitem = JSON.parse(xmlhttp.responseText);
	  var i, items, j;
	  var row = ''

		for (i = 0; i < navitem.items.length; i++) {
			items = navitem.items[i];

			if (navitem.items[i].items.length == 0){
				row += '<li><a href="' + items.url + '">' + '<p>' + items.label + '</p></a></li>'; 
				var navlist = document.getElementById('nav-inner');         
			}

			else if (navitem.items[i].items.length > 0) {
				row += '<li><div class="secondary"><input type="radio" name="toggled" id="toggle-' + i + '" class="toggle"><label for="toggle-' + i + '">' + '<a for="toggle-' + i + '">' + items.label + '</a>' + '<div class="arrow" for="toggle-' + i + '"></div></label><div class="dropdown"><ul>'

				for (j = 0; j < navitem.items[i].items.length; j++) {
						secondary = navitem.items[i].items[j];
						row += '<li><a href="' + secondary.url + '">'  + secondary.label + '</a></li>';
						var navlist = document.getElementById('nav-inner');        
						navlist.innerHTML = row; 
					}

				row += '</ul></div></div></li>';
			}
		}
	}
}
xmlhttp.send(null)

