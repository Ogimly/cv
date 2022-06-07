const data = {
  item3: {
    id: 'todo-list',
    title: 'TODO-list app',

    description:
      'Here is a small one-page TODO-list web application. Your task is to put things in order inside the code files (refactoring) according to the outcomes. In this case, the functionality of the application should be detected after your changes.',
    descriptionList: {},

    descriptionLink:
      'https://github.com/rolling-scopes-school/tasks/blob/master/stage1/modules/clean-code/clean-code-s1e1.md',
    repositoryLink: 'https://github.com/ogimly/clean-code-s1e1',
    deployLink: 'https://github.com/ogimly/clean-code-s1e1',
    imgLink:
      'https://user-images.githubusercontent.com/101447709/172446767-322b2e21-8ed3-4b24-a32d-83ffdb87d30a.png',
    imgAlt: 'TODO-list app screen',

    learn: 'In this task, I learned:',
    learnList: {
      item0: 'clean code guideline for HTML & CSS',
      item1: 'handling events in DOM without selectors',
      item2: 'using classes to creation several types of components',
      item3: 'using state of application and generation task list on change',
      item4: 'save/load state to local storage in json',
    },
  },

  item2: {
    id: 'html-builder',
    title: 'HTML-builder',

    description:
      'In this series of tasks, the main goal is to understand the basics of working with the Node.js platform. You are invited to perform a series of small tasks with a gradual increase in difficulty. The final touch will be the creation of a small application for assembling a static site.',
    descriptionList: {},

    descriptionLink: 'https://github.com/ogimly/HTML-builder',
    repositoryLink: 'https://github.com/ogimly/HTML-builder',
    deployLink: 'https://github.com/ogimly/HTML-builder',
    imgLink:
      'https://raw.githubusercontent.com/ogimly/HTML-builder/main/html-builder.JPG',
    imgAlt: 'HTML-builder screen',

    learn: 'In this task, I learned:',
    learnList: {
      item0: 'Node.js basics',
      item1: 'working with the file system',
      item2: 'reading and writing streams',
      item3: 'asynchronous functions',
      item4: 'promises in JS',
    },
  },

  item1: {
    id: 'virtual-keyboard',
    title: 'Virtual keyboard',

    description: 'You should to create a virtual keyboard:',
    descriptionList: {
      item0: 'all the necessary elements are generated with the usage of JS',
      item1:
        'pressing a key on a physical keyboard highlights the key on the virtual keyboard',
      item2: 'keystrokes are animated',
      item3: 'the virtual keyboard is able to switch between two language layouts',
      item4:
        'clicks on the buttons with a mouse on the virtual keyboard and pressing keys on a physical keyboard should input symbols to the text area located on the page above the virtual keyboard',
    },

    descriptionLink:
      'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/virtual-keyboard/virtual-keyboard-en.md',
    repositoryLink: 'https://github.com/ogimly/virtual-keyboard',
    deployLink: 'https://ogimly.github.io/virtual-keyboard',
    imgLink:
      'https://user-images.githubusercontent.com/101447709/172424633-a083e1e2-9664-453e-89d4-7727044e4339.png',
    imgAlt: 'Virtual keyboard screen',

    learn: 'In this task, I learned:',
    learnList: {
      item0: 'generation of elements in DOM',
      item1: 'handling and catching events',
      item2: 'installing and configuring Webpack',
      item3: 'installing and configuring ESLint and Prettier',
      item4: 'writing a Pull Request wish guideline',
    },
  },

  item0: {
    id: 'shelter',
    title: 'Shelter',

    description:
      'Shelter is a project in which you have to design a site consisting of two pages, make it adaptive and interactive:',
    descriptionList: {
      item0:
        'Fixed layout of main and pets pages. At this stage, you have to create a fixed layout of two pages. With a fixed layout, the pages look the same if the window width is at least 1280px.',
      item1:
        'Adding layout adaptability. At this stage, you have to adapt the previously created pages according to the layout for different window widths up to 320px inclusive.',
      item2:
        'Adding additional functionality. At this stage, additional functionality is added to the previously made pages: slider, pagination, popup.',
    },

    descriptionLink:
      'https://github.com/rolling-scopes-school/tasks/tree/master/stage1/stream1/shelter',
    repositoryLink: 'https://github.com/ogimly/shelter',
    deployLink: 'https://ogimly.github.io/shelter',
    imgLink:
      'https://user-images.githubusercontent.com/101447709/172419221-0a25fe26-f05e-4a48-ad16-026ffb4304d2.png',
    imgAlt: 'Shelter screen',

    learn: 'In this task, I learned:',
    learnList: {
      item0: 'working with project in Figma',
      item1: 'styling wits CSS, checking PerfectPixel',
      item2: 'using SCSS preprocessor and 7-1 pattern',
      item3: 'adaptive and responsive layout',
      item4: 'adding base functionality in JS',
    },
  },
};

export default data;
