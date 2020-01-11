/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let set = new Set();

    function emailCheck(string) {
        let email = '';
        for (let i = 0; i < string.length; i++) {
            if (string[i] == '@' || string[i] == '+') break;

            if (string[i] == '.') {
                continue;
            } else {
                email += string[i];
            }
        }
        email += string.slice(string.indexOf('@'), string.length);

        return email;

    }
    for (let i = 0; i < emails.length; i++) {
        set.add(emailCheck(emails[i]));
    }

    return set.size;


};

console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))