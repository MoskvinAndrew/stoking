declare module '*.scss' {
    const content: {[className: string]: string};
    export default content;
}
declare module "*.jpg" {
    const value: any;
    export = value;
}
declare module 'react-mega-menu';