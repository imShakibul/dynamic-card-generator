document.getElementById("cardForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const channel = document.getElementById("channel").value;
    const views = document.getElementById("views").value;
    const monthsOld = document.getElementById("monthsOld").value;
    const duration = document.getElementById("duration").value;
    const thumbnailUrl = document.getElementById("thumbnailUrl").value;
    const thumbnailUpload = document.getElementById("thumbnailUpload").files[0];

    // Use the uploaded image if available, otherwise use URL input
    const thumbnail = thumbnailUpload ? URL.createObjectURL(thumbnailUpload) : thumbnailUrl;

    createCard(title, channel, views, monthsOld, duration, thumbnail);
    document.getElementById("cardForm").reset();
});

function createCard(title, channel, views, monthsOld, duration, thumbnail) {
    const viewStr = views >= 1000000 ? (views / 1000000).toFixed(1) + "M" : views >= 1000 ? (views / 1000).toFixed(1) + "K" : views;

    const cardHtml = `
        <div class="container">
            <div class="image">
                <img src="${thumbnail}" alt="Thumbnail">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${channel} · ${viewStr} views · ${monthsOld} months ago</p>
            </div>
        </div>
    `;

    document.getElementById("cardsWrapper").insertAdjacentHTML("beforeend", cardHtml);
}
