/**
 *https://stackoverflow.com/questions/47854500/how-to-increase-count-if-date-is-matched-in-two-arrays
 */
//   Problem
/**
 * How to increase count if date is matched in two arrays?
 * I have two arrays with data. I am comparing two arrays and i want to increase count if date is matched but count is reflecting to all objects.
 */

for (let i in usrNameList) {
    for (let j in strctured) {
        if (usrNameList[i].usr_name == strctured[j].usr_name) {
            let inc = 0;
            for (let x in usrNameList[i].date) {
                for (let y in strctured[j].date) {
                    if (usrNameList[i].date[x] == strctured[j].date[y].date) {
                        inc++;
                        strctured[j].date[y].count = inc;
                    }
                }
            }
        }
    }
}
for (const i in usrNameList) {
    for (const j in strctured) {
        if (usrNameList[i].usr_name == strctured[j].usr_name) {
            let inc = 0;
            for (const x in usrNameList[i].date) {
                for (const y in strctured[j].date) {
                    if (usrNameList[i].date[x] == strctured[j].date[y].date) {
                        inc++;
                        strctured[j].date[y].count = inc;
                    }
                }
            }
        }
    }
}
// =========================================
const usrNameList = [{
        "usr_name": "Vishnuh Paura",
        "schedstrat": "2017-11-05",
        "schedEnd": "2017-11-17",
        "client": "Aryan Gems",
        "service": "COMPLAW",
        "partnr": {
            "1": {
                "usr_designation": "Sr.Partner",
                "usr_id": 3,
                "usr_photo": "",
                "usr_uname": "Vishnuh Paura"
            }
        },
        "date": [
            "2017-11-05",
            "2017-11-06",
            "2017-11-07",
            "2017-11-08",
            "2017-11-09",
            "2017-11-10",
            "2017-11-11",
            "2017-11-12",
            "2017-11-13",
            "2017-11-14",
            "2017-11-15",
            "2017-11-16",
            "2017-11-17"
        ]
    },
    {
        "usr_name": "Rohit",
        "schedstrat": "2017-11-05",
        "schedEnd": "2017-11-17",
        "client": "Aryan Gems",
        "service": "COMPLAW",
        "partnr": {
            "1": {
                "usr_designation": "Sr.Partner",
                "usr_id": 3,
                "usr_photo": "",
                "usr_uname": "Vishnuh Paura"
            }
        },
        "date": [
            "2017-11-05",
            "2017-11-06",
            "2017-11-07",
            "2017-11-08",
            "2017-11-09",
            "2017-11-10",
            "2017-11-11",
            "2017-11-12",
            "2017-11-13",
            "2017-11-14",
            "2017-11-15",
            "2017-11-16",
            "2017-11-17"
        ]
    },
    {
        "usr_name": "Akul(r-w His Only)CNGD",
        "schedstrat": "2017-11-12",
        "schedEnd": "2017-11-22",
        "client": "Abhishek S",
        "service": "INTAUD",
        "partnr": {
            "1": {
                "usr_designation": "Sr.Partner",
                "usr_id": 12,
                "usr_photo": "",
                "usr_uname": "Akul(r-w His Only)"
            }
        },
        "date": [
            "2017-11-12",
            "2017-11-13",
            "2017-11-14",
            "2017-11-15",
            "2017-11-16",
            "2017-11-17",
            "2017-11-18",
            "2017-11-19",
            "2017-11-20",
            "2017-11-21",
            "2017-11-22"
        ]
    },
    {
        "usr_name": "Akul(r-w His Only)CNGD",
        "schedstrat": "2017-11-01",
        "schedEnd": "2017-11-03",
        "client": "AAA",
        "service": "TAXAUD",
        "partnr": {
            "1": {
                "usr_designation": "Sr.Partner",
                "usr_id": 12,
                "usr_photo": "",
                "usr_uname": "Akul(r-w His Only)CNGD"
            }
        },
        "date": [
            "2017-11-01",
            "2017-11-02",
            "2017-11-03"
        ]
    }
]

const structured = [{
        "usr_name": "Aishwarya",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Akul(r-w His Only)CNGD",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "anand",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Basavaraj",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Chandrashekar",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Hari",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Mahima",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "nikit",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "parameshwaran",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "permissionTesting(Read-All,Write-Mine)",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Rahul",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Ram",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Ravi",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Rohit",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Sankar",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "shwetha",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Test",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Vasanth",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Vinod(Read-Mine)",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    },
    {
        "usr_name": "Vishnuh Paura",
        "date": [{
                "date": "2017-11-01",
                "count": 0
            },
            {
                "date": "2017-11-02",
                "count": 0
            },
            {
                "date": "2017-11-03",
                "count": 0
            },
            {
                "date": "2017-11-04",
                "count": 0
            },
            {
                "date": "2017-11-05",
                "count": 0
            },
            {
                "date": "2017-11-06",
                "count": 0
            },
            {
                "date": "2017-11-07",
                "count": 0
            },
            {
                "date": "2017-11-08",
                "count": 0
            },
            {
                "date": "2017-11-09",
                "count": 0
            },
            {
                "date": "2017-11-10",
                "count": 0
            },
            {
                "date": "2017-11-11",
                "count": 0
            },
            {
                "date": "2017-11-12",
                "count": 0
            },
            {
                "date": "2017-11-13",
                "count": 0
            },
            {
                "date": "2017-11-14",
                "count": 0
            },
            {
                "date": "2017-11-15",
                "count": 0
            },
            {
                "date": "2017-11-16",
                "count": 0
            },
            {
                "date": "2017-11-17",
                "count": 0
            },
            {
                "date": "2017-11-18",
                "count": 0
            },
            {
                "date": "2017-11-19",
                "count": 0
            },
            {
                "date": "2017-11-20",
                "count": 0
            },
            {
                "date": "2017-11-21",
                "count": 0
            },
            {
                "date": "2017-11-22",
                "count": 0
            },
            {
                "date": "2017-11-23",
                "count": 0
            },
            {
                "date": "2017-11-24",
                "count": 0
            },
            {
                "date": "2017-11-25",
                "count": 0
            },
            {
                "date": "2017-11-26",
                "count": 0
            },
            {
                "date": "2017-11-27",
                "count": 0
            },
            {
                "date": "2017-11-28",
                "count": 0
            },
            {
                "date": "2017-11-29",
                "count": 0
            },
            {
                "date": "2017-11-30",
                "count": 0
            }
        ]
    }
]

// .........................
for (const user of usrNameList) {
    for (const struct of structured) {
        if (user.usr_name === struct.usr_name) {
            for (const userDate of user.date) {
                const { date } = struct;

                for (const strDate of date) {
                    if (userDate === strDate.date) {
                        strDate.count++;
                    }
                }
            }

        }

    }

}

// -----------------------------------
const mapped = structured.map(x => {
    const { usr_name, date } = x;
    x.date = date.map(dateObj => {
      return {
        date: dateObj.date,
        count: usrNameList.filter((y) => {
          return y.usr_name === usr_name && y.date.indexOf(dateObj.date) >= 0
        }).length
      }
    })
  
    return x;
  });
  
const mapped = structured.map( x => {
    const { usr_name, date } =  x;
    x.date = date.map( dateObj => {
        return {
            date : dateObj.date,
            count: usrNameList.filter( (y) => {
                return y.usr_name === usr_name && y.date.indexOf(dateObj.date) >= 0;

            }).length
        }
    })
    return x;
})