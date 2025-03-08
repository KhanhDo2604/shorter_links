class Utils {
    static formateDate(isoString) {
        const date = new Date(isoString);
        return date
            .toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            })
            .replace(',', ''); // remove comma
    }
}

export default Utils;
