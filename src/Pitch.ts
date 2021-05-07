namespace Drumpad {
    export class Pitch {
        public static C: Pitch = new Pitch("C", "sounds/c3.mp3");
        public static D: Pitch = new Pitch("D", "sounds/d3.mp3");
        public static E: Pitch = new Pitch("E", "sounds/e3.mp3");
        public static F: Pitch = new Pitch("F", "sounds/f3.mp3");
        public static G: Pitch = new Pitch("G", "sounds/g3.mp3");
        public static A: Pitch = new Pitch("A", "sounds/a3.mp3");
        public static B: Pitch = new Pitch("B", "sounds/b3.mp3");

        private _name: string;
        private _file: string;

        private constructor(name: string, file: string) {
            this._name = name;
            this._file = file;
        }

        public get name(): string {
            return this._name;
        }

        public get file(): string {
            return this._file;
        }

        /* static *[Symbol.iterator](): Generator<string> {
            for(const key in this) {
                yield key;
            }
        } */
    }
}