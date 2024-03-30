
export class Loader {
    constructor(config, Assets) {
        this.config = config;
        this.sprites = config.loader
        this.resources = {};
        this.Assets = Assets;
        this.loadedAssets = {}
    }

    async preload() {
        try {
                await Promise.all(
                    this.sprites.map(async (imageModule) => {
                    let imagePath = imageModule.default;
                    const texture = await this.Assets.load(imagePath);
                    const indexOfSlash = imagePath.lastIndexOf('/')
                    imagePath = imagePath.substr(indexOfSlash + 1)
                    const indexOfDot = imagePath.lastIndexOf('.')
                    imagePath = imagePath.substr(0, indexOfDot)
                    this.resources[imagePath] = texture; // Store loaded textures
                })
              );

            // Once assets are loaded, retrieve them
            const loadedTextures = this.Assets.textures;

            // Store the loaded textures in the dictionary
            for (const textureName in loadedTextures) {
                this.loadedAssets[textureName] = loadedTextures[textureName];
            }
            // Now you can use this.loadedAssets to access your loaded textures
        } catch (error) {
            console.error("Error loading assets:", error);
        }
    }
}