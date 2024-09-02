document.addEventListener('DOMContentLoaded', () => {
    const songItems = document.querySelectorAll('.song-item');

    songItems.forEach(item => {
        item.addEventListener('click', () => {
            const file = item.getAttribute('data-file');
            const title = item.getAttribute('data-title');
            const artist = item.getAttribute('data-artist');
            const cover = item.getAttribute('data-cover');

            const url = `player.html?song=${encodeURIComponent(file)}&title=${encodeURIComponent(title)}&artist=${encodeURIComponent(artist)}&cover=${encodeURIComponent(cover)}`;
            window.open(url, '_blank');
        });
    });
});
