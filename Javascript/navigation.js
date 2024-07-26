class HomeNavigationHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = "\
        <link rel='stylesheet' href='stylesheets/headerframe.css'>\
        \
        <div class='header_grid'>\
        <div class='grid_attrib' onclick=\"document.location='calebswebpage_secondpage.html'\">About</div>\
            <div class='grid_attrib' onclick=\"document.location='calebswebpage_videogames_homepage.html'\">Video Games</div>\
            <div class='grid_attrib'>Animation</div>\
            <div class='grid_attrib'>Video Production</div>\
        </div>"
    }
}


customElements.define('homenav-header', HomeNavigationHeader)

class SecondaryPageNavHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = "\
        <link rel='stylesheet' href='stylesheets/headerframe.css'>\
        <div class='header_grid'>\
            <div class='grid_attrib' onclick=\"document.location='calebswebpage_home.html'\">Home</div>\
            <div class='grid_attrib' onclick=\"document.location='calebswebpage_secondpage.html'\">About</div>\
            <div class='grid_attrib'>Video Games</div>\
            <div class='grid_attrib'>Animation</div>\
            <div class='grid_attrib'>Video Production</div>\
        </div>\
    "
    }

}

customElements.define("secondnav-header", SecondaryPageNavHeader)