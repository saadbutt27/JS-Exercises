function make_album(artistName, albumTitle, noOfTracks) {
    const Album = {
        artistName: artistName,
        albumTitle: albumTitle,
        noOfTracks: noOfTracks,   
    }

    return Album;
}

let album1 = make_album("atif aslam", "bands");
let album2 = make_album("ali zafar", "karachities");
let album3 = make_album("ali azmat", "cokers", 5);
console.log(album1.albumTitle, album1.artistName);
console.log(album2.albumTitle, album2.artistName);
console.log(album3.albumTitle, album3.artistName, album3.noOfTracks);
