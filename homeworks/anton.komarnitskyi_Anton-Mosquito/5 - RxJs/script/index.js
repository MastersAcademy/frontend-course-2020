const { fromEvent } = window.rxjs;
const {
    pairwise,
    map,
    distinctUntilChanged,
  tap,
  debounceTime,
  filter,
} = window.rxjs.operators;

const headerMain = document.querySelector('[data-rxjs="header-main"]');
const headerSecondary = document.querySelector(
  '[data-rxjs="header-secondary"]'
);
const button = document.querySelector('[data-rxjs="button-visible"]');
const element = document.documentElement;

const checkDirection = (last, current) => {
  if (current - last >= 50) {
    return 'downDircetion';
  } else if (current - last <= -50) {
    return 'UpDircetion';
  } else {
    return 'withOutAction';
  }
};

const checkFlag = (position, flag) => {
  if (flag === 'main') {
    switch (position) {
      case 'downDircetion':
        headerMain.classList.remove('sticky');
        headerMain.classList.add('hidden');
        break;
      case 'UpDircetion':
        headerMain.classList.add('sticky');
        headerMain.classList.remove('hidden');
        button.classList.add('hidden');
        headerSecondary.classList.add('hidden');
        headerSecondary.classList.remove('sticky');
        break;
      default:
        break;
    }
  } else if (flag === 'secondary') {
    switch (position) {
      case 'downDircetion':
        headerMain.classList.remove('sticky');
        headerSecondary.classList.remove('hidden');
        headerMain.classList.add('hidden');
        headerSecondary.classList.add('sticky');
        break;
      case 'UpDircetion':
        headerMain.classList.remove('hidden');
        button.classList.remove('hidden');
        headerSecondary.classList.remove('sticky');
        headerMain.classList.add('sticky');
        headerSecondary.classList.add('hidden');
        break;
      default:
        break;
    }
  }
};

const stream$ = fromEvent(document, 'scroll')
  .pipe(
    map((event) => event.target.scrollingElement.scrollTop),
    filter((scroll) => scroll > 50),
    pairwise(),
    map((scroll) => checkDirection(scroll[0], scroll[1])),
    distinctUntilChanged(),
    debounceTime(100)
  )
  .subscribe((position) => checkFlag(position, 'main'));

const anotherStream$ = fromEvent(document, 'scroll')
  .pipe(
    map((event) => event.target.scrollingElement.scrollTop),
    filter((currentScroll) => currentScroll > element.offsetHeight / 2),
    pairwise(),
    map((scroll) => checkDirection(scroll[0], scroll[1])),
    distinctUntilChanged(),
    debounceTime(100)
  )
  .subscribe((position) => {
    checkFlag(position, 'secondary');
  });



const element = document.documentElement;
console.log("Высота всего документа ", element.offsetHeight);
console.log("Текущая прокрутка сверху ", window.pageYOffset);
console.log("Размер экрана юзера", element.clientHeight);
console.log(
  "Точка нижней границы документа",
  element.getBoundingClientRect().bottom
);

// console.log(element.scrollHeight - window.innerHeight - element.scrollTop);
// console.log(element.scrollTop);
// console.log(element.clientHeight + element.scrollTop < element.scrollHeight);
// console.log(element.scrollHeight);
