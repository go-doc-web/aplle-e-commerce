import slideShow from './slideShow';

document.addEventListener('DOMContentLoaded', () => {
  /* Common JS */

  document.querySelectorAll('.watch-control ,.controls a, .iphone-btn').forEach(control => {
    control.addEventListener('click', e => {
      e.preventDefault();
    });
  });
  /* End of Common JS */
  slideShow.slideShowDivs();

  // Controls
  const cube = document.querySelector<HTMLElement>('.cube');
  const controls = document.querySelector<HTMLElement>('.controls');
  const topXControl = document.querySelector<HTMLElement>('.top-x-control');
  const bottomXControl = document.querySelector<HTMLElement>('.bottom-x-control');
  const leftYControl = document.querySelector<HTMLElement>('.left-y-control');
  const rightYControl = document.querySelector<HTMLElement>('.right-y-control');
  const topZControl = document.querySelector<HTMLElement>('.top-z-control');
  const bottomZControl = document.querySelector<HTMLElement>('.bottom-z-control');

  let y = 20;
  let x = 0;
  let z = 0;
  let isPlayRotate = true;
  let interval: number;

  const playPause = (): void => {
    if (isPlayRotate) {
      interval = setInterval(() => {
        y++;
        if (cube) {
          cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
        }
        if (y > 360) {
          y = 0;
        }
      }, 100);
    } else {
      clearInterval(interval);
    }
  };

  if (cube && topXControl) {
    topXControl.addEventListener('click', () => {
      x += 20;
      cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
    });
  }
  if (cube && bottomXControl) {
    bottomXControl.addEventListener('click', () => {
      x = x - 20;
      cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z})`;
    });
  }
  if (cube && leftYControl) {
    leftYControl.addEventListener('click', () => {
      console.log('this is click by leftYControl');
      y = y - 20;
      cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
    });
  }
  if (cube && rightYControl) {
    rightYControl.addEventListener('click', () => {
      y = y + 20;
      cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
    });
  }
  if (cube && topZControl) {
    topZControl.addEventListener('click', () => {
      z = z - 20;
      cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
    });
  }
  if (cube && bottomZControl) {
    bottomZControl.addEventListener('click', () => {
      z = z + 20;
      cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
    });
  }
  playPause();
  if (controls) {
    controls.addEventListener('mouseover', () => {
      isPlayRotate = false;
      playPause();
    });
  }
  if (controls) {
    controls.addEventListener('mouseout', () => {
      isPlayRotate = true;
      playPause();
    });
  }

  // End of Controls

  /* Script for Section 3 */

  const section3Content = document.querySelector<HTMLElement>('.section-3-content');

  function onScroll(): void {
    if (!section3Content) return;

    const viewportBottom = window.scrollY + window.innerHeight;
    const sectionHalfY = section3Content.offsetTop + section3Content.offsetHeight / 2;

    if (viewportBottom >= sectionHalfY) {
      section3Content.classList.add('change');

      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);
  /* End ofSection 3 */

  /* section-4 */
  const watchBands = document.querySelector<HTMLElement>('.watch-bands');
  const watchCases = document.querySelector<HTMLElement>('.watch-cases');
  const watchTopControl = document.querySelector<HTMLElement>('.watch-top-control');
  const watchBottomControl = document.querySelector<HTMLElement>('.watch-bootom-control');
  const watchRightControl = document.querySelector<HTMLElement>('.watch-right-control');
  const watchLeftControl = document.querySelector<HTMLElement>('.watch-left-control');

  let axisY = 0;
  let axisX = 0;

  const hideControl = () => {
    if (watchTopControl) {
      if (axisY === -280) {
        watchTopControl.classList.add('hide-control');
      } else {
        watchTopControl.classList.remove('hide-control');
      }
    }
    if (watchBottomControl) {
      if (axisY === 280) {
        watchBottomControl.classList.add('hide-control');
      } else {
        watchBottomControl.classList.remove('hide-control');
      }
    }
    if (watchRightControl) {
      if (axisX === -280) {
        watchRightControl.classList.add('hide-control');
      } else {
        watchRightControl.classList.remove('hide-control');
      }
    }
    if (watchLeftControl) {
      if (axisX === 280) {
        watchLeftControl.classList.add('hide-control');
      } else {
        watchLeftControl.classList.remove('hide-control');
      }
    }
  };

  if (watchCases) {
    if (watchTopControl) {
      watchTopControl.addEventListener('click', () => {
        watchCases.style.marginTop = `${(axisY -= 70)}rem`;

        hideControl();
      });
    }
    if (watchBottomControl) {
      watchBottomControl.addEventListener('click', () => {
        watchCases.style.marginTop = `${(axisY += 70)}rem`;

        hideControl();
      });
    }
  }
  if (watchBands) {
    if (watchRightControl) {
      watchRightControl.addEventListener('click', () => {
        watchBands.style.marginLeft = `${(axisX -= 70)}rem`;
        hideControl();
      });
    }
    if (watchLeftControl) {
      watchLeftControl.addEventListener('click', () => {
        watchBands.style.marginLeft = `${(axisX += 70)}rem`;
        hideControl();
      });
    }
  }

  /* End of section-4 */
});
