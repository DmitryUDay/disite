document.addEventListener('DOMContentLoaded', () => {
    const domainTable = document.querySelector('.dominoS');
    if (domainTable) {
        const rows = domainTable.querySelectorAll('tr');
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length >= 2) {
                const priceCell = cells[1];
                const priceText = priceCell.innerText;
                const currentPrice = parseInt(priceText.replace(/\D/g, ''));
                if (!isNaN(currentPrice)) {
                    const newPrice = currentPrice + 200;
                    priceCell.innerText = newPrice + '₽';
                }
            }
        });
    }
});