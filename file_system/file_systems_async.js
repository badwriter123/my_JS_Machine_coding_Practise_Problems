// Async/Await version , better for production

const fs = require('fs').promises;

async function fileOperation(){
    try {
        await fs.writeFile('async_text.txt', 'Hello from async!');
        console.log("File written.");

        const data = await fs.readFile('async_text.txt', 'utf-8');
        console.log('File contents :', data);

        await fs.appendFile('async_text.txt', '\n New Line content added...');
        console.log("data appended...");

        const new_data = await fs.readFile('async_text.txt', 'utf-8');
        console.log("New Updated data : ", new_data);

        await fs.unlink('async_text.txt');
        console.log("File has been deleted...")

    } catch (error) {
        console.log("Could not read because : ", error);
    }
}

fileOperation();