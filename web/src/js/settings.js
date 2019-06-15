const SettingsKey = "textusm:settings";

const loadSettings = () => {
    const settings = localStorage.getItem(SettingsKey);
    return settings
        ? Object.assign(defaultSettings, JSON.parse(settings))
        : defaultSettings;
};

const defaultSettings = {
    font: "Rubik",
    storyMap: {
        font: "Rubik",
        size: {
            width: 140,
            height: 65
        },
        color: {
            activity: {
                color: "#FFFFFF",
                backgroundColor: "#266B9A"
            },
            task: {
                color: "#FFFFFF",
                backgroundColor: "#3E9BCD"
            },
            story: {
                color: "#000000",
                backgroundColor: "#FFFFFF"
            },
            comment: {
                color: "#000000",
                backgroundColor: "#F1B090"
            },
            line: "#434343",
            label: "#8C9FAE"
        },
        backgroundColor: "#F5F5F6"
    },
    position: 0,
    text: "",
    title: null,
    diagramId: null,
    github: null
};

const saveSettings = settings => {
    localStorage.setItem(SettingsKey, JSON.stringify(settings));
};

export { loadSettings, saveSettings };
