function season(defaultData) {
    defaultData = defaultData || {},
    this.name = defaultData.name || null;
    this.shortName = defaultData.shortName || null;
    this.code = defaultData.code || null;
    this.id = defaultData.id || 0;
    this.isActive = defaultData.isActive || false;
    this.isEnabled = defaultData.isEnabled || false;
    this.isSelected = defaultData.isSelected || false;
    this.locationID = defaultData.locationId || null;
    this.tag = defaultData.tag || 0;
}

function getSeasonVMsgs() {
    return {
        season: {
            name: {
                required: true,
                requiredMsg: validationMsg.season
            },
            shortName: {
                required: true,
                requiredMsg: validationMsg.seasonShortName
            }
        }
    }
}