function showNotification(data){
    const Notif = document.createElement('div');
    Notif.innerHTML = `<p>${data.html}</p>`;
    Notif.style.position = "fixed";
    Notif.style.top = `${data.top}px`;
    Notif.style.left = `${data.left}px`;
    Notif.classList.add(data.className)
    document.body.appendChild(Notif)
}

showNotification({
    top: 100,
    left: 10,
    html: "Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi",
    className: "test"
    });
showNotification({
    top: 200,
    left: 50,
    html: "Bye Bye Bye Bye Bye Bye Bye Bye Bye Bye Bye Bye",
    className: "test"
});