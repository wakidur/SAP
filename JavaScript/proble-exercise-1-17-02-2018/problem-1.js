function deletBookmark(name) {
	var bookmarks = json.parse(localStorage.getItem('bookmarks'));
	// bookmarks.splice(0,1);
	for( var i = 0; i < bookmarks.length ; i++ ) {
		// var x = bookmarks[i].name;
		// var y = name;
		if(bookmarks[i].name == name) {
			bookmarks.splice(i, 1);
		}
	}
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	fatchBookmarks();
}

function fatchBookmarks(){}