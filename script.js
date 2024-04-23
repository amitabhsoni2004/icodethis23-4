let btn = document.querySelector(".btn");
let apps = document.querySelector(".apps");
let getinfo = document.querySelector(".getinfo");
let send = document.querySelector(".send");
let input = document.getElementById("input");


const imageMapping = {
    "Slack": "https://static-00.iconduck.com/assets.00/slack-logo-illustration-256x256-3ni8qhn1.png",
    "Trello": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJwEqT-ZamYeYQl7FzoQiQMb8JGVrG8Gz3LQdC-K3Sw&s",
    "RealtieBoard": "https://super-monitoring.com/blog/wp-content/uploads/2016/10/realtimeboard.png",
    "Jira": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOdiLyQkjRNC36k-sHZEVjmtwF1lwg6rkr_fwc3Ox4MOTcF3STfDrQc7r8GBXLJzospE&usqp=CAU",
    "Dropbox": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDslJ-dxGaLENDOdkcy9IKz8v9mZffazZsP2OilIyXA&s",
    "Google": "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
    "Instagram":"https://static-00.iconduck.com/assets.00/instagram-icon-2048x2048-uc6feurl.png",
    "Whatsapp":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png",
    "Linkedin":"https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png",
    "Twitter":"https://img.freepik.com/premium-vector/new-twitter-logo-2023-twitter-logo_690577-760.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1713830400&semt=ais",
    "Telegram":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png",
    "Github":"https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png",
    "Discord":"https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg",
    "Facebook":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png",
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Add event listeners
btn.addEventListener("click", () => {
    getinfo.style.transform = "translateX(0px)";
    // input.focus();
});

send.addEventListener("click", () => {
    let inputValue = input.value.trim();
    if (inputValue !== "") {
        let formattedInput = capitalizeFirstLetter(inputValue); // Capitalize first letter
        getinfo.style.transform = "translateX(1000px)";
        let div = document.createElement("div");
        let imgSrc = imageMapping[formattedInput] || 'https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA'; // Use the capitalized input
        div.innerHTML = `<img src="${imgSrc}" alt="">
            <small>${formattedInput}</small>`; // Display the capitalized name
        apps.appendChild(div);
    }
    else{
        alert("Input field can not be Empty....");
    }
    input.value = "";
});
