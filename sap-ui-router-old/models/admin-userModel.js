function adminUser(defaultData) {
    defaultData = defaultData || {};
    this.id = defaultData.id || 0;
    this.userName = defaultData.userName || null;
    this.password = defaultData.password || null;
}

function getAdminUserMsgs() {
    return {
        adminUser : {
            userID: {
                required: true,
                requiredMsg: validationMsg.userID,
            }, userName: {
                required: true,
                requiredMsg: validationMsg.userName,
            }, password: {
                required: true,
                requiredMsg: 'Password is required',
            }, email: {
                required: true,
                requiredMsg: validationMsg.email,
            }
        }
    }
}

