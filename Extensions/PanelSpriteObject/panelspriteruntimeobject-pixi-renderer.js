var gdjs;
(function(gdjs2) {
  class PanelSpriteRuntimeObjectPixiRenderer {
    constructor(runtimeObject, runtimeScene, textureName, tiled) {
      this._wasRendered = false;
      this._textureWidth = 0;
      this._textureHeight = 0;
      this._object = runtimeObject;
      if (this._spritesContainer === void 0) {
        const texture = runtimeScene.getGame().getImageManager().getPIXITexture(textureName);
        const StretchedSprite = !tiled ? PIXI.Sprite : PIXI.TilingSprite;
        this._spritesContainer = new PIXI.Container();
        this._centerSprite = new StretchedSprite(new PIXI.Texture(texture));
        this._borderSprites = [
          new StretchedSprite(new PIXI.Texture(texture)),
          new PIXI.Sprite(texture),
          new StretchedSprite(new PIXI.Texture(texture)),
          new PIXI.Sprite(texture),
          new StretchedSprite(new PIXI.Texture(texture)),
          new PIXI.Sprite(texture),
          new StretchedSprite(new PIXI.Texture(texture)),
          new PIXI.Sprite(texture)
        ];
      }
      this.setTexture(textureName, runtimeScene);
      this._spritesContainer.removeChildren();
      this._spritesContainer.addChild(this._centerSprite);
      for (let i = 0; i < this._borderSprites.length; ++i) {
        this._spritesContainer.addChild(this._borderSprites[i]);
      }
      this._alpha = this._spritesContainer.alpha;
      runtimeScene.getLayer("").getRenderer().addRendererObject(this._spritesContainer, runtimeObject.getZOrder());
    }
    getRendererObject() {
      return this._spritesContainer;
    }
    ensureUpToDate() {
      if (this._spritesContainer.visible && this._wasRendered) {
        this._spritesContainer.alpha = this._alpha;
        this._spritesContainer.cacheAsBitmap = true;
      }
      this._wasRendered = true;
    }
    updateOpacity() {
      this._spritesContainer.alpha = this._spritesContainer.visible ? this._object.opacity / 255 : 0;
      this._alpha = this._spritesContainer.alpha;
    }
    updateAngle() {
      this._spritesContainer.rotation = gdjs2.toRad(this._object.angle);
    }
    updatePosition() {
      this._spritesContainer.position.x = this._object.x + this._object._width / 2;
      this._spritesContainer.position.y = this._object.y + this._object._height / 2;
    }
    _updateLocalPositions() {
      const obj = this._object;
      this._centerSprite.position.x = obj._lBorder;
      this._centerSprite.position.y = obj._tBorder;
      this._borderSprites[0].position.x = obj._width - obj._rBorder;
      this._borderSprites[0].position.y = obj._tBorder;
      this._borderSprites[1].position.x = obj._width - this._borderSprites[1].width;
      this._borderSprites[1].position.y = 0;
      this._borderSprites[2].position.x = obj._lBorder;
      this._borderSprites[2].position.y = 0;
      this._borderSprites[3].position.x = 0;
      this._borderSprites[3].position.y = 0;
      this._borderSprites[4].position.x = 0;
      this._borderSprites[4].position.y = obj._tBorder;
      this._borderSprites[5].position.x = 0;
      this._borderSprites[5].position.y = obj._height - this._borderSprites[5].height;
      this._borderSprites[6].position.x = obj._lBorder;
      this._borderSprites[6].position.y = obj._height - obj._bBorder;
      this._borderSprites[7].position.x = obj._width - this._borderSprites[7].width;
      this._borderSprites[7].position.y = obj._height - this._borderSprites[7].height;
    }
    _updateSpritesAndTexturesSize() {
      const obj = this._object;
      this._centerSprite.width = Math.max(obj._width - obj._rBorder - obj._lBorder, 0);
      this._centerSprite.height = Math.max(obj._height - obj._tBorder - obj._bBorder, 0);
      this._borderSprites[0].width = obj._rBorder;
      this._borderSprites[0].height = Math.max(obj._height - obj._tBorder - obj._bBorder, 0);
      this._borderSprites[2].height = obj._tBorder;
      this._borderSprites[2].width = Math.max(obj._width - obj._rBorder - obj._lBorder, 0);
      this._borderSprites[4].width = obj._lBorder;
      this._borderSprites[4].height = Math.max(obj._height - obj._tBorder - obj._bBorder, 0);
      this._borderSprites[6].height = obj._bBorder;
      this._borderSprites[6].width = Math.max(obj._width - obj._rBorder - obj._lBorder, 0);
      this._wasRendered = true;
      this._spritesContainer.cacheAsBitmap = false;
    }
    setTexture(textureName, runtimeScene) {
      const obj = this._object;
      const texture = runtimeScene.getGame().getImageManager().getPIXITexture(textureName);
      this._textureWidth = texture.width;
      this._textureHeight = texture.height;
      function makeInsideTexture(rect) {
        if (rect.width < 0) {
          rect.width = 0;
        }
        if (rect.height < 0) {
          rect.height = 0;
        }
        if (rect.x < 0) {
          rect.x = 0;
        }
        if (rect.y < 0) {
          rect.y = 0;
        }
        if (rect.x > texture.width) {
          rect.x = texture.width;
        }
        if (rect.y > texture.height) {
          rect.y = texture.height;
        }
        if (rect.x + rect.width > texture.width) {
          rect.width = texture.width - rect.x;
        }
        if (rect.y + rect.height > texture.height) {
          rect.height = texture.height - rect.y;
        }
        return rect;
      }
      this._centerSprite.texture = new PIXI.Texture(texture, makeInsideTexture(new PIXI.Rectangle(obj._lBorder, obj._tBorder, texture.width - obj._lBorder - obj._rBorder, texture.height - obj._tBorder - obj._bBorder)));
      this._borderSprites[0].texture = new PIXI.Texture(texture, makeInsideTexture(new PIXI.Rectangle(texture.width - obj._rBorder, obj._tBorder, obj._rBorder, texture.height - obj._tBorder - obj._bBorder)));
      this._borderSprites[2].texture = new PIXI.Texture(texture, makeInsideTexture(new PIXI.Rectangle(obj._lBorder, 0, texture.width - obj._lBorder - obj._rBorder, obj._tBorder)));
      this._borderSprites[4].texture = new PIXI.Texture(texture, makeInsideTexture(new PIXI.Rectangle(0, obj._tBorder, obj._lBorder, texture.height - obj._tBorder - obj._bBorder)));
      this._borderSprites[6].texture = new PIXI.Texture(texture, makeInsideTexture(new PIXI.Rectangle(obj._lBorder, texture.height - obj._bBorder, texture.width - obj._lBorder - obj._rBorder, obj._bBorder)));
      this._borderSprites[1].texture = new PIXI.Texture(texture, makeInsideTexture(new PIXI.Rectangle(texture.width - obj._rBorder, 0, obj._rBorder, obj._tBorder)));
      this._borderSprites[3].texture = new PIXI.Texture(texture, makeInsideTexture(new PIXI.Rectangle(0, 0, obj._lBorder, obj._tBorder)));
      this._borderSprites[5].texture = new PIXI.Texture(texture, makeInsideTexture(new PIXI.Rectangle(0, texture.height - obj._bBorder, obj._lBorder, obj._bBorder)));
      this._borderSprites[7].texture = new PIXI.Texture(texture, makeInsideTexture(new PIXI.Rectangle(texture.width - obj._rBorder, texture.height - obj._bBorder, obj._rBorder, obj._bBorder)));
      this._updateSpritesAndTexturesSize();
      this._updateLocalPositions();
      this.updatePosition();
      this._spritesContainer.pivot.x = this._object._width / 2;
      this._spritesContainer.pivot.y = this._object._height / 2;
    }
    updateWidth() {
      this._spritesContainer.pivot.x = this._object._width / 2;
      this._updateSpritesAndTexturesSize();
      this._updateLocalPositions();
      this.updatePosition();
    }
    updateHeight() {
      this._spritesContainer.pivot.y = this._object._height / 2;
      this._updateSpritesAndTexturesSize();
      this._updateLocalPositions();
      this.updatePosition();
    }
    setColor(rgbColor) {
      const colors = rgbColor.split(";");
      if (colors.length < 3) {
        return;
      }
      this._centerSprite.tint = "0x" + gdjs2.rgbToHex(parseInt(colors[0], 10), parseInt(colors[1], 10), parseInt(colors[2], 10));
      for (let borderCounter = 0; borderCounter < this._borderSprites.length; borderCounter++) {
        this._borderSprites[borderCounter].tint = "0x" + gdjs2.rgbToHex(parseInt(colors[0], 10), parseInt(colors[1], 10), parseInt(colors[2], 10));
      }
      this._spritesContainer.cacheAsBitmap = false;
    }
    getColor() {
      const rgb = PIXI.utils.hex2rgb(this._centerSprite.tint);
      return Math.floor(rgb[0] * 255) + ";" + Math.floor(rgb[1] * 255) + ";" + Math.floor(rgb[2] * 255);
    }
    getTextureWidth() {
      return this._textureWidth;
    }
    getTextureHeight() {
      return this._textureHeight;
    }
  }
  gdjs2.PanelSpriteRuntimeObjectRenderer = PanelSpriteRuntimeObjectPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=panelspriteruntimeobject-pixi-renderer.js.map
