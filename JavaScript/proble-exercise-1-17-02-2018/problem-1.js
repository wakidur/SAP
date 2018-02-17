function deletBookmark(name) {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // bookmarks.splice(0,1);
    for (var i = 0; i < bookmarks.length; i++) {
        // var x = bookmarks[i].name;
        // var y = name;
        if (bookmarks[i].name == name) {
            bookmarks.splice(i, 1);
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fatchBookmarks();
}

function fatchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    var bookmarksResults = document.getElementById('bookmarksResults');

    bookmarksResults.innerHTML = "";
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += "<div class='bdr'>" +
            "<h3>" + name +
            "<a class='btn btn-primary' target='_blank' href='" + url + "'> Visit</a> " +
            "<a class='btn btn-primary' onclick='deletBookmark(\" " + name + "\")'> Delete</a> " +
            "</h3>" +
            "</div>";
    }
}