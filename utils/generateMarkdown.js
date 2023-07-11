// Function to generate markdown for README
function generateMarkdown(data) {
    let licenseBadge = '';
    if (data.license) {
      licenseBadge = `![License Badge](${licenseBadge(data.license)})`;
    }
  
    if (condition) {
      
    } else {
      
      // ERROR. Clearly something is not correct. Refer to GITHUB and YouTube.
    }
  # ${data.title}
  ${data.description}
  ${licenseBadge}
  [A deployed version can be viewed here.](${data.URL})
  
  ---
  ## Contents
  1. [About](#about)
      1. [User Story](#user-story)
      2. [Acceptance Criteria](#acceptance-criteria)
      3. [Visuals](#visuals)
      4. [Build](#build)
  2. [Installation](#installation)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Authors and Acknowledgment](#authors-and-acknowledgment)
  ---
  ## About
  ${data.about}
  ---
  ## User Story
  
  ---
  ## Acceptance Criteria
  
  
  ---
  ## Visuals:
  ![]()
  ---
  ## Installation:
  ${data.installation}
  To clone the repo:
  
      git clone ${data.clone}
  
  ---
  ## License
  License used for this project - ${data.license}
  * For more information on license types, please reference this website for additional licensing information - [https://choosealicense.com/](https://choosealicense.com/).
  ---
  ## Contributing:
  
  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request
  Following a code review, your feature will be merged.
  ---
  ## Tests:
  ${data.test}
  ---
  ## Authors and Acknowledgments
  ${data.author}
  ---
  ## Contact Information:
  * GitHub Username: ${data.userName}
  * GitHub Email: ${data.userEmail}
  `;
  }
  
  exports = generateMarkdown;