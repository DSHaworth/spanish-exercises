class DataContext {
    static async getJsonFile(fileName) {
        const filePath = `/json/${fileName}.json`;
        try {
            const response = await fetch(filePath);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error retrieving JSON file: ${error}`);
            throw error;
        }
    }
}

export default DataContext;