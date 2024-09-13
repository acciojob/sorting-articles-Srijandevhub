//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
function stripArticle(bandName) {
    let articles = ['A ', 'An ', 'The '];
    for (let article of articles) {
        if (bandName.startsWith(article)) {
            return bandName.slice(article.length);
        }
    }
    return bandName;
}
const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));
const bandList = document.getElementById('bands');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});