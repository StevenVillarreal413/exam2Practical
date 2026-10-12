async function loadOrders(){
    const tbody = document.getElementById("order-body");
    tbody.innerHTML = "";
    const response = await fetch("/api/courses");
    const json = await response.json();
    for(const order of json.data){
        const row = document.createElement("tr");
        row.innerHTML = `<td>${order.courseID}</td><td>${order.courseNo}</td><td>${order.courseDesc}</td><td>${order.lastSemTaught}</td><td>${order.maxStudents}</td>`;
        tbody.appendChild(row);
    }
}

loadOrders();

document.getElementById("add-class").addEventListener("submit", async function (event) {
        event.preventDefault();
        const newOrder = {
            courseNo: document.getElementById("courseNo").value,
            courseDesc: document.getElementById("courseDesc").value,
            lastSemTaught: document.getElementById("lastSemTaught").value,
            maxStudents: document.getElementById("maxStudents").value,
        }

        const response = await fetch("/api/courses", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newOrder)
        });
    await loadOrders();
});


