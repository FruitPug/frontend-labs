const loadButton = document.getElementById("loadUser");
const status = document.getElementById("status");
const userInfo = document.getElementById("userInfo");

loadButton.addEventListener("click", function () {
    loadButton.disabled = true;
    status.textContent = "Downloading...";
    userInfo.hidden = true;

    fetch("https://randomuser.me/api/")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP Error: " + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            if (!data.results || data.results.length === 0) {
                throw new Error("API didn't return user data");
            }

            const user = data.results[0];

            document.getElementById("picture").src = user.picture.large;
            document.getElementById("cell").textContent = user.cell;
            document.getElementById("city").textContent = user.location.city;
            document.getElementById("country").textContent = user.location.country;
            document.getElementById("postcode").textContent = user.location.postcode;

            userInfo.hidden = false;
            status.textContent = "Success";
        })
        .catch(function (error) {
            status.textContent =
                "Couldn't get data: " + error.message;
        })
        .finally(function () {
            loadButton.disabled = false;
        });
});
