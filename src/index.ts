import { Application, Graphics, Loader } from 'pixi.js';

const app = new Application({
  width: innerWidth,
  height: innerHeight,
});

document.body.appendChild(app.view);

const loader = Loader.shared;

loader
  .add('img1', 'https://cdn.pixabay.com/photo/2014/05/26/13/32/butterfly-354528__480.jpg')
  .add('img2', 'https://cdn.pixabay.com/photo/2016/09/04/12/20/pink-1643831_960_720.jpg')
  .load((l, r) => {
    const img1 = l.resources.img1;
    const img2 = l.resources.img2;

    console.log(img1, img2)
  });

loader.onProgress.add((l, r) => {
  console.log(loader.progress);
});

loader.onLoad.add((e) => {
  console.log(e);
});

loader.onComplete.add((e) => {
  console.log('loading the assets completed');
});