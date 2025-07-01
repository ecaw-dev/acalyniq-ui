const ctx = document.getElementById('myChart1');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'Jan', 'Feb', 'Mar', 'Apr',
            'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [{
            label: 'New Students In 2025',
            data: [50, 80, 120, 90, 150, 200, 180, 220, 210, 250, 270, 300],
            borderWidth: 2,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            tension: 0.4, // smooth curves
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Students'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            }
        }
    }
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [
            'Intro to Python',
            'React Basics',
            'Advanced JS',
            'CSS Animations',
            'MongoDB for Beginners'
        ],
        datasets: [{
            label: 'Watch Time (Minutes)',
            data: [350, 420, 210, 180, 290],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Watch Time (Minutes)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Videos'
                }
            }
        }
    }
});

const sliderItems = document.querySelectorAll(".slide-container");
const sliderNav = document.querySelector(".staticts-nav");
const staticsTitle = document.querySelector(".statics-title");

sliderItems.forEach((item, index) => {
    const navItem = document.createElement("li");
    navItem.classList.add("statics-nav-item");
    navItem.textContent = item.getAttribute("data-name");



    if (index === 0) {
        navItem.classList.add("active");
        item.classList.add("active");
        staticsTitle.textContent = item.getAttribute("data-name") + " Statistics";
    }

    navItem.addEventListener("click", () => {
        sliderItems.forEach((slide) => {
            slide.classList.remove("active");
        });
        item.classList.add("active");

        const navItems = document.querySelectorAll(".statics-nav-item");
        navItems.forEach((navItem) => {
            navItem.classList.remove("active");
        });
        navItem.classList.add("active");
    });

    sliderNav.appendChild(navItem);
})

