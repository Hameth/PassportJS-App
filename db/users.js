var records = [
    { id: 1, username: 'Momo ', token: '123456789', displayName: 'Moo', emails: [{ value: 'momo@hotmail.com' }] }
    , { id: 2, username: 'Momillito', token: 'abcdefghi', displayName: 'Pinguino', emails: [{ value: 'momillito@icloud.com' }] }
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