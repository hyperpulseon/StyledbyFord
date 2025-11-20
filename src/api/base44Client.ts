export const base44 = {
    entities: {
        ContactRequest: {
            create: async (data: any) => {
                console.log('Mock API call:', data);
                return new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }
    }
};
