const {
    post
} = require("axios")

class ameApi {

    constructor(apikey) {
        this.apikey = apikey;
    }
    async generate(endpoint, data = {}) {
        if(!this.apikey) return 'Missing Api Key';
        if(!endpoint) return 'Missing endpoint';
        try {
            let image = await post(`https://v1.api.amethyste.moe/generate/${endpoint}`, data, {
                responseType: 'arraybuffer',
                headers: {
                    'Authorization': `Bearer ${this.apikey}`,
                }
            });
            return image.data;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = ameApi;
