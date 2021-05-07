"use strict";
var Drumpad;
(function (Drumpad) {
    class Composition {
    }
    Drumpad.Composition = Composition;
})(Drumpad || (Drumpad = {}));
var Drumpad;
(function (Drumpad) {
    class Document {
        static select(query) {
            return document.querySelector(query);
        }
        static selectAll(query) {
            return document.querySelectorAll(query);
        }
        static event(type, listener, query) {
            if (query) {
                this.select(query)?.addEventListener(type, (event) => { listener(event); });
            }
            else {
                document.addEventListener(type, (event) => { listener(event); });
            }
        }
        static unevent(type, listener, query) {
            if (query) {
                this.select(query)?.removeEventListener(type, (event) => { listener(event); });
            }
            else {
                document.removeEventListener(type, (event) => { listener(event); });
            }
        }
        static eventAll(type, listener, query) {
            this.selectAll(query).forEach(element => { element.addEventListener(type, (event) => { listener(event); }); });
        }
        static uneventAll(type, listener, query) {
            this.selectAll(query).forEach(element => { element.removeEventListener(type, (event) => { listener(event); }); });
        }
    }
    Drumpad.Document = Document;
})(Drumpad || (Drumpad = {}));
var Drumpad;
(function (Drumpad) {
    class Duration {
    }
    Drumpad.Duration = Duration;
})(Drumpad || (Drumpad = {}));
var Drumpad;
(function (Drumpad) {
    class Note {
        constructor(pitch, duration) {
            this._pitch = pitch;
            this._duration = duration;
        }
        play() {
            const audio = new Audio(this._pitch.file);
            audio.play();
            audio.onended = () => {
                audio.remove();
            };
        }
    }
    Drumpad.Note = Note;
})(Drumpad || (Drumpad = {}));
var Drumpad;
(function (Drumpad) {
    class Pitch {
        constructor(name, file) {
            this._name = name;
            this._file = file;
        }
        get name() {
            return this._name;
        }
        get file() {
            return this._file;
        }
    }
    Pitch.C = new Pitch("C", "sounds/c3.mp3");
    Pitch.D = new Pitch("D", "sounds/d3.mp3");
    Pitch.E = new Pitch("E", "sounds/e3.mp3");
    Pitch.F = new Pitch("F", "sounds/f3.mp3");
    Pitch.G = new Pitch("G", "sounds/g3.mp3");
    Pitch.A = new Pitch("A", "sounds/a3.mp3");
    Pitch.B = new Pitch("B", "sounds/b3.mp3");
    Drumpad.Pitch = Pitch;
})(Drumpad || (Drumpad = {}));
var Drumpad;
(function (Drumpad) {
    class SinglePressKeyAssignment {
        constructor(key, callback) {
            this._key = key;
            this._triggered = false;
            this._callback = callback;
        }
        runCallback(key) {
            if (this._key === key && !this._triggered) {
                this._callback();
                this._triggered = true;
            }
        }
        setDefault(key) {
            if (this._key === key) {
                this._triggered = false;
            }
        }
    }
    Drumpad.SinglePressKeyAssignment = SinglePressKeyAssignment;
})(Drumpad || (Drumpad = {}));
var Drumpad;
(function (Drumpad) {
    class KeyboardLayout {
        constructor() {
            this._assignments = [];
        }
        add(key, note) {
            this._assignments.push(new Drumpad.SinglePressKeyAssignment(key, () => { note.play(); }));
        }
        playNote(event) {
            for (const assignment of this._assignments) {
                assignment.runCallback(event.key);
            }
        }
        resetNote(event) {
            for (const assignment of this._assignments) {
                assignment.setDefault(event.key);
            }
        }
    }
    const keyboardLayout = new KeyboardLayout();
    keyboardLayout.add("a", (new Drumpad.Note(Drumpad.Pitch.C, Drumpad.Duration.Full)));
    keyboardLayout.add("s", (new Drumpad.Note(Drumpad.Pitch.D, Drumpad.Duration.Full)));
    keyboardLayout.add("d", (new Drumpad.Note(Drumpad.Pitch.E, Drumpad.Duration.Full)));
    keyboardLayout.add("f", (new Drumpad.Note(Drumpad.Pitch.F, Drumpad.Duration.Full)));
    keyboardLayout.add("g", (new Drumpad.Note(Drumpad.Pitch.G, Drumpad.Duration.Full)));
    keyboardLayout.add("h", (new Drumpad.Note(Drumpad.Pitch.A, Drumpad.Duration.Full)));
    keyboardLayout.add("j", (new Drumpad.Note(Drumpad.Pitch.B, Drumpad.Duration.Full)));
    Drumpad.Document.event("keydown", event => { keyboardLayout.playNote(event); });
    Drumpad.Document.event("keyup", event => { keyboardLayout.resetNote(event); });
})(Drumpad || (Drumpad = {}));
//# sourceMappingURL=core.js.map