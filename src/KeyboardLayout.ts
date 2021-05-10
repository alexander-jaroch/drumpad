namespace Drumpad {
    export class KeyboardLayout {
        private _assignments: KeyAssignment[];

        public constructor() {
            this._assignments = [];
        }

        public add(key: string, note: Note): void {
            this._assignments.push(new KeyAssignment(key, () => { note.play(); }));
        }

        public trigger(event: KeyboardEvent): void {
            for (const assignment of this._assignments) {
                assignment.trigger(event.key);
            }
        }

        public reset(event: KeyboardEvent): void {
            for (const assignment of this._assignments) {
                assignment.reset(event.key);
            }
        }
    }
}