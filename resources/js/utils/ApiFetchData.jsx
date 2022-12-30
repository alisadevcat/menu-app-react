//https://cheatcode.co/tutorials/how-to-write-an-api-wrapper-using-javascript-classes-and-fetch

class ApiFetchData {
    constructor() {
        this.endpoints = {
            branches: {
                list: () => {
                    return {
                        method: "GET",
                        resource: "/api/choose",
                        body: null,
                    };
                },
            },
            menutypes: {
                list: (options = {}) => {
                    return {
                        method: "GET",
                        resource: `/api/start/${options.branch}`,
                        body: null,
                    };
                },
            },
            menus: {
                setMenu: (options = {}) => {
                    return {
                        method: "GET",
                        resource: `/api/menus/template/${options.params}`,
                        body: null,
                    };
                },
                addMenu: (options = {}) => {
                    return {
                        method: "POST",
                        resource: "/api/menus/",
                        headers: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": "application/json",
                        },
                        mode: "cors",
                        body: options.menu,
                    };
                },
            },
            menusections: {
                list: (options = {}) => {
                    return {
                        method: "GET",
                        resource: `/api/menu-sections/all/${options.menu_id}`,
                        body: null,
                    };
                },
                addMenuSections: (options = {}) => {
                    return {
                        method: "POST",
                        resource: "/api/menu-sections",
                        headers: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": "application/json",
                        },
                        mode: "cors",
                        body: { data: options.sections },
                    };
                },
            },
            menuitems: {
                list: (options = {}) => {
                    return {
                        method: "GET",
                        resource: `/api/menu-items/all/${options.ids}`,
                        body: null,
                    };
                },
                addMenuItems: (options = {}) => {
                    return {
                        method: "POST",
                        resource: "/api/menu-items",
                        headers: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": "application/json",
                        },
                        mode: "cors",
                        body: { data: options.menuitems },
                    };
                },
            },
        };
    }

    async request(endpoint = {}) {
        try {
            const response = await fetch(endpoint.resource, {
                method: endpoint?.method,
                headers: endpoint?.headers,
                body: endpoint?.body ? JSON.stringify(endpoint.body) : null,
            });

            if (!response.ok) {
                throw new Error("Ответ сети был не ok.");
            }
            const result = await response.json();
            return result;

        } catch (err) {
            console.error(err);
        }
    }

    branches(method = "", options = {}) {
        const existingEndpoint = this.endpoints.branches[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    menutypes(method = "", options = {}) {
        const existingEndpoint = this.endpoints.menutypes[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    menus(method = "", options = {}) {
        const existingEndpoint = this.endpoints.menus[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    menusections(method = "", options = {}) {
        const existingEndpoint = this.endpoints.menusections[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }

    menuitems(method = "", options = {}) {
        const existingEndpoint = this.endpoints.menuitems[method];

        if (existingEndpoint) {
            const endpoint = existingEndpoint(options);
            return this.request(endpoint);
        }
    }
}

export default new ApiFetchData();
