$(function() {
    // default fill color is set to be red.
    let grid = $("#pixelCanvas");
    let color = "#ff0000";

    // resets the grid after hitting submit intead of adding to current grid.
    $("#sizePicker").submit(function(event) {
        event.preventDefault();
        makeGrid();
    });

    //picking color from color picker
    $("#colorPicker").change(function() {
        color = $(this).val();
    });

    // this will fill the cell/grid while holding mouse button
    grid.on("mousemove", "td", function(fill) {
        if (fill.buttons == 1) {
            $(this).css("background-color", color);
        }
    });
    // this uses click to fill cell with color.
    grid.on("click", "td", function(click) {
        $(this).css("background-color", color);
    });

    function makeGrid() {
        let gridHeight = $("#inputHeight").val();
        let gridWidth = $("#inputWidth").val();
        // it'll empty grid for new work
        grid.empty();
        for (x = 0; x <= gridHeight - 1; x++) {
            //row
            grid.append("<tr>");
            //columns for each row
            for (y = 0; y <= gridWidth - 1; y++) {
                //$("tr").eq(" + x +")").append("<td></td>");
                $("tr:eq(" + x + ")").append("<td></td>");
            }
            grid.append("</tr>");
        }
    }
});
