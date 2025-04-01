
// Record collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give People a Reason"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold",
        "artist": "ABBA",
        }
}

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection)); // deep copy

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop]; // delete the property if value is empty string
    } else if (prop === "tracks") {
        if (!collection[id].hasOwnProperty(prop)) {
            collection[id][prop] = collection[id][prop] || []; // create an empty array if property does not exist
            collection[id][prop].push(value); // add value to the array
        }
    }
    else {
        collection[id][prop] = value; // update the property with value
    }
    return collection;
}