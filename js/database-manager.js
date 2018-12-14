const leaderboard = document.querySelector("#leaderboard");
const form = document.querySelector("#submit-score");

function renderLeaderboard(doc) {
    let li = document.createElement("li");
    let name = document.createElement("span");
    let score = document.createElement("span");

    li.setAttribute("data-id", doc.id);
    name.textContent = doc.data().name;
    score.textContent = doc.data().score;

    li.appendChild(name);
    li.appendChild(score);

    leaderboard.appendChild(li);
}

function test(params) {
    db.collection("leaderboard")
        .get()
        .then(snapshot => {
            snapshot.docs.forEach(doc => {
                renderLeaderboard(doc);
            });
        });
}

form.addEventListener("submit", evt => {
    evt.preventDefault();
    db.collection("leaderboard").add({
        name: form.name.value,
        score: form.score.value
    });
    form.reset();
});

module.exports = {
    test: test
};
