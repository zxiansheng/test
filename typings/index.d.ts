declare module 'egg' {
    interface Application {
        mongo_papa: any,
        redis: any,
    };
}