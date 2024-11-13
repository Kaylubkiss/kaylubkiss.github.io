class HomeNavigationHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = "\
        <link rel='stylesheet' href='stylesheets/headerframe.css'>\
        \
        <div class='header_grid'>\
        <div class='grid_attrib'>About</div>\
            <div class='grid_attrib' onclick=\"document.location='videogames/vg_home.html'\">Programming</div>\
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
            <div class='grid_attrib' onclick=\"document.location='home.html'\">Home</div>\
            <div class='grid_attrib'>About</div>\
            <div class='grid_attrib'onclick=\"document.location='videogames/vg_home.html'\">Programming</div>\
            <div class='grid_attrib'>Animation</div>\
            <div class='grid_attrib'>Video Production</div>\
        </div>\
    "
    }

}

customElements.define("secondnav-header", SecondaryPageNavHeader)