//Declaring mark all as read button variable
let btn = document.querySelector(".MAAR_button");

//Creating function to remove the dot and background when the maar button is clicked
const unmark = () => {
    let unread = document.querySelectorAll('.unread');
    let dots = document.querySelectorAll('.notification_dot')

    dots.forEach(dot => {
        dot.style.display = "none";
    });

    unread.forEach(message => {
        message.style.background = "#fff";
        message.setAttribute("isRead", true)
    });
}

//Setting the numer of notifications to 0 when maar is clicked
const checkNum = () => {
    let number = document.querySelector(".notifications_number")
    let unread = document.querySelectorAll('.notification , .unread');

    unread.forEach(message => {
       let state = message.getAttribute('isRead')

        if (state = 'true'){
            number.innerHTML = "0"
        }
    });
}

//Listening for clcik from the user and running the function when clicked
btn.addEventListener("click", function() {
    unmark()
    checkNum()
});