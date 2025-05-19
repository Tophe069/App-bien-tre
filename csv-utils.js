// csv-utils.js
function exportToCSV(filename, data) {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

function importFromCSV(file, callback) {
    Papa.parse(file, {
        header: true,
        complete: function(results) {
            callback(results.data);
        }
    });
}
