export default function ({} = {}) {
  
    const iDB       = new Object();

    iDB.indexedDB   = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    iDB.db          = new Map();

    iDB.open = (name = "example", number = 1) => {

        const request   = indexedDB.open(name, number);

        request.onerror = (event) => console.error("indexedDB Error Code:", request.errorCode);

        request.onsuccess = (event) => {
            
            iDB.db.set(name, event.target.result);

            event.target.result.onerror = (event) => {

                console.error(`Database error: ${event.target.errorCode}`);
    
            };
        
        };

    };

    iDB.get = (name = "example", object = "") => {

        const _db = iDB.db.get(name);

        console.log(_db);

    };

    return iDB;
    
};