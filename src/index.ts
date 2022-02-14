import { Application, Graphics, Loader, Sprite, Texture } from 'pixi.js';

const app = new Application({
  width: innerWidth,
  height: innerHeight,
});

document.body.appendChild(app.view);

const loader = Loader.shared;

loader
  .add('img1', './assets/1.png')
  .load((loader) => {
    // convert to texture
    const texture = Texture.from('img1');

    // convet to sprite
    const sprite = new Sprite(texture);
    console.log(sprite);

    sprite.position.set(100, 100);
    sprite.width = 100;
    sprite.height = 100;

    app.stage.addChild(sprite);
  });