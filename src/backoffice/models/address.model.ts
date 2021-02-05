export class Address {
    constructor(
        public zipCode: string,
        public street: string,
        public number: string,
        public complement: string,
        public neighbourhood: string,
        public city: string,
        public state: string,
        public country: string,
    ) {
    }
}