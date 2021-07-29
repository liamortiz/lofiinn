import AudioManager from './AudioManager';

const audioManager = new AudioManager();
test("Returns a formated time", () => {
    expect(audioManager.formatTime(59)).toBe("0:59");
});