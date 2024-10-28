
// Get the current hour
const d = new Date();
let hour = d.getHours();
let greetingText = document.getElementById("greeting-text");
let timeImage = document.getElementById("time-image");

if (hour < 12) {
    // Morning
    greetingText.textContent = "Good Morning!";
    timeImage.src = "https://images.pexels.com/photos/209807/pexels-photo-209807.jpeg?cs=srgb&dl=pexels-pixabay-209807.jpg&fm=jpg";
    document.body.classList.add("morning-bg");
} else if (hour < 17) {
    // Afternoon
    greetingText.textContent = "Good Afternoon!";
    timeImage.src = "https://plus.unsplash.com/premium_photo-1678559034015-a487448e473b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZ0ZXJub29ufGVufDB8fDB8fHww";
    document.body.classList.add("afternoon-bg");
} else {
    // Night
    greetingText.textContent = "Good Night!";
    timeImage.src = "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2018/06/Nighttime-photography-02.jpg?fit=1500%2C1061&ssl=1";
    document.body.classList.add("night-bg");
}
