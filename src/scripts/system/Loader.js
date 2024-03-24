function importAll(r) {
    return r.keys().map(key => r(key));
}

const sprites = importAll(require.context('./../../sprites', true, /\.(png|mp3)$/));

export class Loader {
    constructor(config, Assets) {
        this.config = config;
        this.resources = {};
        this.Assets = Assets;
        this.loadedAssets = {}
    }

    async preload() {
        try {
                await Promise.all(
                    sprites.map(async (imageModule) => {
                    const imagePath = imageModule.default;
                    const texture = await this.Assets.load(imagePath);
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