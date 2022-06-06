import data from './data';

//* BURGER *//
const addBurgerHandler = () => {
  const burger = document.getElementById('burger');
  if (burger)
    burger.addEventListener('click', () => {
      burger.classList.toggle('burger_open');
    });

  const linkArray = document.querySelectorAll('.nav__item');
  linkArray.forEach((el) => {
    el.addEventListener('click', () => {
      burger.classList.remove('burger_open');
    });
  });
};

//* TASKS *//
const addPToDOM = (section, text) => {
  const p = document.createElement('p');
  p.className = 'text tasks-section__text';
  p.innerHTML = text;
  section.appendChild(p);
};

const addListToDOM = (section, list) => {
  const ul = document.createElement('ul');
  ul.className = 'tasks-section__list';
  section.appendChild(ul);

  Object.values(list).forEach((el) => {
    const li = document.createElement('li');
    li.className = 'tasks-section__item';
    li.innerHTML = el;
    ul.appendChild(li);
  });
};

const addLinkToDOM = (section, text, link) => {
  const a = document.createElement('a');
  a.className = 'tasks-section__link';
  a.target = '_blank';
  a.href = link;
  a.innerHTML = text;
  section.appendChild(a);
};

const addImgToDOM = (section, text, link) => {
  const img = document.createElement('img');
  img.className = 'tasks__img';
  img.src = link;
  img.alt = text;
  section.appendChild(img);
};

const addTasksToDOM = (tasks, taskData) => {
  Object.values(taskData).forEach((el) => {
    const section = document.createElement('section');
    section.className = `tasks-section ${el.id}`;
    section.id = el.id;

    const h2 = document.createElement('h2');
    h2.className = 'title tasks-section__title';
    h2.innerHTML = `${el.title}:`;
    section.appendChild(h2);

    addPToDOM(section, el.description);
    let list = el.descriptionList;
    addListToDOM(section, list);

    const nav = document.createElement('nav');
    nav.className = 'tasks-section__nav';
    section.appendChild(nav);

    addLinkToDOM(nav, 'Full description', el.descriptionLink);
    addLinkToDOM(nav, 'View repository', el.repositoryLink);
    addLinkToDOM(nav, 'Open deploy', el.deployLink);

    addImgToDOM(section, el.imgAlt, el.imgLink);

    addPToDOM(section, el.learn);
    list = el.learnList;
    addListToDOM(section, list);

    tasks.appendChild(section);
  });
};

const addTaskListToDOM = (section, taskData) => {
  const ul = document.createElement('ul');
  ul.className = 'sidebar-section__list';
  section.appendChild(ul);

  Object.values(taskData).forEach((el) => {
    const li = document.createElement('li');
    li.className = 'sidebar-section__item tasks__item';

    const a = document.createElement('a');
    a.className = 'sidebar-section__link task-list__item';
    a.href = `#${el.id}`;
    a.innerHTML = el.title;
    li.appendChild(a);

    ul.appendChild(li);
  });
};

const generateTasks = () => {
  const taskList = document.getElementById('task-list');
  if (taskList) {
    addTaskListToDOM(taskList, data);
  }

  const tasks = document.getElementById('tasks');
  if (tasks) {
    addTasksToDOM(tasks, data);
  }
};

window.onload = () => {
  addBurgerHandler();

  generateTasks();
};
