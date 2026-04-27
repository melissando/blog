document.addEventListener("DOMContentLoaded", function () {
    const user = "";
    const domain = "";

    const email = `${user}@${domain}`;
    const button = document.getElementById("copy-email");
    if (!button) return;

    button.addEventListener("click", function () {
        navigator.clipboard.writeText(email).then(() => {
            button.textContent = "Copied";
            setTimeout(() => {
                button.textContent = "Copy Email";
            }, 1500);
        });
    });
});