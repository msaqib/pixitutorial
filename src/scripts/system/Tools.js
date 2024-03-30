export class Tools {
    static massiveRequire(req) {
        const files = [];

        req.keys().forEach(key => {
            files.push({
                key, data: req(key)
            });
        });

        return files;
    }
    static importAll(r) {
        return r.keys().map(key => r(key))
    }
}