// Variables
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// Variables
const generateMarkdown = require("./utils/generateMarkdown");
const licenseBadge = require("./utils/licenseBadge").licenseBadge;
const questions = require("./utils/questions").questions;

const writeFileAsync = util.promisify(fs.writeFile);

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    answers.licenseBadge = licenseBadge(answers.license);
    let readMeData = generateMarkdown(answers);
    await writeFileAsync("created-README.md", readMeData);
  } catch (err) {
    throw err;
  }
}


init(); // Something is not right. Need to review a few things - review ZOOM.