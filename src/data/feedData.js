import * as readline from 'readline';
import fs from 'fs';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const questionsFile = 'questions.json';

const getNextAvailableId = (questions) => {
    const nextId = questions.length;
    return nextId;
};

const addQuestion = (question) => {
    // read the existing JSON file
    let data = [];
    let id;

    try {
        data = JSON.parse(fs.readFileSync(questionsFile, 'utf8'));
    }
    catch (err) {
        console.log('Error reading file from disk:', err);
    }

    // assign an id to the new question
    id = getNextAvailableId(data);

    // add the new question to the existing list
    data.push({ id, question });

    data.forEach((element, index) => {
        element.id = index;
    });

    // write the file back to disk
    fs.writeFileSync(questionsFile, JSON.stringify(data, null, 4));
    console.log(`Saved question ${id}`);
};

rl.question('Insert question ', (question) => {
    addQuestion(question);
    rl.close();
});