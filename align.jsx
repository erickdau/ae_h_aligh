if (app.project.activeItem instanceof CompItem && app.project.activeItem.selectedLayers.length > 0) {
    var comp = app.project.activeItem;
    var selectedLayer = comp.selectedLayers[0]; // Assuming only one layer is selected

    // Define the alignment options
    var alignments = ["left", "center", "right"];

    // Get the current alignment from the layer's position
    var currentAlignment = selectedLayer.transform.position.value[0];

    // Determine the next alignment
    var nextAlignment = alignments.indexOf("left");

    if (currentAlignment === selectedLayer.width / 2) {
        nextAlignment = alignments.indexOf("center");
    } else if (currentAlignment === selectedLayer.width) {
        nextAlignment = alignments.indexOf("right");
    }

    // Set the new alignment
    var newAlignment = alignments[(nextAlignment + 1) % 3];
    var newPosition = [0, selectedLayer.transform.position.value[1]];
    
    if (newAlignment === "center") {
        newPosition[0] = selectedLayer.width / 2;
    } else if (newAlignment === "right") {
        newPosition[0] = selectedLayer.width;
    }

    // Update the layer's position
    selectedLayer.transform.position.setValue(newPosition);
}