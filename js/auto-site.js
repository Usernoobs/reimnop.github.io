let pages = [
    ["About me!", "/index.html"],
    ["LeaderEngine", "/leaderengine.html"],
    ["UnImage Object v2", "/unimageobjectv2.html"],
    ["PA Animator", "/paanimator.html"],
    ["PA Prefab Toolkit", "/paprefabtoolkit.html"],
    ["Enchariud", "/enchariud.html"],
    ["DataM", "/datam.html"]
];

function init() {
    let sidebar = document.getElementById("sidebar");
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        sidebar.innerHTML += "<div class=\"sidebar-button\" onclick=\"window.location.href = '" + page[1] + "';\"><div class=\"red-line-sidebar-btn\" ></div><div class=\"sidebar-text\"><span>" + page[0] + "</span></div></div>";
    }

    let currentPagePath = window.location.pathname;
    let currentPageIndex = 0;
    for (let i = 0; i < pages.length; i++) {
        if (pages[i][1] == currentPagePath) {
            currentPageIndex = i;
            break;
        }
    }

    document.title = pages[currentPageIndex][0] + " | Reimnop";
    document.getElementById("header-text").innerHTML = pages[currentPageIndex][0];
}