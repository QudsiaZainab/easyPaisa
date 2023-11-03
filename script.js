function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.querySelector(".content");
    var bars = document.querySelectorAll(".bar");

    sidebar.classList.toggle("active");
    content.classList.toggle("active");

    bars.forEach(function(bar) {
        bar.classList.toggle("active" + (sidebar.classList.contains("active") ? 1 : ""));
    });
}

function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector(".styled-table");
    const rows = table.tBodies[0].rows;
    const rowsPerPage = 4;
    let currentPage = 0;
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const pageInfo = document.getElementById("pagination-info");
  
    function showPage(page) {
      const start = page * rowsPerPage;
      const end = start + rowsPerPage;
      for (let i = 0; i < rows.length; i++) {
        if (i >= start && i < end) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  
    function updatePageInfo(page) {
      const start = page * rowsPerPage + 1;
      const end = Math.min((page + 1) * rowsPerPage, rows.length);
      const total = rows.length;
  
      pageInfo.textContent = `Showing ${start} to ${end} of ${total} entries`;
    }
  
    function updateButtonsState() {
      previousButton.disabled = currentPage === 0;
      nextButton.disabled = currentPage >= Math.ceil(rows.length / rowsPerPage) - 1;
    }
  
    previousButton.addEventListener("click", function () {
      if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
        updatePageInfo(currentPage);
        updateButtonsState();
      }
    });
  
    nextButton.addEventListener("click", function () {
      if (currentPage < Math.ceil(rows.length / rowsPerPage) - 1) {
        currentPage++;
        showPage(currentPage);
        updatePageInfo(currentPage);
        updateButtonsState();
      }
    });
  
    // Initially, show the first page and update buttons state and page info
    showPage(currentPage);
    updatePageInfo(currentPage);
    updateButtonsState();
  });
  

  var data = {
    labels: [
        "00:00", "00:01", "00:02", "00:03", "00:04", "00:05", "00:06", "00:07", "00:08",
        "00:09", "00:10", "00:11", "00:12", "00:13", "00:14", "00:15", "00:16", "00:17", "00:18", "00:19", "00:20", "00:21"
    ],
    datasets: [{
        label: 'Data Points',
        data: [3250, 5900, 1900, 2900, 4100, 4500, 8600, 0, 700, 400, 1000, 8400, 10700, 7300, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)', // Fill color
        fill: true // Fill the area under the line
    }]
};

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'Y-Axis Title'
                },
                ticks: {
                    min: 0,
                    max: 12000,
                    stepSize: 500
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'X-Axis Title'
                },
                grid: {
                    display: false // Set display to false to hide X-axis grid lines
                }
            }
        }
    }
});