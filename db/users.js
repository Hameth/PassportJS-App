var records = [
    { id: 1, username: 'Momo ', token: '123456789', displayName: 'Moo', emails: [{ value: 'momo@hotmail.com' }] }
    , { id: 2, username: 'Momillito', token: 'abcdefghi', displayName: 'Pinguino', emails: [{ value: 'momillito@icloud.com' }] }
    , { id: 3, username: 'Cindy', token: '11223344', displayName: 'Cimiheja', emails: [{ value: 'cimiheja@gmail.com' }] }
    , { id: 4, username: 'Jennifer', token: '77885544', displayName: 'Jennheja', emails: [{ value: 'jennheja@hotmail.com' }] }
    , { id: 5, username: 'Liz', token: 'lulapaluza', displayName: 'lizzie', emails: [{ value: 'lizzio@icloud.com' }] }
    , { id: 6, username: 'Laura', token: 'manilla', displayName: 'lau', emails: [{ value: 'laurita@gmail.com' }] }
    , { id: 7, username: 'Mapache', token: '98745578', displayName: 'mapu', emails: [{ value: 'mapachetote@hotmail.com' }] }
];

exports.findByToken = function (token, cb) {
    process.nextTick(function () {
        for (var i = 0, len = records.length; i < len; i++) {
            var record = records[i];
            if (record.token === token) {
                return cb(null, record);
            }
        }
        return cb(null, null);
    });
}