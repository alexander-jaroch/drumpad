/// <reference path="Document.ts" />
/// <reference path="Note.ts" />
/// <reference path="Pitch.ts" />
/// <reference path="Duration.ts" />
/// <reference path="SinglePressKeyAssignment.ts" />

namespace Drumpad {
    class KeyboardLayout {
        private _assignments: SinglePressKeyAssignment[];

        public constructor() {
            this._assignments = [];
        }

        public add(key: string, note: Note): void {
            this._assignments.push(new SinglePressKeyAssignment(key, () => { note.play(); }));
        }

        public playNote(event: KeyboardEvent): void {
            for (const assignment of this._assignments) {
                assignment.runCallback(event.key);
            }
        }

        public resetNote(event: KeyboardEvent): void {
            for (const assignment of this._assignments) {
                assignment.setDefault(event.key);
            }
        }
    }

    const keyboardLayout: KeyboardLayout = new KeyboardLayout();
    keyboardLayout.add("a", (new Note(Pitch.C, Duration.Full)));
    keyboardLayout.add("s", (new Note(Pitch.D, Duration.Full)));
    keyboardLayout.add("d", (new Note(Pitch.E, Duration.Full)));
    keyboardLayout.add("f", (new Note(Pitch.F, Duration.Full)));
    keyboardLayout.add("g", (new Note(Pitch.G, Duration.Full)));
    keyboardLayout.add("h", (new Note(Pitch.A, Duration.Full)));
    keyboardLayout.add("j", (new Note(Pitch.B, Duration.Full)));

    Document.event<KeyboardEvent>("keydown", event => { keyboardLayout.playNote(event) });
    Document.event<KeyboardEvent>("keyup", event => { keyboardLayout.resetNote(event) });
}