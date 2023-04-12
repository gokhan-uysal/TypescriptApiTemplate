export class MapHelper<Model extends Object> {
    private model: Model;

    constructor(model: Model) {
        this.model = model;
    }

    public map(query: any): Object {
        Object.keys(query).forEach((entry) => {
            const queryKey: string = entry[0];
            const modelKey: keyof Model = queryKey as keyof Model;

            if (!this.hasOwn(queryKey)) {
                delete query[queryKey];
                return;
            }

            const queryType = typeof query[queryKey];
            const modelType = typeof this.model[modelKey];

            if (queryType != modelType) {
                delete query[queryKey];
            }
        });
        return query;
    }

    public hasOwn(key: string): boolean {
        return Object.hasOwn(this.model, key);
    }
}
